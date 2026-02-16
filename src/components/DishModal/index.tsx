import { useDispatch } from 'react-redux'
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
import { Dish } from '../../mock/menu'
import { add, open } from '../../store/cartSlice'

type Props = {
  dish: Dish
  onClose: () => void
}

const DishModal = ({ dish, onClose }: Props) => {
  const dispatch = useDispatch()

  return (
    <Overlay onClick={onClose}>
      <Container onClick={(e: React.MouseEvent) => e.stopPropagation()}>
        <Close onClick={onClose}>X</Close>

        <Image src={dish.image} alt={dish.name} />

        <Content>
          <Title>{dish.name}</Title>

          <Description>
            {dish.name.toLowerCase().includes('pizza')
              ? `A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.`
              : dish.description}
          </Description>

          <Serve>Serve: de 2 a 3 pessoas</Serve>

          <Button
            type="button"
            onClick={() => {
              dispatch(add(dish))
              dispatch(open())
              onClose()
            }}
          >
            Adicionar ao carrinho - R$ {(dish.price ?? 0).toFixed(2)}
          </Button>
        </Content>
      </Container>
    </Overlay>
  )
}

export default DishModal
