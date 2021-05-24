
function hesapla() {
  const r = document.getElementById("r").value;
  // ! Class’lara erişim için .class_adı
  // ! id’li bir HTML elemanına erisim için ise #id
  const h = document.querySelector(".h").value;
  const sonuc = Math.PI * r * r * h;
  console.log(sonuc, r, h);
  document.querySelector(".hacim").textContent = sonuc.toFixed(2);
  document.getElementById("r").appendChild;
}