// obje tanımlama ve propertylerini verme
let ogrenci = {
  ad: "ozge",
  yas: 23,
  email: "ozge@gmail.com",
  sinif: 3,
  ders: [
    { isim: "matematik", puan: 90 },
    { isim: "fizik", puan: 80 },
    { isim: "kimya", puan: 85 },
  ],
  login() {
    console.log("ogrenci giris yapti");
  },
  logout() {
    console.log("ogrenci cikis yapti");
  },
  printlessons() {
    console.log("this", this); // öğrenci objesine ait.
    //  console.log(dersler); // hata verir. çünkü önce objeye ulaşmamız sonra derslere gitmemiz lazım :
    console.log(this.ders); // şimdi bu arraydeki ders bilgilerini konsola tek tek bastıralım.
    this.ders.forEach((a) => {
      console.log(a.isim, a.puan);
    });
  },
};
console.log(this); // ana window'a ait
ogrenci.printlessons();
ogrenci.login();
ogrenci.logout();

// this komutu bulunduğu yeri gösterir.
