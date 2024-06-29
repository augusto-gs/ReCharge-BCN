import "ol/ol.css";
import { useEffect, useRef } from "react";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat, toLonLat } from "ol/proj";
import VectorSource from "ol/source/Vector";
import Vector from "ol/layer/Vector";
import MapDisplayStyled from "./MapDisplayStyled";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import useMotorbikeLocationApi from "../../hooks/useMotorbikeLocationApi/useMotorbikeLocationApi";
import hasAvailableLocations from "../../utils/hasAvailableLocations";
import useMapLocations from "../../hooks/useMapLocations/useMapLocations";
import removeCarLocationChargers from "../../utils/removeCarLocationChargers";
import Overlay from "ol/Overlay";
import Button from "../Button/Button";
import { Point } from "ol/geom";
import Feature from "ol/Feature";
import Style from "ol/style/Style";
import Icon from "ol/style/Icon";
import Overlay from "ol/Overlay";
import Button from "../Button/Button";
import { Point } from "ol/geom";
import Feature from "ol/Feature";
import Style from "ol/style/Style";
import Icon from "ol/style/Icon";

const MapDisplay = () => {
  const mapContainerRef = useRef(null);
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

    const overlay = new Overlay({
      element: mapContainerRef.current!,
      autoPan: {
        animation: {
          duration: 250,
        },
      },
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
      overlays: [overlay],
    });

    const testPoint = new Point(fromLonLat([2.1734, 41.3851]));
    const testFeature = new Feature(testPoint);

    testFeature.setStyle(
      new Style({
        image: new Icon({
          anchor: [0, 1],
          src: "/images/phone-icon.svg",
        }),
      }),
    );

    source.addFeature(testFeature);

    source.addFeatures(hasMapLocations());

    map.on("click", (event) => {
      map.forEachFeatureAtPixel(event.pixel, (clickedFeature) => {
        if (clickedFeature) {
          const coordinate = event.coordinate;
          const featureCoordinate =
            clickedFeature.getProperties().geometry.flatCoordinates;

          const realCoordinate = toLonLat(featureCoordinate);

          overlay.setPosition(coordinate);
          console.log("Feature clicked:", clickedFeature.get("name"));
        }
      });
    });

    return () => map.setTarget();
  }, [hasMapLocations, dispatch, getBikeLocations, locations]);

  return (
    <MapDisplayStyled data-testid="map" id="map" tabIndex={0}>
      <div
        ref={mapContainerRef}
        style={{ width: "40px", height: "40px" }}
        id="popup"
        className="ol-popup"
      >
        <Button />
        <a href="hola" id="popup-closer" className="ol-popup-closer">
          hola
        </a>
        <div id="popup-content"></div>
      </div>
    </MapDisplayStyled>
  );
};

export default MapDisplay;
