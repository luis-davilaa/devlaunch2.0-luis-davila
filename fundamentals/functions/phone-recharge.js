/*
The primary mobile phone service provider in the city is introducing a promotional offer based on both the recharge amount made by its customers and the length of their subscription with the company. 

To be eligible for the promotion, customers must recharge a minimum of $20 and a maximum of $80 and have been subscribed for at least a year.

Under the SuperSaver promotion, customers can enjoy a doubled recharge amount if their recharge falls below $38 and they have been affiliated with the service for three years or less.

On the other hand, the MegaRecharge promotion caters to customers who have been subscribed for more than three years, offering them a tripled recharge amount regardless of the recharge sum.

You are tasked to develop a program in JavaScript that takes the client's name, recharge amount, and duration of their subscription as input, and determines whether the promotion applies to them and calculates the total recharge amount including the promotion.
*/

const prompt = require("prompt-sync")()
const MIN_MEMBERSHIP_TIME = 12
const MAX_SUPER_PROMO_AMOUNT = 38
const MEGA_PROMO_TIME = 36
const MEGA_PROMO_MULTIPLIER = 3

function promoValidation(rechargeAmount, membership) {

  if (membership < MIN_MEMBERSHIP_TIME) return rechargeAmount

  let multiplier = 1

  if (membership > MEGA_PROMO_TIME) {
    multiplier = MEGA_PROMO_MULTIPLIER
  } else if (
    membership >= MIN_MEMBERSHIP_TIME && 
    membership <= MEGA_PROMO_TIME && 
    rechargeAmount < MAX_SUPER_PROMO_AMOUNT) {
    multiplier = 2
  }

  return rechargeAmount * multiplier
}

function promoMessage (name, promo, rechargeAmount, promoAmount) {
  if (promoAmount === 0) {
    return `${name}, you are not eligible for the promotion, your recharge amount is $${rechargeAmount}.`
  }

  let promoName;
  if (promo === rechargeAmount * 3) {
    promoName = "MegaRecharge"
  } else if (promo === rechargeAmount * 2) {
    promoName = "SuperSaver"
  }

  return `${name}, you are eligible for the ${promoName} promotion, your recharge of $${rechargeAmount} is now $${promo}.`
}

function main () {

  const name = prompt("Enter your name: ")
  const rechargeAmount = parseFloat(prompt("Enter amount to be recharged: "))
  const membership = parseFloat(prompt("Enter months of subscription: "))

  const promo = promoValidation(rechargeAmount, membership)
  const promoAmount = promo - rechargeAmount

  const message = promoMessage (name, promo, rechargeAmount, promoAmount)
  console.log(message)

}

main()

