import styled from 'styled-components'
import { cores } from '../../styles'
import { IMaskInput } from 'react-imask'

export const FormTitle = styled.h2`
  color: ${cores.bege};
  font-size: 16px;
  margin-bottom: 16px;
  margin-top: 32px;
  font-weight: bold;
`

export const Input = styled.input<{ $hasError?: boolean }>`
  background: ${cores.bege};
  border: ${(props) => (props.$hasError ? '2px solid red' : 'none')};
  padding: 8px;
  width: 100%;
`

export const TextArea = styled.textarea<{ $hasError?: boolean }>`
  background: ${cores.bege};
  border: ${(props) => (props.$hasError ? '2px solid red' : 'none')};
  padding: 8px;
  width: 100%;
  margin-bottom: 24px;
`

export const Row = styled.div`
  display: flex;
  gap: 30px;
`

export const Button = styled.button`
  background: ${cores.bege};
  color: ${cores.rosa};
  border: none;
  padding: 4px;
  font-weight: bold;
  cursor: pointer;
`

export const Message = styled.p`
  color: ${cores.branco};
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 24px;
`

export const Label = styled.label`
  color: ${cores.bege};
  font-size: 14px;
  font-weight: bold;
`

export const MaskedInput = styled(IMaskInput)<{ $hasError?: boolean }>`
  width: 100%;
  padding: 8px;
  background: ${cores.bege};
  border: ${(props) => (props.$hasError ? '2px solid red' : 'none')};
  font-size: 14px;
  margin-bottom: 12px;
  margin-top: 12px;
`
