const outerSpan = document.querySelector('.outerSpan');
const innnerSpan = document.querySelector('.innerSpan');

const firstNote = document.querySelector('.notes ');
var del=[];

i=0;

let theNote = `  
    <div class="content">
    <div class="note1">
        <textarea class='writingPart'></textarea>
        <button class="deleteDtn"> D </button>
    </div>
    </div>
`

outerSpan.addEventListener('click', ()=>{
    firstNote.insertAdjacentHTML('afterbegin', `  
    <div class="content hi${i}">
    <div class="note1">
        <textarea class='writingPart'></textarea>
        <button class="deleteDtn hi${i}"> D </button>
    </div>
    </div>
`);
 i++;
 console.log(i);
 del[i]=[document.querySelector(`.hi${i}`)];
con[i]=[document.querySelector(`.hi${i}`)]
 del[i].addEventListener('click',()=>{
    firstNote.removeChild(con[i]);
 });
});


innnerSpan.addEventListener('click', ()=>{
    firstNote.insertAdjacentHTML('afterbegin', `  
    <div class="content hi${i}">
    <div class="note1">
        <textarea class='writingPart'></textarea>
        <button class="deleteDtn hi${i}"> D </button>
    </div>
    </div>
`);
 i++;
 console.log(i);
 del[i]=[document.querySelector(`.hi${i}`)];
con[i]=[document.querySelector(`.hi${i}`)]
 del[i].addEventListener('click',()=>{
    firstNote.removeChild(con[i]);
 });

});