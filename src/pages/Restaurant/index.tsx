import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Hero from '../../components/Hero'
import HeaderProfile from '../../components/HeaderProfile'
import Footer from '../../components/Footer'
import RestaurantBanner from '../../components/RestaurantBanner'
import DishCard from '../../components/DishCard'
import DishModal from '../../components/DishModal'

import { Dish, Restaurant } from '../../types'
import { List } from './styles'

const Categories = () => {
  const { id } = useParams()

  const [restaurant, setRestaurant] = useState<Restaurant | null>(null)
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null)

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data: Restaurant[]) => {
        const found = data.find((r) => r.id === Number(id))
        setRestaurant(found || null)
      })
  }, [id])

  if (!restaurant) return <h2>Carregando...</h2>

  return (
    <>
      <Hero />
      <HeaderProfile />

      <RestaurantBanner
        image={restaurant.capa}
        title={restaurant.titulo}
        category={restaurant.tipo}
      />

      <div className="container">
        <List>
          {restaurant.cardapio.map((dish) => (
            <div key={dish.id} onClick={() => setSelectedDish(dish)}>
              <DishCard
                name={dish.nome}
                description={dish.descricao}
                image={dish.foto}
              />
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
