import Hero from "../../components/Hero/Hero";
import Table from "../../components/Table/Table";
import { useAppSelector } from "../../store/hooks";
import removeCarLocationChargers from "../../utils/removeCarLocationChargers";

const TablePage = () => {
  const { locations } = useAppSelector(
    (state) => state.motorbikesLocationState,
  );

  const motorbikeLocations = removeCarLocationChargers(locations);

  return (
    <>
      <Hero />
      <Table locations={motorbikeLocations} />
    </>
  );
};

export default TablePage;
