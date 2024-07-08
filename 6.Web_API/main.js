//// Task 1:
// async function getGif(){
//    let result= await fetch("https://api.thecatapi.com/v1/images/search?limit=400");
//    let data = await result.json();
//    let  gifObjects=data.filter(obj=>{
//       if(obj.url.slice(-3)=="gif"){
//         return obj
//       }
//    })
//    return gifObjects;
// }

// getGif()
// .then((array)=>{
//     array.forEach(element => {
//         console.log(element)
//     });
// })
// .catch((error)=>{
//     console.log(error)
// })



////Task 2

// async function changeKey(limit){
//     let result= await fetch("https://api.thecatapi.com/v1/images/search?limit="+limit);
//     let data = await result.json();
//     let changedObjects=data.map((obj)=>{
//     return Object.entries(obj).reduce((acc, [key, value]) => {
//         if (key === "url") {
//             key = "catUrl";
//         }
//         acc[key] = value;
//         return acc;
//     }, {});
// })

// return changedObjects;

// }
 
//  changeKey(100)
//  .then((array)=>{
     
//         array.forEach(element => {
//             console.log(element);
//         });
//      })
//  .catch((error)=>{
//      console.log(error)
//  })



////Task 3:

// async function showData(){
//    let result= await fetch("https://api.thecatapi.com/v1/images/search?limit=400");
//    let data = await result.json();
//    return data;
// }

// showData()
// .then((array)=>{
//     array.forEach(element => {
//         console.log(element)
//     });
// })
// .catch((error)=>{
//     console.log(error)
// })



//// Task 4:
let books = [];

function addBook(newBook) {
    
    books.push(newBook);

    books.forEach((book) => {
        console.log(`${book.title} ${book.author} ${book.isbn} ${book.genre} ${book.price} ${book.quantity}`);
    });
    console.log('-----------------------------'); 
}


let book1 = {
    title: "1984",
    author: "George Orwell",
    isbn: "9780451524935",
    genre: "Dystopian",
    price: 9.99,
    quantity: 20
};

let book2 = {
    title: "The Call of the Wild",
    author: "Jack London",
    isbn: "9780486264721",
    genre: "Adventure",
    price: 7.99,
    quantity: 15
};

let book3 = {
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    isbn: "9781594631931",
    genre: "Fiction",
    price: 9.99,
    quantity: 20
};

let book4 = {
    title: "War and Peace",
    author: "Leo Tolstoy",
    isbn: "9781427030205",
    genre: "Classic",
    price: 12.99,
    quantity: 10
};

let book5 = {
    title: "Thus Spoke Zarathustra",
    author: "Friedrich Nietzsche",
    isbn: "9780486406633",
    genre: "Philosophy",
    price: 8.99,
    quantity: 25
};
addBook(book1);
addBook(book2);
addBook(book3);
addBook(book4);
addBook(book5);