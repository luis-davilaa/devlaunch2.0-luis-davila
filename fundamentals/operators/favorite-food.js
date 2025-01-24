/*
Escribe un programa que examine las preferencias culinarias de 3 personas: Maria, Pepe y Malvern. El programa analiza 3 condiciones. 

I. Comparte Maria la misma comida favorita de Pepe Y Malvern? 

II. La comida favorita de Maria coincide ya sea con la de Pepe o con la de Malvern? 

III. La preferencia de Maria es diferente tanto de la de Pepe como la de Malvern?

Recuerda pedir los valores al usuario para poder elegir diferentes combinaciones, ejemplo si la comida favoritida de Maria es la pizza, la de Pepe es el pollo y la de Malvern el pescado. Los resultados de estas comparaciones se muestran luego, ofreciendo información sobre las similitudes y diferencias en las preferencias culinarias de los individuos. 

La salida del programa sera: 
Does Maria share the same favorite food as both Pepe and Malvern: false
Does Maria’s favorite food match either Pepe’s or Malvern’s? : false
Does Maria’s preference differ from both Pepe’s and Malvern’s? : true
*/

const prompt = require("prompt-sync")()

const mariaFavFood = prompt("Maria's favorite food is: ")
const pepeFavFood = prompt("Pepe's favorite food is: ")
const malvernFavFood = prompt("Malvern's favorite food is: ")

const everyoneSharesSameFood = (mariaFavFood === pepeFavFood) && (malvernFavFood === mariaFavFood)
const isSomeoneMatchingMariaFavFood = (mariaFavFood === pepeFavFood) || (malvernFavFood === mariaFavFood)
const isEverybodysTasteDifferent = (mariaFavFood !== pepeFavFood) && (malvernFavFood !== mariaFavFood)

console.log(`Does Maria share the same favorite food as both Pepe and Malvern: ${!!everyoneSharesSameFood}`)
console.log(`Does Maria’s favorite food match either Pepe’s or Malvern’s? : ${!!isSomeoneMatchingMariaFavFood}`)
console.log(`Does Maria’s preference differ from both Pepe’s and Malvern’s? ${!!isEverybodysTasteDifferent}`)