import styled from 'styled-components'

export const Lista = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
  margin-top: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
