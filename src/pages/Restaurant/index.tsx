import { useState } from 'react'

import Hero from '../../components/Hero'
import macaraoHero from '../../assets/images/macarao-hero.png'
import HeaderProfile from '../../components/HeaderProfile'
import Footer from '../../components/Footer'
import RestaurantBanner from '../../components/RestaurantBanner'
import DishCard from '../../components/DishCard'
import DishModal from '../../components/DishModal'

import { restaurants } from '../../mock/restaurants'
import { menu, Dish } from '../../mock/menu'
import { List } from './styles'

const Categories = () => {
  const restaurant = restaurants[1]

  const [selectedDish, setSelectedDish] = useState<Dish | null>(null)

  return (
    <>
      <Hero />
      <HeaderProfile />

      <RestaurantBanner
        image={macaraoHero}
        title={restaurant.title}
        category={restaurant.infos[1] || restaurant.infos[0]}
      />

      <div className="container">
        <List>
          {menu.map((dish) => (
            <div key={dish.id} onClick={() => setSelectedDish(dish)}>
              <DishCard {...dish} />
            </div>
          ))}
        </List>
      </div>

      {selectedDish && (
        <DishModal dish={selectedDish} onClose={() => setSelectedDish(null)} />
      )}

      <Footer />
    </>
  )
}

export default Categories
