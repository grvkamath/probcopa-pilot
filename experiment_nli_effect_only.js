
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
let likelihoodRating = 50;
let instructionResponses = [];
let transitionSlideTimestamp = null;
let showingInstructionFeedback = false;
let lastInstructionLikelihood = null;

// Instructional examples for practice
const INSTRUCTIONAL_EXAMPLES = [
    {
        id: "instruction_1",
        "asks-for": "effect",
        "hard_label": 1, // High likelihood
        premise: "It had rained heavily the previous night.",
        hypothesis: "In the early morning, the sidewalk (footpath) was not fully dry."
    },
    {
        id: "instruction_2",
        "asks-for": "effect", 
        "hard_label": 1, // High likelihood
        premise: "The student carefully studied the material everyday.",
        hypothesis: "The student remembered most of the material."
    },
    {
        id: "instruction_3",
        "asks-for": "effect",
        "hard_label": 0, // Low likelihood
        premise: "The man was a proud and long-time vegetarian.",
        hypothesis: "He ate a lot of meat everyday."
    },
    {
        id: "instruction_4",
        "asks-for": "effect",
        "hard_label": 2, // Moderate likelihood
        premise: "She wanted a warm drink.",
        hypothesis: "She ordered a cup of tea."
    },
    {
        id: "instruction_5",
        "asks-for": "effect",
        "hard_label": 2, // Moderate likelihood
        premise: "The person decided to get a pet.",
        hypothesis: "The person got a dog."
    }
];

// Hard-coded attention check datapoints
const ATTENTION_CHECK_DATA = [
    {
        id: "attention_1",
        "asks-for": "effect",
        "hard_label": 1, // High likelihood
        premise: "She played soccer with her friends on Sundays.",
        hypothesis: "She kicked a ball with some friends every Sunday."
    },
    {
        id: "attention_2", 
        "asks-for": "effect",
        "hard_label": 0, // Low likelihood
        premise: "The man ate his sandwich.",
        hypothesis: "The moon suddenly disappeared."
    },
    {
        id: "attention_3",
        "asks-for": "effect", 
        "hard_label": 0, // Low likelihood
        premise: "She was cooking a normal dinner for her family.",
        hypothesis: "The whole neighborhood burned down."
    },
    {
        id: "attention_4",
        "asks-for": "effect",
        "hard_label": 1, // High likelihood
        premise: "The man turned on the light switch.",
        hypothesis: "The light turned on."
    },
    {
        id: "attention_5",
        "asks-for": "effect",
        "hard_label": 1, // High likelihood
        premise: "The driver wanted to stop the car.",
        hypothesis: "She pressed the brake pedal."
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
        `<strong>Situation:</strong> ${example.premise}`;
    
    // Display alternatives
    document.getElementById('alternatives').innerHTML = 
        `<strong>Possible <mark>${example['asks-for']}</mark>:</strong> ${example.hypothesis}`;
    
    // Display instruction
    let instructionText = `<strong>This is a practice example. Rate on a scale of 0 to 100 how likely you think it is that this is the <mark>${example['asks-for']}</mark> of the situation.</strong><br>
        Use the slider below to indicate your likelihood rating.`;
    
    // Add important instruction for all examples
    instructionText += ` When giving your rating, be sure to consider other possible effects; some situations will favor more uncertain responses.`;
    
    document.getElementById('instruction').innerHTML = instructionText;
    
    // Show probability table below continue button during instruction phase
    const tableContainer = document.getElementById('probability-table-container');
    const tableDiv = document.getElementById('probability-table');
    
    tableDiv.innerHTML = `
        <table style="width: 100%; border-collapse: collapse; margin: 10px 0; font-size: 12px;">
            <tr style="background-color: #f0f0f0;">
                <td style="border: 1px solid #ddd; padding: 6px; text-align: center; background-color: #ffebee; width: 9%;">Absolutely no chance</td>
                <td style="border: 1px solid #ddd; padding: 6px; text-align: center; background-color: #ffcdd2; width: 9%;">Almost no chance</td>
                <td style="border: 1px solid #ddd; padding: 6px; text-align: center; background-color: #ffab91; width: 9%;">Highly unlikely</td>
                <td style="border: 1px solid #ddd; padding: 6px; text-align: center; background-color: #ffcc80; width: 9%;">Unlikely</td>
                <td style="border: 1px solid #ddd; padding: 6px; text-align: center; background-color: #fff59d; width: 9%;">Somewhat unlikely</td>
                <td style="border: 1px solid #ddd; padding: 6px; text-align: center; background-color: #fffde7; width: 9%;">Totally even chance</td>
                <td style="border: 1px solid #ddd; padding: 6px; text-align: center; background-color: #e8f5e8; width: 9%;">Somewhat likely</td>
                <td style="border: 1px solid #ddd; padding: 6px; text-align: center; background-color: #c8e6c9; width: 9%;">Likely</td>
                <td style="border: 1px solid #ddd; padding: 6px; text-align: center; background-color: #a5d6a7; width: 9%;">Highly likely</td>
                <td style="border: 1px solid #ddd; padding: 6px; text-align: center; background-color: #81c784; width: 9%;">Almost certain</td>
                <td style="border: 1px solid #ddd; padding: 6px; text-align: center; background-color: #4caf50; width: 9%;">Absolutely certain</td>
            </tr>
            <tr>
                <td style="border: 1px solid #ddd; padding: 6px; text-align: center; font-weight: bold; width: 9%;">0</td>
                <td style="border: 1px solid #ddd; padding: 6px; text-align: center; font-weight: bold; width: 9%;">1-5</td>
                <td style="border: 1px solid #ddd; padding: 6px; text-align: center; font-weight: bold; width: 9%;">6-15</td>
                <td style="border: 1px solid #ddd; padding: 6px; text-align: center; font-weight: bold; width: 9%;">16-34</td>
                <td style="border: 1px solid #ddd; padding: 6px; text-align: center; font-weight: bold; width: 9%;">35-49</td>
                <td style="border: 1px solid #ddd; padding: 6px; text-align: center; font-weight: bold; width: 9%;">50</td>
                <td style="border: 1px solid #ddd; padding: 6px; text-align: center; font-weight: bold; width: 9%;">51-65</td>
                <td style="border: 1px solid #ddd; padding: 6px; text-align: center; font-weight: bold; width: 9%;">66-84</td>
                <td style="border: 1px solid #ddd; padding: 6px; text-align: center; font-weight: bold; width: 9%;">85-94</td>
                <td style="border: 1px solid #ddd; padding: 6px; text-align: center; font-weight: bold; width: 9%;">95-99</td>
                <td style="border: 1px solid #ddd; padding: 6px; text-align: center; font-weight: bold; width: 9%;">100</td>
            </tr>
        </table>
    `;
    tableContainer.style.display = 'block';
    
    // Update choice context to show the complete sentence
    const contextText = example['asks-for'] === 'effect' ? 
        `${example.premise}<br><strong>As a result:</strong> ${example.hypothesis}` : 
        `${example.premise}<br><strong>This was because:</strong> ${example.hypothesis}`;
    document.getElementById('choice-context').innerHTML = contextText;
    
    // Update slider labels
    document.getElementById('unlikely-label').textContent = `DEFINITELY NOT the ${example['asks-for']}`;
    document.getElementById('likely-label').textContent = `DEFINITELY the ${example['asks-for']}`;
    
    // Reset likelihood
    likelihoodRating = 50;
    const slider = document.getElementById('likelihood-slider');
    const valueDisplay = document.getElementById('likelihood-value');
    const instructionElement = document.getElementById('slider-instruction');
    slider.value = 50;
    slider.classList.remove('slider-interacted');
    valueDisplay.classList.remove('show-value');
    valueDisplay.textContent = '';
    if (instructionElement) {
        instructionElement.classList.remove('hide-instruction');
    }
    
    // Disable continue button until ratings are made
    document.getElementById('continue-btn').disabled = true;
    
    // Hide instruction feedback container and reset feedback flag
    document.getElementById('instruction-feedback-container').style.display = 'none';
    showingInstructionFeedback = false;
    lastInstructionLikelihood = null;
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
        In this experiment, you'll be asked to rate the likelihood of a single effect in a given situation. 
        You'll see a situation and be asked to rate how likely the effect is.`;
    
    // Display instruction
    document.getElementById('instruction').innerHTML = 
        `<strong>How it works:</strong><br>
        • First, you'll need to read and accept our consent form<br>
        • Then we'll start with a couple of practice examples to help you understand the task<br>
        • Finally, we'll move on to the real experiment<br>
        • There are no right or wrong answers in the real experiment - we just want your honest opinion`;
    
    // Hide choice and likelihood sections for welcome
    document.querySelector('.choice-container').style.display = 'none';
    document.querySelector('.likelihood-container').style.display = 'none';
    
    // Update continue button text
    document.getElementById('continue-btn').textContent = 'Read Consent Form';
    document.getElementById('continue-btn').disabled = false;
}

// Show consent form
function displayConsentForm() {
    document.getElementById('experiment-container').style.display = 'none';
    document.getElementById('consent-container').style.display = 'block';
    isConsentPhase = true;
    
    // Add event listener for consent button
    document.getElementById('consent-btn').addEventListener('click', handleConsentSubmission);
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
    // Record timestamp when transition slide is shown
    transitionSlideTimestamp = new Date().toISOString();
    
    // Hide instruction feedback container
    document.getElementById('instruction-feedback-container').style.display = 'none';
    showingInstructionFeedback = false;
    lastInstructionLikelihood = null;
    
    document.getElementById('experiment-container').style.display = 'none';
    document.getElementById('transition-container').style.display = 'block';
    
    console.log(`Transition slide shown at: ${transitionSlideTimestamp}`);
}

// Handle instructional example response
function handleInstructionResponse(likelihood) {
    // If we're already showing feedback, this is the second click - move to next example
    if (showingInstructionFeedback) {
        // Record the instructional response with timestamp and time_in_minutes
        const example = INSTRUCTIONAL_EXAMPLES[instructionIndex];
        const instructionResponseData = {
            instruction_example: example,
            likelihood: lastInstructionLikelihood,
            instruction_number: instructionIndex + 1,
            timestamp: new Date().toISOString(),
            time_in_minutes: (Date.now() - experimentStartTime) / 60000,
            passed: true
        };
        instructionResponses.push(instructionResponseData);
        
        console.log(`Instruction ${instructionIndex + 1} completed: likelihood=${lastInstructionLikelihood}, time=${instructionResponseData.time_in_minutes.toFixed(2)} min`);
        
        // Move to next example
        instructionIndex++;
        showingInstructionFeedback = false;
        lastInstructionLikelihood = null;
        displayCurrentDatapoint();
        return;
    }
    
    const example = INSTRUCTIONAL_EXAMPLES[instructionIndex];
    let isLikelihoodAppropriate = false;
    
    // Check if likelihood is appropriate based on the hard_label
    if (example['hard_label'] === 1) {
        // High likelihood case - should be rated 66-99 (Likely to Almost certain range)
        isLikelihoodAppropriate = likelihood >= 66 && likelihood <= 99;
    } else if (example['hard_label'] === 0) {
        // Low likelihood case - should be rated 15 or lower (Highly unlikely range)
        isLikelihoodAppropriate = likelihood <= 15;
    } else if (example['hard_label'] === 2) {
        // Moderate likelihood case - should be rated between 35-65 (Somewhat unlikely, totally even chance, or somewhat likely)
        isLikelihoodAppropriate = likelihood >= 35 && likelihood <= 65;
    }
    
    if (isLikelihoodAppropriate) {
        // Show positive feedback
        lastInstructionLikelihood = likelihood;
        showPositiveInstructionFeedback(example, likelihood);
    } else {
        // Show negative feedback for incorrect likelihood rating
        showNegativeInstructionFeedback(example, likelihood, isLikelihoodAppropriate);
    }
}

// Show positive feedback for correct instructional response
function showPositiveInstructionFeedback(example, likelihood) {
    let feedbackText = '';
    const isLastExample = instructionIndex === INSTRUCTIONAL_EXAMPLES.length - 1;
    const continueText = isLastExample ? 
        '<b>Click the "Continue" button again to move on.</b>' : 
        '<b>Click the "Continue" button again to move to the next example.</b>';
    
    // Provide specific positive feedback based on the example
    if (example.id === "instruction_1") {
        feedbackText = `<strong style="color: #2e7d32;">Correct!</strong><br><br>
        This is at least likely, even if it is not absolutely certain. While it's technically possible the sidewalk dried completely overnight, it's much more probable that it would still be at least somewhat wet in the early morning after heavy rain the previous night.<br><br>
        ${continueText}`;
    } else if (example.id === "instruction_2") {
        feedbackText = `<strong style="color: #2e7d32;">Correct!</strong><br><br>
        This is at least likely, even if it is not absolutely certain. When someone carefully studies material every day, they will usually remember most of it, even though it's possible they might not (for example, if they were very tired or stressed).<br><br>
        ${continueText}`;
    } else if (example.id === "instruction_3") {
        feedbackText = `<strong style="color: #2e7d32;">Correct!</strong><br><br>
        This is highly implausible. A proud and long-time vegetarian eating meat every day would be very unusual and contrary to their values, even though there might be some rare scenarios where this could happen (like if they were being tricked into eating meat).<br><br>
        ${continueText}`;
    } else if (example.id === "instruction_4") {
        feedbackText = `<strong style="color: #2e7d32;">Correct!</strong><br><br>
        This effect has moderate likelihood. Tea is certainly a popular warm drink, so it's a reasonable choice. However, there are other warm drinks she might order instead, like coffee or hot chocolate, so we can't be too certain.<br><br>
        ${continueText}`;
    } else if (example.id === "instruction_5") {
        feedbackText = `<strong style="color: #2e7d32;">Correct!</strong><br><br>
        This effect has moderate likelihood. Dogs are very popular pets, so getting a dog is certainly a reasonable possibility. However, the person could also get a cat, a bird, or any number of other pets, so we can't be too certain about this specific outcome.<br><br>
        ${continueText}`;
    } else {
        // Generic positive feedback
        feedbackText = `<strong style="color: #2e7d32;">Correct!</strong><br><br>
        Your rating is appropriate for this ${example['asks-for']}.<br><br>
        ${continueText}`;
    }
    
    // Show feedback in the feedback container with green styling
    const feedbackContainer = document.getElementById('instruction-feedback');
    feedbackContainer.innerHTML = feedbackText;
    feedbackContainer.parentElement.style.backgroundColor = '#e8f5e9';
    feedbackContainer.parentElement.style.borderLeftColor = '#4caf50';
    document.getElementById('instruction-feedback-container').style.display = 'block';
    
    // Set flag to indicate we're showing feedback
    showingInstructionFeedback = true;
    
    // Keep continue button enabled for second click
    document.getElementById('continue-btn').disabled = false;
}

// Show negative feedback for incorrect instructional response
function showNegativeInstructionFeedback(example, likelihood, isLikelihoodAppropriate) {
    const correctLikelihood = example['hard_label'];
    
    let feedbackText = '';
    
    // Provide appropriate feedback based on the correct answer
    if (correctLikelihood === 1) {
        // High likelihood case - provide specific explanations for examples 1 and 2
        if (example.id === "instruction_1") {
            // First example: Wet sidewalk from rain
            feedbackText += `<strong style="color: #d32f2f;">Incorrect likelihood rating.</strong><br><br>
            This effect is at least likely, even if it is not absolutely certain. It is technically possible that the sidewalk dried before the morning (e.g. if it was extremely hot and dry outside), but it is more likely that it was still at least a bit wet. Please move the slider to a higher value (66-99) to continue.`;
        } else if (example.id === "instruction_2") {
            // Second example: Student remembered material
            feedbackText += `<strong style="color: #d32f2f;">Incorrect likelihood rating.</strong><br><br>
            This effect is at least likely, even if it is not absolutely certain. It is possible that the student did not remember most of the material despite all their effort (e.g. if they were very tired), but it is more likely that if they carefully studied the material everyday, they remembered most of the material. Please move the slider to a higher value (66-99) to continue.`;
        } else {
            // Generic high likelihood case for other examples
            feedbackText += `<strong style="color: #d32f2f;">Incorrect likelihood rating.</strong><br><br>
            This is actually a likely ${example['asks-for']}. Please move the slider to a higher value (66-99) to continue.`;
        }
    } else if (correctLikelihood === 0) {
        if (example.id === "instruction_3") {
            // Third example: Man gained weight
            feedbackText += `<strong style="color: #d32f2f;">Incorrect likelihood rating.</strong><br><br>
            This is actually a highly implausible ${example['asks-for']}. Although there are ways it is possible (e.g. if he was being tricked into eating meat, or was lying about being a vegetarian), it is highly unlikely that a proud and long-time vegetarian would eat meat everyday. Please move the slider to a lower value (15 or below) to continue.`;
        } else {
            // Generic low likelihood case for other examples
            feedbackText += `<strong style="color: #d32f2f;">Incorrect likelihood rating.</strong><br><br>
            This is actually a highly unlikely ${example['asks-for']}. Please move the slider to a lower value (15 or below) to continue.`;
        }
    } else if (correctLikelihood === 2) {
        // Moderate likelihood case - provide specific explanations for examples 4 and 5
        if (example.id === "instruction_4") {
            // Fourth example: English speaker from USA
            feedbackText += `<strong style="color: #d32f2f;">Incorrect likelihood rating.</strong><br><br>
            This is a moderate likelihood ${example['asks-for']}. While tea is a popular drink in many countries, it is not the only drink that people might order in this situation: notably, some people prefer coffee (or hot chocolate). Please move the slider to a value between 35-65 to continue.`;
        } else if (example.id === "instruction_5") {
            // Fifth example: Person got a dog
            feedbackText += `<strong style="color: #d32f2f;">Incorrect likelihood rating.</strong><br><br>
            This is a moderate likelihood ${example['asks-for']}. Dogs are very popular as pets, so the person may have gotten a dog; on the other hand, they also could have gotten a cat, or another species of animal as a pet. Please move the slider to a value between 35-65 to continue.`;
        } else {
            // Generic moderate likelihood case for other examples
            feedbackText += `<strong style="color: #d32f2f;">Incorrect likelihood rating.</strong><br><br>
            This is a moderate likelihood ${example['asks-for']}. Please move the slider to a value between 35-65 to continue.`;
        }
    }
    
    // Show feedback in the separate container below the continue button with red styling
    const feedbackContainer = document.getElementById('instruction-feedback');
    feedbackContainer.innerHTML = feedbackText;
    feedbackContainer.parentElement.style.backgroundColor = '#ffebee';
    feedbackContainer.parentElement.style.borderLeftColor = '#f44336';
    document.getElementById('instruction-feedback-container').style.display = 'block';
    
    // Reset the flag since they need to adjust their answer
    showingInstructionFeedback = false;
    
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
                // Experiment completed - show feedback form
                document.getElementById('experiment-container').style.display = 'none';
                document.getElementById('feedback-container').style.display = 'block';
                
                // Data will be prepared and submitted when feedback is submitted
                
                return;
            }
    
    const datapoint = currentData[currentIndex];
    
    // Update progress
    document.getElementById('progress').textContent = 
        `Question ${currentIndex + 1} of ${currentData.length}`;
    
    // Display information
    document.getElementById('information').innerHTML = 
        `<strong>Situation:</strong> ${datapoint.premise}`;
    
    // Display alternatives
    document.getElementById('alternatives').innerHTML = 
        `<strong>Possible <mark>${datapoint['asks-for']}</mark>:</strong><br>
        ${datapoint.hypothesis}`;
    
    // Display instruction
    document.getElementById('instruction').innerHTML = 
        `<strong>With just this information about the situation, rate on a scale of 0 to 100 how likely you think this <mark>${datapoint['asks-for']}</mark> is.</strong><br>
        Use the slider below to indicate your likelihood rating.`;
    
    // Update choice context to show the complete sentence
    const contextText = datapoint['asks-for'] === 'effect' ? 
        `${datapoint.premise}<br><strong>As a result:</strong> ${datapoint.hypothesis}` : 
        `${datapoint.premise}<br><strong>This was because:</strong> ${datapoint.hypothesis}`;
    document.getElementById('choice-context').innerHTML = contextText;
    
    // Update slider labels
    document.getElementById('unlikely-label').textContent = `DEFINITELY NOT the ${datapoint['asks-for']}`;
    document.getElementById('likely-label').textContent = `DEFINITELY the ${datapoint['asks-for']}`;
    
    // Reset likelihood
    likelihoodRating = 50;
    const slider = document.getElementById('likelihood-slider');
    const valueDisplay = document.getElementById('likelihood-value');
    const instructionElement = document.getElementById('slider-instruction');
    slider.value = 50;
    slider.classList.remove('slider-interacted');
    valueDisplay.classList.remove('show-value');
    valueDisplay.textContent = '';
    if (instructionElement) {
        // Hide instruction during main experiment phase
        instructionElement.classList.add('hide-instruction');
    }
    
    // Disable continue button until ratings are made
    document.getElementById('continue-btn').disabled = true;
    
    // Hide instruction feedback container during main experiment
    document.getElementById('instruction-feedback-container').style.display = 'none';
    
    // Show probability table below continue button during main experiment phase
    const tableContainer = document.getElementById('probability-table-container');
    const tableDiv = document.getElementById('probability-table');
    
    tableDiv.innerHTML = `
        <table style="width: 100%; border-collapse: collapse; margin: 10px 0; font-size: 12px;">
            <tr style="background-color: #f0f0f0;">
                <td style="border: 1px solid #ddd; padding: 6px; text-align: center; background-color: #ffebee; width: 9%;">Absolutely no chance</td>
                <td style="border: 1px solid #ddd; padding: 6px; text-align: center; background-color: #ffcdd2; width: 9%;">Almost no chance</td>
                <td style="border: 1px solid #ddd; padding: 6px; text-align: center; background-color: #ffab91; width: 9%;">Highly unlikely</td>
                <td style="border: 1px solid #ddd; padding: 6px; text-align: center; background-color: #ffcc80; width: 9%;">Unlikely</td>
                <td style="border: 1px solid #ddd; padding: 6px; text-align: center; background-color: #fff59d; width: 9%;">Somewhat unlikely</td>
                <td style="border: 1px solid #ddd; padding: 6px; text-align: center; background-color: #fffde7; width: 9%;">Totally even chance</td>
                <td style="border: 1px solid #ddd; padding: 6px; text-align: center; background-color: #e8f5e8; width: 9%;">Somewhat likely</td>
                <td style="border: 1px solid #ddd; padding: 6px; text-align: center; background-color: #c8e6c9; width: 9%;">Likely</td>
                <td style="border: 1px solid #ddd; padding: 6px; text-align: center; background-color: #a5d6a7; width: 9%;">Highly likely</td>
                <td style="border: 1px solid #ddd; padding: 6px; text-align: center; background-color: #81c784; width: 9%;">Almost certain</td>
                <td style="border: 1px solid #ddd; padding: 6px; text-align: center; background-color: #4caf50; width: 9%;">Absolutely certain</td>
            </tr>
            <tr>
                <td style="border: 1px solid #ddd; padding: 6px; text-align: center; font-weight: bold; width: 9%;">0</td>
                <td style="border: 1px solid #ddd; padding: 6px; text-align: center; font-weight: bold; width: 9%;">1-5</td>
                <td style="border: 1px solid #ddd; padding: 6px; text-align: center; font-weight: bold; width: 9%;">6-15</td>
                <td style="border: 1px solid #ddd; padding: 6px; text-align: center; font-weight: bold; width: 9%;">16-34</td>
                <td style="border: 1px solid #ddd; padding: 6px; text-align: center; font-weight: bold; width: 9%;">35-49</td>
                <td style="border: 1px solid #ddd; padding: 6px; text-align: center; font-weight: bold; width: 9%;">50</td>
                <td style="border: 1px solid #ddd; padding: 6px; text-align: center; font-weight: bold; width: 9%;">51-65</td>
                <td style="border: 1px solid #ddd; padding: 6px; text-align: center; font-weight: bold; width: 9%;">66-84</td>
                <td style="border: 1px solid #ddd; padding: 6px; text-align: center; font-weight: bold; width: 9%;">85-94</td>
                <td style="border: 1px solid #ddd; padding: 6px; text-align: center; font-weight: bold; width: 9%;">95-99</td>
                <td style="border: 1px solid #ddd; padding: 6px; text-align: center; font-weight: bold; width: 9%;">100</td>
            </tr>
        </table>
    `;
    tableContainer.style.display = 'block';
}

// Handle likelihood slider value change
function updateLikelihoodValue() {
    const slider = document.getElementById('likelihood-slider');
    const valueDisplay = document.getElementById('likelihood-value');
    likelihoodRating = parseInt(slider.value);
    
    // Show the value and thumb on first interaction
    if (!slider.classList.contains('slider-interacted')) {
        slider.classList.add('slider-interacted');
        valueDisplay.classList.add('show-value');
        // Hide the instruction text
        const instructionElement = document.getElementById('slider-instruction');
        if (instructionElement) {
            instructionElement.classList.add('hide-instruction');
        }
    }
    
    valueDisplay.textContent = likelihoodRating;
    
    // Enable continue button when slider is moved (only if not in welcome phase)
    if (!isWelcomePhase) {
        document.getElementById('continue-btn').disabled = false;
    }
}

// Handle choice button selection (no longer used in new format)
function selectChoice(choice) {
    // This function is kept for compatibility but not used in the new format
    // where we only have a likelihood slider
}

// Handle continue button click
function continueToNext() {
    console.log('continueToNext called, isWelcomePhase:', isWelcomePhase);
    if (isWelcomePhase) {
        console.log('Displaying consent form...');
        displayConsentForm();
        return;
    }
    
    if (isConsentPhase) {
        handleConsentSubmission();
        return;
    }
    
    if (isInstructionPhase) {
        handleInstructionResponse(likelihoodRating); // Pass likelihoodRating
        return;
    }
    
    // Store response
    const currentDatapoint = currentData[currentIndex];
    const responseData = {
        datapoint: currentDatapoint,
        likelihood: likelihoodRating, // Use likelihoodRating
        slide_number: currentIndex + 1,
        timestamp: new Date().toISOString(),
        time_in_minutes: (Date.now() - experimentStartTime) / 60000
    };
    
    // Handle attention checks
    if (currentDatapoint.isAttentionCheck) {
        // Check if likelihood rating is appropriate based on the hard_label
        let likelihoodCorrect = false;
        if (currentDatapoint['hard_label'] === 1) {
            // High likelihood case - should be rated 70 or higher
            likelihoodCorrect = likelihoodRating >= 70;
        } else if (currentDatapoint['hard_label'] === 0) {
            // Low likelihood case - should be rated 30 or lower
            likelihoodCorrect = likelihoodRating <= 30;
        }
        
        responseData.isAttentionCheck = true;
        responseData.attentionCheckId = currentDatapoint.attentionCheckId;
        responseData.attentionPassed = likelihoodCorrect;
        responseData.correctOption = currentDatapoint['hard_label'];
        responseData.likelihoodCorrect = likelihoodCorrect;
        
        // Store attention check result
        attentionCheckResults[currentDatapoint.attentionCheckId - 1] = {
            id: currentDatapoint.attentionCheckId,
            passed: likelihoodCorrect,
            likelihood: likelihoodRating,
            correctOption: currentDatapoint['hard_label'],
            likelihoodCorrect: likelihoodCorrect,
            slide_number: currentIndex + 1
        };
        
        console.log(`Attention check ${currentDatapoint.attentionCheckId}: ${likelihoodCorrect ? 'PASSED' : 'FAILED'} (likelihood: ${likelihoodRating}, correct range: ${currentDatapoint['hard_label'] === 1 ? '70-100' : '0-30'})`);
    } else {
        responseData.isAttentionCheck = false;
    }
    
    responses[currentIndex] = responseData;
    
    console.log(`Question ${currentIndex + 1} response: likelihood=${likelihoodRating}`);
    
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
    document.querySelector('.likelihood-container').style.display = 'block';
    
    // Show the instruction box for practice examples
    document.getElementById('instruction').style.display = 'block';
    
    // Show the information and alternatives boxes for practice examples
    document.getElementById('information').style.display = 'block';
    document.getElementById('alternatives').style.display = 'block';
    
    document.getElementById('continue-btn').textContent = 'Continue';
    displayCurrentDatapoint();
}

// Start the real experiment after instructions
function startRealExperiment() {
    // Record timestamp and time when participant advances from transition slide
    const transitionCompleteTimestamp = new Date().toISOString();
    const transitionCompleteTime = (Date.now() - experimentStartTime) / 60000;
    
    // Store transition slide timing data
    const transitionData = {
        transition_slide_shown_timestamp: transitionSlideTimestamp,
        transition_slide_complete_timestamp: transitionCompleteTimestamp,
        transition_slide_complete_time_in_minutes: transitionCompleteTime
    };
    
    // Add transition data to instruction responses
    instructionResponses.push({
        type: "transition_slide",
        ...transitionData
    });
    
    console.log(`Transition slide completed: time=${transitionCompleteTime.toFixed(2)} min`);
    
    isInstructionPhase = false;
    document.getElementById('transition-container').style.display = 'none';
    document.getElementById('experiment-container').style.display = 'block';
    
    // Hide the instruction box for the real experiment (table is now shown below continue button)
    document.getElementById('instruction').style.display = 'none';
    
    // Hide the information and alternatives boxes for the real experiment
    document.getElementById('information').style.display = 'none';
    document.getElementById('alternatives').style.display = 'none';
    
    displayCurrentDatapoint();
}

// Handle feedback submission
function handleFeedbackSubmission() {
    const feedbackText = document.getElementById('feedback-text').value.trim();
    
    // Add feedback to the experiment data
    const experimentData = {
        "consent_data": consentData,
        "instruction_trials": instructionResponses,
        "trials": responses,
        "attention_checks": attentionCheckResults,
        "feedback": feedbackText,
        "experiment_info": {
            "list_index": getUrlParameter('list'),
            "total_questions": currentData.length,
            "instruction_examples_completed": instructionResponses.filter(r => r.type !== "transition_slide").length,
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
    
    // Show completion message
    document.getElementById('feedback-container').style.display = 'none';
    document.getElementById('completion-container').style.display = 'block';
}

// Initialize the experiment
function initExperiment() {
    console.log('initExperiment called');
    const success = loadData();
    if (success) {
        document.getElementById('experiment-container').style.display = 'block';
        displayCurrentDatapoint();
        
        // Add event listeners
        console.log('Adding event listeners...');
        document.getElementById('likelihood-slider').addEventListener('input', updateLikelihoodValue);
        document.getElementById('continue-btn').addEventListener('click', continueToNext);
        document.getElementById('submit-feedback-btn').addEventListener('click', handleFeedbackSubmission);
        console.log('Event listeners added');
    }
}

// Start the experiment when page loads
document.addEventListener('DOMContentLoaded', initExperiment); 