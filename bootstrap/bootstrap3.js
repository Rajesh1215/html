let Un=document.getElementById("Username");
let psd=document.getElementById("password");
let login=document.getElementById("login");
let ac_n=["a",'b','c','d','e'];
let pas=['1','2','3','4','5'];

login.addEventListener('click',()=>{
    if((ac_n.includes(Un.value) && pas.includes(psd.value))){
        alert("Login successfully");
    }
    else{
        alert("Wrong password or Username");
    }
})