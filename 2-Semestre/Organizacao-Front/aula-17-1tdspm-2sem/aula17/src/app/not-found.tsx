import Image from "next/image";

export default function NotFound() {
  return (
    <div>
        <h1>404 - NotFound</h1>
        <h2>This page could not be found.</h2>
        
        {/* Forma incorreta de carrgar imagens no NEXT.js */}
        {/* <img src="/img/img-404.jpg" alt="Página de erro." /> */}
        {/* Forma correta de carrgar imagens no NEXT.js */}
        {/* <Image  src="/img/img-404.jpg" alt="Página de erro." width={400} height={400}/> */}

        {/* Utilizando o atributo layout com preenchimento, porem não podemos usar os atributos width e height.
        <Image layout="fill" src="https://lojaintegrada.com.br/hub/wp-content/uploads/2023/05/erro-404-4.webp" alt="Página de erro."/> */}
        <Image layout="intrinsic" src="https://lojaintegrada.com.br/hub/wp-content/uploads/2023/05/erro-404-4.webp" alt="Página de erro." width={400} height={400}/>
    </div>
  )
}
