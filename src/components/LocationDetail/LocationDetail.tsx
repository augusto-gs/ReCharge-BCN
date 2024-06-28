import { ChargingLocationStructure } from "../../types";
import countNumberOfAvailableStations from "../../utils/countNumberOfAvailableStations";
import Button from "../Button/Button";

interface LocationDetailProps {
  location: ChargingLocationStructure;
}

const LocationDetail = ({
  location: {
    address: { address_string },
    stations,
  },
}: LocationDetailProps): React.ReactElement => {
  const [{ availablePorts, totalPorts }] =
    countNumberOfAvailableStations(stations);

  return (
    <div className="location-detail">
      <Button
        actionOnClick={() => {}}
        type={"button"}
        text={""}
        modifier={"button--closer"}
        isDisabled={false}
      />
      <span className="location-detail__address">{address_string}</span>
      <span className="location-chargers">{`Available chargers${availablePorts}/${totalPorts}`}</span>
    </div>
  );
};

export default LocationDetail;
