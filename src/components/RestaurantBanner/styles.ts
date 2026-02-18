import styled from 'styled-components'
import { cores } from '../../styles'
import { breakpoints } from '../../styles'

export const Container = styled.section`
  height: 280px;
  background-size: cover;
  background-position: center;
  color: ${cores.branco};
  display: flex;
  align-items: flex-end;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 0;
  }

  .container {
    z-index: 1;
    padding-left: 24px;
    padding-bottom: 24px;
  }
`

export const Category = styled.span`
  font-size: 32px;
  display: block;
  margin-bottom: 150px;
  font-weight: 100;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 20px;
  }
`

export const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 24px;
  }
`
