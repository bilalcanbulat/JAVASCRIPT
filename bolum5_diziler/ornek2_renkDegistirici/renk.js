document.querySelector(".btn").onclick = function () {
    let rastgele="";
    const hex=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    for (let i = 0; i < 6; i++) {
    rastgele = rastgele+hex[Math.floor(Math.random() * hex.length)];
    }
    console.log(rastgele);
    // document.querySelector(".renk").innerHTML = renkler[rastgele];
    document.querySelector("body").style.backgroundColor = rastgele;
    document.querySelector("h1").style.color = rastgele;
  };

  