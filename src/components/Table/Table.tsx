import locations from "../../data/bikeData";
import LocationCard from "../LocationCard/LocationCard";
import TableStyled from "./TableStyled";

const Table = () => (
  <TableStyled className="charging-points">
    <h2 className="charging-points__title">Charging points</h2>
    <p className="charging-points__introduction">
      Look for the different charging ports available in the city{" "}
    </p>
    <ul className="table">
      {locations.map((location) => (
        <li className="table__item" key={location.id}>
          {<LocationCard location={location} />}
        </li>
      ))}
    </ul>
  </TableStyled>
);

export default Table;
