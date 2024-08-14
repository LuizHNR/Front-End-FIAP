import Conteudo from "./Conteudo"

export default function Main(){
    return(
        <div>
            <main>
                <h1>Main</h1>
                <nav>
                    <ul>
                        <li><a href="https://github.com/LuizHNR" target="_blank">GitHub</a></li>
                        <li><a href="https://www2.fiap.com.br/Aluno/Home/#aulas" target="_blank">Portal Fiap</a></li>
                        <li><a href="https://teams.microsoft.com/v2/" target="_blank">Teams</a></li>
                    </ul>
                </nav>
                <Conteudo/>
            </main>
        </div>
    )
};