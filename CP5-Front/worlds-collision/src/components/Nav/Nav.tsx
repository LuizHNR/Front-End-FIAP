import Link from 'next/link'
import React from 'react'

export default function Nav() {
  return (
    <nav className="menu">
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/orbitas">Órbitas e Instabilidade</Link></li>
            <li><Link href="/eventos">Cronologia de eventos</Link></li>
            <li><Link href="/forcas">Forças gravitacionais e eletromagnéticas</Link></li>
            <li><Link href="/calculo">Cálculo</Link></li>
        </ul>
    </nav>
  )
}
