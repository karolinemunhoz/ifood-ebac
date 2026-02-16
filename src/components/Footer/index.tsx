import logo from '../../assets/images/logo.png'
import instragram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

import { Container, Social, Text } from './styles'

const Footer = () => (
  <Container>
    <img src={logo} alt="eFood" />

    <Social>
      <a href="#">
        <img src={instragram} alt="Instragram" />
      </a>

      <a href="#">
        <img src={facebook} alt="Facebook" />
      </a>

      <a href="#">
        <img src={twitter} alt="Twitter" />
      </a>
    </Social>

    <Text>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Text>
  </Container>
)

export default Footer
