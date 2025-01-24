/* 
Imagina desarrollar un programa para calcular el promedio de calificaciones de estudiantes en una escuela. Como parte de este desafio, primero configuras el entorno para recibir entradas del usuario, permitiendo que ingresen 3 notas. 

Luego, procesas estos datos para calcular el promedio de manera precisa. 

Finalmente, presentas el resultado formateado con maximo 2 decimales, para asegurar una lectura clara. 

Si el usuario ingresa las calificaciones 80, 70, 90, la salida sera: 80.
*/

const prompt = require("prompt-sync")()

const GRADES_TO_EVALUATE = 3
const NUMBER_OF_DECIMALS = 2

const grade1 = parseFloat(prompt("Add 1st grade: "))
const grade2 = parseFloat(prompt("Add 2nd grade: "))
const grade3 = parseFloat(prompt("Add 3rd grade: "))

const average = (grade1 + grade2 + grade3) / GRADES_TO_EVALUATE
const formattedAverage = average.toFixed(NUMBER_OF_DECIMALS)

console.log(`The final grade is ${formattedAverage}`)

