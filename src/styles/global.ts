import styled,{ createGlobalStyle } from "styled-components";



export const Container = styled.div`
    width: 90%;
`;


export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    height: 100%;
  }

  @media(max-width: 700px) {
    body {
      font-size: 12px;
    }

  }
` 