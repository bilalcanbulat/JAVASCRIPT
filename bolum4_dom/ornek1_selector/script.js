const paragraf = document.getElementById("par");
paragraf.style.backgroundColor="black";
paragraf.style.color="white";
paragraf.style.fontSize="20px";

const button =document.getElementById("btn");
button.style.width="100px";
button.style.height="30px";
button.style.backgroundColor="black";
button.style.color="yellow";
button.style.fontSize="18px";
button.innerHTML="ARA";




const resim = document.getElementsByTagName("img");
resim[0].style.width="300px";
resim[0].style.height="300px";
resim[1].style.border="3px solid red";


const h1=document.getElementsByClassName("h1");
h1[0].style.color="red";
h1[0].style.textAlign="center";



const baslik=document.querySelector(".title");
baslik.innerHTML="DOM selector 👌"

const body = document.querySelector("#body");
body.style.backgroundImage = "linear-gradient(green, blue)";


document.querySelector(".h1").onmouseover=function(){
  const h1 = document.querySelector(".h1");
  h1.style.color="white";
  h1.style.backgroundColor="black";
}

document.querySelector(".h1").onmouseout=function(){
    const h1 = document.querySelector(".h1");
    h1.style.color="red";
    h1.style.backgroundColor="";
  }

document.querySelector("#btn").addEventListener("mouseover",function (){
    const buton = document.querySelector("#btn");
    buton.style.width="250px";
});

document.querySelector("#btn").addEventListener("mouseout", ()=>{
    const buton = document.querySelector("#btn");
    buton.style.width="100px";
});


