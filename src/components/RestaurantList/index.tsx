import RestaurantCard from '../RestaurantCard'
import { Container, List } from './styles'

import { restaurants } from '../../mock/restaurants'

const RestaurantList = () => (
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

export default RestaurantList
