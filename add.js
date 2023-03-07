let add=document.querySelector(".add");
let begin=document.querySelector(".begin");
let html=`<div style="height: 250px; width: 250px; background-color: aqua;">
    <textarea cols='10' rows='10'>write something</textarea>
</div>`;

add.addEventListener('click',()=>{
    begin.insertAdjacentHTML("afterend", html);
  })