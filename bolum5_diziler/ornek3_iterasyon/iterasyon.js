// // ======================================================
// //            DİZİLERDE İTERASYON
// // ======================================================
// const koordinatlar = [120, 100, -100, 220, 330];
// let negatif = 0;
// let pozitif = 0;
// // ÖRNEK: FOR DÖNGÜLERİN DİZİLER İLE KULLANIIM
// // for (let i = 0; i < koordinatlar.length; i++) {
// //   koordinatlar[i] < 0 ? negatif++ : pozitif++;
// // }
// // FOR IN DONGUSU
// for (let i in koordinatlar) {
//   koordinatlar[i] < 0 ? negatif++ : pozitif++;
// }
// console.log(
//   `Negatif Koordinat Sayısı: ${negatif} Pozitif Koordinat sayisi ${pozitif}`
// );
// //---------------------------------------------------------------
// // SORU: Bir hayvanat bahçesinde bulunan hayvan türlerinin bir dizide
// // saklandığı varsayalım.Bu hayvanları türüne göre aramamızı sağlayacak
// // ve o türden kaç adet bulunduğu ana programa döndürecek fonksiyonu
// // yazınız. Eğer o türden bir hayvan yok ise bulunamadığını yazdırsın.
// //----------------------------------------------------------------
// const hayvanlar = ["fil", "deve", "kuş", "deve", "fare", "kedi", "deve"];
// const ara = prompt("aramak istenilen hayvan türünü giriniz:").toLowerCase();
// const bulDondur = function () {
//   let hayvanSayisi = 0;
//   for (let i in hayvanlar) {
//     if (hayvanlar[i] == ara) {
//       hayvanSayisi++;
//     }
//   }
//   return hayvanSayisi;
// };
// const sayi = bulDondur(ara);
// sayi == 0
//   ? console.log("Aradiginiz hayvan bulunamadi")
//   : console.log(`Aradiginiz ${ara} 'den ${sayi} adet bulunmaktadir`);
// //  =========   FOR OF DONGUSU ===========
// // for of dongusu for in dongusunun bir cok veri yapisini kapsayacak sekilde guncellenmis halidir. Bu dongude dizi icersindeki veriye erisirken indisleme kullanmaya gerek yoktur.
// let arabalar = ["BMW", "Volvo", "Mini"];
// let yazı = "";
// for (let i of arabalar) {
//   console.log(i);
//   yazı += i + " "; // i:  dizinin i. elemani demektir.
// }
// console.log(yazı);
//  =========   FOREACH METODU ===========
let ogrenciler = ["John", "Ali", "Can"];
function yazdır(a) {
  console.log(a);
}
ogrenciler.forEach(yazdır);
ogrenciler.forEach((x) => console.log(x));
// Toplama örneği
const fiyatlar = [200, 300, 125, 450, 333, 123];
let toplam = 0;
fiyatlar.forEach((f) => (toplam += f));
console.log(toplam);
document.querySelector(".toplam").innerHTML = `${toplam} TL`;
// Alternatif yöntem ile toplama
toplam = 0;
fiyatlar.forEach((a, i, d) => {
  toplam += a;
  console.log(` ${i} . iterasyon: ${toplam}`);
});
console.log(toplam);
document.querySelector(".toplam").innerHTML = `${toplam} TL`;
// ÖRNEK: fiyatlar dizisinde her bir fiyata %10 zam yapalım.
// const fiyatlar = [200, 300, 125, 450, 333, 123];
let toplamFiyat = 0;
let zamliFiyatlar = [];
fiyatlar.forEach((deger, indis) => {
  zamliFiyatlar[indis] = (deger * 1.1).toFixed(2);
  toplamFiyat += Number(zamliFiyatlar[indis]);
});
console.log(zamliFiyatlar);
console.log(toplamFiyat);
//  =========   MAP METODU ===========
// Örnek : Dizinin herbir elemaninin 2 katını aliniz.
const rakamlar = [3, 5, 3, 2, 6, 7, 9];
const ikiKat = rakamlar.map((x) => x * 2);
console.log(ikiKat, rakamlar);
// Örnek : isimler dizisin içerisindeki her ismi büyük harf olarak yeni bir diziye saklayalım.
const isimler = [
  "Ahmet",
  "mehmet",
  "ismet",
  "SAFFET",
  "Can",
  "Canan",
  "Cavidan",
];
// map() metodu normal şartlarda bir dizi döndürür.
const buyuk = isimler.map((isim) => isim.toUpperCase());
buyuk.forEach((isim) => console.log(isim));
// map() metodudundan sonra eğer bir terminal işlemi (forEach gibi) kullanılırsa map() metodu bir dizi döndürmez.
// Pipeline
isimler.map((isim) => isim.toUpperCase()).forEach((isim) => console.log(isim));
// Dolar, Euro parite hesap
tlFiyatlar = [120, 340, 550, 245, 322.5, 789];
const dolarKur = document.querySelector(".dolar");
const yuroKur = document.querySelector(".yuro");
const dolar = document.querySelector(".dolar-fiyat");
const yuro = document.querySelector(".yuro-fiyat");
dolarKur.onchange = function () {
  dolarKur.value < 0
    ? alert("Kur 0'dan küçük olamaz")
    : (dolar.innerHTML = tlFiyatlar.map((tl) =>
        Math.round(tl / dolarKur.value)
      ));
};
yuroKur.onchange = function () {
  yuroKur.value < 0
    ? alert("Kur 0'dan küçük olamaz")
    : (yuro.innerHTML = tlFiyatlar.map((tl) => Math.round(tl / yuroKur.value)));
};
// tlFiyatlar dizisindeki ürün fiyatlarinin 250 TL altında olanlarına %10 zam, üstünde olanlarına da %20 zam yapılmak isteniyor.
// 1. ürünün zamlı fiyati 110 TL
// ! tlFiyatlar = [120, 340, 550, 245, 322.5, 789];
const zamliTlFiyatlar = tlFiyatlar.map((deger, indis) => {
  if (deger < 250) {
    return `${indis + 1}.ürünün zamli fiyati : ${deger * 1.1} `;
  } else {
    return `${indis + 1}.ürünün zamli fiyati : ${deger * 1.2} 
    `;
  }
});
document.querySelector(".zamli-fiyat").innerHTML = zamliTlFiyatlar.join("<br>");
console.log(zamliTlFiyatlar);
// tlFiyatlar listesinde fiyatı 250 TL den az olanlari ayri bir diziye saklayalim.
const kucuk250 = tlFiyatlar.filter((d) => d < 250);
console.log(kucuk250);
//fiyati 350 küçük olanlari yazdiriniz.
tlFiyatlar.filter((d) => d < 350).forEach((x) => console.log(x));
// Küçükten büyüğe sıralama
console.log(tlFiyatlar.sort((a, b) => a - b));
// Büyükten küçüğe  sıralama
console.log(tlFiyatlar.sort((a, b) => b - a));


const maaslar =[3000,5000,4000,6000,6500];

const zamliMaaslar = maaslar.filter((d)=> d<=4000).map((d)=>d*1.5).forEach((d)=> console.log(d));
maaslar.map((d)=>d<=4000?d*1.5:d*1.25).forEach((d)=> console.log(d));
console.log(zamliMaaslar);

const adlar =["Samet","Hakkı","Duygu","Emrullah","Bilal","Ali","Ahmet","Hasan","Defne","Serdar"];
const harfBul=function(){
  adlar.filter((d)=>d.charAt(0))
}