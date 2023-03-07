
let data=document.querySelector(".data");
let btn=document.querySelector(".btn")
let hi=document.querySelector(".hi")
let student = [
    { name: "raj", id: 193, class: "fsd", place: "mars", ph: 7238728 },
    { name: "mur", id: 195, class: "ml", place: "jupiter", ph: 238728 },
    { name: "nan", id: 191, class: "ds", place: "mercury", ph: 7238720 },
    { name: "vin", id: 299, class: "none", place: "dorm", ph: 00000000 }
  ];
  for(var x in student){
    let html = `<tr><td>${student[x].name}</td><td>${student[x].id}</td><td>${student[x].class}</td><td>${student[x].place}</td><td>${student[x].ph}</td></tr>`;
    data.insertAdjacentHTML("afterend", html);
  }

  btn.addEventListener('click',()=>{
    hi.classList.toggle("hide");
  })