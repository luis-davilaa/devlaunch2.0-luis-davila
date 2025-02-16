/*
1. Un zoologico necesita un sistema para gestionar los animales y sus comportamientos.
    
    Debes modelar un conjunto de clases que representen distintos tipos de animales y sus características.
    
    Todos los animales tiene un nombre, especie y edad. Además, todos deber poder emitir un sonido y mostrar su información básica.
    
    Algunos animales, como los leones, puden rugir y tienen una melena. Los elefantes pueden hacer sonar su trompa y tienen un tamaño específico (por ejemplo, pequeño, mediano o grande).
    
    Crea una clase base Animal con las propiedades y métodos necesarios.
    
    Extender la clase Animal para crear clases específicas como Leon y Elefante que tengan comportamientos y propiedades particulares.
*/

class Animal {
  constructor (
    private name: string,
    private specie: string,
    private age: number
  ) {}

  public sound() {}

  public toString() {
    return `Name: ${this.name}
Specie: ${this.specie}
Age: ${this.age}`
  }
}

class Lion extends Animal {
  constructor(
    name: string, 
    specie: string, 
    age: number
  ) {
    super(name, specie, age)
  }
  sound() {
    return "Roaaar..."
  }

  displayInfo() {
    const attribute = "This is the Lion 🦁"
    return `${this.toString()} 
${attribute}`
  }
}

type ElephantSize = "small" | "medium" | "large"

class Elephant extends Animal {
  constructor(
    name: string, 
    specie: string, 
    age: number,
    public size: ElephantSize
  ) {
    super(name, specie, age)
  }

  sound() {
    return "Elephant noise..."
  }

  displayInfo() {
    const attribute = "This is the Elephant 🐘"
    return `${this.toString()}
Size: ${this.size} 
${attribute}`
  }
}

const lion1 = new Lion("Luis", "Lion", 2)
console.log(lion1.displayInfo())
console.log(lion1.sound())

const elephant1 = new Elephant("Eduardo", "Elephant", 4, "large")
console.log(elephant1.displayInfo())
console.log(elephant1.sound())