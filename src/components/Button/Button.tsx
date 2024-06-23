import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  actionOnClick: () => void;
  type: "submit" | "button";
  text: string;
  modifier: "button--hero" | "button--details";
  isDisabled: boolean;
}

const Button = ({
  text,
  actionOnClick,
  isDisabled,
  modifier,
  type,
}: ButtonProps) => (
  <ButtonStyled
    className={`button ${modifier}`}
    onClick={actionOnClick}
    disabled={isDisabled}
    type={type}
  >
    {text}
  </ButtonStyled>
);

export default Button;
