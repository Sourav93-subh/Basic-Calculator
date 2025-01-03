// Get the display element
const display = document.getElementById('display');

// Append a value to the display
function appendValue(value) {
    if (display.textContent === '0') {
        display.textContent = value; // Replace initial "0" with input
    } else {
        display.textContent += value; // Append the new value
    }
}

// Clear the display
function clearDisplay() {
    display.textContent = '0';
}

// Delete the last character from the display
function deleteLast() {
    if (display.textContent.length > 1) {
        display.textContent = display.textContent.slice(0, -1); // Remove last character
    } else {
        display.textContent = '0'; // Reset to "0" if only one character remains
    }
}

// Calculate and display the result
function calculateResult() {
    try {
        const result = eval(display.textContent); // Evaluate the expression
        display.textContent = result % 1 === 0 ? result : result.toFixed(2); // Round if necessary
    } catch (error) {
        display.textContent = 'Error'; // Show "Error" for invalid expressions
    }
}
