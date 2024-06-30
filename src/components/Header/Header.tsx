import Navigation from "../Navigation/Navigation";
import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => (
  <HeaderStyled className="main-header">
    <img
      src="/images/logo_245.svg"
      alt="ReCharge-BCN logo on blue letters"
      className="main-header__logo"
    />
    <Navigation />
  </HeaderStyled>
);

export default Header;
