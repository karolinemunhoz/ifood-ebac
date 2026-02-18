import * as S from './styles'
import { MaskedInput } from './styles'

type DeliveryData = {
  receiver: string
  address: string
  city: string
  zipCode: string
  number: string
  complement: string
}

type PaymentData = {
  cardName: string
  cardNumber: string
  cvv: string
  expiresMonth: string
  expiresYear: string
}

type Props = {
  step: string
  total: number
  deliveryData: DeliveryData
  paymentData: PaymentData
  errors: Record<string, boolean>
  setDeliveryData: (data: DeliveryData) => void
  setPaymentData: (data: PaymentData) => void
  validateDelivery: () => boolean
  validatePayment: () => boolean
  goToPayment: () => void
  backToCart: () => void
  backToDelivery: () => void
  handleCheckout: () => void
  handleFinish: () => void
  orderId: string | null
  isLoading: boolean
}

const Checkout = ({
  step,
  total,
  deliveryData,
  paymentData,
  errors,
  setDeliveryData,
  setPaymentData,
  validateDelivery,
  validatePayment,
  goToPayment,
  backToCart,
  backToDelivery,
  handleCheckout,
  handleFinish,
  orderId,
  isLoading
}: Props) => {
  if (step === 'confirmation')
    return (
      <>
        <S.FormTitle>Pedido realizado - {orderId}</S.FormTitle>
        <S.Message>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
          <br />
          <br />
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras.
          <br />
          <br />
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.
          <br />
          <br />
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </S.Message>
        <S.Button onClick={handleFinish}>Concluir</S.Button>
      </>
    )

  return (
    <>
      {step === 'delivery' && (
        <>
          <S.FormTitle>Entrega</S.FormTitle>

          <S.Label>Quem irá receber</S.Label>
          <S.Input
            $hasError={errors.receiver}
            value={deliveryData.receiver}
            onChange={(e) =>
              setDeliveryData({ ...deliveryData, receiver: e.target.value })
            }
          />

          <S.Label>Endereço</S.Label>
          <S.Input
            $hasError={errors.address}
            value={deliveryData.address}
            onChange={(e) =>
              setDeliveryData({ ...deliveryData, address: e.target.value })
            }
          />

          <S.Label>Cidade</S.Label>
          <S.Input
            $hasError={errors.city}
            value={deliveryData.city}
            onChange={(e) =>
              setDeliveryData({ ...deliveryData, city: e.target.value })
            }
          />

          <S.Row>
            <div style={{ flex: 1 }}>
              <S.Label>CEP</S.Label>
              <S.MaskedInput
                mask="00000-000"
                value={deliveryData.zipCode}
                $hasError={errors.zipCode}
                onAccept={(v) =>
                  setDeliveryData({ ...deliveryData, zipCode: v as string })
                }
              />
            </div>

            <div style={{ flex: 1 }}>
              <S.Label>Número</S.Label>
              <MaskedInput
                mask="00000"
                value={deliveryData.number}
                $hasError={errors.number}
                onAccept={(v) =>
                  setDeliveryData({ ...deliveryData, number: v as string })
                }
              />
            </div>
          </S.Row>

          <S.Label>Complemento (opcional)</S.Label>
          <S.TextArea
            value={deliveryData.complement}
            onChange={(e) =>
              setDeliveryData({ ...deliveryData, complement: e.target.value })
            }
          />

          <S.Button onClick={() => validateDelivery() && goToPayment()}>
            Continuar para o pagamento
          </S.Button>
          <S.Button onClick={backToCart}>Voltar para o carrinho</S.Button>
        </>
      )}

      {step === 'payment' && (
        <>
          <S.FormTitle>
            Pagamento - Valor a pagar R$ {total.toFixed(2)}
          </S.FormTitle>

          <S.Label>Nome no cartão</S.Label>
          <S.Input
            $hasError={errors.cardName}
            value={paymentData.cardName}
            onChange={(e) =>
              setPaymentData({ ...paymentData, cardName: e.target.value })
            }
          />

          <S.Row>
            <div style={{ flex: 2 }}>
              <S.Label>Número do cartão</S.Label>
              <MaskedInput
                mask="0000 0000 0000 0000"
                value={paymentData.cardNumber}
                $hasError={errors.cardNumber}
                onAccept={(v) =>
                  setPaymentData({ ...paymentData, cardNumber: v as string })
                }
              />
            </div>

            <div style={{ flex: 1 }}>
              <S.Label>CVV</S.Label>
              <MaskedInput
                mask="000"
                value={paymentData.cvv}
                $hasError={errors.cvv}
                onAccept={(v) =>
                  setPaymentData({ ...paymentData, cvv: v as string })
                }
              />
            </div>
          </S.Row>

          <S.Row>
            <div style={{ flex: 1 }}>
              <S.Label>Mês de vencimento</S.Label>
              <MaskedInput
                mask="00"
                value={paymentData.expiresMonth}
                $hasError={errors.expiresMonth}
                onAccept={(v) =>
                  setPaymentData({ ...paymentData, expiresMonth: v as string })
                }
              />
            </div>
            <div style={{ flex: 1 }}>
              <S.Label>Ano de vencimento</S.Label>
              <MaskedInput
                mask="0000"
                value={paymentData.expiresYear}
                $hasError={errors.expiresYear}
                onAccept={(v) =>
                  setPaymentData({ ...paymentData, expiresYear: v as string })
                }
              />
            </div>
          </S.Row>

          <S.Button
            onClick={() => {
              if (validatePayment()) handleCheckout()
            }}
            disabled={isLoading}
          >
            {isLoading ? 'Finalizando...' : 'Finalizar pagamento'}
          </S.Button>

          <S.Button onClick={backToDelivery}>
            Voltar para a edição de endereço
          </S.Button>
        </>
      )}
    </>
  )
}

export default Checkout
