const displayHistory = document.querySelector(".display-history");
const display = document.querySelector(".display-input");
const tempResult = document.querySelector(".temp-result");
const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");
const equal = document.querySelector(".equal");
const clearAll = document.querySelector(".all-clear");
const clearLast = document.querySelector(".last-entity-clear");

let dis1Num = "";
let dis2Num = "";
let result = null;
let lastOperation = "";
let haveDot = false;

//display
numbers.forEach((number) => {
    number.addEventListener("click", (e) => {
        if (e.target.innerText === "." && !haveDot) { // cek apakah ada dot atau tidak
            haveDot = true; 
        }else if(e.target.innerText === "." && haveDot){
            return
        }

        // untuk memunculkan apa yang di click
        dis2Num += e.target.innerText;
        display.innerText = dis2Num
    })
})

//operation
operations.forEach((operation) => {
    operation.addEventListener("click", (e) => {
        if (!dis2Num) return;
        haveDot = false;
        const operationName = e.target.innerText;
        if (dis1Num && dis2Num && lastOperation) {
            mathOperation();
        } else {
            result = parseFloat (dis2Num);
        }
        clearVar(operationName);
        lastOperation = operationName;
    })
})

function clearVar(name = "") {
    dis1Num += dis2Num + " " + name + " ";
    displayHistory.innerText = dis1Num;
    display.innerText = "";
    dis2Num = "";
    tempResult.innerText = result;
}

// oparasi matematika
function mathOperation() {
    if (lastOperation === "X") {
        result = parseFloat(result) * parseFloat(dis2Num)
    } else if (lastOperation === "+") {
        result = parseFloat(result) + parseFloat(dis2Num)
    } else if (lastOperation === "-") {
        result = parseFloat(result) - parseFloat(dis2Num)
    }else if (lastOperation === "/") {
        result = parseFloat(result) / parseFloat(dis2Num)
    } else if (lastOperation === "%") {
        result = parseFloat(result)  % parseFloat(dis2Num)
    }
}

// operasi equal atau tanda =
equal.addEventListener("click", (e) =>{
    if (!dis1Num || !dis2Num) return;
    haveDot = false;
    mathOperation();
    clearVar();
    display.innerText = result;
    tempResult.innerText = "";
    dis2Num = result;
    dis1Num = "";
})

// operasi C
clearAll.addEventListener("click", (e) => {
    dis1Num = "";
    dis2Num = "";
    haveDot = false;
    displayHistory.innerText = "";
    display.innerText = "";
    tempResult.innerText = "";
    result = "";
    lastOperation = ""
})

// Operasi CE
clearLast.addEventListener("click",(e) => {
    display.innerText = "";
    dis1Num = "";
    dis2Num = "";
})

//untuk bisa diketik sama keyboard
window.addEventListener("keydown", (e) =>{
    if (e.key === "0" || e.key === "1" ||e.key === "2" ||e.key === "3" ||e.key === "4" ||e.key === "5" ||e.key === "6" ||e.key === "7" ||e.key === "8" ||e.key === "9") {
        clickButton(e.key);
    } else if (e.key == "+" ||e.key == "-" ||e.key == "/" ||e.key == "%" ) {
        clickOperation(e.key);
    } else if (e.key === "*") {
        clickOperation("X");
    } else if (e.key === "Enter" || e.key ==="=") {
        clickEqual();
    } else if (e.key === "Backspace") {
        clickCLear();
    }
})

function  clickButton(key) {
    numbers.forEach((button) => {
        if(button.innerText == key){
            button.click()
        }
    })
}

function clickOperation(key){
    operations.forEach((operation)=> {
        if (operation.innerText === key) {
            operation.click()
        }
    })
}

function clickEqual() {
    equal.click()
}

function clickCLear() {
    clearAll.click()
}