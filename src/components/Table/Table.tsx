import { useAppSelector } from "../../store/hooks";
import { ChargingLocationStructure } from "../../types";
import Loading from "../Loading/Loading";
import LocationCard from "../LocationCard/LocationCard";
import TableStyled from "./TableStyled";

interface TableProps {
  locations: ChargingLocationStructure[];
}

const Table = ({ locations }: TableProps): React.ReactElement => {
  const { isLoading } = useAppSelector((state) => state.uiState);

  return (
    <TableStyled className="charging-points">
      <h2 className="charging-points__title">Charging points</h2>
      <p className="charging-points__introduction">
        Look for the different charging ports available in the city{" "}
      </p>
      <ul className="table">
        {isLoading ? <Loading /> : null}
        {locations.map((location: ChargingLocationStructure) => (
          <li className="table__item" key={location.id}>
            {<LocationCard location={location} />}
          </li>
        ))}
      </ul>
    </TableStyled>
  );
};

export default Table;
