import { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Table from "../../components/Table/Table";
import useMotorbikeLocationApi from "../../hooks/useMotorbikeLocationApi";
import { useAppDispatch } from "../../store/hooks";
import { loadMotorbikesActionCreator } from "../../store/features/motorbikes/motorbikeSlice";

const TablePage = () => {
  const { getBikeLocations } = useMotorbikeLocationApi();
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const motorbikes = await getBikeLocations();

      if (motorbikes) {
        dispatch(loadMotorbikesActionCreator(motorbikes));
      }
    })();
  }, [dispatch, getBikeLocations]);

  return (
    <>
      <Hero />
      <Table />
    </>
  );
};

export default TablePage;
