// Variable Mapping Layer
const outScreen = document.getElementById('txt-output');
const histScreen = document.getElementById('txt-history');
const keyElems = document.querySelectorAll('.key');

// Memory Registers
let memoryCurrent = '0';
let memoryPast = '';
let targetOp = null;
let flagClearOnInput = false;

function refreshInterface() {
    outScreen.innerText = memoryCurrent;
    if (targetOp !== null) {
        let sym = targetOp;
        if(targetOp === '*') sym = '×';
        if(targetOp === '/') sym = '÷';
        histScreen.innerText = `${memoryPast} ${sym}`;
    } else {
        histScreen.innerText = '';
    }
}

function wipeData() {
    memoryCurrent = '0';
    memoryPast = '';
    targetOp = null;
    flagClearOnInput = false;
    refreshInterface();
}

function dropLastChar() {
    if (memoryCurrent === 'Cannot divide by zero' || memoryCurrent === 'Error') {
        wipeData();
        return;
    }
    if (memoryCurrent.length > 1) {
        memoryCurrent = memoryCurrent.slice(0, -1);
    } else {
        memoryCurrent = '0';
    }
    refreshInterface();
}

function injectNumber(val) {
    if (memoryCurrent === 'Cannot divide by zero' || memoryCurrent === 'Error') {
        wipeData();
    }
    if (flagClearOnInput) {
        memoryCurrent = '';
        flagClearOnInput = false;
    }
    if (val === '.' && memoryCurrent.includes('.')) return;
    if (memoryCurrent === '0' && val === '0') return;

    if (memoryCurrent === '0' && val !== '.') {
        memoryCurrent = val;
    } else {
        memoryCurrent += val;
    }
    refreshInterface();
}

function configureOperator(op) {
    if (memoryCurrent === 'Cannot divide by zero' || memoryCurrent === 'Error') return;
    if (targetOp !== null && !flagClearOnInput) {
        executeMath();
    }
    memoryPast = memoryCurrent;
    targetOp = op;
    flagClearOnInput = true;
    refreshInterface();
}

function processPercent() {
    let numeric = parseFloat(memoryCurrent);
    if(isNaN(numeric)) return;
    memoryCurrent = (numeric / 100).toString();
    refreshInterface();
}

function executeMath() {
    if (targetOp === null || flagClearOnInput) return;
    
    let a = parseFloat(memoryPast);
    let b = parseFloat(memoryCurrent);
    
    if (isNaN(a) || isNaN(b)) {
        memoryCurrent = 'Error';
        targetOp = null;
        refreshInterface();
        return;
    }

    let out = 0;
    if (targetOp === '+') out = a + b;
    else if (targetOp === '-') out = a - b;
    else if (targetOp === '*') out = a * b;
    else if (targetOp === '/') {
        if (b === 0) {
            memoryCurrent = 'Cannot divide by zero';
            targetOp = null;
            flagClearOnInput = true;
            refreshInterface();
            return;
        }
        out = a / b;
    }

    memoryCurrent = parseFloat(out.toFixed(8)).toString();
    targetOp = null;
    flagClearOnInput = true;
    refreshInterface();
}

// Mouse Event Core Loop
keyElems.forEach(k => {
    k.addEventListener('click', () => {
        if (k.classList.contains('num-key')) {
            injectNumber(k.dataset.val);
        } else if (k.classList.contains('math-key')) {
            configureOperator(k.dataset.op);
        } else {
            let action = k.dataset.cmd;
            if (action === 'clear') wipeData();
            if (action === 'backspace') dropLastChar();
            if (action === 'percent') processPercent();
            if (action === 'equal') executeMath();
        }
    });
});

// Structural Keyboard listeners
window.addEventListener('keydown', (e) => {
    if ((e.key >= '0' && e.key <= '9') || e.key === '.') injectNumber(e.key);
    else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') configureOperator(e.key);
    else if (e.key === 'Enter' || e.key === '=') { e.preventDefault(); executeMath(); }
    else if (e.key === 'Backspace') dropLastChar();
    else if (e.key === 'Escape') wipeData();
    else if (e.key === '%') processPercent();
});