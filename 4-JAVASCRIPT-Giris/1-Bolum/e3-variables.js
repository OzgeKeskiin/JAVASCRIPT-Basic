// ********** VAR ************
var x = 5;
var y = 6;
var z = x + y;
console.log(x, y, z);
// var ile değişken belirlediğimiz zaman aynı değişkeni bir kez daha kullanabiliyoruz.
var x = "ozge"; // son yazdığımız çıkar.
console.log(x, y, z);

// ************* LET ***********
//LET = let ile tanımladığımız değişkenin değerini daha sonra değiştirebiliriz.
let gun = 16;
let ay = 1;
let yil = 2000;
console.log(
  "Ozge Keskin " + gun + "/" + ay + "/" + yil + " tarihinde dogmustur."
);
gun = 17; // 16 olarak tanımlamıştık 17 yaptık.
console.log(gun);

// ************** CONST ************
// ne tekrar tanımlayabiliriz ne de değerini değiştirebiliriz. atama yaptığımız değeri değiştremiyoruz.

const sifirarabafiyati = 250000;
sifirarabafiyati = 500000;
console.log(sifirarabafiyati);

// hata alırız çünkü sifirarabafiyati değerini tekrar tanımlayamayız.

// javascriptte hata aldıktan sonra sonraki kodlar okunmayabilir.