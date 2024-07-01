//hangi durumlarda javascript text olarak algılar
let text1 = "john doe"; //1
let text2 = "john doe"; //2
let text3 = `john doe`; //3

console.log(text1, text2, text3);

//QUOTES
// tırankların önüne backslash koyduğumuz zaman metin düzelir.
let text4 = "it's john's car called \"limon\"";
let text5 = "it's john's car called \"limon\"";
console.log(text4);
console.log(text5);

//LENGTH
let text7 = "ABCDEFGHIJKLMNOPRSTUVYZ";
console.log(text7.length);

// CONVERSIONS

let yasim = "23";
console.log(yasim + 1);
console.log(typeof yasim); // tipini gösterir.

yasim = Number(yasim);
console.log(yasim + 1);
console.log(typeof yasim);

let sonuc = String(18);
console.log(sonuc);

//STRİNGS as OBJECTS
let text8 = "john";
let text9 = new String("john");
console.log("normal string: ", text8);
console.log("normal strings character : ", text8[0]);
console.log("string as object:", text9);
console.log("index character : ", text9[0]); // 0. character
