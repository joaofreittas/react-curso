import React, {useState} from 'react'

export default (props) => {

    const [numeros, setNumeros] = useState(Array(6).fill(0))

    function gerarNumeros(){
        let novosNumeros = []
        for(let i = 0; i < 6; i++) {
            let number = aleatoryNumber(novosNumeros);
            novosNumeros.push(number)
        }
        setNumeros(novosNumeros.sort((a, b) => a - b))
    }

    function aleatoryNumber(array) {
        let min = 1
        let max = 60
        let novoNumero = Math.floor(Math.random() * (max - min + 1) + min)
        return array.includes(novoNumero) ? aleatoryNumber(array) : novoNumero
    }

    return (
        <div>
            <p>
                {numeros.join(' ')}
            </p>
            
            <button onClick={gerarNumeros}>Gerar Números!</button>
        </div>
    )
}