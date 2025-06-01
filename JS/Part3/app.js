// console.log("Js in Part 3");

// // String Methods and strings are immmutable

// let msg="       hello wolrde  to  my  Js                   ";
// console.log(msg.trim().toUpperCase());
// let newstr=msg.trim().toUpperCase();
// console.log(newstr);


// // With Argument
// console.log(`original msg string==> ${msg}`);
// console.log("newstr.indexOf(hello)==>",newstr.indexOf("hello"));
// console.log("msg.indexOf(J)==>",msg.indexOf("J"));
//    console.log("msg.indexOf(React)==>",msg.indexOf("React"));



// //    Slice 
// console.log("newstr.length==",newstr.length);
// console.log("newstr.Slice(1)==>",newstr.slice(1));
// console.log("newstr.Slice(10,msg.length)==>",newstr.slice(10,msg.length));
// console.log("newstr.Slice(-3)==>",newstr.slice(-3));

// // Replace

// let code="ILoveCoding";
// console.log(code.replace("Love","Hate"));
// console.log(code.replace("L","M"));


// // Repeat

// let str="MAngo";
// console.log("str.repeat(3)===>",str.repeat(3));


// // Arrays and array are mutable

// let stundent=["Aditya","Rigle",23,45];
// console.log("stundent[1].length",stundent[1].length);
// console.log("stundent.length",stundent.length);







// Q1 let month=["Jan","Feb","MAr","Apr"];
//  to  ["Jun","July","Jan","MAr","Apr"]

let month=["Jan","Feb","MAr","Apr"];
let newstr=console.log(month.splice(0,2,"Jun","July","Jan"));
console.log(month);




// Qs2.Write a JavaScript program to get the last n elements of an array
// .[n can be any positive number]
//  Forexample: for array[7,9,0,-2] and n=3
//  Print,[9,0,-2]
let num=[7,9,0,2];
let n=3;
console.log(num.slice((num.length)-n));



// and .Write a JavaScript program to get the first n elements of an array
// .[n can be any positive number]
//  Forexample: for array[7,9,0,-2] and n=3
//  Print,[7,9,0]
console.log(num.slice(0,(n)));


// Qs3.Write a JavaScript program to check whether a string is blank or not
let str=prompt("Enter string:");
if(str.length==0){
    console.log("Blank");
}
else{
    console.log("Not blank");
}

// Q4 Write a JavaScript program to test whether the character at the given(idx )index is in lowercase
let String="ApNaWorkingTime";
let idx=3;
if(String[idx]===String[idx].toLowerCase()){
    console.log("yes in lowercse");
}
else{
    console.log("No in lowercase");
}



// Q5 Write a JavaScript program to strip leading and trailing spaces froma string

let password="               addi s         ";
console.log("Pws trimed:     ",password.trim());
console.log("Original one ",password);




// Q6 Write a JavaScript program to check if an element exists in an mixed array or not

let arr=["Aditya","Aman","Ajay",23,34.09,3];
console.log(arr.includes(34.09));



