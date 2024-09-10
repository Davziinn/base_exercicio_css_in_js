import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 8px.;
`

export const Campo = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solida #ccc;
  border-radius: 4px;
  font-size: 16px;
`

export const Botao = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #a7727d;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f9f5e7;
    color: #000;
  }
`
