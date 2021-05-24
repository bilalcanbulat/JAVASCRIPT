// const s1 = Number(prompt ("Birinci Sayı:"));
// const islem =prompt("işlemi giriniz");
// const s2 = +prompt("ikinci sayı:");
// let sonuc=0;

// if(islem=="+"){
//   sonuc=s1+s2;
// }else if(islem=="-"){
//   sonuc=s1-s2;
// }else if(islem=="/"){
//   sonuc=s1/s2;
// }else if(islem=="*"){
//   sonuc=s1*s2;
// }else{
//   alert("yanlış işlem yaptınız...")
// }
// alert(`${s1} ${islem} ${s2} =${sonuc}`);
// console.log(`${s1} ${islem} ${s2} =${sonuc}`);

// const yas =prompt("Yaşınızı Giriniz:");
// const healt =prompt("Sağlıklımısınız e/h:");

// alert(yas>18&&healt=="e"?"Askere Gidebilir":"Askere Gidemez");

// const gunNo = +prompt("gun sayınısı giniriz:");
// switch (gunNo) {
//    case 1:
//      gunAdi = "Pazartesi";
//      break;
//    case 2:
//      gunAdi = "Salı";
//      break;
//    case 3:
//      gunAdi = "Çarşamba";
//      break;
//    case 4:
//      gunAdi = "Perşembe";
//      break;
//    case 5:
//      gunAdi = "Cuma";
//      break;
//    case 6:
//      gunAdi = "Cumartesi";
//      break;
//    case 7:
//      gunAdi = "Pazar";
//      break;
//    default:
//      alert("gun 1-7 arasında olmalıdır");
//      break;
//  }
//  console.log(gunAdi);

//  const mesaj = hiz>=120?"hizli":(hiz>=90?"normal":"yavaş");
//  console.log(mesaj);

//  const maas = +prompt("Maaşınızı giriniz:");
//  const calismaSuresi = +prompt("Çalışma süresini giriniz:");

//  const zam = calismaSuresi>10?maas+maas*0.50:calismaSuresi>5?maas+maas*0.2:maas+maas*0.1;
//  console.log(zam)

//  const borc=0;
//  const maas=3000;
//  console.log(!borc && maas > 2825.9 ? "Kredi Alabilir 😁" : "Kredi Alamaz 😢");

//  DÖNGÜLER
// for(let i=1; i<=10; i++){
//   console.log(i+"Bilal\f");

//   let not;
//   not = prompt("0-100 arasında bir not giriniz:");
// while (not < 0 || not > 100){
//   not = prompt("0-100 arasında bir not giriniz:");
// };
// console.log("Giridiğiniz not 0-100 arasındadır");
// let cikis =false;
// let say=0;
// let not=[];
// do{
//   not[say]= prompt("Lütfen not girişi yapınız. (çıkış q)");
// if(not[say]=="q") cikis= true;
// say++;
// }while(!cikis)
// not.forEach(element => {console.log(element) });


let not1;
let i = 1;
while (true) {
  not1 = prompt(i + ".kisinin notunu giriniz:");
  not1 = not1.toLowerCase();  // girilen karakteri küçük harfe çeviriyoruz.
  if (not1 == "q") {
    break;
  }
  i++;
  console.log(Number(not1));
}
