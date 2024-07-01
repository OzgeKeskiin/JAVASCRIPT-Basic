const baslik = document.getElementById("ozge");
console.log(baslik); // ıd'si özge olanı çeker.

const hatalar = document.getElementsByClassName("error");
console.log(hatalar); // class'ı error olanları çeker.
console.log(hatalar[0]); // basar
/* hatalar.forEach((hata) => {
  console.log(hata);
});    getelementbyclassname ile bu şekilde yazdıramıyoruz.*/

const peEtiketleri = document.getElementsByTagName("p");
console.log(peEtiketleri[0]); // basar
/* peEtiketleri.forEach((a) => {
  console.log(a);
});  getelementbyTagName ile bu şekilde yazdıramıyoruz. */

