/*
El Elite Fitness Center es un gimnasio boutique ubicado en Palo Alto, California, que ofrece membresias por $150 dolares al mes.
Opera de 6am - 10pm, emplea a 10 entrenadores certificados y cuenta con comodidades como sauna, piscina y clases grupales.
*/

const gymName = "Elite Fitness Center"

const city = "Palo Alto"
const state = "California"
const location = `${city}, ${state}`

const membershipFee = 150

const gymOpens = "6:00"
const gymCloses = "22:00"
const schedule = `${gymOpens} - ${gymCloses}`

const trainers = 10

const benefit1 = "sauna"
const benefit2 = "piscina"
const benefit3 = "clases grupales"

console.log(`
Gimnasio: ${gymName}
Ubicación: ${location}
Costo de la membresía: $${membershipFee}
Horario: ${schedule}
Entrenadores certificados: ${trainers}
Beneficios: ${benefit1}, ${benefit2} y ${benefit3}
`)
