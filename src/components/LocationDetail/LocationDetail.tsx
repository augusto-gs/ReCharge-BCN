import { ChargingLocationStructure } from "../../types";
import countNumberOfAvailableStations from "../../utils/countNumberOfAvailableStations";
import Button from "../Button/Button";
import LocationDetailStyled from "./LocationDetailStyled";

interface LocationDetailProps {
  location: ChargingLocationStructure;
}

const LocationDetail = ({
  location: {
    address: { address_string },
    stations,
  },
}: LocationDetailProps): React.ReactElement => {
  const { availablePorts, totalPorts } =
    countNumberOfAvailableStations(stations);

  return (
    <LocationDetailStyled className="location-detail">
      <Button
        actionOnClick={() => {}}
        type={"button"}
        text={"x"}
        modifier={"button--closer"}
        isDisabled={false}
      />
      <li className="location-detail__address">{address_string}</li>
      <li className="location-chargers">{`Available chargers: ${availablePorts}/${totalPorts}`}</li>
    </LocationDetailStyled>
  );
};

export default LocationDetail;
