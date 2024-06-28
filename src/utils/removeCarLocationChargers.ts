import { ChargingLocationStructure } from "../types";

const removeCarLocationChargers = (locations: ChargingLocationStructure[]) =>
  locations.map((location) => ({
    ...location,
    stations: location.stations.map((station) => ({
      ...station,
      ports: station.ports.filter((port) => port.notes !== ""),
    })),
  }));

export default removeCarLocationChargers;
