// History array to store all calculations
let history = [];

// Function to add to history
function addToHistory(num1, num2, operator, result) {
    history.push({
        operands: [num1, num2],
        operator: operator,
        result: result
    });
}

// Function to display the history
function displayHistory() {
    if (history.length === 0) {
        console.log("No calculations stored yet.");
    } else {
        console.log("\nCalculation History:");
        history.forEach((entry, index) => {
            console.log(`${index + 1}: ${entry.operands[0]} ${entry.operator} ${entry.operands[1]} = ${entry.result}`);
        });
    }
}

// Function to perform addition
function add(num1, num2) {
    let result = num1 + num2;
    addToHistory(num1, num2, '+', result);  // Add to history
    return result;
}

// Function to perform subtraction
function subtract(num1, num2) {
    let result = num1 - num2;
    addToHistory(num1, num2, '-', result);  // Add to history
    return result;
}

// Function to perform multiplication
function multiply(num1, num2) {
    let result = num1 * num2;
    addToHistory(num1, num2, '*', result);  // Add to history
    return result;
}

// Function to perform division
function divide(num1, num2) {
    if (num2 === 0) {
        console.log("Cannot divide by zero.");
        return null;
    } else {
        let result = num1 / num2;
        addToHistory(num1, num2, '/', result);  // Add to history
        return result;
    }
}

// Function to run some examples and test the history
function runExampleOperations() {
    // Perform various operations with different numbers
    console.log("Addition Result: " + add(10, 5));       // Addition: 10 + 5
    console.log("Subtraction Result: " + subtract(20, 7)); // Subtraction: 20 - 7
    console.log("Multiplication Result: " + multiply(4, 6));  // Multiplication: 4 * 6
    console.log("Division Result: " + divide(15, 3));    // Division: 15 / 3
    console.log("Division Result (by zero): " + divide(5, 0));    // Division by zero

    // Additional tests with different values
    console.log("Addition Result: " + add(0, 0));       // Edge case: 0 + 0
    console.log("Subtraction Result: " + subtract(100, 150)); // Negative result: 100 - 150
    console.log("Multiplication Result: " + multiply(-5, 8));  // Negative result: -5 * 8
    console.log("Division Result: " + divide(9, 3));    // Division with positive result: 9 / 3

    // Display the history of calculations
    displayHistory();
}

// Call the function to run the operations and display history
runExampleOperations();
