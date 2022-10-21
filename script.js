let number1 = [];
let number2 = [];
let operation;
let symbol;



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

function calculate() {
    if(number2.length === 0){
        const answer = +(number1).join("");
        number1 = Array.from(String(answer));
        number2 = [];
        const parentNode = document.querySelector("#display");
        parentNode.removeChild(parentNode.firstChild);
        const calcDisplay = document.createElement("p");
        parentNode.appendChild(calcDisplay);
        calcDisplay.textContent = `${answer}`
    }
    else if (number2.length === 1 && number2[0] === 0 && operation === division){  
        return alert("Can't divide by 0!")
    }
    else {
        let num1 = +(number1).join("");
        let num2 = +(number2).join("");
        let answer = operation(num1, num2);
        if(answer % 1 != 0) {
            if(answer.toString().split(".")[1].length > 5){
                console.log(`answer has ${answer.toString().split(".")[1].length} decimal places`)
                answer = answer.toFixed(5);
                console.log(`rounded answer is ${answer}`)
            }
        }
        number1 = Array.from(String(answer));
        number2 = [];
        const parentNode = document.querySelector("#display");
        parentNode.removeChild(parentNode.firstChild);
        const calcDisplay = document.createElement("p");
        parentNode.appendChild(calcDisplay);
        calcDisplay.textContent = `${answer}`
    }
};

function display() {
    const parentNode = document.querySelector("#display");
    if(parentNode.firstChild){
        parentNode.removeChild(parentNode.firstChild);
    }
    const calcDisplay = document.createElement("p");
    parentNode.appendChild(calcDisplay)
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
    calcDisplay.textContent = `${num1} ${symbol} ${num2}`
}

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

function clearDisplay() {
    number1 = [];
    number2 = [];
    symbol = null;
    operation = null;
    const parentNode = document.querySelector("#display");
    parentNode.removeChild(parentNode.firstChild);
}
