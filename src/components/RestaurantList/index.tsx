import { useEffect, useState } from 'react'
import RestaurantCard from '../RestaurantCard'
import { Container, List } from './styles'
import { Restaurant } from '../../types'

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data) => setRestaurants(data))
  }, [])

  return (
    <Container>
      <div className="container">
        <List>
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default RestaurantList
