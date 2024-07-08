//// Tapşırıq 1: Sadə Kalkulyator
//// İstifadəçidən iki ədəd və bir əməliyyat (toplama, çıxma, vurma, bölmə) alaraq nəticəni hesablayan və ekrana yazdıran bir proqram yaradın.

// function sum(number1: number, number2: number, operation: "+" | "-" | "/" |"*"): number | undefined {
//     switch (operation) {
//         case "+":
//             return number1 + number2;
//         case "-":
//             return number1 - number2;
//         case "*":
//             return number1 * number2;
//         case "/":
//             return number1 / number2;
//     }
// }
// console.log(sum(1, 10, "*"));



////------------------------------------------------
////Tapşırıq 2: Massivdə Ən Böyük və Ən Kiçik Element
//// Bir massivdəki ən böyük və ən kiçik elementi tapan bir funksiyanı yazın.

// function MaxMin(collection:number[]):void{
//     let max=collection[0];
//     let min=collection[0];
//     collection.forEach(el=>{
//          if(el>max){
//             max=el;
//          }
//          if(el<min){
//             min=el
//          }
        
//     })
//     console.log(`Maximum is ${max} minimum is ${min}`)
// }
// let arr=[1, 2, 3, 4];
// MaxMin(arr);


////-----------------------------------------------
//// Tapşırıq 3: Palindrom Yoxlaması
//// Bir sözün palindrom olub olmadığını yoxlayan bir funksiyanı yazın.

// function palindrome(word:string):boolean{
//     let reverse="";
//  for(let i=word.length-1; i>=0; i--){
//        reverse+=word[i];
//  }
//  if(reverse==word){
//     return true;
//  }
//  else{
//     return false;
//  }
// }

// console.log(palindrome("ana"))


////------------------------------------------------
//// Tapşırıq 4: İstifadəçi Məlumatları
//// İstifadəçi məlumatlarını saxlamaq və bu məlumatları yeniləmək üçün bir interfeys və sinif yaradın.

// function Average(arr:number[]):number{
//     let sum=0;
//     arr.forEach(el=>{
//           sum+=el;
//     })
//     return sum/arr.length;
// }

// let array=[1, 2, 3, 4, 5];
// console.log(Average(array));


////---------------------------------------------
// //Tapşırıq 5: Orta Hesablama
//// Bir massivdəki ədədlərin ortasını hesablayan bir funksiyanı yazın.

// function sorting(arr:number[]):number[]{
//     for(let j=0; j<arr.length-1; j++){
//     for(let i=0; i<arr.length-1; i++){
//         if(arr[i]>arr[i+1]){
//            let temp= arr[i];
//            arr[i]=arr[i+1];
//            arr[i+1]=temp;
//         }
//     }
//     }
//     return arr;
// }
// let arr=[3, 5, 1, 2, 98, 0]
// console.log(sorting(arr))


////----------------------------------------------
//// Tapşırıq 6: Sıralama
//// Bir massivdəki ədədləri kiçikdən böyüyə sıralayan bir funksiyanı yazın.
// class Person{
//     constructor(public name:string, public  surname:string, public age:number){
//         this.name=name;
//         this.surname=surname;
//         this.age=age
//     }
//     changeName(name:string):void{
//         this.name=name;
//     };
//     changeSurname(surname:string):void{
//         this.surname=surname;
//     }
//     changeAge(age:number):void{
//         this.age=age;
//     }


// }

// let person= new Person("Gunel", "Mustafa", 23);
// person.changeName("Kate")
// console.log(person)