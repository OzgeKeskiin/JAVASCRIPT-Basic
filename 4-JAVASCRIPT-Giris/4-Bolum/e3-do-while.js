let counter1 = 0;
do {
  console.log(counter1);
  counter1++;
} while (counter1 < 10);
// do kısmı önce çalışır. sonra while kısmına bakar eğer while koşulu sağlanıyorsa do kısmına tekrar girer ve while koşulu sağlanmayana kadar döngü böyle devam eder.

let counter2 = 10;
do {
  console.log(counter2);
  counter2--;
} while (counter2 > 0);

const control = false;
if (!control) {
  console.log("kontrol başarılı");
}
