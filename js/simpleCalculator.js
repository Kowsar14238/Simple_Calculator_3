let expression = "";
let shouldReplace = true;

function appendNumber(number) {
  if (shouldReplace) {
    expression = "";
    shouldReplace = false;
  }
  expression += number;
  document.getElementById("result").value = expression;
}

function appendDoubleZero() {
  if (shouldReplace){
    expression = '00';
    shouldReplace = false;
  }
  else{
    expression += '00';
  }

  document.getElementById('result').value = expression;
}

function appendOperator(operator) {
  shouldReplace = false;

  if (expression !== ""){
    expression += operator;
    document.getElementById("result").value = expression;
  }
}

function appendDecimal() {
  if (shouldReplace){
    expression = "0.";
    shouldReplace = false;
  } 
  else if (!expression.includes(".")){
    expression += ".";
  }

  document.getElementById("result").value = expression;
}

function calculate() {
  try {
    const result = eval(expression);
    document.getElementById("result").value = result;
    expression = result.toString();
    shouldReplace = true;
  } 
  catch (error) {
    document.getElementById("result").value = "error";
  }
}

function calculatePercentage() {
  try {
    const result = eval(expression);
    const percentageResult = (result / 100).toFixed(2);
    document.getElementById("result").value = percentageResult;
    expression = percentageResult.toString();
    shouldReplace = true;
  } 
  catch (error) {
    document.getElementById("result").value = "Error";
  }
}

function clearInput() {
  expression = "";
  document.getElementById("result").value = "";
}

function deleteLastCharacter() {
  if (expression.length > 0) {
    expression = expression.slice(0, -1);
    document.getElementById("result").value = expression;
  }
}


