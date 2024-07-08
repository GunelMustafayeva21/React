// // You can check each task by uncommenting it

//// Closure tasks

//// Task 1: Create simple closure
// function Greeting(name){
//     return function(){
//          return `Hello ${name}`;
//     }
// }
// let greetinMessage= Greeting("Gunel");
// console.log(greetinMessage());



////--------------------------------------------------
////Task 2:  Create Simple Counter with Closure
// function Counter(number){
//     return function(){
//         return number=number+1;
//     }
// }
// let keepResult= Counter(10);
// console.log(keepResult());  //11
// console.log(keepResult());  //12



////Task 3: Private Messaging With Closure
// function Messaging(name, message){
//     return function(){
//         return `${name} texted you:  "${ message}"`;
//     }
// }
// let message = Messaging("Gunel", "How is it going?")
// console.log(message());
   


////--------------------------------------------------
////Task 4:  Create Complex Counter with Closure
// function complexCounter(counter){
//     return function Increment(){
//         counter++;
//         console.log(`Increment worked. New value is ${counter}`)
//          return function Decrement (){
//             counter--;
//             console.log(`Decrement worked. New value is ${counter}`)
//             return function getValue(){
//                 console.log("Last function will return value!")
//                return counter;
//             }
//         }
//     }
// }
// let result = complexCounter(10)()()()
// console.log(result);



////--------------------------------------------------
////Task 5:  Closure with special API
// const apiKey = 'f2a0805f42a8167ad9af5ad04cf64ef9'; 
// const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
// const city='Paris'
// const url= `${apiUrl}?q=${city}&appid=${apiKey}&units=metric`
// async function fetchWeather(url) {
//     const response = await fetch(url);
//     const data = await response.json();
//     return function(){
//           return `Weather temperature in ${data.name} is ${data.main.temp}`;
//     }
// }
// let comingData= fetchWeather(url).then(result=>result());
// console.log(comingData);



////--------------------------------------------------
////Task 6:  Create Special Function
// function Increase(number){
//     return function(){
//         console.log( number=number+10)
//     }
// }
// let childFunction= Increase(10)
// childFunction()
// childFunction()
// childFunction()



//// Call, Apply and Bind Tasks

////--------------------------------------------------
////Task 7:  Use Function With Call
// let student = {
//     name:"Ada",
//     surname:"Mammadova",
//     color: "pink",
//     printInfo(){
//         console.log(`I am ${this.name} ${this.surname}. My favourite color is ${this.color}`)
//     }
// }
// let employee = {
//     name:"Yusif",
//     surname:"Alizade",
//     color: "black",
// }
// student.printInfo.call(employee);



////--------------------------------------------------
////Task 8:  Use Same Function With Apply
//student.printInfo.apply(employee);



////--------------------------------------------------
////Task 9:  Use Function With Bind
// let employee = {
//     name:"Yusif",
//     surname:"Alizade",
//     color: "black",
// }

// function showData(){
//     return `I am ${this.name} ${this.surname}. My favourite color is ${this.color}`;
// }
// let returnedFromBind=showData.bind(employee);
// console.log(returnedFromBind())



////--------------------------------------------------
////Task 10:  Use Apply With Parameters
// let student1 = {
//          name:"Ada",
//          surname:"Mammadova",
//          petInfo(petCount, dogCount){
//  console.log(`I have ${petCount} pets and ${dogCount} of them are dog`)
//          }
// }
//  let student2 = {
//      name:"Yusif",
//      surname:"Alizade",
    
//  }
//  student1.petInfo.apply(student2,[2, 1] );



////-----------------------------------------------------
//// Task 11: Using of Simple Try Catch 
// let age= -4;
// try{
//    if(age<0){
//     throw new Error("Age can not be negative")
//    }
//    else{
//     console.log("Entered age is valid");
//    }
// }
// catch(error){
// console.log(error.message) ;
// }



////------------------------------------------------
//// Task 12: Try Catch With Async Functions
// const apiKey = 'f2a0805f42a8167ad9af5ad04cf64ef9'; 
// const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
// const city='Paris'
// const url= `${apiUrl}?q=${city}&appid=${apiKey}&units=metric`
// const damagedUrl="`${apiUrl}?q=${city}&appid=${apiKey}`"
// async function fetchWeather(url) {
//     try{
//         const response = await fetch(url);
//         const data = await response.json();
//         console.log(`Weather temperature in ${data.name} is ${data.main.temp}`);  
//     }
//     catch(error){
//         console.log("Something is wrong!");
//     }
// }
//  fetchWeather(url);

