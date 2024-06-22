import ChargingLocationStructure from "../../types";
import Button from "../Button/Button";

interface LocationCardProps {
  location: ChargingLocationStructure;
}

const LocationCard = ({
  location: {
    address: { address_string },
    access_restriction,
  },
}: LocationCardProps): React.ReactElement => (
  <article className="location-card">
    <span className="location-card__address">{address_string}</span>
    <span className="location-card__status">{access_restriction}</span>
    <Button
      actionOnClick={() => {}}
      type={"button"}
      text={"Details"}
      modifier={"button--detail"}
      isDisabled={false}
    />
  </article>
);

export default LocationCard;
