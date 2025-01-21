/*
Voy al supermercado GreenCenter para hacer mis comprar habituales y planeo comprar manzanas y naranjas. Cuando estoy alli, veo que no hay platanos ni uvas, asi que cambio un poco mi lista. Veo que 3 cajeros estan trabajando, asi que me preparo a pagar. Mis cosas cuestan $100 en total. Entrego $150 y recibo $50 de cambio.
*/

const marketName = "GreenCenter"

const fruit1 = "Manzanas"
const fruit2 = "Naranjas"
const fruit3 = "Uvas"
const vegetable1 = "Platano"

const availableCashiers = 3

const price = 100
const myMoney = 150
const change = myMoney - price

console.log(`
${marketName} Supermarket
---------------------------
Not available items:
- ${fruit3}
- ${vegetable1}
---------------------------
Selected products:
- ${fruit1}
- ${fruit2}
---------------------------
Total amount: $${price}
Customer paid: $${myMoney}
Change: $${change}
`)


