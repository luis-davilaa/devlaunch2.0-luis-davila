/*
Estás diseñando un sistema basico para gestionar cuentas bancarias de clientes.
Cada cuenta bancaria tendrá un identificador único, un nombre del titular y un saldo.
Tu tarea es crear una función createAccount que genere un objeto de cuenta bancaria.
El objeto debe ser creado por medio de un function declaration, con todas las propiedades y métodos deben estar definidos dentro de la función usando this.
Propiedades de la cuenta bancaria (dentro de la función usando this):

id: identificador único de la cuenta.
holderName: nombre del titular de la cuenta.
balance: saldo de la cuenta.

Métodos de la cuenta bancaria (dentro de la función usando this): 

deposit(amount): incrementa el saldo de la cuenta
withdraw(amount): disminuye el saldo de la cuenta si hay fondos
transfer(toAccount, amount): transfiere fondos de la cuenta a otra cuenta si hay fondos
*/

function createAccount(id, holderName, balance) {
  this.id = id
  this.holderName = holderName
  this.balance = balance

  this.deposit = (amount) => {
    this.balance += amount
  }

  this.withdraw = (amount) => {
    if (this.balance >= amount) {
      this.balance -= amount
      return amount  
    }
    return null
  
  }

  this.transfer = (toAccount, amount) => {
    const availableBalance = this.withdraw(amount)

    if (availableBalance) {
      toAccount.deposit(availableBalance)
      return toAccount
    }
    return null
  }
  
}

const account1 = new createAccount(1, "Luis", 5000)
const account2 = new createAccount(2, "Ximena", 0)

console.log(account1)
account1.deposit(5000)
console.log(account1)

console.log(account1.withdraw(2000))
console.log(account1)

console.log(account1.transfer(account2, 8000))
console.log(account1)








