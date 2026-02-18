import styled from 'styled-components'
import { cores } from '../../styles'
import { breakpoints } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: flex-end;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.7);
`

export const Container = styled.div`
  width: 360px;
  background-color: ${cores.rosa};
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 80%;
  }
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  background-color: ${cores.bege};
  padding: 8px;
  gap: 8px;
`

export const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`

export const ItemInfo = styled.div`
  flex: 1;
`

export const ItemTitle = styled.h3`
  color: ${cores.rosa};
  font-size: 16px;
  margin-bottom: 8px;
`

export const ItemPrice = styled.p`
  color: ${cores.rosa};
  font-size: 14px;
`

export const Trash = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  img {
    width: 16px;
  }
`

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  font-weight: bold;
  color: ${cores.branco};
`

export const Checkout = styled.button`
  margin-top: 8px;
  background-color: ${cores.bege};
  color: ${cores.rosa};
  border: none;
  padding: 8px;
  font-weight: bold;
  cursor: pointer;
`

export const FormTitle = styled.h2`
  color: ${cores.branco};
  font-size: 16px;
  margin-bottom: 16px;
`

export const Input = styled.input`
  background: ${cores.bege};
  border: none;
  padding: 8px;
  width: 100%;
  margin-bottom: 8px;
`

export const TextArea = styled.textarea`
  background: ${cores.bege};
  border: none;
  padding: 8px;
  width: 100%;
  margin-bottom: 8px;
`

export const Row = styled.div`
  display: flex;
  gap: 8px;
`

export const Button = styled.button`
  background: ${cores.bege};
  color: ${cores.rosa};
  border: none;
  padding: 8px;
  font-weight: bold;
  cursor: pointer;
`

export const Message = styled.p`
  color: ${cores.branco};
  font-size: 14px;
  line-height: 1.6;
`

export const Label = styled.label`
  color: ${cores.bege};
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 4px;
`
