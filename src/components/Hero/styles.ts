import styled from 'styled-components'
import heroImg from '../../assets/images/hero.png'
import { breakpoints } from '../../styles'

export const Hero = styled.div`
  width: 100%;
  height: 185px;

  background-image: url(${heroImg});
  background-size: cover;
  background-position: center;

  @media (max-width: ${breakpoints.tablet}) {
    height: 120px;
  }
`
