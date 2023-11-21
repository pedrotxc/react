import './Formulario.css'

import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'


const Formulario = () => {

    const times = [
        "Back-end",
        "Front-end"
    ]

    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados dos alimentos que deseja comprar</h2>                
                <CampoTexto label="Nome" placeholder="Digite o nome do alimento"/>
                <CampoTexto label="Quantidade" placeholder="Digite a quantidade"/>
                <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem"/>
                <ListaSuspensa label="Time" itens={times}/>
            </form>
        </section>
    )
}

export default Formulario