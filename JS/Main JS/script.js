// //Types of printing statement
// //12/01/2026===========
// console.log("External js")

// document.writeln("Hello")
// document.writeln("Hello")
// document.writeln("Hello")
// document.writeln("Hello")

// document.write("World")
// document.write("World")
// document.write("World")
// document.write("World")
// document.write("World")

// //Tokens=== smallest unit of any programming lang.

// /* There are 4 type of tokens

// 1)== Keywords : reserved words which has specific meaning
// EX : var, let , const, for , if etc..

// 2)--Identifiers : name given to a class , method, variable are known as identifier

// 3)-- Literals / values : a value stored in a variable is knowns as literals

// 4)--Operators : to preform operation between two or more operands

// Ex-- var name = "john Deo"

// */

// /*
// ==Data-Types=====
// WE HAVE 2 TYPES OF DATATYPS

// 1)Primitive- (Immutable)

// 1-number
// 2-string
// 3-boolean
// 4-undefined
// 5-null
// 6-bigInt
// 7-symbol

// 2)Non-primitive-- Mutable

// 1-Array
// 2-Object
// 3-function

// */

// //!--Mutable and Immutable Example--

// var str = "HELLO";
// str[0] = "X";
// console.log(str);//immutable, cannot change,

// var arr = [10,20,30,40,50];
// arr[0] = 100;
// console.log(arr);//mutable , can change,

// //Primitive datatype example====

// //13/01/2026=====

// //1)==number

// var n1 =10.978;
// console.log(n1);
// console.log(typeof n1);

// var n2 = "Hello"
// var n3 = 'Hello'
// console.log(n2, n3);//Hello World
// console.log(typeof n3);//string

// // `` using backticks we can.....
// var n4 = `hey There  !!!
// Lets go to javascript ${n3}`
// console.log(n4);
// console.log(typeof n4);//string

// var n5 = true;
// console.log(n5);  //true
// console.log(typeof n5); // boolean

// console.log(typeof typeof n5);//string

// //Undefined===
// var n6 =
// console.log(n6); //undefined
// console.log(typeof n6); //undefined

// //Null
// var n7 = null;
// console.log(n7); //null
// console.log(typeof n7); // object consider it's

// var n8=9999999999999999999999999999999999n
// console.log(n8); //9n
// console.log(typeof n8); //bigInt

//var n9 =Symbol("hello");
//var n10 = Symbol("hello");

// console.log(typeof n9);// Symbol
// console.log(n10);//Symbol(hello)

//var n9=10;
//var n10= 15;
// console.log(n9 == n10);//false
// console.log(typeof (n9 === n10));//false

// //! Strictly and Loosly comparision==
// var n11=10;
// var n12=10;
// console.log(n11 == n12);
// //console.log(n11 === n12);

// //! var , let, const different======
// //var keywords

// var a;                  //1) propertises
// console.log(a);//ud

// a=10;                   //2)
// console.log(a);//10

// var b=20;               //3)
// console.log(b);//20

// var b;                  //4)
// console.log(b);//20

// b=30                    //5)
// console.log(b);//30

// var a=40                //6)
// console.log(a);//40

// //=========== let keywords====
// let c;
// console.log(c);//

// c=100;
// console.log(c);//

// let d=200;
// console.log(d);//

// //let c; //! can not redeclare

// d=300
// console.log(d);//

// //let d=400; //

// //===========const keywords
// const e=1000
// console.log(e);//1000

//14/01/2026============

//Hosting===moveing declaration part at the top of the original
//code internally

// var a =undefined /*hoisting happens internally */
// console.log(a);

// var a =10;
// console.log(a);//10

//TDZ==(Temporal Dead Zone)--The time period between accessing let and const variable before declaration
// let b;
// console.log(b);//error

// let b = 20;
// console.log(b);//20 #################

//let c
//console.log(c);//
// let c;
// console.log(c);//ud

// //! GEC (Global Execution Context)
//debugger;
// console.log("start");

// console.log(a);

// var a =10;
// console.log(a);

// let b;
// console.log(b);

// b=20;

// const c=100;
// console.log(c);

// console.log("End");

//! Type of variables-------------------------------=========

// //1)--Global Variable-- can be accessed anywhere throughout the code
// var a = 10;//Global Scope-- Due to Hosting
// let b = 20;//Script Scope --Due to TDZ
// const c = 30;//Script Scope --Due to TDZ

// if(100>2){
// console.log(a, b, c);
// }

// for(let i =0; i<10; i++){
//     console.log(a,b,c);

// }

// function demo1(){
//     console.log(a,b,c);
// }
// demo1();

//===========15/01/2026==========

//!2) Local Variable

// if(200>2){
//     var x=10; //Global variable - global Scope
//     let y =20;//Local variable - block Scope
//     const z=30;//Local variable - block Scope
// }
// console.log(x);//10
// console.log(y);//referenceerror:
// debugger;
// function demo2() {
//     var m=100
//     let n=200
//     const o=300

// }
// demo2();
// //console.log(m);//referenceError:

//==========Function===
//There are 10 type of fun in js,

//1)==Name function : a fun which has name
//Note--Only named function can be called befor declaration due to
//function hoisting

// greet()

// function greet(){
//     console.log("Welcome");
// }
// greet()

// debugger;
// console.log("start");
// var a;
// console.log(a);
// fun();
// a=10;
// console.log(fun);
// function fun(){
// var str ="Hello";
//     console.log();
//     }
// console.log(fun);
// fun();
// console.log(End);

// debugger;
// console.log("start");
// console.log(student);

// var s1=100;

// function student(){
//     console.log("I am student");
// }

// console.log(trainer);
// let s2 =200;

// console.log(s2);
// function trainer(){
//     console.log("I am trainer");
// }
// student();
// trainer();
// console.log("End");

//===============16/01/2026========================

//2)===Anonymous function : Function without name,
// function () {                                   //Not run
//     console.log("I am Anonymous Function");
// }

// //3)==Function expression-
//console.log(f1);//ud
//f1()// It is not work in function Expression,
// debugger;
// var f1 =function(){
//     console.log("I am Anonymous function called by using function expression");
// };
// console.log(f1);// it will print the function with body
// f1()//it will call the function,

//4)==Parameterized function

// function sum(n1=0, n2=0){
//     console.log(n1+n2);
// }
// //sum(20,20);
//sum();

// function demo1(n1,n2,n3,n4,n5){
//     console.log(n1,n2,n3,n4,n5);
//     console.log(arguments);
// }
//   //  demo1(10,20,30,40,50);
//    // demo1(10,20);
//    // demo1(10,20,30,40,50,60,70,80,90);

//User Define=====
// function printFullName(firstName, lastName, age){
//     console.log(`My Name is ${firstName} ${lastName} ${age}`);
//     //console.log("My age is", age);

// }
// let firstNameInput =prompt("Enter FirstName");
// let lastNameInput =prompt("Enter lastName");
// //let ageInput =parseInt(prompt("Enter Age"));

//or

// printFullName(firstNameInput, lastNameInput, ageInput);

//5)====Return Type Function==

// function getEmail(fname, lname){
//     let fullName =`${fname} ${lname}`;
//     let email = `${fname}.${lname}@gmail.com`;

//     return [fullName, email];
// }
// let value =getEmail("shubham","singh");
// console.log(value[0]);
// console.log(value[1]);

// //6)===Nested Function
// debugger;
// function parent(){
//     console.log("I am parent");

//     function child(){
//         console.log("I am child");

//     }
//    child();
// }
// parent();

// =================19/01/2026===============

//closure  is a temporary memory which is created whenever
// we try to access parent function's property inside child
//  function and it cantains only those properties that child function required,

// debugger;
// function parent (){
//     let a1=100;
//     console.log("I am parent", a1);

//     function child(){
//         let b1 =200;
//         console.log(" I am child", b1);//
//     }
//     child();
// }
// parent();

//
// debugger;
// function parent (){
//     let a1=100;
//     console.log("I am parent", a1);

//     function child(){
//         let b1 =200;
//         console.log(" I am child", b1, a1);//
//     }
//     return child;
// }
// let val = parent();
// console.log(val);
// val();

// //7)==Higher Order Function and Callback Function
// // a function which passes as an arguement to another function is known as callback function
// //-  A function which passes any of these requirements
// //1)==if a function accept another
// function demo(fn){
//     fn()
// }
// demo(function(){console.log("hii");
// })

// //2)==if a function returns another function
// function parent(){
//     return function child(){
//         console.log("hello");
//     };
// }
// let val=parent();
// val();

// //Or
// function Demo1(){
//     console.log("Demo1");
//     return function Demo2(){
//         console.log("Demo2");
//     return function Demo3(){
//         console.log("Demo3");

//     }

//     };

// }
// Demo1()()()//JS Currying function

//8)===Arrow function--ES6 features

//simple ways--
// let a1 =() => {
//     console.log("I am Arrow function 1");
// };
// a1()

//if no parameter, we can replace () with _
// let a2 =_ => {
//     console.log(" I am Arrow fuction 2");

// }
// a2();

// //if having only one parameter , () is  not mandatory
// let a3 = n1 => {
//     console.log(" I am Arrow fuction 3", n1);

// }
// a3(100);

// //if having only one lines of code {} is not mandatory
// let a4 =() =>

//explicit return, {} and "return" keyword is mandatory
// let a5 = (n1, n2) =>{
//     return n1 + n2;
// };
// console.log(a5(10,20));

// //implicit return, {} and "return" keyword is not required
// let a6 =(n1, n2) => n1 + n2;
// console.log(a6(5, 10));

//=============================20/01/2026==================
//9)==Immediatly Invocked  function  Expresion (IIFE)
// (function (){
//     console.log("I am IIFE");

// })();

// let x = (function (){
//     console.log("I am IIFE");
//     return "Hii";
// })();
// console.log(x);//Hii

// function demo() {
//   return "hi";
// }
// let val = demo();
// console.log(val); // Hii

//10)==  Construction Function :

//Object======It is used to store multiple data in the form of key and value pairs

//3 ways to create object

// //1) Object literals
//     const obj1 = { id : 1, fname : "john"};
//     console.log(obj1);

// //2) Object Constructor
//     const obj2 = new Object({id : 2, fname : "jane"});
//     console.log(obj2);

// //3) Constructor function
    // function Student(id, firstName){
    //     this.id = id;
    //     this.firstName = firstName;

    // }
    // let s1 = new Student (1, "james");
    // console.log(s1);
    //    let s2 = new Student (2, "clark");
    //    console.log(s2);

//!== CRUD with Object==

// //1)==Create
// const obj = {
//     id : 1,
//     fname : "Shubham",
//     lname : "Deo",
//     age : 25,
//     company : "NA",
//   };
//     console.log(obj);

// //2)==Read
//there are two ways to read
// //1) Using  dot operator
    // console.log(obj.fname);
    // console.log(obj.degree);//ud

// //2)using square brackets
// let x= "lname";
// console.log(obj["age"]);
// console.log(obj[x]);

// //for in loop===for-in loop gives the key and value , using  square brackets
// for(let i in obj){
//     console.log(i, obj[i]);
// }

// // //3)==Update==
//     obj.company = "TCS"
//     console.log(obj);

// //Add new key
// obj.salary = 60000
// console.log(obj);

// // //4)==Delete
// delete obj.salary
// console.log(obj);

// //Object Methods====
// let obj = {
//   id: 1,
//   ename: "john Deo",
// };

// // //1) Object.keys()
// let keys = Object.keys(obj);
// console.log(keys);

// //2) Object.values()
// let values = Object.values(obj);
// console.log(values);

// //3) Object.entries()
// let keyAndValue = Object.entries(obj);
// console.log(keyAndValue);

// //4) Object.fromEntries()
// let newObj = Object.fromEntries(keyAndValue);
// console.log(newObj);

// //=============
// let obj2 = {
//   id: 2,
//   name: {
//     firstName: "jane",
//     lastName: "Deo",
//   },
//   hobbies: ["coding", "singing", "dancing"],
//   address: {
//     city: "Noida",
//     state: "UP",
//     pin: 78975,
//   },
// 
//=============21/01/2016=========

//Object Destructuring

// let obj1= {
//     id : 1,
//     fname : "John",
//     lname : "Deo",
//     salary : 10000,
// };
// let {fname : firstName = "NA", lname, salary=0, id} =obj1;
// console.log(firstName, lname, id);
// console.log(salary);


// let obj2 = {
//   id: 2,
//   Name: {
//     firstName: "jane",
//     lastName: "Deo",
//   },
//   hobbies: ["coding", "singing", "dancing"],
//   address: {
//     city: "Noida",
//     state: "UP",
//     pin: 78975,
//   },
//   details : {
//     id : "janeQSP1",
//     course : "Mern Stack",
//   },
// };
// let{
//     id, 
//     Name: {firstName}, 
//     hobbies : [, , h3], 
//     address : {city}, 
//     details: {id : detailID, course }, 
// } = obj2;

// console.log(id, firstName, h3, city, detailID, course);

// //name , username, street, zipcode, lat, lng, companyName,

// const user = {
//   id: 1,
//   name: "Leanne Graham",
//   username: "Bret",
//   email: "Sincere@april.biz",
//   address: {
//     street: "Kulas Light",
//     suite: "Apt. 556",
//     city: "Gwenborough",
//     zipcode: "92998-3874",
//     geo: {
//       lat: "-37.3159",
//       lng: "81.1496",
//     },
//   },
//   phone: "1-770-736-8031 x56442",
//   website: "hildegard.org",
//   company: {
//     name: "Romaguera-Crona",
//     catchPhrase: "Multi-layered client-server neural-net",
//     bs: "harness real-time e-markets",
//   },
// };

// // name ,username ,street ,zipcode ,lat , lng,companyName ,
// const user = {
//   id: 1,
//   name: "Leanne Graham",
//   username: "Bret",
//   email: "Sincere@april.biz",
//   address: {
//     street: "Kulas Light",
//     suite: "Apt. 556",
//     city: "Gwenborough",
//     zipcode: "92998-3874",
//     geo: {
//       lat: "-37.3159",
//       lng: "81.1496",
//     },
//   },
//   phone: "1-770-736-8031 x56442",
//   website: "hildegard.org",
//   company: {
//     name: "Romaguera-Crona",
//     catchPhrase: "Multi-layered client-server neural-net",
//     bs: "harness real-time e-markets",
//   },
// };

// // name ,username ,street ,zipcode ,lat , lng,companyName ,

// const user = {
//   id: 1,
//   name: "Leanne Graham",
//   username: "Bret",
//   email: "Sincere@april.biz",
//   address: {
//     street: "Kulas Light",
//     suite: "Apt. 556",
//     city: "Gwenborough",
//     zipcode: "92998-3874",
//     geo: {
//       lat: "-37.3159",
//       lng: "81.1496",
//     },
//   },
//   phone: "1-770-736-8031 x56442",
//   website: "hildegard.org",
//   company: {
//     name: "Romaguera-Crona",
//     catchPhrase: "Multi-layered client-server neural-net",
//     bs: "harness real-time e-markets",
//   },
// };
// let {
//   name,
//   username,
//   address: {
//     street,
//     zipcode,
//     geo: { lat, lng },
//   },
//   company: { name: companyName },
// } = user;
 //console.log(window);


//===================22/01/2026==============

//"this" -Keyword

//console.log(window);//window is global object
//console.log(this);
//How to create your own method
//Note -Do not use arrow function to create method Bcoz "this" keyword refers to window object,

// let student ={
//   id : 1,
//   fname : "john",
//   lname : "Doe",
//   getFullName : function (){
//     console.log(`${this.fname} ${this.lname}`);
//   },
//   getEmail(){
//     console.log(`${this.fname} ${this.lname}@gmail.com`);
//   },

// };
// console.log();
// student.getFullName();
// student.getEmail();


//! call() , apply() nad Bind()  ====
function getFullName(){
  return `${this.firstName} ${this.lastName}`
}
function getCourseDetails(sub1,sub2) {
  return `${this.course} include ${sub1} ${sub2}`;
}

let  user1 = {
  id : 1,
  firstName : "jane",
  lastName : "Doe",
  course : "Mern Stack",
};

let user2 ={
  id : 1,
  firstName : "James",
  lastName : "Carry",
  course : "java full stack",
};

console.log(user1);
console.log(user2);

//call()
let fullName1 = getFullName.call(user1)
console.log(fullName1);

let courseDetails1 = getCourseDetails.call(user1, "JS", "NOdeJS");
console.log(courseDetails1);

//apply()--Immediately call the function
let fullName2 = getFullName.apply(user2);
console.log(fullName2);

let courseDetails2 = getCourseDetails.apply(user2, ["Java", "SprinBoot"]);
console.log(courseDetails2);

//bind()--return bounded function which can be called later on,
let boundedGetFullName = getFullName.bind(user1)
//console.log("Function Bounded");
console.log(boundedGetFullName());

let boundedCourseDetails = getCourseDetails.bind(user1);
console.log(boundedCourseDetails("HTML", "MongoDB"));
