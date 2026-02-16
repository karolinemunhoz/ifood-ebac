import { Container, Title, Category } from './styles'

type Props = {
  image: string
  title: string
  category: string
}

const RestaurantBanner = ({ image, title, category }: Props) => (
  <Container style={{ backgroundImage: `url(${image})` }}>
    <div className="container">
      <Category>{category}</Category>
      <Title>{title}</Title>
    </div>
  </Container>
)

export default RestaurantBanner
