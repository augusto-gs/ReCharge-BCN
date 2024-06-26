import { NavLink } from "react-router-dom";
import NavigationStyled from "./NavigationStyled";

const Navigation = (): React.ReactElement => (
  <NavigationStyled className="navigation-bar">
    <ul className="navigation-bar__container">
      <li className="navigation-bar__link-container">
        <NavLink to={"/home"} className="navigation-bar__link">
          <span className="navigation-bar__text">Home</span>
        </NavLink>
      </li>
      <li className="navigation-bar__link-container">
        <NavLink to={"/map"} className="navigation-bar__link">
          <span className="navigation-bar__text">Map</span>
        </NavLink>
      </li>
    </ul>
  </NavigationStyled>
);

export default Navigation;
