export default function Produtos () {

    const lista = [
        {id:1, nome:"garfo", qtd:1000},
        {id:2, nome:"colher", qtd:2000},
        {id:3, nome:"faca", qtd:1000},
        {id:4, nome:"prato", qtd:1000},
        {id:5, nome:"copo", qtd:1000},
        {id:6, nome:"guardanapo", qtd:10000}
    ];

  return (
    <div> 
        <h2>Produtos</h2>   
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOME</th>
                        <th>QTD</th>
                    </tr>
                </thead>
                <tbody>
                    {lista.map((p) => (
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.nome}</td>
                            <td>{p.qtd}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={3}>
                            Quantidade de Registros:{lista.length}
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div> 
    </div>
  )
}
