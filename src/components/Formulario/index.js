import './Formulario.css';
import CampoTexto from "../CampoTexto";
import CampoTextoSuspenso from '../CampoTextoSuspenso';
import Botao from '../Botao';

const Formulario = () => {
    const tiposServico = ['Cabelo', 'Barba', 'Cabelo + Barba'];
    const extra = ['Cerveja', 'Guarana', 'Cachaça'];

    const aoSalvar = (event) => {
        event.preventDefault()
        console.log("Cadastrando serviço")
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <CampoTexto obrigatorio={true} label='Nome do Barbeiro:' placeholder='Digite seu nome...' />
                <CampoTexto label='Instagram:' placeholder='Digite seu instagram...' />
                <CampoTexto label='Idade:' placeholder='Digite sua idade...' />
                <CampoTextoSuspenso obrigatorio={true} label="Serviço" itens={tiposServico}/>
                <CampoTextoSuspenso label="Extra" itens={extra}/>
                <Botao>Cadastrar Serviço</Botao>
            </form>
        </section>
    )
}

export default Formulario;