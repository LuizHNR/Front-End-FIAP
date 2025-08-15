import Menu from "../Menu/Menu";
import { useState } from "react";
import { MdOutlineWbSunny as BtnDark } from "react-icons/md";
import "../../style/style.scss"

export default function Cabecalho(){

    const [tema, setTema] = useState<"light" | "dark">("light");

    const lancadorTema = ()=>{
        setTema((prevTema) => (prevTema === "light" ? "dark" : "light"));
    }

    return(
        <div className={`app ${tema}`}>
        <header className="app-header">
            <BtnDark onClick={lancadorTema} className="btn-cg" />
            <h1>Cabeçalho</h1>
            <Menu/>
        </header>
        </div>
        
    )

}