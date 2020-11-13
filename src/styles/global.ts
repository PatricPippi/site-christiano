import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;
  }
  @media(max-width: 700px) {
    * {
      font-size: 12px;
    }

  }
` 