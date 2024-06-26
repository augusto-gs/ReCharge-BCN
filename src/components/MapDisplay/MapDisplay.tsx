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

const MapDisplay = () => {
  const { getBikeLocations } = useMotorbikeLocationApi();

  const { locations } = useAppSelector(
    (state) => state.motorbikesLocationState,
  );

  const { hasMapLocations } = useMapLocations(hasAvailableLocations(locations));

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
    <MapDisplayStyled
      data-testid="map"
      id="map"
      tabIndex={0}
    ></MapDisplayStyled>
  );
};

export default MapDisplay;
