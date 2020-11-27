import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  display: flex;
  height: 70vw;
  h1 {
    font-size: 2rem;
    width: 75%;
    color: ${props => props.theme.color.primatyInverted};
    font-weight: ${props => props.theme.fonts.regular};
  }
  Button {
    width: 75%;
  }

  @media(min-width: 767px) {
    justify-content: space-between;
    height: 100%;
  }

`;

export const Search = styled.div`
  @media(max-width: 1023px) {
    display: none;
  }

  width: 75%;
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  margin-top: 15px;

  *{
    margin-bottom: 15px;
  }
`;

export const HeaderImage = styled.div`
  position: absolute;
  width: 100%;
  z-index: -1;
  top: 0;

  @media(min-width: 767px) {
   position: relative;
   justify-self: flex-end;
   width: 50vw;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100vw;

  @media(min-width: 767px) {
    width: 50vw;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    padding-left: 10vw;

    h2 {
      position: absolute;
      top: 20px;
      left: 20px;
    }
  }
`;
