/*var hoje = new Date();
var horario = hoje.getHours();
var mensagem;
var boasVIndas = document.querySelector(h1);

if (horario > 18){
    mensagem = "Boa noite";
}else if (horario > 12){
    mensagem = "Boa Tarde";
}else if (horario > 0){
    mensagem = "Bom dia";
}else{
    mensagem = "Boas Vindas";
}
boasVIndas.innerText() = mensagem*/

btnAbrir = document.getElementById("seta-cima");
btnFechar = document.getElementById("seta-baixo");
modal = document.getElementById("assistencia");

btnAbrir.addEventListener("click", ()=>{
    modal.showModal();
})

btnFechar.addEventListener("click", ()=>{
    modal.close();
})

