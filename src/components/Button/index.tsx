import { ButtonHTMLAttributes } from "react";

import { ButtonComponent, ButtonContainer } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, ButtonComponent {
  text: String;
}

const Button: React.FC<ButtonProps> = ({ text, ...rest }) => {
  return <ButtonContainer {...rest}>{text}</ButtonContainer>;
}

export default Button;