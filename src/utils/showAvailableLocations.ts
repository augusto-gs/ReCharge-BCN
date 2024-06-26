import ChargingLocationStructure from "../types";

const showAvailableLocations = (locations: ChargingLocationStructure[]) => {
  const availableLocations = locations.filter((location) =>
    location.stations.some((station) =>
      station.ports.some((port) => port.port_status[0].status === "AVAILABLE"),
    ),
  );

  return availableLocations;
};

export default showAvailableLocations;
