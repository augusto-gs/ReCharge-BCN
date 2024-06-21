import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import ContainerStyled from "../../../styles/shared/ContainerStyled";

const App = (): React.ReactElement => {
  return (
    <ContainerStyled className="main-container">
      <Header />
      <Hero />
    </ContainerStyled>
  );
};

export default App;
