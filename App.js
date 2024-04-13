const resultElement = document.getElementById("p-result")
console.log(resultElement.textContent)
// resultElement.textContent = 'Hello World'

const inp1 = document.getElementById("val1")
const inp2 = document.getElementById("val2")
const calculateBtn = document.getElementById("calculate")
const plusBtn = document.getElementById("plus")
const minusBtn = document.getElementById("minus")
const multiplyBtn = document.getElementById("multiply")
const divideBtn = document.getElementById("divide")
let action = "+"

// const sum = Number(inp1.value) + Number(inp2.value)
// resultElement.textContent = sum

plusBtn.onclick = function () {
  action = "+"
};

minusBtn.onclick = function () {
  action = "-"
};
multiplyBtn.onclick = function () {
  action = "*"
};

divideBtn.onclick = function () {
  action = "/"
};

function printResult(res) {
  if (res < 0) {
    resultElement.style.color = "red"
  } else if (res === 0) {
    resultElement.style.color = "black"
  } else {
    resultElement.style.color = "green"
  }
  resultElement.textContent = res;
}

// calculateBtn.onclick = function(){
//     if(action === '+'){
//         const sum = Number(inp1.value) + Number(inp2.value)
//         printResult(sum)
//     }
//     else if (action === '-') {
//         const sum = Number(inp1.value) - Number(inp2.value)
//         printResult(sum)
//     }
//     else if (action === '*'){
//         const sum = Number(inp1.value) * Number(inp2.value)
//         printResult(sum)
//     }
//     else {
//         const sum = Number(inp1.value) / Number(inp2.value)
//         printResult(sum)
//     }

// }

function calculateWithAction(input1, input2, actionSymbol) {
  const num1 = Number(input1.value)
  const num2 = Number(input2.value)

  // if(action === '+'){
  //     return num1 + num2
  // }
  // else if (action === '-') {
  //     return num1 - num2
  // }
  // else if (action === '*'){
  //     return num1 * num2
  // }
  // else {
  //     return num1 / num2
  // }

  return actionSymbol === "+"
    ? num1 + num2
    : actionSymbol === "-"
    ? num1 - num2
    : actionSymbol === "*"
    ? num1 * num2
    : num1 / num2

}

calculateBtn.onclick = function () {
  const result = calculateWithAction(inp1, inp2, action)
  printResult(result)
}
