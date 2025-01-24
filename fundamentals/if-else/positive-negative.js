/*
Escribe un programa que evalúe el valor de la variable ‘n’. Verifica si el número es positivo, negativo o cero. y muestre un mensaje correspondiente a su evaluación:

Si el número es mayor a 0, imprime: Positivo
Si el número es menor a 0, imprime: Negativo
Si el número es igual a 0, imprime: Cero

Si la variable no es un número, imprime un mensaje de error: Por favor, introduce un número.
 */

const prompt = require("prompt-sync")()

const n = parseInt(prompt("Ingrese un número: "))

if (n > 0) {
  console.log("Positivo")
} else if (n < 0) {
  console.log("Negativo")
} else if (n === 0) {
  console.log("Cero")
} else {
  console.log("Por favor, introduce un número")
}

