const framework1 = "Angular";
const framework2 = "React";
const framework3 = "Vue";

let sonuc =
  "bilmedigim frameworkler : " +
  " " +
  framework1 +
  " " +
  framework2 +
  " " +
  framework3;
console.log(sonuc);

let sonuc1 = `bilmedigim frameworkler : ${framework1} ${framework2} ${framework3}`;
console.log(sonuc1);

//*********************** 
let str1 = `hi,
startUp 
Academy`;
console.log(str1);
// ters tırnakta alt satıra inince \n koymuş gibi console'da da alta iner.

let str2 = "Hi,\nstartUp\nAcademy";
console.log(str2);
// Normal tırnakta vs. \n koymamız gerekir.

// Interpolated Text
let name = "startup",
  surname = "Academy";
let str3 = `Hello,${name} ${surname}`;
console.log("Interpolated Backticks:", str3);
// ${} yaptığımız zaman yukardakilerle birleştiririz.

let price = 10;
let units = 50;
let str4 = `Total : ${units * price}`;
console.log(str4);
// backtickslerin bu şekilde avantajları vardır.
