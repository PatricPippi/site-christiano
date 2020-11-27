import styled from 'styled-components';


export interface ButtonComponent {
  fullWidth?: Boolean,
  buttonColor?: "primary" | "secondary"
}

export const ButtonContainer = styled.button<ButtonComponent>`
  font-size: 1.2rem;
  outline: none;
  text-decoration: none;
  color: ${props => props.theme.color.buttonText};
  border: none;
  border-radius: 7px;
  padding: 10px;
  ${props => (props.fullWidth && "width: 100%;")}
  ${props => {
    switch (props.buttonColor) {
      case "primary":
        return `
          background-color: ${props.theme.color.primary};
        `;
      case "secondary":
      default:
        return `
          background-color: ${props.theme.color.secondary};
        `;
    }
  }}
  &:hover {
    filter: brightness(0.9);
    transition: 300ms;
  }

`;
