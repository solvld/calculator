
const buttons = document.querySelectorAll(".calc-button");
const display = document.querySelector("#display");

let fistOperand = null;
let operator = null;
let currentOperand = '';

buttons.forEach((button) => {
  button.addEventListener('click',(event) =>{
    const target = event.target;
    const value = target.innerText;
    if (target.id === "clear"){
      fistOperand = null;
      operator = null;
      currentOperand = '';
      display.innerText = 0;
    }else if (target.id === "plus-minus"){
      display.innerText = -1 * display.innerText
    }else if (target.id === "percent"){
      display.innerText = parseFloat(display.innerText) / 100;
    }else if (target.id === "devide" || target.id === "multiply" || target.id === "minus" || target.id === "plus"){
      operator = value;
      fistOperand = parseFloat(display.innerText);
      currentOperand = '';
    }else if (target.id === "equal"){

    }else{
      if (value === ',' && currentOperand.includes(',')){
        return;
      }
      currentOperand += value;
      display.innerText = currentOperand;
    }
  })
})

