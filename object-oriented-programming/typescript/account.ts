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
interface Account {
  id: number
  holderName: string
  balance: number
  deposit: (amount: number) => void
  withdraw: (amount: number) => number | null
  transfer: (toAccount: Account, amount: number) => boolean
}
 
const createAccount = (id: number, holderName: string, balance: number): Account => {
  return {
    id,
    holderName,
    balance,

    deposit(amount: number) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this.balance}`);
      } else {
        console.log("Deposit amount must be positive.");
      }
    },

    withdraw(amount: number): number | null {
      if (amount > 0 && this.balance >= amount) {
        this.balance -= amount;
        console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
        return amount;
      }
      console.log("Insufficient balance or invalid amount.");
      return null;
    },

    transfer(toAccount: Account, amount: number): boolean {
      const withdrawnAmount = this.withdraw(amount);
      if (withdrawnAmount !== null) {
        toAccount.deposit(withdrawnAmount);
        console.log(`Transferred $${amount} to ${toAccount.holderName}`);
        return true;
      }
      console.log("Transfer failed.");
      return false;
    }
  };
}


const account1 = createAccount(1, "Luis", 5000)
const account2 = createAccount(2, "Ximena", 0)

console.log(account1)
account1.deposit(5000)
console.log(account1)

console.log(account1.withdraw(2000))
console.log(account1)

console.log(account1.transfer(account2, 8000))
console.log(account1)








