
// !!! You can check each task separately by uncommenting it

// // Task-1:Finding Common Elements in Arrays
// const array1 = [1, 2, 3, 4, 5]; 
// const array2 = [4, 5, 6, 7, 8];
// const common=[];
// for(let itemA of a){
//     for(let itemB of b){
//         if(itemA===itemB && !common.includes(itemA)){
//             common.push(itemA)
//         }
//     }
// }
// console.log(common)




// //---------------------------------------------------------
// // Task 2: Grouping Objects by Age
// const people = [ 
//     { name: 'Alice', age: 25},
//     { name: 'Bob', age: 30 }, 
//     { name: 'Charlie', age: 25}, 
//     { name: 'David', age: 30 }, 
//     { name: 'Edward', age: 35 } ];

// let groupedObject= people.reduce((acc, person) => {
//     if (!acc[person.age]) {
//         acc[person.age] = [];
//     }
//     acc[person.age].push(person);
//     return acc;
// }, {});
// console.log(groupedObject);



// //---------------------------------------------------
// // Task 3: Finding and Squaring Even Numbers
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newArray = numbers.filter(item =>item%2==0).map(item=>item*item);
// console.log(newArray);




// //----------------------------------------------------
// //Task 4: Removing Duplicates from an Array
// const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5 ]
// const arrayWithUniques= [...new Set(arrayWithDuplicates)];
// console.log(arrayWithUniques);




// //-----------------------------------------------------
// //Task 5: Inverting Keys and Values in an Object
// const obj = { a: 1, b: 2, c: 3 }
// const newObject= Object.entries(obj).reduce((acc, [key, value])=>{
//     acc[value]=key;
//     return acc;
// }, {})
// console.log(newObject);




// //-----------------------------------------------------
// //Task 6: Uppercasing Object Keys
// const obj = { a: 1, b: 2, c: 3 }
//  const objWithUpperKeys= Object.entries(obj).reduce((acc, [key, value])=>{
//     acc[key.toUpperCase()]=value;
//     return acc;
//  }, {})
//  console.log(objWithUpperKeys);




// //---------------------------------------------------
// //Task 7: Merging Multiple Objects
// const obj1 = { a: 1, b: 2 }; const obj2 = { b: 3, c: 4 }; const obj3 = { c: 5, d: 6 };
// const mergedObject= Object.assign({},obj1, obj2, obj3);
// console.log(mergedObject);




// //---------------------------------------------------
// //Task 8: Filtering Nested Objects by Property
// const complexArray = [
//     {
//         id: 1,
//         items: [{ name: 'apple', type: 'fruit' }, { name: 'carrot', type: 'vegetable' }]
//     },
//     {
//         id: 2,
//         items: [{ name: 'banana', type: 'fruit' }, { name: 'broccoli', type: 'vegetable' }]
//     }
// ];
// const fruitArray = complexArray.map((element) => {
//   return{ id: element.id,
//     items: element.items.filter(item => item.type === 'fruit')
// }});
// for(let fruit of fruitArray){
//     console.log(fruit);
// }




// //----------------------------------------------------
// //Task 9: Sorting Objects by Property
// const students = [ { name: 'Alice', grade: 85 }, { name: 'Bob', grade: 92 }, { name: 'Charlie', grade: 88 } ]; 
// const sortedArray=students.sort((student1, student2) => (student2.grade - student1.grade))
// console.log(sortedArray);




// //---------------------------------------------------
// //Task 10: Transforming an Object
// const user = { firstName: 'John', lastName: 'Doe', age: 30 };
// const modifiedUser = {
//     fullName: `${user.firstName} ${user.lastName}`,
//     yearsOld: user.age
// };
// console.log(modifiedUser);
