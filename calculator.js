// JavaScript Code for Calculator Functionality

const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clearButton = document.getElementById("clear");
const equalButton = document.getElementById("equal");

let currentInput = "";
let previousInput = "";
let operator = null;

// Handle button clicks
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.getAttribute("data-value");
        if (!isNaN(value) || value === ".") {
            currentInput += value;
            updateDisplay(currentInput);
        } else if (["+", "-", "*", "/"].includes(value)) {
            if (currentInput === "") return; // Prevent operator without a number
            if (previousInput) compute();
            operator = value;
            previousInput = currentInput;
            currentInput = "";
        }
    });
});

// Handle equals button
equalButton.addEventListener("click", () => {
    if (currentInput && previousInput && operator) {
        compute();
        operator = null; // Reset operator
    }
});

// Handle clear button
clearButton.addEventListener("click", () => {
    currentInput = "";
    previousInput = "";
    operator = null;
    updateDisplay("0");
});

// Compute the result
function compute() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case "+":
            result = prev + current;
            break;
        case "-":
            result = prev - current;
            break;
        case "*":
            result = prev * current;
            break;
        case "/":
            result = prev / current;
            break;
        default:
            return;
    }
    currentInput = result.toString();
    previousInput = "";
    updateDisplay(result);
}

// Update the calculator display
function updateDisplay(value) {
    display.textContent = value;
}
