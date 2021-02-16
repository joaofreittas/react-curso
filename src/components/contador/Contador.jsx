import React, {Component} from 'react'
import Display from './Display'
import Botoes from './Botoes'

export default class Contador extends Component {

    state = {
        passo: this.props.passo || 1,
        valor: this.props.valor || 0
    }

    inc = () => {
        this.setState({
            valor: this.state.valor + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            valor: this.state.valor - this.state.passo
        })
    }

    onChangePasso = (passo) => {
        this.setState({
            passo: passo 
        })
    }

    render() {
        return (
            <div>
                <h4>Valor: {this.state.valor}</h4>
                <Display passo={this.state.passo} onChangePasso={this.onChangePasso}></Display>
                <Botoes 
                    incrementar={this.inc}
                    decrementar={this.dec}
                >
                </Botoes>
            </div>
        )
    }
}