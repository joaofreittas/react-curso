import './App.css'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'
import Input from './components/form/Input'
import Card from './components/layout/Card'
import Contador from './components/contador/Contador'
import MegaSena from './components/mega-sena/MegaSena'

export default props => (
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card titulo="#01 - Primeiro Componente" color="#355C7D">
                <Primeiro></Primeiro> 
            </Card>
            <Card titulo="#02 - Com Parâmetro" color="#F67280">
                <ComParametro 
                    titulo="Esse é o título"
                    subtitulo="Esse é o subtitulo"
                />
            </Card>
            <Card titulo="#03 - Com Filhos" color="#F8B195">
                <ComFilhos>
                    <ul>
                        <li>Ana</li>
                        <li>Bia</li>
                        <li>Carla</li>
                        <li>João</li>
                    </ul>
                </ComFilhos>
            </Card>
            <Card titulo="#04 - Repetição" color="#C06C84">
                <Repeticao></Repeticao>
            </Card>
            
            <Card titulo="#05 - Condicional" color="#6C5B7B">
                <Condicional numero={16}></Condicional>
            </Card>
            <Card titulo="#07 - Comunicação direta" color="#355C7D">
                <Pai sobrenome="Freitas"></Pai>
            </Card>
            <Card titulo="#08 - Comunicação indireta" color="#C06C84">
                <Super></Super>
            </Card>
            <Card titulo="#09 - Input" color="#6C5B7B">
                <Input></Input>
            </Card>
            <Card titulo="#10 - Contador" color="#355C7D">
                <Contador passo={10} valor={0}></Contador>
            </Card>
            <Card titulo="#11 - MegaSena" color="#F67280">
                <MegaSena></MegaSena>
            </Card>
        </div>
    </div>
)