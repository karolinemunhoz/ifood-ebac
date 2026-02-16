import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  border: none;
  background-color: ${cores.rosa};
  color: ${cores.branco};
  font-size: 14px;
  font-weight: bold;
  padding: 8px;
  cursor: pointer;
  width: 100%;
`

export const ButtonLink = styled(Link)`
  display: inline-block;
  border: none;
  background-color: ${cores.rosa};
  color: ${cores.branco};
  font-size: 14px;
  font-weight: bold;
  padding: 8px;
  text-decoration: none;
  text-align: center;
`
