import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import {
  close,
  remove,
  goToDelivery,
  goToPayment,
  backToCart,
  backToDelivery,
  goToConfirmation,
  clear
} from '../../store/reducers/cartSlice'

import { useCheckoutMutation, CheckoutRequest } from '../../services/api'
import Checkout from '../Checkout'

import lixo from '../../assets/images/lixeira.png'
import * as S from './styles'

const Cart = () => {
  const dispatch = useDispatch()
  const { items, step, isOpen } = useSelector((state: RootState) => state.cart)

  const [checkoutApi, { isLoading }] = useCheckoutMutation()
  const [orderId, setOrderId] = useState<string | null>(null)

  const [deliveryData, setDeliveryData] = useState({
    receiver: '',
    address: '',
    city: '',
    zipCode: '',
    number: '',
    complement: ''
  })

  const [paymentData, setPaymentData] = useState({
    cardName: '',
    cardNumber: '',
    cvv: '',
    expiresMonth: '',
    expiresYear: ''
  })

  const [errors, setErrors] = useState<Record<string, boolean>>({})

  if (!isOpen) return null

  const total = items.reduce((acc, item) => acc + item.preco, 0)

  const validateDelivery = () => {
    const newErrors: Record<string, boolean> = {}
    Object.entries(deliveryData).forEach(([key, value]) => {
      if (!value && key !== 'complement') newErrors[key] = true
    })
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validatePayment = () => {
    const newErrors: Record<string, boolean> = {}
    Object.entries(paymentData).forEach(([key, value]) => {
      if (!value) newErrors[key] = true
    })
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleCheckout = async () => {
    if (!validatePayment()) return

    try {
      const checkoutBody: CheckoutRequest = {
        products: items.map((item) => ({
          id: item.id,
          price: Math.round(item.preco)
        })),
        delivery: {
          receiver: deliveryData.receiver,
          address: deliveryData.address,
          city: deliveryData.city,
          zipCode: deliveryData.zipCode.replace(/\D/g, ''),
          number: Number(deliveryData.number), // número convertido aqui
          complement: deliveryData.complement
        },
        payment: {
          card: {
            name: paymentData.cardName,
            number: paymentData.cardNumber.replace(/\s/g, ''),
            code: Number(paymentData.cvv),
            expires: {
              month: Number(paymentData.expiresMonth),
              year: Number(paymentData.expiresYear)
            }
          }
        }
      }

      const response = await checkoutApi(checkoutBody).unwrap()
      setOrderId(response.orderId)
      dispatch(goToConfirmation())
    } catch (err) {
      console.error(err)
      alert('Erro ao finalizar pedido')
    }
  }

  const handleFinish = () => {
    dispatch(clear())
    dispatch(close())
    setOrderId(null)
    setDeliveryData({
      receiver: '',
      address: '',
      city: '',
      zipCode: '',
      number: '',
      complement: ''
    })
    setPaymentData({
      cardName: '',
      cardNumber: '',
      cvv: '',
      expiresMonth: '',
      expiresYear: ''
    })
  }

  return (
    <S.Overlay onClick={() => dispatch(close())}>
      <S.Container onClick={(e) => e.stopPropagation()}>
        {step === 'cart' && (
          <>
            {items.length === 0 ? (
              <S.Message>O carrinho está vazio, adicione produtos.</S.Message>
            ) : (
              <>
                {items.map((item) => (
                  <S.Item key={item.cartId}>
                    <S.ItemImage src={item.foto} alt={item.nome} />
                    <S.ItemInfo>
                      <S.ItemTitle>{item.nome}</S.ItemTitle>
                      <S.ItemPrice>R$ {item.preco.toFixed(2)}</S.ItemPrice>
                    </S.ItemInfo>
                    <S.Trash onClick={() => dispatch(remove(item.cartId))}>
                      <img src={lixo} alt="Remover" />
                    </S.Trash>
                  </S.Item>
                ))}

                <S.Total>
                  <span>Valor total</span>
                  <span>R$ {total.toFixed(2)}</span>
                </S.Total>

                <S.Checkout onClick={() => dispatch(goToDelivery())}>
                  Continuar com a entrega
                </S.Checkout>
              </>
            )}
          </>
        )}

        {step !== 'cart' && (
          <Checkout
            step={step}
            total={total}
            deliveryData={deliveryData}
            paymentData={paymentData}
            setDeliveryData={setDeliveryData}
            setPaymentData={setPaymentData}
            errors={errors}
            validateDelivery={validateDelivery}
            validatePayment={validatePayment}
            goToPayment={() => dispatch(goToPayment())}
            backToCart={() => dispatch(backToCart())}
            backToDelivery={() => dispatch(backToDelivery())}
            handleCheckout={handleCheckout}
            handleFinish={handleFinish}
            orderId={orderId}
            isLoading={isLoading}
          />
        )}
      </S.Container>
    </S.Overlay>
  )
}

export default Cart
