const baslik = document.querySelector("h1");
/*baslik.setAttribute("style", "padding:50px;"); */

// bu yöntemde önceki css özelliklerini eziyor. O yüzden doğru bir kullanım değil. Şunu kullanmalıyız :

// css'e müdahale
console.log(baslik.style);
baslik.style.padding = "50px";
baslik.style.fontSize = "60px";

const icerik = document.querySelector("p");
console.log(icerik.classList); // p etiketindeki classları listeler.
icerik.classList.add("yeni"); // class ekler.
icerik.classList.remove("error"); // class'ı siler.

// plerin içerisinde error geçenlere error classını
// success geçenlere success class'ını verme :
const pDegeri = document.querySelectorAll("p"); // tüm pleri seçtik
pDegeri.forEach((a) => {
  if (a.textContent.includes("error")) {
    a.classList.add("error");
  }
  if (a.textContent.includes("success")) {
    a.classList.add("success");
  }
});
