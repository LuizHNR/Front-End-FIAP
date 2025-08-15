import { useEffect, useState } from "react";
import { TipoUsuario } from "../../types";

export default function Usuarios(){

  const [usuarios, setUsuarios] = useState<TipoUsuario[]>([{
    id: 0,
    login: "",
    avatar_url: "",
    url: ""
  }]);

  //ASYNC e WAIT

  useEffect(() => {

    async function usersGit() { 
      try{
        const response = await fetch("https://api.github.com/users");


        if (!response.ok) {
          throw new Error("Dados solicitados incorretos!");
        }
        const data = await response.json();
        setUsuarios(data);
        
      }catch (err) {
        console.log(err)
      } 
    }

    usersGit();
  }, [])

  // useEffect(()=>{
  //   fetch("https://api.github.com/users")
  //   .then(response=>{
  //     if(!response.ok){
  //       throw new Error("Dados solicitados incorretos!");
  //     }
  //     return response.json()
  //   })
  //   .then(data=>{
  //     console.log(data);
  //     setUsuarios(data);
  //   })
  //   .catch(err=>{
  //     console.log(err.message)
  //   })
  // }, [])

    return(
      <div>
        <h1>Bem Vindos Usuários</h1>

            {usuarios.map((u)=>(
              <li key={u.id}>{u.login} - <img style={{width: "2%", cursor: "pointer"}} src={u.avatar_url} alt={u.login} /></li>
            ))}

    
      </div>
    );
  }