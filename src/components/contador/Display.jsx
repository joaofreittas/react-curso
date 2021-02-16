import './Contador.css'
import React from 'react'

export default class Display extends React.Component {

    atualizarPasso = (e) => {
        this.props.onChangePasso(+e.target.value)
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <div>
                    <label>Passo: </label>
                    <input 
                        name="pass" 
                        type="text" 
                        value={this.props.passo} 
                        onChange={this.atualizarPasso}
                    />

                </div>

            </div>
        )
    }
}