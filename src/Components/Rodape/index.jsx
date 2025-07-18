import styled from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareInstagram, faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons"


// const Paragrafo = styled.p`
//     padding: 5rem 2rem;
//     text-align: center;
//     color: rgb(73, 69, 72);
//     font-size: 1.3rem;
//     font-weight: 600;
// `

const SecaoRodape = styled.section`
    padding: 5rem;
`
const RodapeTexto = styled.span`
    font-size: 2rem;
`
const RodapeLinha = styled.div`
    border-bottom: 2px solid #000;
    padding: .8rem 0;
`
const RodapeCaixaIcones = styled.div`
    display: flex;
    justify-content: end;
    gap: 1rem;
`

function Rodape() {
    return (
        // <section>
        //     <Paragrafo>&copy;2025 Orgulhosamente criado por Felipe</Paragrafo>
        // </section>
        <SecaoRodape>
            <RodapeTexto>Clínica Odontológica</RodapeTexto>
            <RodapeLinha></RodapeLinha>
            <RodapeCaixaIcones>
                <FontAwesomeIcon icon={faSquareInstagram} className="iconesRodape" />
                <FontAwesomeIcon icon={faFacebook} className="iconesRodape"/>
                <FontAwesomeIcon icon={faWhatsapp} className="iconesRodape"/>
            </RodapeCaixaIcones>

        </SecaoRodape>
    )
}

export default Rodape