//global variables
let number1 = [];
let number2 = [];
let operation;
let symbol;


// operation functions
function addition (num1, num2) {
    return num1 + num2;
};

function subtraction (num1, num2) {
    return num1 - num2;
};

function multiplication (num1, num2) {
    return num1 * num2;
};

function division (num1, num2) {
    return num1 / num2;
};

//called when user presses "="
function calculate() {
    //if there is no second number, just return first number
    if(number2.length === 0){
        const answer = +(number1).join("");
        number1 = Array.from(String(answer));
        number2 = [];
        const display = document.querySelector("#display");
        display.textContent = `${answer}`
    }
    //if user tries to calculate number / 0
    else if (number2.length === 1 && number2[0] === 0 && operation === division){  
        return alert("Can't divide by 0!")
    }
    else {
        //join number1 and number2 arrays into numbers and perform operation
        let num1 = +(number1).join("");
        let num2 = +(number2).join("");
        let answer = operation(num1, num2);
        //if answer has a decimal and more than 5 decimal places, round to 5 decimal places
        if(answer % 1 != 0) {
            if(answer.toString().split(".")[1].length > 5){
                answer = answer.toFixed(5);
            }
        }
        //set number1 to array from answer so user can perform the next operation on it, 
        //and clear number2
        number1 = Array.from(String(answer));
        number2 = [];
        const display = document.querySelector("#display");
        display.textContent = `${answer}`
    }
};

//called every time display updates when buttons are pushed
function display() {
    const display = document.querySelector("#display");
    if (!symbol) {
        symbol = "";
    }
    let num1;
    if(number1.length > 0){
        num1 = +(number1).join("");
    }
    else {
        num1 = "";
    }
    let num2;
    if(number2.length > 0){
        num2 = +(number2).join("");
    }
    else {
        num2 = "";
    }
    display.textContent = `${num1} ${symbol} ${num2}`
}

//pushes number into number1 or number2 array depending on if the operation has been selected yet
//doesn't allow decimal to be pushed into a number twice
function numberButton(number) {
    if(operation) {
        if(number === "." && number2.includes(".")){
            display()
        }
        else {
            number2.push(number);
            display();
        }
    }
    else {
        if(number === "." && number1.includes(".")){
            display()
        }
        else {
            number1.push(number);
            display();
        }
    }
}

//sets the operation to be performed and symbol to be displayed
function operationButton(operator, operand) {
    if(operation){
        calculate();
        operation = operator;
        symbol = operand;
        display();
    }
    else {
        operation = operator;
        symbol = operand;
        display();
    }
}

//pops off one element of either number array or removes operation
function backspace() {
    if(number2.length > 0) {
        number2.pop();
    }
    else if(symbol) {
        symbol = null;
        operation = null;
    }
    else if(number1.length > 0) {
        number1.pop()
    }
    display()
}

//resets global variables and clears display element
function clearDisplay() {
    number1 = [];
    number2 = [];
    symbol = null;
    operation = null;
    const display = document.querySelector("#display");
    display.textContent = "";
};