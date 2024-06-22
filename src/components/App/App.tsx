import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import ContainerStyled from "../../../styles/shared/ContainerStyled";
import Table from "../Table/Table";

const App = (): React.ReactElement => {
  return (
    <ContainerStyled className="main-container">
      <Header />
      <Hero />
      <Table />
    </ContainerStyled>
  );
};

export default App;
