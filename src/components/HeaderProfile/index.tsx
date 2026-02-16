import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { open } from '../../store/cartSlice'

import logo from '../../assets/images/logo.png'
import { Container, Content, LinkHome, Cart } from './styles'

const HeaderProfile = () => {
  const dispatch = useDispatch()

  const items = useSelector((state: RootState) => state.cart.items)

  return (
    <Container>
      <div className="container">
        <Content>
          <LinkHome to="/">Restaurantes</LinkHome>

          <img src={logo} alt="eFood" />

          <Cart onClick={() => dispatch(open())}>
            {items.length} produto(s) no carrinho
          </Cart>
        </Content>
      </div>
    </Container>
  )
}

export default HeaderProfile
