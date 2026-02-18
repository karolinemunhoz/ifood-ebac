import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.rosa};
  padding: 8px;
  color: ${cores.branco};
`

export const Title = styled.h3`
  font-size: 16px;
  margin: 8px 0;
`

export const Description = styled.p`
  font-size: 14px;
  margin-bottom: 8px;

  height: 88px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${cores.bege};
  }
`

export const Button = styled.button`
  width: 100%;
  padding: 8px;
  background-color: ${cores.bege};
  color: ${cores.rosa};
  border: none;
  font-weight: bold;
  cursor: pointer;
`

export const Image = styled.img`
  width: 100%;
  height: 168px;
  object-fit: cover;
`
