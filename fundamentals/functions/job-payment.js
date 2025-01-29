/*
InnovateTech Solutions is introducing a new system to improve how employee attendance is tracked and payment calculations are made.

With this system, employees can log their entry and exit times, facilitating the program to calculate their total payment for the day based on their worked hours and hourly rate. Time entries are managed using a 24-hour format, ranging from 00:00 to 23:59.

The company's standard workday is 8 hours, with an hourly wage of $10. When employees work beyond this standard duration, they qualify for overtime pay, calculated at 1.5 times their regular hourly rate. 

We're given the time in military format (like “13:00” for 1:00 PM), written as a string. We want to break it down into hours and minutes, so we can do math with them. Here's some code to help with that:

function convertTimeToMinutes(time) {
  const [hours, minutes] = time.split(":").map(Number)
  return hours * 60 + minutes
}

*/

const prompt = require("prompt-sync")()
const HOURLY_RATE = 10
const WORK_DAY_HRS = 8
const MINS_IN_HRS = 60
const OVERTIME_RATE = 1.5
const NUMB_OF_DECIMALS = 2

function convertTimeToMinutes(time) {
  const [hours, minutes] = time.split(":").map(Number)
  return hours * MINS_IN_HRS + minutes
}

function salaryRate(workedHours) {
  let salary;
  if (workedHours <= WORK_DAY_HRS) {
    salary = HOURLY_RATE * workedHours
  } else {
    const extraSalary = workedHours - WORK_DAY_HRS
    salary = (HOURLY_RATE * WORK_DAY_HRS) + ((extraSalary * HOURLY_RATE) * OVERTIME_RATE)
  }

  return salary
}

function main() {

  let entryTime = prompt("Entry time (in 24-hour format): ")
  let exitTime = prompt("Exit time (in 24-hour format): ")

  const entryTimeFormatted = convertTimeToMinutes(entryTime)
  const exitTimeFormatted = convertTimeToMinutes(exitTime)

  const workedHours = (exitTimeFormatted - entryTimeFormatted) / MINS_IN_HRS

  salary = salaryRate(workedHours)

  console.log(`Your salary is $${salary.toFixed(NUMB_OF_DECIMALS)}`)
}
main()