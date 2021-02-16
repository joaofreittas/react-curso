
import React, {useState} from 'react'
import Sub from './Sub'

export default props => {

    const [num, setNum] = useState(0)
    const [label, setLabel] = useState('Valor ')


    function onClick(texto, numero){
        setNum(numero)
        setLabel(texto)
    }

    return (
        <div>
            <h4>{label}: {num}</h4>
            <Sub quandoClicar={onClick}></Sub>
        </div>
    )
}
    