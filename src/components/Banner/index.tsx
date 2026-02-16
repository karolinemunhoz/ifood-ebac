import { Container, Title, Logo } from './styles'
import logo from '../../assets/images/logo.png'

const Banner = () => (
  <Container>
    <div className="container">
      <Logo src={logo} alt="eFood" />

      <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
    </div>
  </Container>
)

export default Banner
