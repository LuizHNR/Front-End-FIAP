import Link from "next/link";

export default function Menu() {
  return (
    <nav>
        <ul>
            {/* Link é para rotas internas */}
            <li> <Link href="/" >Home</Link> </li>
            <li> <Link href="/produtos">Produtos</Link> </li>
        </ul>
    </nav>
  )
}
