import React from 'react'

function Condicional (props) {

    function isPar(number) {
        return number % 2 === 0;
    }

    return (
        <div>
            <h3>O numero é {props.numero}</h3>
            {
                isPar(props.numero) ? <span>Par</span> : <span>Ímpar</span>
            }
            
        </div>
    )

}

export default Condicional