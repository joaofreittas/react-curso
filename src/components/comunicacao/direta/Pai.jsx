import Filho from './Filho'

export default props => 
    <div>
        <Filho {...props}>Maria</Filho>
        <Filho sobrenome={props.sobrenome}>João</Filho>
        <Filho sobrenome="Lucas">Pedro</Filho>
    </div>