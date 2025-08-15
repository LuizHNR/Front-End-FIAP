import Image from "next/image";

export default function NotFound() {
    return (
      <div className="not-found">
        <h1>404 - NotFound</h1>
        <h2>This page could not be found.</h2>

        <Image src="/img/2095940.jpg" alt="Página de erro." width={400} height={400}/>
      </div>
          
    )
  }