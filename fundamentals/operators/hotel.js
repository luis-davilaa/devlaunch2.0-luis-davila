/*
Crea un programa en JS que calcule la factura total de una persona en un hotel, donde cada habitación tiene un precio de $100 la noche, aprovechando un oferta promocional que incluye un descuento del 5%. 

El programa debe solicitar al huesped el numero de noches que paso en el hotel para calcular la factura final. Si el usuario ingresa que se quedo 5 noches, la salida sera: $475
*/

const prompt = require("prompt-sync")()

const daysAtHotel = parseInt(prompt("Enter days spent at the hotel: "))

const roomPrice = 100
const offeredDiscount = 0.05
const price = roomPrice * daysAtHotel
const discount = price * offeredDiscount
const finalAmount = price - discount

console.log(`
HOTEL RECEIPT
-------------------------------
Booked nights: ${daysAtHotel}
-------------------------------
Subtotal     : $${price}
Discount     : $${discount}
Total        : $${finalAmount}
`)