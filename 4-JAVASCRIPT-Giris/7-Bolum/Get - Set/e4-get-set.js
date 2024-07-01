// attribute = HTML'de yer alan class, href, id, a vs. gibi şeylerdir.

const link = document.querySelector("a");
console.log(link.getAttribute("href"));

// hangi attribute'ü değiştirmek istiyorsak ("href") <-- buraya onu yazarız.

link.setAttribute("href", "http://ww.udemy.com");
console.log(link);

// yazıyı anasayfada güncelleme

link.textContent = "Udemy";


// class adını değiştirme
const pDegeri = document.querySelector("p");
console.log(pDegeri.getAttribute("class"));
