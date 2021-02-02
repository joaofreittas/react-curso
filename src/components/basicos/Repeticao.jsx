import React from 'react'

import produtos from '../../data/produtos'


function Repeticao (props) {

    function getProdutosListItem(){
        return produtos.map(produto => {
            return <li key={produto.id}>
                    {produto.id} - {produto.nome} - R${produto.preco}
                </li>
        })
    }

    return (
        <div>
            <h2>Repetição</h2>
            <ul>
                {getProdutosListItem()}
            </ul>
        </div>
    )
}

export default Repeticao