import { useDispatch } from 'react-redux'
import { Dish } from '../../types'
import {
  Overlay,
  Container,
  Image,
  Title,
  Description,
  Close,
  Button,
  Content,
  Serve
} from './styles'
import { add, open } from '../../store/cartSlice'

type Props = {
  dish: Dish
  onClose: () => void
}

const DishModal = ({ dish, onClose }: Props) => {
  const dispatch = useDispatch()

  return (
    <Overlay onClick={onClose}>
      <Container onClick={(e) => e.stopPropagation()}>
        <Close onClick={onClose}>X</Close>

        <Image src={dish.foto} alt={dish.nome} />

        <Content>
          <Title>{dish.nome}</Title>

          <Description>{dish.descricao}</Description>

          <Serve>{dish.porcao}</Serve>

          <Button
            type="button"
            onClick={() => {
              dispatch(add(dish))
              dispatch(open())
              onClose()
            }}
          >
            Adicionar ao carrinho - R$ {dish.preco.toFixed(2)}
          </Button>
        </Content>
      </Container>
    </Overlay>
  )
}

export default DishModal
