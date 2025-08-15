"use client"
import React from 'react'

export default function CadProdutos() {

    console.log("Renderizou!!!!");

  return (
    <div>
        <h1>Cadastro de Produtos</h1>

        <div>
            <form>
                <div>
                    <label htmlFor="idNome">Nome Produto</label>
                    <input type="text" name="nome" id="idNome" value="" placeholder="Digite o nome do produto..." required/>
                </div>
                <div>
                    <label htmlFor="idQtd">Quantidade Produto</label>
                    <input type="number" name="qtd" id="idQtd" value="" placeholder="Digite a quantidade do produto..." required/>
                </div>
                <div>
                    <button type="submit"  >Cadastrar</button>
                </div>
            </form>
        </div>
    </div>
  )
}
