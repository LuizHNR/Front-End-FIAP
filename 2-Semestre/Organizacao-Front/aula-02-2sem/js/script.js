
//Declarando um array com 5 fruta
//let frutas = [
    //"jaca","Carambola","Zimbro","Mirtilo","Lichia"
//];

//Utilizando o map para iterar sobre o array de FRUTAS
//let novasFrutas = frutas.map((itemDoArray)=>{ 
//    console.log("MINHAS FRUTAS",itemDoArray) 
//    return itemDoArray
//});

//console.log("Novas Frutas",novasFrutas)

//Transformando o array de frutas em array de objetos:

//let arrObjFrutas = frutas.map( (fruta,indice,array)=>{
//    return { "id":indice+1,"nomeFruta":fruta};
//});

//Imprimindo o novo array
//console.log(arrObjFrutas);

//Integrando arrays com MAP
let frutas = [
    {"id":1, "nmFruta":"Jaca"},
    {"id":2, "nmFruta":"Carambola"},
    {"id":3, "nmFruta":"Zimbro"},
    {"id":4, "nmFruta":"Mirtilo"},
    {"id":5, "nmFruta":"Lichia"},
];

let precos = [
    {"id":1, "preco":5.89},
    {"id":2, "preco":7.59},
    {"id":3, "preco":18.19},
    {"id":4, "preco":15.49},
    {"id":5, "preco":5.44},
];

let frutasPrecificadas = frutas.map((fruta)=>{

    //Realizando uma busca no objeto fruta com o objeto precos
    let preco = precos.find(preco=> preco.id === fruta.id); 
    return {...fruta, preco:preco ? preco.preco:null};
    // é o msm que
    //return {fruta:fruta.id,fruta:fruta.nmFruta, preco:preco ? preco.preco:null};

});

console.log(frutasPrecificadas);

//Filtrar as frutas com preço menor que 7
const frutasAbaixoDoPreco = frutasPrecificadas.filter((fruta)=> fruta.preco <= 7);
console.log("frutas Abaixo do Preço:", frutasAbaixoDoPreco);

console.log("---------------------------------------------------------------------------------------------------------")

let numeros = [1,2,3,4,5];

// numeros.forEach( (numero)=> {
//     numero += numero;
//     console.log(numero);
// });

const soma = numeros.reduce((acumulado,valAtual)=> { 
   return acumulado+valAtual 
});

console.log(soma);