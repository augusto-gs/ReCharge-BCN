import "ol/ol.css";
import { useEffect } from "react";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import VectorSource from "ol/source/Vector";
import Vector from "ol/layer/Vector";
import MapDisplayStyled from "./MapDisplayStyled";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import useMotorbikeLocationApi from "../../hooks/useMotorbikeLocationApi/useMotorbikeLocationApi";
import hasAvailableLocations from "../../utils/hasAvailableLocations";
import useMapLocations from "../../hooks/useMapLocations/useMapLocations";
import removeCarLocationChargers from "../../utils/removeCarLocationChargers";
import LocationDetail from "../LocationDetail/LocationDetail";
import { locationMock } from "../../mocks/locationMock";

const MapDisplay = () => {
  const { getBikeLocations } = useMotorbikeLocationApi();

  const { locations } = useAppSelector(
    (state) => state.motorbikesLocationState,
  );

  const motorbikeLocations = removeCarLocationChargers(locations);

  const { hasMapLocations } = useMapLocations(
    hasAvailableLocations(motorbikeLocations),
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    const source = new VectorSource({
      wrapX: false,
    });

    const vector = new Vector({
      source: source,
    });

    const tileLayer = new TileLayer({
      source: new OSM({
        wrapX: false,
      }),
    });

    const map = new Map({
      target: "map",
      layers: [tileLayer, vector],
      view: new View({
        center: fromLonLat([2.1734, 41.3851]),
        zoom: 12,
        maxZoom: 18,
        minZoom: 8,
      }),
    });

    source.addFeatures(hasMapLocations());

    return () => map.setTarget();
  }, [hasMapLocations, dispatch, getBikeLocations, locations]);

  return (
    <MapDisplayStyled data-testid="map" id="map" tabIndex={0}>
      <LocationDetail location={locationMock} />
    </MapDisplayStyled>
  );
};

export default MapDisplay;
