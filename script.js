const inputNum1 = document.getElementById("num1")
const inputNum2 = document.getElementById("num2")
const inputRes = document.getElementById("result")

const btnSum = document.getElementById("sum")
const btnRes = document.getElementById("res")
const btnMul = document.getElementById("mul")
const btnDiv = document.getElementById("div")

const sum = (a, b) => a + b
const res = (a, b) => a - b
const mul = (a, b) => a * b
const div = (a, b) => a / b


const handleSum = () => {
    const num1 = parseInt(inputNum1.value)
    const num2 = parseInt(inputNum2.value)
    inputRes.value = sum(num1, num2)
}

const handleRes = () => {
    inputRes.value = res(inputNum1.value, inputNum2.value)
}

const handleMul = () => {
    inputRes.value = mul(inputNum1.value, inputNum2.value)
}

const handleDiv = () => {
    inputRes.value = div(inputNum1.value, inputNum2.value)
}

btnSum.addEventListener("click", handleSum)
btnRes.addEventListener("click", handleRes)
btnMul.addEventListener("click", handleMul)
btnDiv.addEventListener("click", handleDiv)