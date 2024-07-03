let leonardo = window.document.getElementById("leonardo");
let bruna = window.document.getElementById("bruna");
let samantha = window.document.getElementById("samantha");

let arrowLeft = window.document.getElementById("arrow-left");
let arrowRight = window.document.getElementById("arrow-right");

function rolarParaDireita(){
    leonardo.style = "display: none";
    samantha.style = "display: flex";
    arrowLeft.style = "display: flex";
    arrowRight.style = "display: none";
}

function rolarParaEsquerda(){
    leonardo.style = "display: flex";
    samantha.style = "display: none";
    arrowLeft.style = "display: none";
    arrowRight.style = "display: flex";
}