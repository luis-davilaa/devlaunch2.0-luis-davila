/*
Entrada de fecha de naciemiento: Se solicita al usuario que ingrese su fecha de nacimiento en el formato YYYY/MM/DD.
Calculo de la edad: Se crea un objeto Date para la fecha de nacimiento y se calcula la edad restando el año de nacimiento del año actual. También se verifica si ya ha pasado el cumpleaños actual, para ajustar la edad si es necesario. 
Verificación de edad: Se utiliza if-else para determinar si la persona cumple con la edad legal para beber (18 años) y se imprime el mensaje correspondiente. 
Este proceso permite que el proceso de verificación de edad sea automatico y preciso, asegurando que solo los mayores de edad puedan ingredar al bar.

Puedes guiarte con esto: 

const prompt = require("prompt-sync")()
const birthDate = prompt("What is your birthdate in format YYYY/MM/DD? ")

const birthday = new Date(birthDate)
const today = new Date ()

const age = today.getFullYear() - birthday.getFullYear // takes age of the person
*/
const prompt = require("prompt-sync")()
const birthDate = prompt("What is your birth date in format YYYY/MM/DD? ")

const birthday = new Date(birthDate)
const today = new Date ()

let age = today.getFullYear() - birthday.getFullYear()

const birthdayPassed = (
  today.getMonth() > birthday.getMonth() ||
  (
    today.getMonth() === birthday.getMonth() &&
    today.getDate() >= birthday.getDate()
  )
)

if (!birthdayPassed) {
  age--
}

const message = age >= 18 ? "Puedes entrar al bar de Moe" : "No puedes entrar al bar de Moe."

console.log(message)
