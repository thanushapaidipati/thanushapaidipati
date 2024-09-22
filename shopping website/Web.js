let card=document.querySelector(".trend");
let card2=document.getElementById(".trendSec");
let mainPage=document.querySelector(".main");
let blog=document.querySelector(".trends");

function shops(){

    mainPage.style.display="none";
    blog.style.display="none";
    document.getElementById("blog").style.color="black";
    document.getElementById("home").style.color="black";
    document.getElementById("shop").style.color="rgb(8, 161, 161)";
    document.getElementById("contact").style.color="black";
}
function blogs(){
    mainPage.style.display="none";
    blog.style.display="block";
    card.style.display="none";
    card2.style.display="none";
    document.getElementById("blog").style.color="rgb(8, 161, 161)";
}
