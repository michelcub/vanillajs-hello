let who = ['the dog','my granma','his turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];
let excuse = String;
excuse = who[Math.floor((Math.random()*4))] +" "+ what[Math.floor((Math.random()*4))] +" "+ when[Math.floor((Math.random()*5)+1)];
function load(who,what,when){
    let contenido=document.getElementById("excuse");
    contenido.innerHTML = excuse;
}
load();