interface ButtonProps {
  actionOnClick: () => void;
  type: "submit" | "button";
  text: string;
  modifier: "button--hero";
  isDisabled: boolean;
}

const Button = ({
  text,
  actionOnClick,
  isDisabled,
  modifier,
  type,
}: ButtonProps) => (
  <button
    className={`button ${modifier}`}
    onClick={actionOnClick}
    disabled={isDisabled}
    type={type}
  >
    {text}
  </button>
);

export default Button;
