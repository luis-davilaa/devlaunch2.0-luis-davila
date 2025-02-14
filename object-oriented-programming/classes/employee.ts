/*
Horizon Innovations, a top company focused on employee well-being, is working on a salary tracking system. It aims to keep accurate records of employees' earnings, including any changes in salary.

To effectively manage and manipulate salary data, it's beneficial to encapsulate it within a class object system. This approach provides a structured and organized way to handle salary-related operations, ensuring clarity, modularity, and maintainability in the codebase.

To handle this, we'll make a class with a main variable called "salary." It's really important because it's the starting point for all the math we need to do in the system.. This class will feature two essential functions: "get" and "set". The "get" function enables retrieval of an employee's current salary, while the "set" function facilitates the modification of the salary amount. It's crucial to emphasize that the "set" function validates salary changes to ensure they are positive, as salaries cannot be negative.

Additionally, a method giveRaise must be created to increase the salary.
*/

class Employee {
  constructor(private _salary: number) {}

  set salary (salary: number) {
    if (salary > 0) {
      this._salary = salary
    }
  }
  
  get salary () {
    return this._salary
  }

  giveRaise = (raise: number): number => {
    if(raise < 0) {
      throw new Error("Salary must be non-negative")
    }
    this._salary += raise
    return this._salary
  }
}

const employee1 = new Employee(2000)

employee1.salary = 2000

console.log(employee1.giveRaise(500))





