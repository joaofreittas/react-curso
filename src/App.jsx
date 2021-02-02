import './App.css'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import Card from './components/layout/Card'

export default props => (
    <div className="App">

        <Card titulo="#01 - Primeiro Componente">
            <Primeiro></Primeiro> 
        </Card>
        <Card titulo="#02 - Com Parâmetro">
            <ComParametro 
                titulo="Esse é o título"
                subtitulo="Esse é o subtitulo"
            />
        </Card>
        <Card titulo="#03 - Com Filhos">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carla</li>
                    <li>João</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo="#04 - Repetição">
            <Repeticao></Repeticao>
        </Card>
        
        <Card titulo="#05 - Condicional">
            <Condicional numero={16}></Condicional>
        </Card>

    </div>
)