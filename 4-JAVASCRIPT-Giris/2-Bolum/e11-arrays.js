let isimler = ["ozge", "recep", "ezgi"];
console.log(isimler[1]);

isimler[1] = "tuce";
console.log(isimler[1]);

let tireli = isimler.join("-");
console.log(tireli);

let sirasi = isimler.indexOf("ezgi");
console.log(sirasi);

let ekle = isimler.concat(["dilara", "suna"]);
console.log(ekle); // ana elemanlar değişmez isimleri bastırınca yine 3ünü gösterir.

let elemanekle = isimler.push("leyla");
console.log(isimler); // ana elemanlar değişir

isimler.pop();
console.log(isimler); // pop en son eklenen elemanı çıkarır.


