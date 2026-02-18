import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { breakpoints, cores } from '../../styles'

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

  @media (max-width: ${breakpoints.tablet}) {
    height: 120px;
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${cores.rosa};
  font-weight: bold;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0 16px;
    gap: 24px;
  }
`

export const LinkHome = styled(Link)`
  text-decoration: none;
  color: ${cores.rosa};
  font-size: 18px;
  font-weight: bold;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 16px;
  }
`

export const Cart = styled.span`
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 14px;
  }
`

export const Logo = styled.img`
  width: 124px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 80px;
  }
`
