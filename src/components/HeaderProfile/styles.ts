import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'

export const Container = styled.header`
  background-color: transparent;
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  height: 185px;
  display: flex;
  align-items: center;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${cores.rosa};
  font-weight: bold;
`

export const LinkHome = styled(Link)`
  text-decoration: none;
  color: ${cores.rosa};
`

export const Cart = styled.span`
  cursor: pointer;
`
