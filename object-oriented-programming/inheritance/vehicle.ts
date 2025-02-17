/*
1. Eres responsable de diseñar un sistema sencillo de gestión de vehiculos para una empresa de transporte. El sistema debe representar diferentes tipos de vehiculos y sus comportamientos utilizando una estructura de herencia de clases.
    
Todos los vehiculos tiene un emoji, marca, modelo y año de fabricación.

Los vehiculos deben poder arrancar y mostrar su información.

Los autos tienen un número específico de puertas y deben poder encender el aire acondicionado.

Las motocicletas pueden tener un sidecar y deben poder hacer una acrobacia en una rueda
*/

class Vehicle {
  constructor(
    protected emoji: string,
    protected brand: string,
    protected model: string,
    protected year: number
  ) {}

  public startTheVehicle(): string {
    return `${this.emoji} is on.`
  }

  public turnOffTheVehicle(): string {
    return `${this.emoji} is off.`
  }

  public toString() {
    return `${this.emoji}:
Brand: ${this.brand}
Model: ${this.model}
Year: ${this.year}`
  }
}

type NumberOfDoors = 2 | 4

class Car extends Vehicle {
  constructor(
    brand: string,
    model: string,
    year: number,
    public doors: NumberOfDoors
  ) {
    super("🚗", brand, model, year)
  }

  public turnACOn() {
    return "AC is on"
  }

  public displayInfo() {
    return`${this.toString()}\nNumber of doors: ${this.doors}`
  }
}

class Motorcycle extends Vehicle {
  constructor(
    brand: string,
    model: string,
    year: number,
    public sidecar: boolean
  ) {
    super("🏍️", brand, model, year)
  }

  public stunt() {
    return `${this.emoji} is doing a wheelie!`
  }

  public displayInfo() {
    return`${this.toString()}\nHas sidecar: ${this.sidecar}`
  }
}

const car1 = new Car("Toyota", "Fortuner", 2020, 2)
console.log(car1.displayInfo())

console.log()

const moto1 = new Motorcycle("Suzuki", "Ninja", 1995, false)
console.log(moto1.displayInfo())
