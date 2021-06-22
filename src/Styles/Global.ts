import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components'

const GlobalStyle = createGlobalStyle` 
  * {    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    text-decoration: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }

  :root{
      --snow: #E8F7EE;
      --text: rgb(114, 224, 228);
      --background: rgb(87, 86, 86);
      --complement: rgb(114, 114, 114);
  }

  html, body {
    font-size: 97.8%;

    color: var(--text);
    background-color: var(--background);
    font-family: 'Varela Round';
  }

  @media(max-width: 1200px){
        font-size: 99.8%;
  }

  @media(max-width: 350px){
      font-size: 84.5%;
  }
`

export default GlobalStyle

export const Container = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 20px;
`