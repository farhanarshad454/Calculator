"use strict";
class Calculator {
    constructor() {
        this.currentResult = '';
    }
    appendToResult(value) {
        this.currentResult += value;
        this.updateDisplay();
    }
    clearResult() {
        this.currentResult = '';
        this.updateDisplay();
    }
    calculate() {
        try {
            const result = eval(this.currentResult);
            this.currentResult = result.toString();
            this.updateDisplay();
        }
        catch (error) {
            this.currentResult = 'Error';
            this.updateDisplay();
        }
    }
    updateDisplay() {
        const resultElement = document.getElementById('result');
        if (resultElement) {
            resultElement.value = this.currentResult;
        }
    }
}
const calculator = new Calculator();
function appendToResult(value) {
    calculator.appendToResult(value);
}
function clearResult() {
    calculator.clearResult();
}
function calculate() {
    calculator.calculate();
}
