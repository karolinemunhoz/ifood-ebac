import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.bege};
  text-align: center;
  padding: 40px 0;
  margin-top: 80px;
`

export const Social = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin: 24px 0;
`

export const Text = styled.p`
  font-size: 12px;
  max-width: 480px;
  margin: 0 auto;
  color: ${cores.rosa};
  margin-top: 80px;
`
