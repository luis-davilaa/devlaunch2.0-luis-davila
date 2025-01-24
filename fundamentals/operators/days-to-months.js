/**
Escribe un programa en JS que solicite al usuario ingresar el numero de dias y calcule el numero equivalente de meses y dias restantes , considerando que un mes consta de 30 dias. 

Este programa utiliza el modulo prompt-sync para recibir interactivamente la entrada del usuario. 

Despues de calcular la cantidad de meses  y dias restantes segun la entrada, el programa muestra un mensaje al usuario indicando el equivalente en meses y dias restantes. 

Como pista, puedes usar math.floor() para redondear el resultado a un numero entero. Si el usuario ingresa 100, la salida sera: 100 days are 3 months and 10 days.
 */

const prompt = require("prompt-sync")()

const DAYS_OF_MONTH = 30

const days = parseInt(prompt("Enter number of days: "))

const calculateNumberOfMonths = days / DAYS_OF_MONTH

const monthsNumber = Math.floor(calculateNumberOfMonths)

const daysLeft = days % DAYS_OF_MONTH

console.log(`${days} days are ${monthsNumber} months and ${daysLeft} days.`)