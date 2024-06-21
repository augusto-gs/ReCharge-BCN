import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled className="main-header">
      <img
        src="https://i.ibb.co/Cmm8xvN/recharge-bcn-high-resolution-logo-transparent-1.webp"
        alt="ReCharge-BCN logo on blue letters"
        width="122px"
        height="22px"
        className="main-header__logo"
      />
    </HeaderStyled>
  );
};

export default Header;
