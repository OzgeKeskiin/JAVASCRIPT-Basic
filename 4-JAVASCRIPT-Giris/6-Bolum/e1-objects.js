// obje tanımlama ve propertylerini verme
let ogrenci = {
  ad: "ozge",
  yas: 23,
  email: "ozge@gmail.com",
  sinif: 3,
  ders: ["yazilim", "matematik", "işletme"],
  // birden fazla ders aldığı için array olarak girdik.
  // object içerisine fonksiyon da belirleyebiliriz. Arrow function belirleyemiyoruz.
  login() {
    console.log("ogrenci giris yapti");
  },
  logout() {
    console.log("ogrenci cikis yapti");
  },
};
console.log(ogrenci);

// propertylerden birini bastırma
console.log(ogrenci.yas);
// ya da
console.log(ogrenci["ad"]);

// update etme
ogrenci.yas = 25;
console.log(ogrenci.yas);
// ya da
ogrenci["ad"] = "ezgi";
console.log(ogrenci.ad);

// propertylerin tipini görme
console.log(typeof ogrenci);

// fonksiyonu çağırma
ogrenci.login();
ogrenci.logout();
