"use strict";
let stdId = 11;
let stdName = "an";
let age = 27;
let gender = 'male';
let course = "dev";
let completed = false;
class Employee {
    constructor(empName, age, empJob) {
        this.empName = empName;
        this.age = age;
        this.empJob = empJob;
        this.printEmp = () => {
            console.log(this.empName + " " + this.age + " " + this.empJob);
        };
    }
    get name() {
        return this.empName;
    }
    set name(empName) {
        this.empName = empName;
    }
}
let A = new Employee('an', 20, 'dev');
console.log(A.name);
A.name = 'gwang';
console.log(A.name);
