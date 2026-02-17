import { useNavigate } from 'react-router-dom'
import { Restaurant } from '../../types'
import {
  Card,
  Image,
  Info,
  Title,
  Description,
  Tag,
  Rating,
  TagsContainer,
  Button
} from './styles'

type Props = {
  restaurant: Restaurant
}

const RestaurantCard = ({ restaurant }: Props) => {
  const navigate = useNavigate()

  return (
    <Card>
      <Image src={restaurant.capa} alt={restaurant.titulo} />

      <Info>
        <Title>{restaurant.titulo}</Title>
        <Rating>{restaurant.avaliacao} ⭐</Rating>
      </Info>

      <Description>{restaurant.descricao}</Description>

      <TagsContainer>
        <Tag>{restaurant.tipo}</Tag>
      </TagsContainer>

      <Button onClick={() => navigate(`/restaurant/${restaurant.id}`)}>
        Saiba mais
      </Button>
    </Card>
  )
}

export default RestaurantCard
