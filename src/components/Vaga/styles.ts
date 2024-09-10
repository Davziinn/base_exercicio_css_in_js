import styled from 'styled-components'

export const VagaContainer = styled.li`
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px 0;
  list-style: none;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`

export const VagaTitulo = styled.h3`
  font-size: 20px;
  margin-bottom: 12px;
  color: #333;
`

export const VagaLink = styled.a`
  display: inline-block;
  margin-top: 16px;
  padding: 8px 16px;
  background-color: #a7727d;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  trasition: background-color 0.3s ease;

  &:hover {
    background-color: #f9f5e7;
    color: #000;
  }
`
