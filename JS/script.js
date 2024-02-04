// console.log('Hello World');

// var a = 33;
// var b = "abcdefg";
// var c = 11.11;
// console.log(a+c);


// var num1 = 2;
// var num2 = 20;
// console.log("The value of number1 + number 2 : " + (num1 + num2));

// var a = 4;
// var b = 4;
// console.log(a + b);

// var string = "this's";
// console.log(string);

// var name = 'professor';
// var string = 'coder';
// var temp = `${name} is very 'good' person and he is "awesome" ${string}`;
// console.log(temp);
// var len = name.length;
// console.log(`Length of name : ${len}`);

// var str = new String("This is a new string constructer");
// console.log(str);

// document.getElementById('content').innerHTML = "<h3> This is an another heading in inner html</h3>";

// let num = 5;
// switch (num) {
//     case 1:
//         console.log("1");
//         break;
//     case 2:
//         console.log("2");
//         break;
//     case 3:
//         console.log("3");
//         break;
//     case 4:
//         console.log("4");
//         break;
//     default:
//         console.log("NaN");
//         break;
// }

// let obj = {
//     name: 'Max',
//     salary: 10,
//     work: 'Developer',
//     "ID EMP": 'Dev009112'
// }
// console.log(obj);

// let arr1 = [1, 2, 3, 4.4, 5.5, 'Max', "Jack", undefined]
// console.log(arr1);

// let arr = new Array(1, 2, 3);
// console.log(arr);

// let arr = [3, 5.5, 4.4, 1, 2, 'Max', "Jack", undefined];
// console.log(arr);
// let meth = arr.sort();
// console.log(meth)
// arr.push("This is push method to add an element");
// console.log(arr);

// function fn(name, text = 'Hey, how are you') {
//     console.log(text + ", " + name + " is a good boy");
// }
// let name1 = 'Max';
// let name2 = 'Jack';
// let text = 'Good morning';
// fn(name1, text);
// fn(name2);

// function sum(a, b, c) {
//     let d = a + b + c;
//     return d;
// }
// let val1 = sum(2, 4, 10);
// console.log(val1);

// function sub(a, b) {
//     let c = a - b;
//     return c;
// }
// let val2 = sub(10, 2);
// console.log(val2);

// alert("This is a meassage from system!");
// let a = alert("This isa system notification");
// console.log(a);

// let name = prompt("Enter your name", "Default name");
// console.log(name);

// let del = confirm("Delete this content?");
// console.log(del);
// if (del) {
//     console.log("Content has been deleted!");
// }
// else {
//     console.log("Content has not been deleted!")
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (i = 0; i <= arr.length; i++){
//      console.log(arr[i]);
// }

// arr.forEach(function print(num) {
//     console.log(num);
// })

// arr.forEach(num => {
//     console.log(num);
// });

// let arr = [1, 2, 3, 4, 5];
// for (num of arr) {
//     console.log(num);
// }

// let key = {
//     name: "Max",
//     salary: 20,
//     work: "Prog",
//     Id: "Prog00918"
// }
// console.log(key);
// for (value in key) {
//     console.log(`${value} is : ${key[value]}`);
// }

// let i = 0;
// while (i <= 5) {
//     console.log(`${i} is less than 5`);
//     i++;
// }
// console.log("done with while loop");

// let j = 10;
// do {
//     console.log(`${j} is greater than 0`)
// } while (j <= 0);
// console.log("done with do-while loop");

// let a = document.getElementById('content');
// console.log(a);

// let b = document.getElementsByClassName('container');
// console.log(b);

// let c = document.querySelector('.container');
// c = document.querySelector('.container>h1');
// console.log(c);


// 42 - html ---------------------------------------------------------------------------
// function greet() {
//     console.log("Hello Good morning ");
// }
// setTimeout(greet, 4000);

// function greet() {
//     console.log("Hello Good morning " + val);
// }
// let val = 'Your name';
// setTimeout(greet, 4000, val);

// function greet(text1, text2) {
//     console.log("Hello Good morning " + text1 + " " + text2);
// }
// let text1 = `'Your name'`;
// let text2 = "Take care!";
// setTimeout(greet, 4000, text1, text2);

// function greet() {
//     console.log("Hello Max");
// }

// let sett = setTimeout(greet, 4000);
// console.log(sett);

// let cleart = clearTimeout(sett);
// console.log(cleart);

// ------------------------------------------------------------------------
// function greet() {
//     console.log("Hello ");
// }

// // setInterval(greet, 4000);

// let sett = setInterval(greet, 4000);
// console.log(sett);

// let clearI = clearInterval(sett);
// console.log(clearI);

// 45 - html ---------------------------------------------
// function displayTime() {
//     time = new Date();
//     console.log(time);
//     document.getElementById('time').innerHTML = time;
// }
// setInterval(displayTime, 1000);

// 47 - html ---------------------------------------------
// let date = new Date();
// console.log(date);

// let date = new Date(0);
// console.log(date);
// let date = new Date("2030-12-31");
// console.log(date);

// let year = newDate.getFullYear();
// console.log(year);

// let date = newDate.date();
// console.log(date);

// -----------------------------------------------
// function display() {
//     console.log("1234567890");
// }
// display();

// display = () => {
//     console.log("1234567890");
// }
// display();

// setTimeout(() => {
//     console.log("This is setTimeout");
// }, 3000);

// let sum = (a,b,c) => {
//     let d = a + b + c;
//     return a+b+c;
// }
// let d = sum(1, 4, 5);
// console.log(d);

// let sum2 = (a, b) => {
//     return a + b;
// }

// let half = num => num / 2;

// let obj = {
//     names: ['Jack', 'Shown', 'Huke', 'Max'],
//     Id: ['Dev00913'],
//     speak() {
//         // Lexical this - written in function that is already written in object
//         this.names.forEach((n) => {
//             console.log("Hey " + n + ", Your id is : " + this.Id);
//         });
//     }
// };
// obj.speak();

// ----------------------------------------------------------
// let m = Math;
// console.log(m);

// let a = 12.233243;
// let b = 24;
// console.log("Value of a : " + a);
// console.log("Value of b : " + b);
// console.log("Value of a : " + Math.round(a));
// console.log("Value of b : " + Math.round(b));

// let c = 5.9;
// let d = 6.1;
// console.log(Math.floor(c));
// console.log(Math.ceil(d));
// console.log(Math.abs(5.9));
// console.log(Math.abs(-5.9));
// console.log(Math.abs(-123));
// console.log(Math.abs(-567.233242));

// console.log(Math.min(10, 20, 30));
// console.log(Math.max(10, 20, 30));

// Random number
// let num = Math.random();
// console.log(num);

// let num1 = 1;
// let num2 = 100;
// let gen = num1 + (num2 - num1) * Math.random();
// console.log(gen);

// let num1 = 1;
// let num2 = 100;
// let gen = num1 + (num2 - num1) * Math.random();
// console.log(Math.round(gen));

// let a = 1;
// let b = 20;
// let gen = a + (b - a) * Math.random();
// console.log(gen);

// let a = 1;
// let b = 20;
// let gen = a + (b - a) * Math.random();
// console.log(Math.round(gen));

// ----------------------------------------------------
let jsonObj = {
    name: 'Maxim',
    salary: 20,
    work: "ProgDev",
    food: "Burger"
}
console.log(jsonObj);

// convert object into json string
let jsonString = JSON.stringify(jsonObj);
console.log(jsonString);
// change/replace the json string
jsonString = jsonString.replace('Maxim', "Maxico");
jsonString = jsonString.replace(20, 40);
console.log(jsonString);

// convert json string into object
newjsonObj = JSON.parse(jsonString);
console.log(newjsonObj);













