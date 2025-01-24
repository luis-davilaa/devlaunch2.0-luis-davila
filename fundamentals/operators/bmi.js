/**
Escribe un programa sencillo en JS que calcule y muestre el Indice de Masa Corporal (IMC) de un usuario. 

El programa debe solicitar al usuario su nombre, altura, en metros y peso en kilogramos. 

Despues de calcular el IMC, el programa debe mostrar un mensaje al usuario que incluya su nombre y el valor del IMC. Calcula el IMC usando la formula IMC = weight / heightˆ2. 

Nombre: John, Altura: 1.75, Peso: 70. La salida sera: Hi John, your BMI is ~22.86
 */

const prompt = require("prompt-sync")()

const NUMBER_OF_DECIMALS = 2
const NUMBER_TO_ELEVATE = 2


const userName = prompt("Enter your name: ")
const height = parseFloat(prompt("Enter your height "))
const weight = parseFloat(prompt("Enter your weight "))

const bmi = weight / (Math.pow(height, NUMBER_TO_ELEVATE))

console.log(`Hi ${userName}, your BMI is ~${bmi.toFixed(NUMBER_OF_DECIMALS)}`)