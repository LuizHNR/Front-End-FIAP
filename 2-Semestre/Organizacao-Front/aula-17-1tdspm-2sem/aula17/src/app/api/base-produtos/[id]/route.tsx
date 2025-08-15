import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import { TipoProduto } from "@/types";

export async function GET(request:Request, {params}:{params:{id:number}}) {
    //Recuperando os dados do peseudo banco de dados em JSON.
    const file = await fs.readFile(process.cwd() + "/src/data/base.json" , "utf-8");

    //PARSEAR O ARQUIVO
    const produtos:TipoProduto[] = JSON.parse(file);

    //Realizando uma busca na lista de dados com o método de array find() utilizando o id como parâmetro:
    const produto = produtos.find( p => p.id == params.id);

    //Retornar apenas um produto
    return NextResponse.json(produto);
}