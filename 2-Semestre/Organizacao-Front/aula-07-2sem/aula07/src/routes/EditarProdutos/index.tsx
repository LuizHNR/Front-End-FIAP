import { useEffect, useState } from "react";

export default function EditarProdutos(){

    //Realizando um destructuring para receber o paramtredo do Hook useParams()

    // let nr:number=0;

    // const {id} = useParams();
    // if (id){
    //      nr = parseInt(id);
    // }
    
    // let msg:string = "";
    // if(typeof nr != "number"){
    //     msg = "A informação passada está incorreta";
    // }

    const[count, setCount] = useState<number>(0);
    let numero = 0;

    const incrementaNumero = () => {
        numero+=1;
        console.log(numero);
        return numero;
    }

    useEffect(()=>{

        incrementaNumero();
        console.log("Executou")

    },[count]);

    return(
        <div>
            <h1>Valor do useState - {count} </h1>
            <h1>Valor de let - {numero}</h1>
            <button onClick={()=> setCount(count+1)}>Contador</button>
            <button onClick={()=> incrementaNumero()}>incrementar</button>
        </div>
    );
}