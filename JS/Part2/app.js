console.log("java script Part2 of learning");

// Qs1.Create a number variable num with some value.Now,print“good”if the number is divisible by 10 and print“bad” if it is not.

// let num=250;
// if(num%10==0){
//     console.log("good");
// }
// else{
//     console.log("bad");
// }

// @@@@@@@@@@@@@@@@@@@@@@@@@@@

// Qs2.Take the user's name & age as input using prompts.
// Then return back the following statement to the user as analert(bysubstituting their name & age): name is age years old

// let name=prompt("Enter name");
// let age=prompt("Enter age ");
// alert(`${name} is ${age} years old`);
// console.log(typeof age);


// @@@@@@@@@@@@@@@@@@@@@@@@@@@

// Qs3.Write a switch statement to print the months in a quarter.
// let quarter=(Number)(prompt("Enter quarter"));
// switch (quarter) {
//     case 1:
//         alert("Jan,Feb, Mar");
//         break;
//     case 2:
//        alert(" Apr,May,Jun ");
//         break;
//     case 3:
//        alert("Jul, Aug,Sep");
//         break;
//     case 4:
//         alert("Oct, Nov, Dec");
//         break;

//     default:
//         console.warn("Enter valid quarter");
//         break;
// }



// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// Qs4.A string is a golden string if it starts with the character ‘A’ or ‘a’ and has a total length greater than 5.

// let str=prompt("Enter string:");
// if((str[0]==='A' || str[0]==='a') && (str.length>5)){
//     alert("golden String");
// }
// else{
//     alert("Not a golden String");
// }


// @@@@@@@@@@@@@@@@@@@@@@@@@@


// Qs5.Write a program to find the largest of 3 numbers.

// let num1=(Number)(prompt("Eneter num1:"));
// let num2=(Number)(prompt("Eneter num2:"));
// let num3=(Number)(prompt("Eneter num3:"));

// if((num1>num2)){
//     if(num1>num3){
//         alert(` num1 = ${num1} is greater`);
//     }
//     else{
//      alert(`num3 = ${num3} is greater`);
// }
    
// }
// else {
//     if((num2>num3)){
//         alert(`num2 = ${num2} is greater`);
// }
// else{
//      alert(`num3 = ${num3} is greater`);
// }
// }




// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


// Qs6. Write a program to check if 2 numbers have the same last digit. 
//  Eg: 32 and 47852 have the same last digit i.e.2

// let num1=(Number)(prompt("Eneter num1:"));
// let num2=(Number)(prompt("Eneter num2:"));

// let a=num1%10;
// let b=num2%10;

// if(a===b){
//     console.log(`same digit ${a}`);
// }
// else{
//      console.log(` Not same digit  a == ${a} && b== ${b}`);
// }
 

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// COMPARATORS
var a=5;
var b='5';
console.log(a==b); // compare value
console.log(a===b); // compare value and type

var a=0;
var b=false;
console.log(a==b);
console.log(a===b);


var a=null;
var b=undefined;
console.log(a==b);
console.log(a===b);




