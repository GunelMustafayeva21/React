
//// Task 1 and Task 2: Creating a promise and use it 

//  function createDelay (milliseconds){
//       let promise = new Promise((resolve, reject)=>{
//            setTimeout(()=>{
//                 resolve("Delay Completed");
//                 reject("Something went wrong!");
//            }, milliseconds)
//       })
//       return promise;
//  }


//  let result= createDelay(1000);
//  result.then(data=>console.log(data)).catch(error=> console.log(error));




 //// Task 3: Promise Chaining

//  function createDelay (message, milliseconds){
//       let promise = new Promise((resolve, reject)=>{
//            setTimeout(()=>{
//                 resolve(message);
//                 reject("Something went wrong!");
//            }, milliseconds)
           
//       })
//       return promise;
//  }


// createDelay("Hello", 1000)
//    .then(text1=>{
//         console.log(text1);
//         return createDelay("How are you?", 2000)
//     })
//     .then(text2=>{
//         console.log(text2);
//         return createDelay("How is it going?", 3000)
//     })
//     .then(text3=>{
//         console.log(text3);  
//     })
//     .catch(error =>{console.log(error)});




////Task 4: Error Handling

//  function createDelay (message, milliseconds){
//       let promise = new Promise((resolve, reject)=>{
//          let random = Math.floor(Math.random()*10);
//            setTimeout(()=>{
//             if(random>5){
//                 reject("Error: Delay Failed");
//             }
//             else{
//                 resolve(message);
//             }
//            }, milliseconds)
//       })
//       return promise;
//  }


// createDelay("Delay Completed", 1000)
// .then(data=>console.log(data))
// .catch(error=> console.log(error));



////Task 5: Promise.all()

//  function createDelay (message, milliseconds){
//       let promise = new Promise((resolve, reject)=>{
//            setTimeout(()=>{
//                 resolve(message);
//                 reject("Something went wrong!");
//            }, milliseconds)
           
//       })
//       return promise;
//  }

// let promises=[
//     createDelay("Delay Completed 1", 4000),
//     createDelay("Delay Completed 2", 3000),
//     createDelay("Delay Completed 3", 2000),
//     createDelay("Delay Completed 4", 1000),
//     createDelay("Delay Completed 5", 500)
// ]

// Promise.all(promises)
// .then(data=>console.log(data))
// .catch(error=>console.log(error));