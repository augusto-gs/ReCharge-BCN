import FooterStyled from "./FooterStyled";

const Footer = (): React.ReactElement => (
  <FooterStyled className="footer">
    <span className="footer__trademark">© 2024 All Rights Reserved</span>
    <button className="footer__button">
      <a href="https://endolla.barcelona/ca/contacte" target="_blank">
        Contact us
      </a>
    </button>
    <ul className="footer__text-container">
      <li className="footer__list-item">
        <img
          src="/images/host-location-icon.svg"
          alt="Light blue location icon"
          width="16"
          height="16"
        />
        <span className="footer__address">Carrer de Calàbria, 66</span>
      </li>
      <li className="footer__list-item">
        <img
          src="/images/phone-icon.svg"
          alt="Light blue phone icon"
          width="16"
          height="16"
        />
        <span className="footer__phone">937 064 866</span>
      </li>
      <li className="footer__list-item">
        <img
          src="/images/world-wide-web-icon.svg"
          alt="Light blue world icon"
          width="16"
          height="16"
        />
        <span className="footer__website">www.endolla.barcelona</span>
      </li>
    </ul>
  </FooterStyled>
);

export default Footer;
