import Header from "../Header/Header";
import ContainerStyled from "../../../styles/shared/ContainerStyled";
import { Routes, Navigate, Route } from "react-router-dom";
import ToastStyled from "../../../styles/shared/ToastStyled";
import "react-toastify/dist/ReactToastify.min.css";
import MapPage from "../../pages/MapPage/MapPage";
import TablePage from "../../pages/TablePage/TablePage";
import { useEffect } from "react";
import useMotorbikeLocationApi from "../../hooks/useMotorbikeLocationApi/useMotorbikeLocationApi";
import { useAppDispatch } from "../../store/hooks";
import { loadMotorbikesActionCreator } from "../../store/features/motorbikes/motorbikeSlice";

const App = (): React.ReactElement => {
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
    <ContainerStyled className="main-container">
      <ToastStyled />
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<TablePage />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </ContainerStyled>
  );
};

export default App;
