const namel=prompt("ENTER YOUR NAME.");
const agel=prompt("ENTER YOUR AGE.");
const hobbyl=prompt("ENTER YOUR HOBBIES.");

const name2 = document.getElementById("name");
const age2=document.getElementById("age");
const hooby2=document.getElementById("hobby");


name2.innerText=namel;
age2.innerText=agel;


const hs=hobbyl.split(", ");
hobbies=[];
hs.forEach(hobby =>{
    hobbies.push(`<span class="badge text-bg-primary">${hobby}</span>`);

})
hooby2.innerHTML=hobbies;