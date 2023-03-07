
let img1=document.getElementById("img1");
let img2=document.getElementById("img2");
let btn=document.getElementById("btn");

btn.addEventListener('click',()=>{
    img1.src=`img${Math.floor(Math.random()*6 +1)}.jpeg`;
    img2.src=`img${Math.floor(Math.random()*6 +1)}.jpeg`;
});