/*
El evento es parte de las Eliminatorias Sudamericanas para la Copa del Mundo.
Es un partido celebrado el 22/11/23 alas 20:30, el equipo local Argentina se enfrentó al equipo visitante Brasil.
El resultado final fue de 1-0, indicando a Argentina como equipo ganador.
*/

const eventName = "Eliminatorias Sudamericanas para la Copa del Mundo"

const date = 22
const month = 11
const year = 2023
const gameDate = `${date}/${month}/${year}`

const hours = 20
const minutes = 30
const gameTime = `${hours}:${minutes}`

const homeTeam = "Argentina"
const awayTeam = "Brasil"
const homeTeamScore = 1
const awayTeamScore = 0

console.log(`
Torneo: ${eventName}
Fecha: ${gameDate} - Hora ${gameTime}
${homeTeam} ${homeTeamScore} - ${awayTeam} ${awayTeamScore} 
`)