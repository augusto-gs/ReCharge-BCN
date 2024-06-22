import Header from "../Header/Header";
import ContainerStyled from "../../../styles/shared/ContainerStyled";
import { Routes, Navigate, Route } from "react-router-dom";
import TablePage from "../../Pages/TablePage/TablePage";

const App = (): React.ReactElement => {
  return (
    <ContainerStyled className="main-container">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<TablePage />} />
      </Routes>
    </ContainerStyled>
  );
};

export default App;
