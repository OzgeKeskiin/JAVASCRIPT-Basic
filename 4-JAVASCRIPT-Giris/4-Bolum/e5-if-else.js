const yas = 20;
if (yas > 18) {
  console.log("oy kullanabilirsiniz");
}

const adlar = ["ozge", "ezgi", "recep"];
if (adlar.length > 0) {
  console.log("biz");
}

const sifre = "ozgeo";
if (sifre.length >= 8) {
  console.log("sifre yeterince uzun");
} else {
  console.log("yetersiz sifre");
}

const yeniSifre = "rfr!dfewereffer";
if (yeniSifre.length >= 12 && yeniSifre.includes("!")) {
  console.log("cok guclu sifre");
} else if (yeniSifre.length >= 12) {
  console.log("guclu sifre");
} else if (yeniSifre.length >= 8) {
  console.log("yeterli sifre");
} else {
  console.log("yetersiz sifre yeniden girin.");
}

const kontrol = false;
// if icerisine direkt kontrol yazınca if'e girmez. Çünkü başlangıç değeri false. Fakat false'un değili yani !kontrol yazarsak true olur ve if içerisine girer. kontrol basarili yazısını basar.
if (!kontrol) {
  console.log("kontrol basarili");
}


