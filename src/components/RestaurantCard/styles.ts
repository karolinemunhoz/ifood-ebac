import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.branco};
  overflow: hidden;
  position: relative;
  border: 1px solid ${cores.rosa};
  max-width: 472px;
`

export const Image = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
`

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px;
`

export const Title = styled.h3`
  font-size: 18px;
  color: ${cores.rosa};
`

export const Rating = styled.span`
  font-weight: bold;
  color: ${cores.rosa};
`

export const Description = styled.p`
  padding: 0 8px 8px;
  font-size: 14px;
  color: ${cores.rosa};
`

export const TagsContainer = styled.div`
  display: flex;
  gap: 8px;
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Tag = styled.span`
  background-color: ${cores.rosa};
  color: ${cores.branco};
  padding: 4px 8px;
  display: flex;
  align-items: center;
  font-size: 12px;
`

export const Button = styled.button`
  background-color: ${cores.rosa};
  color: ${cores.bege};
  border: none;
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  margin: 8px;
  cursor: pointer;
`
