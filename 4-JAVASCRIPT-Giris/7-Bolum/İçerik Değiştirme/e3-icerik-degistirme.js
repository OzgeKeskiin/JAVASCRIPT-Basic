// etiketi kaldırma
/* const ilkP = document.querySelector("p");
console.log(ilkP.innerText);

// yazıyı değiştirme
ilkP.innerText = "Ezginur okula basladi";

// yanına text ekleme
const pDegerleri = document.querySelectorAll("p");
pDegerleri.forEach((a) => {
  console.log(a.innerText);
  //  a.innerText = "yeni deger";  --> yazıyı değiştirme.
  a.innerText += " + yanina text ekledik.";
});  */

// Kapsayıcı etiketin içerisindekini değiştirme
const degistir = document.querySelector(".icerik");
console.log(degistir.innerHTML);
// innerHTML ile olduğu gibi html'i update ederiz. Bu nedenle etiketleri de açılış ve kapanış etiketleriyle yazmamız gerekir.
// innerText sadece içerisindeki yazıyı update eder.
degistir.innerHTML = " <h2>Vue JS, React JS, Angular JS</h2>";

// js'de tanımlanan diziyi html sayfasına geçirme

const ogrenciler = ["ali", "ayse", "fatma"];
ogrenciler.forEach((a) => {
  degistir.innerHTML += `<p>${a}</p>`;
});
// degistir'e bastırmak istediğimiz için onu yazdık. bunun innerHTML'ine bir güncelleme yapıyoruz. += ile dizinin elemanlarını ekliyoruz. HTML template'i olduğu için `` ile bastırırız.
