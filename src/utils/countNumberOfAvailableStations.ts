import { Station } from "../types";

const countNumberOfAvailablePorts = (stations: Station[]) => {
  const result = stations.reduce(
    (accumulator, station) => {
      station.ports.forEach((port) => {
        accumulator.totalPorts += 1;

        if (port.port_status[0].status === "AVAILABLE") {
          accumulator.availablePorts += 1;
        }
      });

      return accumulator;
    },
    { totalPorts: 0, availablePorts: 0 },
  );

  return result;
};

export default countNumberOfAvailablePorts;
