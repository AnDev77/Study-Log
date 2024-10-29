let stdId : number = 11;
let stdName : string = "an";
let age : number = 27;
let gender : string = 'male';
let course : string = "dev";
let completed : boolean = false;

class Employee {
    
    constructor( private empName : string, private age : number, private empJob : string) { }

    get name(){
        return this.empName;
    }
    set name(empName : string){
        this.empName = empName;
    }
    printEmp = () : void =>{
        console.log(this.empName + " "  + this.age + " " + this.empJob)
    }
}

let A = new Employee( 'an', 20, 'dev');
console.log(A.name)
A.name = 'gwang';
console.log(A.name);
