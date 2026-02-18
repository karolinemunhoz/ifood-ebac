import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { open } from '../../store/reducers/cartSlice'

import logo from '../../assets/images/logo.png'
import { Container, Content, LinkHome, Cart, Logo } from './styles'

const HeaderProfile = () => {
  const dispatch = useDispatch()

  const items = useSelector((state: RootState) => state.cart.items)

  return (
    <Container>
      <div className="container">
        <Content>
          <LinkHome to="/">Restaurantes</LinkHome>

          <Logo src={logo} alt="eFood" />

          <Cart onClick={() => dispatch(open())}>
            {items.length} produto(s) no carrinho
          </Cart>
        </Content>
      </div>
    </Container>
  )
}

export default HeaderProfile
