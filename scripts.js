// global variables
//-----------------

let displayNumber = '0';
let firstPress = true; 
let x = null;
let y = null;
let operator = null;
let clearState = true;

let xForRepeat = null;
let yForRepeat = null;
let opForRepeat = null;


// basic math functions
//---------------------

function operate(operator, x, y) {
    let solution; 
    switch (operator) {
        case '+': 
            solution = add(x, y);
            break;
        case '-':
            solution = subtract(x, y);
            break;
        case '*':
            solution = multiply(x, y);
            break;
        case '/':
            solution = divide(x, y);
            break;
    };
    return solution;
};

function add(x, y) {
    return x + y;
};

function subtract(x, y) {
    return x - y;
};

function multiply(x, y) {
    return x * y;
};

function divide(x, y) {
    return x / y;
};


// other functions
//----------------

function updateDisplay() {
    let dispVal = document.querySelector('#true-display');
    dispVal.textContent = displayNumber;
};

function clearData() {
    displayNumber = '0';
    x = null;
    y = null;
    operator = null;
};

function removeTrailingZeros(numStr) {
    num = Number(numStr);
    return '' + num;
};

function getY() {
    numArray = displayNumber.split(' ');
    y = Number(numArray[2]);
};

function checkOpSwitch() {
    strArray = displayNumber.split(' ');
    if (strArray[2] === '') {
        return true; 
    } else {
        return false;
    }; 
};

function removeOperator() {
    strArray = displayNumber.split(' ');
    displayNumber = strArray[0];
    x = null;
    operator = null;
};

function checkDecimalLength(number) {
    number -= Math.floor(number);
    decStr = '';
    decStr += number;
    if (decStr.length > 10) return true;
    else return false; 
};

function reduceDecimalLength(number) {
   fNumber = number.toFixed(10);
    return fNumber;
};

function calcAndUpdate() {
    getY();
    solution = operate(operator, x, y);
    toggleRepeat(solution);
    clearData();
    if (checkDecimalLength(solution)) {
        solution = reduceDecimalLength(solution);
    }
    newNum = '' + solution;
    newNum = removeTrailingZeros(newNum);
    displayNumber = newNum;
    updateDisplay();
    if (clearState === false) toggleClear();
};

function calcAndUpdateNoY() {
    solution = operate(operator, x, y);
    toggleRepeat(solution);
    clearData();
    if (checkDecimalLength(solution)) {
        solution = reduceDecimalLength(solution);
    }
    newNum = '' + solution;
    newNum = removeTrailingZeros(newNum);
    displayNumber = newNum;
    updateDisplay();
    if (clearState === false) toggleClear();
};

function toggleRepeat(number) {
    xForRepeat = number;
    yForRepeat = y;
    opForRepeat = operator;
};

function toggleClear() {
    if (clearState === true) {
        btnC.style['display'] = 'none';
        btnCE.style['display'] = 'inline';
    } else {
        btnC.style['display'] = 'inline';
        btnCE.style['display'] = 'none';
    };

    clearState = !clearState;
};


// isteners
//-----------------

const btn0 = document.querySelector('#b0');
const btn1 = document.querySelector('#b1');
const btn2 = document.querySelector('#b2');
const btn3 = document.querySelector('#b3');
const btn4 = document.querySelector('#b4');
const btn5 = document.querySelector('#b5');
const btn6 = document.querySelector('#b6');
const btn7 = document.querySelector('#b7');
const btn8 = document.querySelector('#b8');
const btn9 = document.querySelector('#b9');
const btnAdd = document.querySelector('#badd');
const btnSub = document.querySelector('#bsub');
const btnMult = document.querySelector('#bmult');
const btnDiv = document.querySelector('#bdiv');
const btnDot = document.querySelector('#bdot');
const btnC = document.querySelector('#bc');
const btnCE = document.querySelector('#bce');
const btnEq = document.querySelector('#beq');


// the number buttons 
//-------------------

btn0.addEventListener('click', () => {
    if (clearState === true) toggleClear();
    if (firstPress === true) {
        displayNumber = '0';
        firstPress = false;
    } else {
        displayNumber += '0';
    }
    updateDisplay();
});

btn1.addEventListener('click', () => {
    if (clearState === true) toggleClear();
    if (firstPress === true) {
        displayNumber = '1';
        firstPress = false;
    } else {
        displayNumber += '1';
    }
    updateDisplay();
});

btn2.addEventListener('click', () => {
    if (clearState === true) toggleClear();
    if (firstPress === true) {
        displayNumber = '2';
        firstPress = false;
    } else {
        displayNumber += '2';
    }
    updateDisplay();
});

btn3.addEventListener('click', () => {
    if (clearState === true) toggleClear();
    if (firstPress === true) {
        displayNumber = '3';
        firstPress = false;
    } else {
        displayNumber += '3';
    }
    updateDisplay();
});

btn4.addEventListener('click', () => {
    if (clearState === true) toggleClear();
    if (firstPress === true) {
        displayNumber = '4';
        firstPress = false;
    } else {
        displayNumber += '4';
    }
    updateDisplay();
});

btn5.addEventListener('click', () => {
    if (clearState === true) toggleClear();
    if (firstPress === true) {
        displayNumber = '5';
        firstPress = false;
    } else {
        displayNumber += '5';
    }
    updateDisplay();
});

btn6.addEventListener('click', () => {
    if (clearState === true) toggleClear();
    if (firstPress === true) {
        displayNumber = '6';
        firstPress = false;
    } else {
        displayNumber += '6';
    }
    updateDisplay();
});

btn7.addEventListener('click', () => {
    if (clearState === true) toggleClear();
    if (firstPress === true) {
        displayNumber = '7';
        firstPress = false;
    } else {
        displayNumber += '7';
    }
    updateDisplay();
});

btn8.addEventListener('click', () => {
    if (clearState === true) toggleClear();
    if (firstPress === true) {
        displayNumber = '8';
        firstPress = false;
    } else {
        displayNumber += '8';
    }
    updateDisplay();
});

btn9.addEventListener('click', () => {
    if (clearState === true) toggleClear();
    if (firstPress === true) {
        displayNumber = '9';
        firstPress = false;
    } else {
        displayNumber += '9';
    }
    updateDisplay();
});


// the operator buttons
// --------------------

btnAdd.addEventListener('click', () => {
    if (clearState === true) toggleClear();
    if (displayNumber === '0' && firstPress === true) return;
    if (checkOpSwitch() === true) removeOperator();
    if (!(x === null)) {
        calcAndUpdate();
        firstPress = false;
    }
    x = Number(displayNumber);
    displayNumber += ' + ';
    operator = '+';
    updateDisplay();
});

btnSub.addEventListener('click', () => {
    if (clearState === true) toggleClear();
    if (displayNumber === '0' && firstPress === true) return;
    if (checkOpSwitch() === true) removeOperator();
    if (!(x === null)) {
        calcAndUpdate();
        firstPress = false;
        }
    x = Number(displayNumber);
    displayNumber += ' - ';
    operator = '-';
    updateDisplay();
});

btnMult.addEventListener('click', () => {
    if (clearState === true) toggleClear();
    if (displayNumber === '0' && firstPress === true) return;
    if (checkOpSwitch() === true) removeOperator();
    if (!(x === null)) {
        calcAndUpdate();
        firstPress = false;
        }
    x = Number(displayNumber);
    displayNumber += ' \xD7 ';
    operator = '*';
    updateDisplay();
});

btnDiv.addEventListener('click', () => {
    if (clearState === true) toggleClear();
    if (displayNumber === '0' && firstPress === true) return;
    if (checkOpSwitch() === true) removeOperator();
    if (!(x === null)) {
        calcAndUpdate();
        firstPress = false;
        }
    x = Number(displayNumber);
    displayNumber += ' \xF7 ';
    operator = '/';
    updateDisplay();
});


// the point button
//-----------------
btnDot.addEventListener('click', () => {
    if (displayNumber.split(' ')[2] === '') {
        displayNumber += '0.';
    } else {
        displayNumber += '.';
    }
    updateDisplay();
});

// the clear buttons
//-----------------

btnC.addEventListener('click', () => {
    clearData();
    firstPress = true;
    xForRepeat = null;
    yForRepeat = null;
    opForRepeat = null;
    updateDisplay();
});

btnCE.addEventListener('click', () => {
    numArray = displayNumber.split(' ');
    arrayLen = numArray.length;
    if (arrayLen === 1) {
        if (numArray[0].length > 1) {
            displayNumber = displayNumber.slice(0, -1);
            updateDisplay();
            return;
        } else if (!(numArray[0] === '0')) {
            displayNumber = '0';
            updateDisplay();
            firstPress = true;
            toggleClear();
            xForRepeat = null;
            yForRepeat = null;
            opForRepeat = null;

            return;
        } else if (numArray[0] === '0') {
            if (clearState === false) toggleClear();
        }
    };
    if (arrayLen === 3) {
        if (!(numArray[2] === '')) {
            displayNumber = displayNumber.slice(0, -1);
            updateDisplay();
        } else {
            displayNumber = displayNumber.slice(0, -3);
            x = null;
            operator = null;
            updateDisplay();
        }
    };
});

// the equals button
//------------------

btnEq.addEventListener('click', () => {
    if (x === null) {
        if (!(xForRepeat === null)) {
            x = xForRepeat;
            y = yForRepeat;
            operator = opForRepeat;
            calcAndUpdateNoY();
            return;
        } else return; 
    }
    calcAndUpdate();
});


// keyboard support
//------------------------------------------------
//------------------------------------------------
//------------------------------------------------
//------------------------------------------------

// number keys
//------------------------------------------------

document.documentElement.addEventListener('keydown', (e) => {
    if (e.key === '0') {
        if (clearState === true) toggleClear();
        if (firstPress === true) {
            displayNumber = '0';
            firstPress = false;
        } else {
            displayNumber += '0';
        }
        updateDisplay();
    }
});

document.documentElement.addEventListener('keydown', (e) => {
    if (e.key === '1') {
        if (clearState === true) toggleClear();
        if (firstPress === true) {
            displayNumber = '1';
            firstPress = false;
        } else {
            displayNumber += '1';
        }
        updateDisplay();
    }
});

document.documentElement.addEventListener('keydown', (e) => {
    if (e.key === '2') {
        if (clearState === true) toggleClear();
        if (firstPress === true) {
            displayNumber = '2';
            firstPress = false;
        } else {
            displayNumber += '2';
        }
        updateDisplay();
    }
});

document.documentElement.addEventListener('keydown', (e) => {
    if (e.key === '3') {
        if (clearState === true) toggleClear();
        if (firstPress === true) {
            displayNumber = '3';
            firstPress = false;
        } else {
            displayNumber += '3';
        }
        updateDisplay();
    }
});

document.documentElement.addEventListener('keydown', (e) => {
    if (e.key === '4') {
        if (clearState === true) toggleClear();
        if (firstPress === true) {
            displayNumber = '4';
            firstPress = false;
        } else {
            displayNumber += '4';
        }
        updateDisplay();
    }
});

document.documentElement.addEventListener('keydown', (e) => {
    if (e.key === '5') {
        if (clearState === true) toggleClear();
        if (firstPress === true) {
            displayNumber = '5';
            firstPress = false;
        } else {
            displayNumber += '5';
        }
        updateDisplay();
    }
});

document.documentElement.addEventListener('keydown', (e) => {
    if (e.key === '6') {
        if (clearState === true) toggleClear();
        if (firstPress === true) {
            displayNumber = '6';
            firstPress = false;
        } else {
            displayNumber += '6';
        }
        updateDisplay();
    }
});

document.documentElement.addEventListener('keydown', (e) => {
    if (e.key === '7') {
        if (clearState === true) toggleClear();
        if (firstPress === true) {
            displayNumber = '7';
            firstPress = false;
        } else {
            displayNumber += '7';
        }
        updateDisplay();
    }
});

document.documentElement.addEventListener('keydown', (e) => {
    if (e.key === '8') {
        if (clearState === true) toggleClear();
        if (firstPress === true) {
            displayNumber = '8';
            firstPress = false;
        } else {
            displayNumber += '8';
        }
        updateDisplay();
    }
});

document.documentElement.addEventListener('keydown', (e) => {
    if (e.key === '9') {
        if (clearState === true) toggleClear();
        if (firstPress === true) {
            displayNumber = '9';
            firstPress = false;
        } else {
            displayNumber += '9';
        }
        updateDisplay();
    }
});


// the operator keys
// -----------------

document.documentElement.addEventListener('keydown', (e) => {
    if (e.key === '+') {
        if (clearState === true) toggleClear();
        if (displayNumber === '0' && firstPress === true) return;
        if (checkOpSwitch() === true) removeOperator();
        if (!(x === null)) {
            calcAndUpdate();
            firstPress = false;
        }
        x = Number(displayNumber);
        displayNumber += ' + ';
        operator = '+';
        updateDisplay();
    }
});

document.documentElement.addEventListener('keydown', (e) => {
    if (e.key === '-') {
        if (clearState === true) toggleClear();
        if (displayNumber === '0' && firstPress === true) return;
        if (checkOpSwitch() === true) removeOperator();
        if (!(x === null)) {
            calcAndUpdate();
            firstPress = false;
            }
        x = Number(displayNumber);
        displayNumber += ' - ';
        operator = '-';
        updateDisplay();
    };
});

document.documentElement.addEventListener('keydown', (e) => {
    if (e.key === '*') {
        if (clearState === true) toggleClear();
        if (displayNumber === '0' && firstPress === true) return;
        if (checkOpSwitch() === true) removeOperator();
        if (!(x === null)) {
            calcAndUpdate();
            firstPress = false;
            }
        x = Number(displayNumber);
        displayNumber += ' \xD7 ';
        operator = '*';
        updateDisplay();
    }
});

document.documentElement.addEventListener('keydown', (e) => {
    if (e.key === '/') {
        if (clearState === true) toggleClear();
        if (displayNumber === '0' && firstPress === true) return;
        if (checkOpSwitch() === true) removeOperator();
        if (!(x === null)) {
            calcAndUpdate();
            firstPress = false;
            }
        x = Number(displayNumber);
        displayNumber += ' \xF7 ';
        operator = '/';
        updateDisplay();
    }
});

document.documentElement.addEventListener('keydown', (e) => {
        if (e.key === '.') {
        if (displayNumber.split(' ')[2] === '') {
            displayNumber += '0.';
        } else {
            displayNumber += '.';
        }
        updateDisplay();
    }
});


document.documentElement.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
        if (clearState === true) {
            clearData();
            firstPress = true;
            xForRepeat = null;
            yForRepeat = null;
            opForRepeat = null;
            updateDisplay();
        } else {
            numArray = displayNumber.split(' ');
            arrayLen = numArray.length;
            if (arrayLen === 1) {
                if (numArray[0].length > 1) {
                    displayNumber = displayNumber.slice(0, -1);
                    updateDisplay();
                    return;
                } else if (!(numArray[0] === '0')) {
                    displayNumber = '0';
                    updateDisplay();
                    firstPress = true;
                    toggleClear();
                    xForRepeat = null;
                    yForRepeat = null;
                    opForRepeat = null;
        
                    return;
                } else if (numArray[0] === '0') {
                    if (clearState === false) toggleClear();
                }
            };
            if (arrayLen === 3) {
                if (!(numArray[2] === '')) {
                    displayNumber = displayNumber.slice(0, -1);
                    updateDisplay();
                } else {
                    displayNumber = displayNumber.slice(0, -3);
                    x = null;
                    operator = null;
                    updateDisplay();
                }
            };45
        }
    }
});


btnC.addEventListener('click', () => {
    clearData();
    firstPress = true;
    xForRepeat = null;
    yForRepeat = null;
    opForRepeat = null;
    updateDisplay();
});

btnCE.addEventListener('click', () => {
    numArray = displayNumber.split(' ');
    arrayLen = numArray.length;
    if (arrayLen === 1) {
        if (numArray[0].length > 1) {
            displayNumber = displayNumber.slice(0, -1);
            updateDisplay();
            return;
        } else if (!(numArray[0] === '0')) {
            displayNumber = '0';
            updateDisplay();
            firstPress = true;
            toggleClear();
            xForRepeat = null;
            yForRepeat = null;
            opForRepeat = null;

            return;
        } else if (numArray[0] === '0') {
            if (clearState === false) toggleClear();
        }
    };
    if (arrayLen === 3) {
        if (!(numArray[2] === '')) {
            displayNumber = displayNumber.slice(0, -1);
            updateDisplay();
        } else {
            displayNumber = displayNumber.slice(0, -3);
            x = null;
            operator = null;
            updateDisplay();
        }
    };
});

document.documentElement.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        if (x === null) {
            if (!(xForRepeat === null)) {
                x = xForRepeat;
                y = yForRepeat;
                operator = opForRepeat;
                calcAndUpdateNoY();
                return;
            } else return; 
        }
        calcAndUpdate();
    }
});