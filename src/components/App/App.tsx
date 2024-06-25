import Header from "../Header/Header";
import ContainerStyled from "../../../styles/shared/ContainerStyled";
import { Routes, Navigate, Route } from "react-router-dom";
import TablePage from "../../Pages/TablePage/TablePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const App = (): React.ReactElement => (
  <ContainerStyled className="main-container">
    <ToastContainer />
    <Header />
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<TablePage />} />
    </Routes>
  </ContainerStyled>
);

export default App;
