export default props => {

    function acao(){
        props.quandoClicar('Nº gerado', Math.random())
    }

    return (
        <div>
            <button onClick={acao}>Alterar</button>
        </div>
    )
}
    