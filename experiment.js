
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

// Instructional examples for practice
const INSTRUCTIONAL_EXAMPLES = [
    {
        id: "instruction_1",
        "asks-for": "cause",
        most_plausible_alternative: 1,
        p: "The ice cream melted.",
        a1: "The sun was hot.",
        a2: "The ice cream was chocolate flavored."
    },
    {
        id: "instruction_2",
        "asks-for": "effect", 
        most_plausible_alternative: 2,
        p: "The student studied for 10 hours.",
        a1: "The student went to the library.",
        a2: "The student got an A on the exam."
    },
    {
        id: "instruction_3",
        "asks-for": "cause",
        most_plausible_alternative: 0, // 0 indicates both options are equally plausible
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
        most_plausible_alternative: 1, // Option 1 is correct
        p: "The girl liked to play soccer.",
        a1: "She watched lots of soccer.",
        a2: "Crocodiles live in the Nile river."
    },
    {
        id: "attention_2", 
        "asks-for": "effect",
        most_plausible_alternative: 1, // Option 1 is correct
        p: "The man turned on the light switch.",
        a1: "The room became bright.",
        a2: "The moon disappeared from the sky."
    },
    {
        id: "attention_3",
        "asks-for": "cause", 
        most_plausible_alternative: 2, // Option 2 is correct
        p: "The student studied hard for the exam.",
        a1: "The weather was sunny outside.",
        a2: "She wanted to get a good grade."
    },
    {
        id: "attention_4",
        "asks-for": "effect",
        most_plausible_alternative: 2, // Option 2 is correct
        p: "The chef put the cake in the oven.",
        a1: "The sun rose in the west.",
        a2: "The cake started to bake."
    },
    {
        id: "attention_5",
        "asks-for": "cause",
        most_plausible_alternative: 2, // Option 2 is correct
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
        `<strong>This is a practice example. Rate the likelihood that the <mark>${example['asks-for']}</mark> of the situation is (1) or (2).</strong><br>
        Use the slider to respond with a number between 0 and 50, where 50 indicates that the ${example['asks-for']} is definitely (1) or definitely (2), 
        and 0 indicates that the ${example['asks-for']} is equally likely to be (1) or (2).`;
    
    // Update datapoint display above slider
    document.getElementById('datapoint-1').innerHTML = 
        `<strong>(1)</strong> ${example.a1}`;
    document.getElementById('datapoint-2').innerHTML = 
        `<strong>(2)</strong> ${example.a2}`;
    
    // Update slider side labels
    document.getElementById('left-label').textContent = 
        `(1) is definitely the ${example['asks-for']}`;
    document.getElementById('right-label').textContent = 
        `(2) is definitely the ${example['asks-for']}`;
    
    // Reset slider to 0
    document.getElementById('response-slider').value = 0;
    document.getElementById('slider-value').textContent = '0';
    
    // Enable continue button
    document.getElementById('continue-btn').disabled = false;
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
        You'll see a situation and be asked to rate how likely different causes or effects are.`;
    
    // Display instruction
    document.getElementById('instruction').innerHTML = 
        `<strong>How it works:</strong><br>
        • First, you'll need to read and accept our consent form<br>
        • Then we'll start with a couple of practice examples to help you understand the task<br>
        • Finally, we'll move on to the real experiment<br>
        • There are no right or wrong answers in the real experiment - we just want your honest opinion`;
    
    // Hide slider section for welcome
    document.querySelector('.slider-container').style.display = 'none';
    
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
function handleInstructionResponse(response) {
    const example = INSTRUCTIONAL_EXAMPLES[instructionIndex];
    let isCorrect = false;
    
    // Check if response is correct based on most_plausible_alternative
    if (example.most_plausible_alternative === 1) {
        // Option 1 is correct - should have negative response (≤ -30)
        isCorrect = response <= -30;
    } else if (example.most_plausible_alternative === 2) {
        // Option 2 is correct - should have positive response (≥ 30)
        isCorrect = response >= 30;
    } else if (example.most_plausible_alternative === 0) {
        // Both options are equally plausible - should not be too extreme (between -20 and 20)
        isCorrect = response >= -20 && response <= 20;
    }
    
    if (isCorrect) {
        // Correct answer - move to next example
        instructionIndex++;
        displayCurrentDatapoint();
    } else {
        // Incorrect answer - show feedback
        showInstructionFeedback(example, response);
    }
}

// Show feedback for incorrect instructional response
function showInstructionFeedback(example, response) {
    const correctOption = example.most_plausible_alternative;
    
    let feedbackText;
    if (correctOption === 0) {
        // Both options are equally plausible
        feedbackText = `<strong style="color: #f44336;">Incorrect answer.</strong><br>
        Both options are equally plausible in this case.<br>
        You should not choose an extreme position when both options are equally likely.<br>
        Please move the slider to a more neutral position (between 0 and 20) to continue.`;
    } else {
        // One option is more plausible
        const correctText = correctOption === 1 ? example.a1 : example.a2;
        feedbackText = `<strong style="color: #f44336;">Incorrect answer.</strong><br>
        The most likely ${example['asks-for']} is: <strong>${correctText}</strong><br>
        You should have moved the slider toward option (${correctOption}).<br>
        Please try again with the correct answer; keep moving the slider until the option to continue reappears.`;
    }
    
    document.getElementById('instruction').innerHTML = feedbackText;
    
    // Disable continue button until they correct their answer
    document.getElementById('continue-btn').disabled = true;
    
    // Create a function to check if the answer is now correct
    function checkAnswer() {
        const newResponse = parseInt(document.getElementById('response-slider').value);
        let isNowCorrect = false;
        
        if (example.most_plausible_alternative === 1) {
            isNowCorrect = newResponse <= -30;
        } else if (example.most_plausible_alternative === 2) {
            isNowCorrect = newResponse >= 30;
        } else if (example.most_plausible_alternative === 0) {
            isNowCorrect = newResponse >= -20 && newResponse <= 20;
        }
        
        if (isNowCorrect) {
            document.getElementById('continue-btn').disabled = false;
            // Remove the event listener once the answer is correct
            document.getElementById('response-slider').removeEventListener('input', checkAnswer);
        } else {
            document.getElementById('continue-btn').disabled = true;
        }
    }
    
    // Add event listener that checks on every slider movement
    document.getElementById('response-slider').addEventListener('input', checkAnswer);
    
    // Also check immediately in case they already have the right answer
    checkAnswer();
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
        `<strong>With just this information about the situation, rate the likelihood that the <mark>${datapoint['asks-for']}</mark> of the situation is (1) or (2).</strong><br>
        Use the slider to respond with a number between 0 and 50, where 50 indicates that the ${datapoint['asks-for']} is definitely (1) or definitely (2), 
        and 0 indicates that the ${datapoint['asks-for']} is equally likely to be (1) or (2).`;
    
    // Update datapoint display above slider
    document.getElementById('datapoint-1').innerHTML = 
        `<strong>(1)</strong> ${datapoint.a1}`;
    document.getElementById('datapoint-2').innerHTML = 
        `<strong>(2)</strong> ${datapoint.a2}`;
    
    // Update slider side labels
    document.getElementById('left-label').textContent = 
        `(1) is definitely the ${datapoint['asks-for']}`;
    document.getElementById('right-label').textContent = 
        `(2) is definitely the ${datapoint['asks-for']}`;
    
    // Reset slider to 0
    document.getElementById('response-slider').value = 0;
    document.getElementById('slider-value').textContent = '0';
    
    // Enable continue button
    document.getElementById('continue-btn').disabled = false;
}

// Handle slider value change
function updateSliderValue() {
    const slider = document.getElementById('response-slider');
    const valueDisplay = document.getElementById('slider-value');
    // Display absolute value for participants, but keep backend logging unchanged
    const absoluteValue = Math.abs(parseInt(slider.value));
    valueDisplay.textContent = absoluteValue;
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
    
    const slider = document.getElementById('response-slider');
    const response = parseInt(slider.value);
    
    if (isInstructionPhase) {
        handleInstructionResponse(response);
        return;
    }
    
    // Store response
    const currentDatapoint = currentData[currentIndex];
        const responseData = {
            datapoint: currentDatapoint,
            response: response,
            slide_number: currentIndex + 1,
            timestamp: new Date().toISOString(),
            time_in_minutes: (Date.now() - experimentStartTime) / 60000
        };
        
        // Handle attention checks
        if (currentDatapoint.isAttentionCheck) {
            // Check if response strongly supports the correct answer based on most_plausible_alternative
            let attentionPassed;
            if (currentDatapoint.most_plausible_alternative === 1) {
                // Option 1 is correct - should have negative response (≤ -30)
                attentionPassed = response <= -30;
            } else {
                // Option 2 is correct - should have positive response (≥ 30)
                attentionPassed = response >= 30;
            }
            
            responseData.isAttentionCheck = true;
            responseData.attentionCheckId = currentDatapoint.attentionCheckId;
            responseData.attentionPassed = attentionPassed;
            responseData.correctOption = currentDatapoint.most_plausible_alternative;
            
            // Store attention check result
            attentionCheckResults[currentDatapoint.attentionCheckId - 1] = {
                id: currentDatapoint.attentionCheckId,
                passed: attentionPassed,
                response: response,
                correctOption: currentDatapoint.most_plausible_alternative,
                slide_number: currentIndex + 1
            };
            
            console.log(`Attention check ${currentDatapoint.attentionCheckId}: ${attentionPassed ? 'PASSED' : 'FAILED'} (response: ${response}, correct: option ${currentDatapoint.most_plausible_alternative})`);
        } else {
            responseData.isAttentionCheck = false;
        }
        
        responses[currentIndex] = responseData;
        
        console.log(`Question ${currentIndex + 1} response:`, response);
    
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
    document.querySelector('.slider-container').style.display = 'block';
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
        document.getElementById('response-slider').addEventListener('input', updateSliderValue);
        document.getElementById('continue-btn').addEventListener('click', continueToNext);
        document.getElementById('consent-btn').addEventListener('click', handleConsentSubmission);
    }
}

// Start the experiment when page loads
document.addEventListener('DOMContentLoaded', initExperiment); 