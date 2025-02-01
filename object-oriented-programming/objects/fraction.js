/*
In this scenario, you will be provided with several fractions, and your task is to perform various operations on them such as addition, subtraction, multiplication, and division. The objective is to get the resulting numerator and denominator of these operations.

To accomplish this, you'll need to define two attributes: the numerator and the denominator. Additionally, you'll implement corresponding methods for each operation, returning the resulting object with the calculated numerator and denominator.
*/

const createFraction = (numerator, denominator) => {
  return {
    numerator,
    denominator
  }
}

const add = (f1, f2) => {
  numerator = (f1.numerator * f2.denominator) + (f2.numerator * f1.denominator)
  denominator = f1.denominator * f2.denominator

  return createFraction(numerator, denominator)
}

const subtract = (f1, f2) => {
  numerator = (f1.numerator * f2.denominator) - (f2.numerator * f1.denominator)
  denominator = f1.denominator * f2.denominator

  return createFraction(numerator, denominator)
}

const multiply = (f1, f2) => {
  numerator = f1.numerator * f2.numerator
  denominator = f1.denominator * f2.denominator

  return createFraction(numerator, denominator)
}

const divide = (f1, f2) => {
  numerator = f1.numerator * f2.denominator
  denominator = f1.denominator * f2.numerator

  return createFraction(numerator, denominator)
}

const createFractionsWithFunctions = (numerator, denominator) => {
  const f1 = createFraction(numerator, denominator)
  return {
    ...f1,
    add: (f2) => add(f1, f2),
    subtract: (f2) => subtract(f1, f2),
    multiply: (f2) => multiply(f1, f2),
    divide: (f2) => divide(f1, f2)
  }
}

const f1 = createFraction(3, 4)
const f2 = createFraction(2, 3)

const f3 = createFractionsWithFunctions(3, 4)
const f4 = createFraction(2, 3)

console.log(add(f1, f2))
console.log(subtract(f1, f2))
console.log(multiply(f1, f2))
console.log(divide(f1, f2))

console.log()

console.log(f3.add(f4))
console.log(f3.subtract(f4))
console.log(f3.multiply(f4))
console.log(f3.divide(f4))