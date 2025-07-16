
// Global variables
let currentData = [];
let currentIndex = 0;
let responses = [];
let experimentStartTime = null;
let attentionChecks = [];
let attentionCheckResults = [];
let isInstructionPhase = true;
let instructionIndex = 0;
let isWelcomePhase = true;
let isConsentPhase = false;
let consentData = {};
let selectedChoice = null;
let confidenceLevel = 50;

// Instructional examples for practice
const INSTRUCTIONAL_EXAMPLES = [
    {
        id: "instruction_1",
        "asks-for": "cause",
        "most-plausible-alternative": 1,
        p: "The ice cream melted.",
        a1: "The sun was hot.",
        a2: "The ice cream was chocolate flavored."
    },
    {
        id: "instruction_2",
        "asks-for": "effect", 
        "most-plausible-alternative": 2,
        p: "The student studied for 10 hours.",
        a1: "The student went to the library.",
        a2: "The student got an A on the exam."
    },
    {
        id: "instruction_3",
        "asks-for": "cause",
        "most-plausible-alternative": 0, // 0 indicates both options are equally plausible
        p: "The man went to the store.",
        a1: "He wanted to buy some food.",
        a2: "He wanted to buy something to drink."
    }
];

// Hard-coded attention check datapoints
const ATTENTION_CHECK_DATA = [
    {
        id: "attention_1",
        "asks-for": "cause",
        "most-plausible-alternative": 1, // Option 1 is correct
        p: "The girl liked to play soccer.",
        a1: "She watched lots of soccer.",
        a2: "Crocodiles live in the Nile river."
    },
    {
        id: "attention_2", 
        "asks-for": "effect",
        "most-plausible-alternative": 1, // Option 1 is correct
        p: "The man turned on the light switch.",
        a1: "The room became bright.",
        a2: "The moon disappeared from the sky."
    },
    {
        id: "attention_3",
        "asks-for": "cause", 
        "most-plausible-alternative": 2, // Option 2 is correct
        p: "The student studied hard for the exam.",
        a1: "The weather was sunny outside.",
        a2: "She wanted to get a good grade."
    },
    {
        id: "attention_4",
        "asks-for": "effect",
        "most-plausible-alternative": 2, // Option 2 is correct
        p: "The chef put the cake in the oven.",
        a1: "The sun rose in the west.",
        a2: "The cake started to bake."
    },
    {
        id: "attention_5",
        "asks-for": "cause",
        "most-plausible-alternative": 2, // Option 2 is correct
        p: "The driver pressed the brake pedal.",
        a1: "Birds can fly in outer space.",
        a2: "The car needed to stop."
    }
];

// Get URL parameters
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Check if download is enabled
function shouldDownloadData() {
    const downloadParam = getUrlParameter('download');
    return downloadParam === '1';
}

// Download data as JSON file
function downloadDataAsJson(data, filename) {
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

// Load data from embedded JSON
function loadData() {
    try {
        const listIndex = getUrlParameter('list');
        let listIndexNum;
        
        if (listIndex === null) {
            // Default to list=0 if no list parameter is provided
            console.log('No list parameter provided, defaulting to list=0');
            listIndexNum = 0;
        } else {
            listIndexNum = parseInt(listIndex);
            if (isNaN(listIndexNum) || listIndexNum < 0 || listIndexNum >= COPA_DATA.length) {
                throw new Error(`Invalid list index: ${listIndex}. Valid range: 0-${COPA_DATA.length - 1}`);
            }
        }
        
        const index = listIndexNum;
        
        currentData = COPA_DATA[index];
        
        // Randomly shuffle the datapoints
        for (let i = currentData.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [currentData[i], currentData[j]] = [currentData[j], currentData[i]];
        }
        
        // Create a mixed array with attention checks randomly interspersed
        const totalItems = currentData.length + ATTENTION_CHECK_DATA.length;
        const mixedData = [];
        const attentionCheckIndices = [];
        
        // Randomly select positions for attention checks
        for (let i = 0; i < ATTENTION_CHECK_DATA.length; i++) {
            let position;
            do {
                position = Math.floor(Math.random() * totalItems);
            } while (attentionCheckIndices.includes(position));
            attentionCheckIndices.push(position);
        }
        
        // Build the mixed array
        let dataIndex = 0;
        let attentionIndex = 0;
        for (let i = 0; i < totalItems; i++) {
            if (attentionCheckIndices.includes(i)) {
                mixedData.push({
                    ...ATTENTION_CHECK_DATA[attentionIndex],
                    isAttentionCheck: true,
                    attentionCheckId: attentionIndex + 1
                });
                attentionIndex++;
            } else {
                mixedData.push({
                    ...currentData[dataIndex],
                    isAttentionCheck: false
                });
                dataIndex++;
            }
        }
        
        currentData = mixedData;
        responses = new Array(currentData.length);
        attentionCheckResults = new Array(ATTENTION_CHECK_DATA.length);
        experimentStartTime = Date.now();
        
        console.log(`Loaded list ${index} with ${currentData.length} items (${ATTENTION_CHECK_DATA.length} attention checks interspersed)`);
        return true;
    } catch (error) {
        console.error('Error loading data:', error);
        showError(error.message);
        return false;
    }
}

// Show error message
function showError(message) {
    document.getElementById('error-message').textContent = message;
    document.getElementById('error-container').style.display = 'block';
    document.getElementById('experiment-container').style.display = 'none';
}

// Display instructional example
function displayInstructionExample() {
    if (instructionIndex >= INSTRUCTIONAL_EXAMPLES.length) {
        // Instructions completed, show transition message
        showTransitionMessage();
        return;
    }
    
    const example = INSTRUCTIONAL_EXAMPLES[instructionIndex];
    
    // Update progress
    document.getElementById('progress').textContent = 
        `Practice Example ${instructionIndex + 1} of ${INSTRUCTIONAL_EXAMPLES.length}`;
    
    // Display information
    document.getElementById('information').innerHTML = 
        `<strong>Situation:</strong> ${example.p}`;
    
    // Display alternatives
    document.getElementById('alternatives').innerHTML = 
        `<strong>There are two possible <mark>${example['asks-for']}s</mark> of this situation:</strong><br>
        (1) ${example.a1}<br>
        (2) ${example.a2}`;
    
    // Display instruction
    document.getElementById('instruction').innerHTML = 
        `<strong>This is a practice example. First, choose which <mark>${example['asks-for']}</mark> you think is more likely, then rate your confidence in that choice.</strong><br>
        Click on one of the options below, then use the confidence slider to indicate how certain you are about your choice.<br>
        Note: you should evaluate these two options <strong>against one another</strong>, and not consider other possible causes or effects. <strong>If you think both options are 100% equally likely, pick any option and move the slider to 0.</strong>`;
    
    // Update choice context
    const contextText = example['asks-for'] === 'effect' ? 
        `${example.p} <strong>As a result...</strong>` : 
        `${example.p} <strong>This is because...</strong>`;
    document.getElementById('choice-context').innerHTML = contextText;
    
    // Update choice buttons
    document.getElementById('choice-1').innerHTML = `<strong>(1)</strong> ${example.a1}`;
    document.getElementById('choice-2').innerHTML = `<strong>(2)</strong> ${example.a2}`;
    
    // Reset choice and confidence
    selectedChoice = null;
    confidenceLevel = 50;
    document.getElementById('confidence-slider').value = 50;
    document.getElementById('confidence-value').textContent = '50';
    
    // Reset button states
    document.getElementById('choice-1').classList.remove('selected');
    document.getElementById('choice-2').classList.remove('selected');
    
    // Disable continue button until choice is made
    document.getElementById('continue-btn').disabled = true;
}

// Display welcome message
function displayWelcomeMessage() {
    // Update progress
    document.getElementById('progress').textContent = 'Welcome';
    
    // Display welcome information
    document.getElementById('information').innerHTML = 
        `<strong>Welcome to the experiment!</strong>`;
    
    // Display description
    document.getElementById('alternatives').innerHTML = 
        `<strong>What you'll be doing:</strong><br>
        In this experiment, you'll be asked to give your judgments on simple cause-and-effect descriptions. 
        You'll see a situation and be asked to choose between two possible causes or effects, and rate your confidence in that choice.`;
    
    // Display instruction
    document.getElementById('instruction').innerHTML = 
        `<strong>How it works:</strong><br>
        • First, you'll need to read and accept our consent form<br>
        • Then we'll start with a couple of practice examples to help you understand the task<br>
        • Finally, we'll move on to the real experiment<br>
        • There are no right or wrong answers in the real experiment - we just want your honest opinion`;
    
    // Hide choice and confidence sections for welcome
    document.querySelector('.choice-container').style.display = 'none';
    document.querySelector('.confidence-container').style.display = 'none';
    
    // Update continue button text
    document.getElementById('continue-btn').textContent = 'Read Consent Form';
    document.getElementById('continue-btn').disabled = false;
}

// Show consent form
function displayConsentForm() {
    document.getElementById('experiment-container').style.display = 'none';
    document.getElementById('consent-container').style.display = 'block';
    isConsentPhase = true;
}

// Handle consent form submission
function handleConsentSubmission() {
    // Get consent responses
    const futureResearchConsent = document.querySelector('input[name="future_research_consent"]:checked').value;
    const githubRepoConsent = document.querySelector('input[name="github_repo_consent"]:checked').value;
    
    // Store consent data
    consentData = {
        future_research_consent: futureResearchConsent,
        github_repo_consent: githubRepoConsent,
        timestamp: new Date().toISOString()
    };
    
    console.log('Consent responses:', consentData);
    
    // Hide consent form and show experiment
    document.getElementById('consent-container').style.display = 'none';
    document.getElementById('experiment-container').style.display = 'block';
    
    // Start instruction phase
    isConsentPhase = false;
    startInstructionPhase();
}

// Show transition message before starting real experiment
function showTransitionMessage() {
    document.getElementById('experiment-container').style.display = 'none';
    document.getElementById('transition-container').style.display = 'block';
}

// Handle instructional example response
function handleInstructionResponse(choice, confidence) {
    const example = INSTRUCTIONAL_EXAMPLES[instructionIndex];
    let isChoiceCorrect = false;
    let isConfidenceAppropriate = false;
    
    // Check if choice is correct based on most-plausible-alternative
    if (example['most-plausible-alternative'] === 1) {
        // Option 1 is correct
        isChoiceCorrect = choice === 1;
    } else if (example['most-plausible-alternative'] === 2) {
        // Option 2 is correct
        isChoiceCorrect = choice === 2;
    } else if (example['most-plausible-alternative'] === 0) {
        // Both options are equally plausible - either choice is acceptable
        isChoiceCorrect = choice === 1 || choice === 2;
    }
    
    // Check if confidence is appropriate
    if (example['most-plausible-alternative'] === 1 || example['most-plausible-alternative'] === 2) {
        // For clear cases, confidence should be reasonably high (at least 70)
        isConfidenceAppropriate = confidence >= 70;
    } else if (example['most-plausible-alternative'] === 0) {
        // For ambiguous cases, confidence should be moderate (below 50)
        isConfidenceAppropriate = confidence < 50;
    }
    
    if (isChoiceCorrect && isConfidenceAppropriate) {
        // Both choice and confidence are correct - move to next example
        instructionIndex++;
        displayCurrentDatapoint();
    } else {
        // Show feedback for incorrect choice or inappropriate confidence
        showInstructionFeedback(example, choice, confidence, isChoiceCorrect, isConfidenceAppropriate);
    }
}

// Show feedback for incorrect instructional response
function showInstructionFeedback(example, choice, confidence, isChoiceCorrect, isConfidenceAppropriate) {
    const correctOption = example['most-plausible-alternative'];
    
    let feedbackText = '';
    
    // Check choice feedback
    if (!isChoiceCorrect) {
        if (correctOption === 0) {
            // Both options are equally plausible
            feedbackText += `<strong style="color: #f44336;">Incorrect choice.</strong><br>
            Both options are equally plausible in this case.<br>
            Either choice (1) or (2) would be acceptable.<br>`;
        } else {
            // One option is more plausible
            const correctText = correctOption === 1 ? example.a1 : example.a2;
            feedbackText += `<strong style="color: #f44336;">Incorrect choice.</strong><br>
            The most likely ${example['asks-for']} is: <strong>${correctText}</strong><br>
            You should have selected option (${correctOption}).<br>`;
        }
    }
    
    // Check confidence feedback
    if (!isConfidenceAppropriate) {
        if (correctOption === 1 || correctOption === 2) {
            // For clear cases, confidence should be high
            feedbackText += `<strong style="color: #ff9800;">Inappropriate confidence level.</strong><br>
            Since this is a clear case where one option is much more likely, your confidence should be higher; move the slider to a higher value to continue.<br>`;
        } else if (correctOption === 0) {
            // For ambiguous cases, confidence should be moderate
            if (confidence > 50) {
                feedbackText += `<strong style="color: #ff9800;">Inappropriate confidence level.</strong><br>
                Since both options are equally plausible, your confidence in any single option should be lower. Try moving the slider to a lower value to continue.<br>`;
            } 
        }
    }
    
    // Add instruction for correction
    if (!isChoiceCorrect && !isConfidenceAppropriate) {
        feedbackText += `<br>Please correct both your choice and confidence level to continue.`;
    } else if (!isChoiceCorrect) {
        feedbackText += `<br>Please correct your choice to continue.`;
    } else if (!isConfidenceAppropriate) {
        feedbackText += `<br>Please adjust your confidence level to continue.`;
    }
    
    document.getElementById('instruction').innerHTML = feedbackText;
    
    // Keep continue button enabled - user can always click to try again
    document.getElementById('continue-btn').disabled = false;
}

        // Display current datapoint
        function displayCurrentDatapoint() {
            if (isWelcomePhase) {
                displayWelcomeMessage();
                return;
            }
            
            if (isConsentPhase) {
                // Consent form is already displayed, no need to do anything
                return;
            }
            
            if (isInstructionPhase) {
                displayInstructionExample();
                return;
            }
            
            if (currentIndex >= currentData.length) {
                // Experiment completed
                document.getElementById('experiment-container').style.display = 'none';
                document.getElementById('completion-container').style.display = 'block';
                
                // Prepare data for Proliferate submission
                const experimentData = {
                    "consent_data": consentData,
                    "trials": responses,
                    "attention_checks": attentionCheckResults,
                    "experiment_info": {
                        "list_index": getUrlParameter('list'),
                        "total_questions": currentData.length,
                        "attention_checks_passed": attentionCheckResults.filter(r => r && r.passed).length,
                        "attention_checks_total": ATTENTION_CHECK_DATA.length,
                        "experiment_duration_minutes": (Date.now() - experimentStartTime) / 60000,
                        "completion_time": new Date().toISOString()
                    }
                };
                
                // Submit to Proliferate (will work in sandbox/debug mode locally)
                if (typeof proliferate !== 'undefined') {
                    proliferate.submit(experimentData);
                } else {
                    console.log('Proliferate not available, logging data to console:', experimentData);
                }
                
                // Download data if requested
                if (shouldDownloadData()) {
                    downloadDataAsJson(experimentData, 'trial_responses.json');
                    console.log('Data downloaded as trial_responses.json');
                }
                
                return;
            }
    
    const datapoint = currentData[currentIndex];
    
    // Update progress
    document.getElementById('progress').textContent = 
        `Question ${currentIndex + 1} of ${currentData.length}`;
    
    // Display information
    document.getElementById('information').innerHTML = 
        `<strong>Situation:</strong> ${datapoint.p}`;
    
    // Display alternatives
    document.getElementById('alternatives').innerHTML = 
        `<strong>There are two possible <mark>${datapoint['asks-for']}s</mark> of this situation:</strong><br>
        (1) ${datapoint.a1}<br>
        (2) ${datapoint.a2}`;
    
    // Display instruction
    document.getElementById('instruction').innerHTML = 
        `<strong>With just this information about the situation, choose which <mark>${datapoint['asks-for']}</mark> you think is more likely, then rate your confidence in that choice.</strong><br>
        Click on one of the options below, then use the confidence slider to indicate how certain you are about your choice.
        Note: you should evaluate these two options <strong>against one another</strong>, and not consider other possible causes or effects. <strong>If you think both options are 100% equally likely, pick any option and move the slider to 0.</strong>`;
    
    // Update choice context
    const contextText = datapoint['asks-for'] === 'effect' ? 
        `${datapoint.p} <strong>As a result...</strong>` : 
        `${datapoint.p} <strong>This is because...</strong>`;
    document.getElementById('choice-context').innerHTML = contextText;
    
    // Update choice buttons
    document.getElementById('choice-1').innerHTML = `<strong>(1)</strong> ${datapoint.a1}`;
    document.getElementById('choice-2').innerHTML = `<strong>(2)</strong> ${datapoint.a2}`;
    
    // Reset choice and confidence
    selectedChoice = null;
    confidenceLevel = 50;
    document.getElementById('confidence-slider').value = 50;
    document.getElementById('confidence-value').textContent = '50';
    
    // Reset button states
    document.getElementById('choice-1').classList.remove('selected');
    document.getElementById('choice-2').classList.remove('selected');
    
    // Disable continue button until choice is made
    document.getElementById('continue-btn').disabled = true;
}

// Handle confidence slider value change
function updateConfidenceValue() {
    const slider = document.getElementById('confidence-slider');
    const valueDisplay = document.getElementById('confidence-value');
    confidenceLevel = parseInt(slider.value);
    valueDisplay.textContent = confidenceLevel;
    
    // Enable continue button when slider is moved (always allow clicking)
    if (selectedChoice !== null) {
        document.getElementById('continue-btn').disabled = false;
    }
}

// Handle choice button selection
function selectChoice(choice) {
    selectedChoice = choice;
    
    // Update button states
    document.getElementById('choice-1').classList.remove('selected');
    document.getElementById('choice-2').classList.remove('selected');
    document.getElementById(`choice-${choice}`).classList.add('selected');
    
    // Enable continue button (always allow clicking)
    document.getElementById('continue-btn').disabled = false;
}

// Handle continue button click
function continueToNext() {
    if (isWelcomePhase) {
        displayConsentForm();
        return;
    }
    
    if (isConsentPhase) {
        handleConsentSubmission();
        return;
    }
    
    if (isInstructionPhase) {
        handleInstructionResponse(selectedChoice, confidenceLevel);
        return;
    }
    
    // Store response
    const currentDatapoint = currentData[currentIndex];
    const responseData = {
        datapoint: currentDatapoint,
        choice: selectedChoice,
        confidence: confidenceLevel,
        slide_number: currentIndex + 1,
        timestamp: new Date().toISOString(),
        time_in_minutes: (Date.now() - experimentStartTime) / 60000
    };
    
    // Handle attention checks
    if (currentDatapoint.isAttentionCheck) {
        // Check if choice is correct AND confidence is at least 70%
        let choiceCorrect = selectedChoice === currentDatapoint['most-plausible-alternative'];
        let confidenceSufficient = confidenceLevel >= 70;
        let attentionPassed = choiceCorrect && confidenceSufficient;
        
        responseData.isAttentionCheck = true;
        responseData.attentionCheckId = currentDatapoint.attentionCheckId;
        responseData.attentionPassed = attentionPassed;
        responseData.correctOption = currentDatapoint['most-plausible-alternative'];
        responseData.choiceCorrect = choiceCorrect;
        responseData.confidenceSufficient = confidenceSufficient;
        
        // Store attention check result
        attentionCheckResults[currentDatapoint.attentionCheckId - 1] = {
            id: currentDatapoint.attentionCheckId,
            passed: attentionPassed,
            choice: selectedChoice,
            confidence: confidenceLevel,
            correctOption: currentDatapoint['most-plausible-alternative'],
            choiceCorrect: choiceCorrect,
            confidenceSufficient: confidenceSufficient,
            slide_number: currentIndex + 1
        };
        
        console.log(`Attention check ${currentDatapoint.attentionCheckId}: ${attentionPassed ? 'PASSED' : 'FAILED'} (choice: ${selectedChoice}, confidence: ${confidenceLevel}, choiceCorrect: ${choiceCorrect}, confidenceSufficient: ${confidenceSufficient}, correct: option ${currentDatapoint['most-plausible-alternative']})`);
    } else {
        responseData.isAttentionCheck = false;
    }
    
    responses[currentIndex] = responseData;
    
    console.log(`Question ${currentIndex + 1} response: choice=${selectedChoice}, confidence=${confidenceLevel}`);
    
    // Move to next datapoint
    currentIndex++;
    
    // Disable continue button temporarily
    document.getElementById('continue-btn').disabled = true;
    
    // Display next datapoint
    displayCurrentDatapoint();
}

// Start the instruction phase after welcome
function startInstructionPhase() {
    isWelcomePhase = false;
    document.querySelector('.choice-container').style.display = 'block';
    document.querySelector('.confidence-container').style.display = 'block';
    document.getElementById('continue-btn').textContent = 'Continue';
    displayCurrentDatapoint();
}

// Start the real experiment after instructions
function startRealExperiment() {
    isInstructionPhase = false;
    document.getElementById('transition-container').style.display = 'none';
    document.getElementById('experiment-container').style.display = 'block';
    displayCurrentDatapoint();
}

// Initialize the experiment
function initExperiment() {
    const success = loadData();
    if (success) {
        document.getElementById('experiment-container').style.display = 'block';
        displayCurrentDatapoint();
        
        // Add event listeners
        document.getElementById('confidence-slider').addEventListener('input', updateConfidenceValue);
        document.getElementById('choice-1').addEventListener('click', () => selectChoice(1));
        document.getElementById('choice-2').addEventListener('click', () => selectChoice(2));
        document.getElementById('continue-btn').addEventListener('click', continueToNext);
        document.getElementById('consent-btn').addEventListener('click', handleConsentSubmission);
    }
}

// Start the experiment when page loads
document.addEventListener('DOMContentLoaded', initExperiment); 