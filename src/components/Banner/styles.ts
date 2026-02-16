import styled from 'styled-components'
import heroImg from '../../assets/images/hero.png'
import { cores } from '../../styles'

export const Container = styled.div`
  height: 384px;

  background-image: url(${heroImg});
  background-size: cover;
  background-position: center;

  display: flex;
  align-items: center;
  text-align: center;
`

export const Logo = styled.img`
  margin-bottom: 140px;
`

export const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  max-width: 540px;
  margin: 0 auto;
  color: ${cores.rosa};
`
