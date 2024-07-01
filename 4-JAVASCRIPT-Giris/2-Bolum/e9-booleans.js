let email = "ozgekeskin2003@hotmail.com";
let varmi = email.includes("@");
console.log(varmi); // true basar.

let ad = ["ezgi", "ozge", "recep"];
let varmi2 = ad.includes("o");
console.log(varmi2); // false basar.

let yas = 23;
console.log(yas == 29); // false basar
console.log(yas == 23); // true basar
console.log(yas == "23"); // true basar. tipini javascript otomatik olarak çevirir. Tipini de kontrol etmek istiyorsak :
console.log(yas === "23"); // 3 eşittir koyarız.

console.log(yas != 29); // true basar
console.log(yas !== 23); // false basar
console.log(yas !== "23"); // true basar

console.log(yas > 29); // false basar
console.log(yas < 29); // true basar
console.log(yas >= 23); // true basar

let ad2 = "ozge";
console.log(ad2 == "ozge"); //true basar
console.log(ad2 == "Ozge"); // false basar
console.log(ad2 > "recep"); // false basar çünkü o harfi r'den önce geliyor.

// JS'de değeri olmayan her şey false olarak karşımıza çıkar.
let bool3 = Boolean(undefined);
console.log("value of bool3: ", bool3);

let bool4 = Boolean(null);
console.log("value of null: ", bool4);

let bool5 = Boolean(NaN);
console.log("value of null: ", bool5);

let bool6 = Boolean(0); // 0 hariç tüm sayılar true döner. 0 false döner.
console.log("value of bool6: ", bool6);

let bool7 = Boolean(1);
console.log("value of bool7: ", bool7);

let bool8 = Boolean(-0);
console.log("value of bool8: ", bool8);

let bool9 = Boolean(""); // string ifadeler her zaman true döner. ancak böyle boş string ise false döner.
console.log("value of bool9: ", bool9);

// BOOLEAN AS OBJECTS
let bool12 = new Boolean(12);
console.log("value of bool12: ", bool12);

let bool13 = new Boolean(-0);
console.log("value of bool13: ", bool13);
