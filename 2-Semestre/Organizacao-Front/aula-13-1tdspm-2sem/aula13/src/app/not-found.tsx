import Image from "next/image"

export default function NotFound() {
  return (
    <div>
        <h1>404 - NotFound</h1>
        <h2>This page could not be found</h2>

        {/* Forma incorreta de carregar imagens no NEXT.js
        <img src="/img/404.jpg" alt="pagina de erro" />
        Forma incorreta de carregar imagens no NEXT.js */}

        <Image src="/img/404.jpg" alt="pagina de erro" width={400} height={400} />

        <Image layout="responsive" src="https://lojaintegrada.com.br/hub/wp-content/uploads/2023/05/erro-404-4.webp" alt="Erro 404" width={400} height={400} />

    </div>
  )
}
