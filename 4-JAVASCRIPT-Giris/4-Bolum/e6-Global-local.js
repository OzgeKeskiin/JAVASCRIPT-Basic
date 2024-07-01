let yas = 29;

if (true) {
  let yas = 60;
  console.log("icerideki: ", yas);
  if (true) {
    let yas = 22;
    let ad = "ozge";
    var ad2 = "ozgeozge";
    console.log("iceridekinin icindeki :", yas, ad, ad2);
  }
}
console.log("disaridaki: ", yas, ad2);

// en dışta global olarak tanımladığımız (29) globalde çalışır. ifin içinde tanımladıklarımız ifin içinde geçerlidir.
// ifin içinde tanımlarığımız değişkenleri dışarıdaki globalde kullanamayız. Çünkü sadece ifin içinde geçerliler. Eğer let ile tanımladıysak böyle olur. Fakat eğer var ile tanımladıysak her iki yerde de geçerlidir.
