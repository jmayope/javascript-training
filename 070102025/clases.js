class Person {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName
  }

  getLastName() {
    return this.lastName;
  }

}

class Employee extends Person {
  constructor(name, lastName, appointment, salary = 0) {
    super(name, lastName);
    this.appointment = appointment;
    this.salary = salary;
  }

  getSalary() {
    return `Tu salario es: ${this.salary} USD`;
  }
}

let personOne = new Person("Juan", "Ramirez");
console.log(personOne);
console.log(personOne.getLastName());

let newEmployee = new Employee("Jose", "Parco", "Boss");
let newEmployee2 = new Employee("Juan", "Carpio", "Boss", 250);
console.log(newEmployee.getLastName());
console.log(newEmployee.getSalary())

console.log(newEmployee2.getLastName());
console.log(newEmployee2.getSalary())