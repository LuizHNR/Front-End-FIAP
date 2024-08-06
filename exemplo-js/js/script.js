

//JavaScript básico tópicos
// console.log("Olá Mundo!");

// //Capturar o botão pelo ID e atrelar a ele um evento de click.
// const btnElemento = document.getElementById("botao");
// btnElemento.addEventListener("click", function(){
//     console.log("Botão testado.");
// });

//1.Declaração de variáveis
// var nome = "João";
// let sobrenome = "Silva";
//  console.log("Nome completo : " + nome +" "+ sobrenome);
// //2.Declaração de constantes
// const idade = 20;
// console.log("Idade : " + idade);
// idade = 21;

//2.Hoisting
//Diferença entre var e let
// var nome = "João";

// if(true){
//     let nome = "Silva";
// }

// console.log(nome);

//3.Tipos de dados
    
// let tiposDeDados = [
//     "Number",
//     "String",
//     "Boolean",
//     "Null",
//     "Undefined",
//     "Object",
//     "Array",
//     "Function"
// ]

// //Imprimindo o array com console.table.
// console.table(tiposDeDados);


// //4.Operadores
 
// //5.Estruturas condicionais

// //6.Estruturas de repetição
// // //Imprimindo Array com forEach com função anônima
// // tiposDeDados.forEach(function(tipo){
// //     console.log(tipo);
// // });
// // //Imprimindo Array com forEach com arrowFunction
// // tiposDeDados.forEach((tipo)=>{
// //     console.log(tipo);
// // });
// //Itera sobre um array de tipos de dados que serão inseridos em uma lista ul no html de id tipo-dados
// //Recuperando a lista ul através do id
// let listaTiposDeDados = document.getElementById("tipo-dados");

// tiposDeDados.forEach((tipo)=>{
//     //Criando um elemento <li> para inserir na <ul>
//     let itemLista = document.createElement("li");
//     //Adicionando o texto do tipo de dado
//      itemLista.innerText = tipo;
//      //Inserindo o elemento <li> na <ul>
//      listaTiposDeDados.appendChild(itemLista); 
// });

//7.Funções

// function soma(a,b){
//     // let a = 4;
//     // let b = 5;

//     if((a+b)>=10){
//         console.log(`A soma  de a: ${a} e b: ${b} é maior ou igual à 10.`);
//         return true;
//     }else{
//         console.log(`A soma  de a: ${a} e b: ${b} não é maior do que 10.`);
//         return false;
//     }
// }

// const soma = (a,b)=>{
 
//     if((a+b)>=10){
//         console.log(`A soma  de a: ${a} e b: ${b} é maior ou igual à 10.`);
//         return true;
//     }else{
//         console.log(`A soma  de a: ${a} e b: ${b} não é maior do que 10.`);
//         return false;
//     }
// }

//Recuperar os campos email e senha através de querySelector.

// const inputEmail = document.querySelector("#idEmail");
// const inputSenha = document.querySelector("#idSenha");

function validacao(inputEmail,inputSenha) {

    //Recupere os dados dos campos e adione em um objeto de nome usuário e desestruture o objeto
    //pegando as propriedades e realizando uma validação para ver se as propriedades possuem valores de preenchimentos.
    //Após a validação, adicione uma nova propriedade ao objeto de nomeCompleto com o valor de sua escolha 

    let listausuario = [
        {nome: "João", genero:"m", email:"joao@email.com", senha:"12345"},
        {nome: "Maria", genero:"f", email:"maria@email.com", senha:"12345"},
        {nome: "Roberto", genero:"m", email:"roberto@email.com", senha:"12345"},
        {nome: "Antonio", genero:"m", email:"antonio@email.com", senha:"12345"},
        {nome: "Carlos", genero:"m", email:"carlos@email.com", senha:"12345"},
    ];

    let usuario = {
        emailUsuario : inputEmail.value,
        senhaUsuario : inputSenha.value
    };

    for (let x = 0; x < listausuario.length; x++){

        if((inputEmail.value == listausuario[x].email) && (inputSenha.value == listausuario[x].senha)){
            console.log("Usuario enontrado");
            return true;
        }else{
            console.log("Usuario não enontrado");
            return false;
        }
        
    };
 
}

// document.getElementById('idCpf').addEventListener('input', function(e) {
//     var value = e.target.value;
//     var cpfPattern = value.replace(/\D/g, '')
//                           .replace(/(\d{3})(\d)/, '$1.$2')
//                           .replace(/(\d{3})(\d)/, '$1.$2')
//                           .replace(/(\d{3})(\d)/, '$1-$2')
//                           .replace(/(-\d{2})\d+?$/, '$1');
//     e.target.value = cpfPattern;
//   });

//8.Arrays

//9.Objetos
//let usuario = {
    //emailUsuario : "jo@email.com",
    //senhaUsuario : "123456",
    //nomeCompleto : "João da Silva"
//}
//console.log(usuario.nomeCompleto + ", voce esta logado com o seu email" + usuario.emailUsuario);

//let propsVariavel = "emailUsuario"
//console.log(usuario["nomeCompleto"] + ", voce esta logado com o seu email" + usuario[propsVariavel]);
//console.log(usuario);

//OPERADOR SPREAD( ... )
    //Adicionar atributos em um objeto
//usuario = {...usuario, idade:20, regiao:"São Paulo"};

//console.log(usuario);

// Destructuring
//     Desistrutura para colocar em uma variavel ou separar atributos
// const{emailUsuario,idade,regiao}=usuario;
// console.log(`E-mail do Usuario: ${emailUsuario}`);
// console.log(`Idade do Usuario: ${idade}`);
// console.log(`Região do Usuario: ${regiao}`);

//10.Funções de array

//Capturando os botões login,close e o elemento dialog\
const botaoLogin = document.querySelector("#btnLogin");
const botaoClose = document.querySelector("#btnClose");
const modal = document.querySelector("dialog");

//Abri o modal com o botão de Login através do evento click do botão\
botaoLogin.addEventListener("click", (e)=> {
    modal.showModal();
});

botaoClose.addEventListener("click", (e)=> {
    modal.close();
});

