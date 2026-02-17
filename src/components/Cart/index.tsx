import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import {
  remove,
  close,
  goToDelivery,
  goToPayment,
  goToConfirmation,
  backToCart,
  backToDelivery
} from '../../store/cartSlice'

import lixo from '../../assets/images/lixeira.png'

import {
  Overlay,
  Container,
  Item,
  ItemImage,
  ItemInfo,
  ItemTitle,
  ItemPrice,
  Trash,
  Total,
  Checkout,
  FormTitle,
  Input,
  Row,
  Button,
  TextArea,
  Message,
  Label
} from './styles'

const Cart = () => {
  const dispatch = useDispatch()
  const { items, step, isOpen } = useSelector((state: RootState) => state.cart)

  if (!isOpen) return null

  const total = items.reduce((acc, item) => acc + item.preco, 0)

  return (
    <Overlay onClick={() => dispatch(close())}>
      <Container onClick={(e) => e.stopPropagation()}>
        {step === 'cart' && (
          <>
            {items.map((item, index) => (
              <Item key={index}>
                <ItemImage src={item.foto} />

                <ItemInfo>
                  <ItemTitle>{item.nome}</ItemTitle>
                  <ItemPrice>R$ {item.preco.toFixed(2)}</ItemPrice>
                </ItemInfo>

                <Trash onClick={() => dispatch(remove(item.id))}>
                  <img src={lixo} alt="remover" />
                </Trash>
              </Item>
            ))}

            <Total>
              <span>Valor total</span>
              <span>R$ {total.toFixed(2)}</span>
            </Total>

            <Checkout onClick={() => dispatch(goToDelivery())}>
              Continuar com a entrega
            </Checkout>
          </>
        )}

        {step === 'delivery' && (
          <>
            <FormTitle>Entrega</FormTitle>

            <Label>Quem irá receber</Label>
            <Input />

            <Label>Endereço</Label>
            <Input />

            <Label>Cidade</Label>
            <Input />

            <Row>
              <div style={{ flex: 1 }}>
                <Label>CEP</Label>
                <Input />
              </div>

              <div style={{ flex: 1 }}>
                <Label>Número</Label>
                <Input />
              </div>
            </Row>

            <Label>Complemento (opcional)</Label>
            <TextArea />

            <Button onClick={() => dispatch(goToPayment())}>
              Continuar para o pagamento
            </Button>

            <Button onClick={() => dispatch(backToCart())}>
              Voltar para o carrinho
            </Button>
          </>
        )}

        {step === 'payment' && (
          <>
            <FormTitle>
              Pagamento - Valor a pagar R$ {total.toFixed(2)}
            </FormTitle>

            <Label>Nome no cartão</Label>
            <Input />

            <Row>
              <div style={{ flex: 1 }}>
                <Label>Número do cartão</Label>
                <Input />
              </div>

              <div style={{ flex: 1 }}>
                <Label>CVV</Label>
                <Input />
              </div>
            </Row>

            <Row>
              <div style={{ flex: 1 }}>
                <Label>Mês de vencimento</Label>
                <Input />
              </div>

              <div style={{ flex: 1 }}>
                <Label>Ano de vencimento</Label>
                <Input />
              </div>
            </Row>

            <Button onClick={() => dispatch(goToConfirmation())}>
              Finalizar pagamento
            </Button>

            <Button onClick={() => dispatch(backToDelivery())}>
              Voltar para a edição de endereço
            </Button>
          </>
        )}

        {step === 'confirmation' && (
          <>
            <FormTitle>Pedido realizado - 12345</FormTitle>

            <Message>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
              <br />
              <br />
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
              <br />
              <br />
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
              <br />
              <br />
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </Message>

            <Button onClick={() => dispatch(close())}>Concluir</Button>
          </>
        )}
      </Container>
    </Overlay>
  )
}

export default Cart
