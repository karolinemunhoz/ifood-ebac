import styled from 'styled-components'
import { cores } from '../../styles'
import { breakpoints } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`

export const Container = styled.div`
  background-color: ${cores.rosa};
  padding: 24px;
  max-width: 1024px;
  width: 90%;
  min-height: 344px;
  color: ${cores.branco};
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 24px;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    padding: 16px;
    width: 95%;
  }

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 600px;
  }
`

export const Image = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  display: block;
  flex-shrink: 0;
  border-radius: 4px;
  margin-right: 24px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 200px;
    height: 200px;
  }
`

export const Title = styled.h2`
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: bold;

  @media (max-width: ${breakpoints.desktop}) {
    align-self: center;
  }
`

export const Description = styled.p`
  margin-bottom: 16px;
  font-size: 14px;
`

export const Serve = styled.p`
  margin-bottom: 20px;
  font-size: 14px;
`

export const Close = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  color: ${cores.branco};
  font-size: 18px;
  cursor: pointer;
`

export const Button = styled.button`
  background-color: ${cores.bege};
  color: ${cores.rosa};
  border: none;
  font-weight: bold;
  padding: 4px 8px;
  margin-top: 12px;
  align-self: flex-start;
  cursor: pointer;
  margin-bottom: 20px;

  @media (max-width: ${breakpoints.tablet}) {
    align-self: center;
  }
`

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: 767px) {
    width: 100%;
    align-items: center;
    text-align: center;
  }
`
