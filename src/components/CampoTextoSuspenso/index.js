import './CampoTextoSuspenso.css'

const CampoTextoSuspenso = (props) => {
    return (
        <div className="campo-texto-suspenso">
            <label>{props.label}</label>
            <select required={props.obrigatorio}>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default CampoTextoSuspenso;