import { useNavigate } from 'react-router-dom'
import { Restaurant } from '../../mock/restaurants'
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

  const handleSaibasMais = () => {
    navigate(`/restaurant/${restaurant.id}`)
  }

  return (
    <Card>
      <Image src={restaurant.image} alt={restaurant.title} />

      <Info>
        <Title>{restaurant.title}</Title>
        <Rating>{restaurant.rating} ⭐</Rating>
      </Info>

      <Description>{restaurant.description}</Description>

      <TagsContainer>
        {restaurant.infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </TagsContainer>
      <Button onClick={handleSaibasMais}>Saiba mais</Button>
    </Card>
  )
}

export default RestaurantCard
