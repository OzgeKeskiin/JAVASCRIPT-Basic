const hata = document.querySelector("p");
console.log(hata);

const error = document.querySelector(".error");
console.log(error);

const divErr = document.querySelector("div.error");
console.log(divErr);

// tüm etiketleri seçmek istersek :

const hatalar = document.querySelectorAll("p");
console.log(hatalar); // nodelist çıkar. bunları bastırmamız lazım.

// Etiketleri konsola bastırmak için birkaç yöntem var.

/* 1
console.log(hatalar[0]);
console.log(hatalar[1]);
console.log(hatalar[2]);  */

//2
hatalar.forEach((a) => {
  console.log(a);
});
