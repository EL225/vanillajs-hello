let who = ["My dog", "my neighbor", "a ciclist", "the batman"];
let what = ["ate","stole", "ran over", "punched"];
let object = ["my homework", "my TV", "my foot", "my grandma"];
let when = ["at home", "yesterday", "in the walkway", "at the boxing ring"];
function randnum(){
    let num = Math.floor(Math.random()*4);
    return num;
}
function generador(){
 let excusa = who[randnum()] + " " + what[randnum()] + " " + 
 object[randnum()] + " " + when[randnum()];
 return excusa;
} 
document.getElementById("excuse").innerHTML = generador();
