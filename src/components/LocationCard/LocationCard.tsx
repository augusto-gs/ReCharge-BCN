import ChargingLocationStructure from "../../types";
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
  const capitalizeFirst = () => {
    return (
      access_restriction.charAt(0).toUpperCase() +
      access_restriction.toLowerCase().slice(1)
    );
  };

  return (
    <LocationCardStyled className="location-card">
      <span className="location-card__address">{address_string}</span>
      <span className="location-card__status">{capitalizeFirst()}</span>
      <Button
        actionOnClick={() => {}}
        type={"button"}
        text={"Details"}
        modifier={"button--detail"}
        isDisabled={false}
      />
    </LocationCardStyled>
  );
};

export default LocationCard;
