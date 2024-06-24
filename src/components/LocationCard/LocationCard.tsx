import ChargingLocationStructure from "../../types";
import capitalizeFirst from "../../utils/capitalizeFirst";
import Button from "../Button/Button";
import LocationCardStyled from "./LocationCardStyled";

interface LocationCardProps {
  location: ChargingLocationStructure;
}

const LocationCard = ({
  location: {
    address: { address_string },
    access_restriction,
  },
}: LocationCardProps): React.ReactElement => {
  return (
    <LocationCardStyled className="location-card">
      <address className="location-card__address">{address_string}</address>
      <span className="location-card__status">
        {capitalizeFirst(access_restriction)}
      </span>
      <Button
        actionOnClick={() => {}}
        type={"button"}
        text={"Details"}
        modifier={"button--details"}
        isDisabled={false}
      />
    </LocationCardStyled>
  );
};

export default LocationCard;
