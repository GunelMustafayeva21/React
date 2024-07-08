//Task1:Primitive Types və Union Types İstifadəsi

function formatInput(input: number | string): number|string {
    if (typeof input == "number") {
        return input.toFixed(2);
    }
    else {
         return input.toUpperCase();
    }
    
}
console.log(formatInput(23.34566));
console.log(formatInput("Hello"));



//Task 2: Object və Arrays İstifadəsi

interface IStudent{
    name:string
    age:number
    lessons:string[]
}

let students:IStudent[] = [
    {name:"Kate", age:10, lessons:["Math", "English", "Geometry"]},
    {name:"Lisa", age:12, lessons:["Literature", "Biology", "History"]},
    {name:"Charlie", age:14, lessons:["Chemistry", "Physics", "Economics"]},
    {name:"Harry", age:16, lessons:["Art", "Music", "Programming"]}
]

function showStudents(students:IStudent[]):void{
    students.forEach((student)=>{
        
         console.log(` ${student.name} is ${student.age} years old and lessons are ${student.lessons.toString()}`)
    })
}
showStudents(students);



//Task 3: Tuples İstifadəsi 

function parsePerson(input:string):[string, number]{
   
    return [input.split(" ")[0], Number(input.split(" ")[1])]
    
}
console.log(parsePerson("Kate 12"));
console.log(parsePerson("Charlie 14"));



//Task 4:Functions İstifadəsi

interface ICircle {
    name: 'circle';
    radius: number;
}

interface IRectangle {
    name: 'rectangle';
    width: number;
    height: number;
}

function calculateArea(figure: ICircle): number;
function calculateArea(figure: IRectangle): number

function calculateArea(figure: ICircle | IRectangle): number {
    if (figure.name === 'circle') {
        return Math.PI * figure.radius * figure.radius;
    } else  {
        return figure.width * figure.height;
    } 
}


console.log(calculateArea({ name: 'circle', radius: 10 }));    
console.log(calculateArea({ name: 'rectangle', width: 3, height: 4 })); 



//Task 5: Type Aliases İstifadəsi

type TPerson={
   name:string
   surname:string
   age:number
}

type TEmployee= TPerson & {
   employeeId:number
   department:string
}

let employee:TEmployee ={
    name:"Yang",
    surname:"Lee",
    age:22,
    employeeId:1,
    department:"IT"
}

function printEmployeeInfo(employee:TEmployee):void{
console.log(`I am ${employee.name} ${employee.surname} and ${employee.age} years old. Worker number ${employee.employeeId} from ${employee.department} department`)
}
printEmployeeInfo(employee)


//Task 6: Interface İstifadəsi

interface ICar{
    make:string
    model:string
    year:number
    drive:()=>void
}

class ElectricCar implements ICar{
    make: string;
    model: string;
    year: number;

    color:string

    constructor(make: string, model: string, year: number, color:string) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color=color
    }


    drive() {
        console.log(`You drive ${this.model} which is created by ${this.make} in ${this.year} with ${this.color} color.`);
    }
}

let car:ElectricCar= new ElectricCar("Ford", "Escape", 2000, "black")
car.drive()


////Task 7: Arrays və Type Aliases İstifadəsi

type TProduct={
    name:string
    price:number
}

let products:TProduct[]=[
    {name:"copybook", price:5},
    {name:"pencil", price:1},
    {name:"sticker", price:3},
    {name:"book", price:20},
    {name:"bag", price:30}
]

function totalPrice(products:TProduct[]):number{
    let total=0;
    products.forEach((product)=>{
        total+=product.price;
    })
    return total;
}

console.log(totalPrice(products))