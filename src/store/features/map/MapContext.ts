import Feature from "ol/Feature";
import { Geometry } from "ol/geom";
import VectorLayer from "ol/layer/Vector";
import Map from "ol/Map";
import VectorSource from "ol/source/Vector";

import { createContext } from "react";

interface MapContextProps {
  map: Map;
  vector: VectorLayer<Feature<Geometry>>;
  source: VectorSource<Feature>;
}

const MapContext = createContext<MapContextProps>({} as MapContextProps);

export default MapContext;
