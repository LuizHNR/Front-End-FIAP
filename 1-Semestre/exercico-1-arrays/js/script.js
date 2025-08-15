const formulario = document.querySelector("#form-names");
const inputNome = document.querySelector("#idNome");
const botaoAdd = document.querySelector("#btnAddNome");
const botaoOrdenar = document.querySelector("#ordemA");
const botaoReverter = document.querySelector("#revert");
const lista = document.querySelector("#lista-nomes");

let arrayNome = [];

function addNome(nome) {

    if (nome !== undefined && nome !== ""){
        arrayNome.push(nome);
        inputNome.value = "";
        renderizarLista();
    }else{
        var el = document.getElementById("status");
        el.innerHTML = "Por favor, insira um nome!"
    }
}

function renderizarLista() {
    lista.innerHTML = "";
    for (let x = 0; x < arrayNome.length; x++){
        const liElement = document.createElement("li");
        liElement.textContent = arrayNome[x];
        lista.appendChild(liElement);
    }
}

function ordenarLista() {
    arrayNome.sort();
    renderizarLista();
}

function reverterLista() {
    arrayNome.reverse();
    renderizarLista();
}

botaoAdd.addEventListener("click", function (e) {
    e.preventDefault();
    addNome(inputNome.value);
});

botaoOrdenar.addEventListener("click", function (e) {
    ordenarLista();
});

botaoReverter.addEventListener("click", function (e) {
    reverterLista();
});