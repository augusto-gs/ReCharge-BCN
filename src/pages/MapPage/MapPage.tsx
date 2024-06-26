import MapDisplay from "../../components/MapDisplay/MapDisplay";
import MapPageStyled from "./MapPageStyled";

const MapPage = (): React.ReactElement => {
  return (
    <MapPageStyled className="map-page">
      <MapDisplay />
    </MapPageStyled>
  );
};

export default MapPage;
