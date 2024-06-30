import { useContext } from "react";
import useMap from "../../hooks/useMap/useMap";
import { ChargingLocationStructure } from "../../types";
import capitalizeFirst from "../../utils/capitalizeFirst";
import Button from "../Button/Button";
import LocationCardStyled from "./LocationCardStyled";
import MapContext from "../../store/features/map/MapContext";

interface LocationCardProps {
  location: ChargingLocationStructure;
}

const LocationCard = ({
  location: {
    address: { address_string },
    access_restriction,
  },
  location,
}: LocationCardProps): React.ReactElement => {
  const { seeDetails } = useMap();
  const { map } = useContext(MapContext);

  return (
    <LocationCardStyled className="location-card">
      <address className="location-card__address">
        <img
          src="/images/location_icon_24px.svg"
          alt="bule location icon"
          width="20"
          height="20"
        />
        {address_string}
      </address>
      <span className="location-card__status">
        {capitalizeFirst(access_restriction)}
      </span>
      <Button
        actionOnClick={() => {
          seeDetails(location, map);
        }}
        type={"button"}
        text={"See on map"}
        modifier={"button--details"}
        isDisabled={false}
      />
    </LocationCardStyled>
  );
};

export default LocationCard;
