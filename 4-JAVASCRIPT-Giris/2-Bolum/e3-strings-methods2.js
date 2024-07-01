// REPLACE

let str1 = "Test, StartUp Academy";
console.log(str1);

let newStr1 = str1.replace("Test", "Hi");
console.log(newStr1);

// REPLACE REGEX (regular Expressions)
let text1 = "please visit Microsoft! MICROSOFT is the best!";
let newtext = text1.replace(/MICROSOFT/gi, "W3Schools");
// i : it means doesn't matter uppercase or lower case in the text. just find and change it to second parameter.
// g : it means search microsofts in wholo text
console.log(newtext);

// TOUPPERCASE or TOLOWERCASE
let str2 = "Hello World";
console.log(str2.toUpperCase());

// CONCAT
// this operator can be used instead of the plus operator.
let str3 = "hello";
console.log("first part:", str3);

let str4 = "world";
console.log("second part:", str4);

let str5 = "How's it going?";
console.log("last part:", str5);

let concatedStr = str3.concat(" ", str4, " ", str5);
console.log(concatedStr);

// TRIM
//The trim method removes whitespace from both sides of a string. it doesn't remove middle spaces.
let text2 = "         Hi          Hi       ";
let text3 = text2.trim();
console.log(text3);
/* let newtext2 = text3.replace(/ /gi, "");
console.log(newtext2); */ // deletes middle spaces

// PADS  -- PADSTART
let str6 = "5"; // adds to the right of 5
console.log("normal string:", str6);
let padded1 = str6.padStart(8, "x-y-");
console.log("padded string :", padded1);

let str7 = "8"; // adds to the left of 8
console.log("normal string:", str7);
let padded2 = str7.padEnd(9, "*a*");
console.log(padded2);
