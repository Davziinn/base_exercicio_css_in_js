import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --cor-principal: #a7727d;
    --cor-secundaria: #f9f5e7;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Lato, sans-serif;
    list-style: none;
  }

  body {
    padding-bottom: 120px;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px; /* Adiciona espaçamento lateral */
  }

  @media (max-width: 1024px) {
    .container {
      max-width: 90%; /* Ajustado para melhorar a responsividade */
      padding: 0 15px; /* Ajusta o padding lateral em telas menores */
    }
  }
`
