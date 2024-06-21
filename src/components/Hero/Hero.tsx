import Button from "../Button/Button";
import HeroStyled from "./HeroStyled";

const Hero = () => (
  <HeroStyled className="hero">
    <div className="hero__layout">
      <h1 className="hero__title">Find your motorbike</h1>
      <p className="hero__introduction">
        Find the nearest available charging points for your electric motorbike
        effortlessly. Start your journey with a full charge today!
      </p>
      <Button
        actionOnClick={() => {}}
        type={"button"}
        text={"Map"}
        modifier={"button--hero"}
        isDisabled={false}
      />
    </div>
  </HeroStyled>
);

export default Hero;
