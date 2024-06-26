const Footer = (): React.ReactElement => (
  <footer className="footer">
    <span className="footer__container"></span>
    <button className="footer__button">Contact us!</button>
    <div className="footer__text-container">
      <div className="footer__address-container">
        <img
          src="/images/host-location-icon.svg"
          alt="Light blue location icon"
        />
        <address className="footer__address">Carrer de Calàbria, 66</address>
      </div>
      <div className="footer__phone-container">
        <img
          src="/images/phone-icon.svg"
          alt="Light blue phone icon"
          width="16"
          height="16"
        />
        <span className="footer__phone">937 064 866</span>
      </div>
      <div className="footer__web-container">
        <img
          src="/images/world-wide-web-icon.svg"
          alt="Light blue world icon"
          width="16"
          height="16"
        />
        <span className="footer__website">www.endolla.barcelona</span>
      </div>
    </div>
  </footer>
);

export default Footer;
