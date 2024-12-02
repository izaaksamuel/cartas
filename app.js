/**
 * Sorteio de uma carta
 * @author Samuel Gadelha
 */

    //             0    1     2   3
    let nipes = ["♥", "♠", "♦" ,"♣" ]
    //            0    1    2    3    4    5    6    7    8     9    10   11   12
    let faces = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
    
function sortear(){

//lógica principal do sorteio da carta
let nipe = nipes[Math.floor(Math.random() * 4)]
let face = faces[Math.floor(Math.random() * 13)]
//console.log(`${[face]} ${[nipe]}`)

 //determinar a cor com base no nipe sorteado
 let cor
 if (nipe === "♥" || nipe === "♦" ) {
    cor = "#ff0000" //vermelho
 }else {
    cor = "#000" // preto
 }

 //renderizar o canto superior esquerdo da carta
 document.getElementById('supEsq').innerHTML=`<div>${face}</div> <div> ${nipe}</div>`
 //atribuir estilo(css) a tag html
 document.getElementById('supEsq').style.color = cor

 //renderizar o centro da carta
let cc = document.getElementById('centro')
// inserção de imagem de acordo com o tipo de carta
if (face=== "J"){
    cc.innerHTML= `<img src="./img/valete.png">`
}else if (face === "Q") {
cc.innerHTML= `<img src="./img/dama.png">`
}else if (face === "K") {
    cc.innerHTML= `<img src="./img/rei.png">`
    }else{
        cc.innerHTML = `${nipe}`
        cc.style.color = cor

    }


 //renderizar canto inferior da carta
 document.getElementById('infDir').innerHTML=`<div>${face}</div> <div> ${nipe}</div>`
 document.getElementById('infDir').style.color = cor
}