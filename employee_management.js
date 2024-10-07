class Employee {
    constructor (name, salary, position, department,) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    
    }
    getDetails() {
        return `${this.name} + ${this.position}, Salary: $${this.salary}`;
    }
}
// Department class
class Department {
    constructor (name) {
        this.name = name;
        this.employees = [];

    }

    addEmployee (employee) {
        this.employees.push (employee);
    }

    getDepartmentSalary() {
        return this.employees.reduce ((total, employee) => total + employee.salary, 0);
    }
}
// Manager class inherits from Employee
class Manager extends Employee  {
    constructor (name, salary, position, department, bonus) {
        super (name, salary, position, department);
        this.bonus = bonus;
    }
    getDetails() {
        return `${super.getDetails()}, Bonus: $${this.bonus}`;
    }
}

// Handle bonuses for managers 

calculateTotalSalaryWithBonus() {
    return this.employees.reduce((total, employee) => {
        if (employee instanceof Manager) {
            return total + employee.salary + employee.bonus;
        }
        return total + employee.salary;
    }, 0);
}

// Create and manage departments and employees 

const engineering = new Department ("Engineering");
const marketing = new Department ("Marketing");

const alice = new Employee("Alice", 80000, "Developer", "Engineering");
const bob = new Employee("Bob", 75000, "Designer", "Marketing");
const charlie = new Manager ("Charlie", 120000, "Engineering Manager", "Engineering", 20000);
const diana = new Manager ("Diana", 130000, "Marketing Manager", "Marketing", 25000);

engineering.addEmployee(alice);
engineering.addEmployee(charlie);
marketing.addEmployee(bob);
marketing.addEmployee(diana);

consoconsle.log(`Total salary for Engineering: $${engineering.getDepartmentSalary()}`);
console.log(`Total salary with bonuses for Engineering: $${engineering.calculateTotalSalaryWithBonus()}`);
console.log(`Total salary for Marketing: $${marketing.getDepartmentSalary()}`);
console.log(`Total salary with bonuses for Marketing: $${marketing.calculateTotalSalaryWithBonus()}`);