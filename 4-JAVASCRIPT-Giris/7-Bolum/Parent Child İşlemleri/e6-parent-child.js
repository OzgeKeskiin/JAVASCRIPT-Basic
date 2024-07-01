const section = document.querySelector("section");
console.log(section.children);

// böyle HTMLCollection içinde sıralanırlar. Her birine class eklemek istersek foreach kullanamayız çünkü HTMLCollection içerisinde foreach hata verir. Array'e çevirmemiz lazım.

console.log(Array.from(section.children));
// .from ile kaynağı verip array'e çevirdik. Şimdi foreach içerisinde kullanabiliriz.

Array.from(section.children).forEach((child) => {
  child.classList.add("section-element");
});

const baslik = document.querySelector("h2");
console.log(baslik.parentElement);
console.log(baslik.parentElement.parentElement);
console.log(baslik.nextElementSibling); // bir önceki ve bir sonraki kardeşlerini görebiliriz.
console.log(baslik.previousElementSibling);

console.log(baslik.nextElementSibling.parentElement.children);
// baslik elementinin kardeşinin parentinin çocuklarını bastırır.  yani h2'nin kardeşi p'nin parenti olan section'un çocuklarını bastırır.
