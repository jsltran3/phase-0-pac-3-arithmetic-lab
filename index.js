let number = 10;

function add() {
    return (number += 1);
}

//add();

function multiply() {
    return (number *= 2);
}

function subtract() {
    return (number -= 1);
}

function divide() {
    return (number /= 2);
}

function add(a, b) {
    let abPlus = a + b
    return abPlus
}
;
function subtract(a, b) {
    let abMinus = a - b;
    return abMinus
}

function multiply(a, b) {
    let abMult = a * b;
    return abMult
}

function divide(a, b) {
    let abDiv = a / b;
    return abDiv
}

function increment(n) {
    n += 1;
    return n; 
 }
 
function decrement(n) {
    n-=1;
    return n; 
}

function makeInt(n, base) {
    const retInt = parseInt(n, 10);
    return retInt; 
}

function preserveDecimal(n) {
    const retDec = parseFloat(n);
    return retDec; 
}
