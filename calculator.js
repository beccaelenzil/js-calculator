const exampleAdditionInput = {
  num1: -3,
  num2: 5,
  operation: 'add',
}

const exampleSubtractionInput = {
  num1: -3,
  num2: 5,
  operation: 'subtract',
}

const exampleMultiplicationInput = {
  num1: 3,
  num2: -5,
  operation: 'multiply',
}

const exampleDivisionInput = {
  num1: 10,
  num2: 5,
  operation: 'divide',
}

const exampleZeroDivisionInput = {
  num1: 3,
  num2: 0,
  operation: 'divide',
}

const VALID_OPERATIONS = ['add', '+', 'subtract', '-', 'multiply', '*', 'divide', '/']

const add = (num1, num2) => num1 + num2
const subtract = (num1, num2) => num1 - num2
const multiply = (num1, num2) => num1 * num2
const divide = (num1, num2) => {
  if (num2 == 0){
    return "You cannot divide by zero"
  } else {
    return num1 / num2
  }
}

const validNumber = (n) => {
  const nInt = Number(n)
  const nString = String(nInt)
  return n === nString
}

const validOperation = (operation) => {
  if (VALID_OPERATIONS.includes(operation)){
    return true
  } else {
    return false
  }
}

const calculateUserInput = function (error, promptInput) {
  //console.log('This is the value of the promptInput variable that got passed in by prompt, after our prompt package collect user input', promptInput);

  const operation = promptInput['operation']

  for (const num in [promptInput['num1'], promptInput['num2']]){
    if (validNumber(num) === false) {
      console.log(`${num} is not a valid number`)
      return 
    }
  }

  if (validOperation(operation) == false){
    console.log(`${operation} is not a valid operation`)
    return 
  }

  const num1 = Number(promptInput['num1'])
  const num2 = Number(promptInput['num2'])

  switch (operation) {
    case 'add' || '+':
      console.log(`${num1} + ${num2} = ${add(num1,num2)}`)
      return
    case '+':
      console.log(`${num1} + ${num2} = ${add(num1,num2)}`)
      return
    
    case 'subtract':
      console.log(`${num1} - ${num2} = ${subtract(num1,num2)}`)
      return
    case '-':
        console.log(`${num1} - ${num2} = ${subtract(num1,num2)}`)
        return
    case 'multiply' :
      console.log(`${num1} * ${num2} = ${multiply(num1,num2)}`)
      return
    case '*':
        console.log(`${num1} * ${num2} = ${multiply(num1,num2)}`)
        return
    case 'divide':
      if (num2 == 0) {
        console.log('You cannot divide by zero')
        return
      }else {
        console.log(`${num1} / ${num2} = ${divide(num1,num2)}`)
        return
      }
    case  '/':
      if (num2 == 0) {
        console.log('You cannot divide by zero')
        return
      }else {
        console.log(`${num1} / ${num2} = ${divide(num1,num2)}`)
        return
      }
  }

  

}

// Example manual testing of calculator.  
//calculateUserInput({}, exampleAdditionInput);
//calculateUserInput({}, exampleSubtractionInput);
//calculateUserInput({}, exampleMultiplicationInput);
//calculateUserInput({}, exampleDivisionInput);
//calculateUserInput({}, exampleZeroDivisionInput);


// This exports the function so index.js can import it.
exports.calculateUserInput = calculateUserInput;