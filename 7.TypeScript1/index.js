//Task1:Primitive Types və Union Types İstifadəsi
function formatInput(input) {
    if (typeof input == "number") {
        return input.toFixed(2);
    }
    else {
        return input.toUpperCase();
    }
}
console.log(formatInput(23.34566));
console.log(formatInput("Hello"));
var students = [
    { name: "Kate", age: 10, lessons: ["Math", "English", "Geometry"] },
    { name: "Lisa", age: 12, lessons: ["Literature", "Biology", "History"] },
    { name: "Charlie", age: 14, lessons: ["Chemistry", "Physics", "Economics"] },
    { name: "Harry", age: 16, lessons: ["Art", "Music", "Programming"] }
];
function showStudents(students) {
    students.forEach(function (student) {
        console.log(" ".concat(student.name, " is ").concat(student.age, " years old and lessons are ").concat(student.lessons.toString()));
    });
}
showStudents(students);
//Task 3: Tuples İstifadəsi 
function parsePerson(input) {
    return [input.split(" ")[0], Number(input.split(" ")[1])];
}
console.log(parsePerson("Kate 12"));
console.log(parsePerson("Charlie 14"));
function calculateArea(figure) {
    if (figure.name === 'circle') {
        return Math.PI * figure.radius * figure.radius;
    }
    else {
        return figure.width * figure.height;
    }
}
console.log(calculateArea({ name: 'circle', radius: 10 }));
console.log(calculateArea({ name: 'rectangle', width: 3, height: 4 }));
var employee = {
    name: "Yang",
    surname: "Lee",
    age: 22,
    employeeId: 1,
    department: "IT"
};
function printEmployeeInfo(employee) {
    console.log("I am ".concat(employee.name, " ").concat(employee.surname, " and ").concat(employee.age, " years old. Worker number ").concat(employee.employeeId, " from ").concat(employee.department, " department"));
}
printEmployeeInfo(employee);
var ElectricCar = /** @class */ (function () {
    function ElectricCar(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }
    ElectricCar.prototype.drive = function () {
        console.log("You drive ".concat(this.model, " which is created by ").concat(this.make, " in ").concat(this.year, " with ").concat(this.color, " color."));
    };
    return ElectricCar;
}());
var car = new ElectricCar("Ford", "Escape", 2000, "black");
car.drive();
var products = [
    { name: "copybook", price: 5 },
    { name: "pencil", price: 1 },
    { name: "sticker", price: 3 },
    { name: "book", price: 20 },
    { name: "bag", price: 30 }
];
function totalPrice(products) {
    var total = 0;
    products.forEach(function (product) {
        total += product.price;
    });
    return total;
}
console.log(totalPrice(products));
