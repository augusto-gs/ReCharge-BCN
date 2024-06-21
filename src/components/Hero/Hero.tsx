import Button from "../Button/Button";

const Hero = () => (
  <section className="hero">
    <img
      src="/images/bike_images.jpg"
      alt="Electric bikes parked on the street on paralel"
      className="hero__image"
      width="1444px"
      height="558px"
    />
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
  </section>
);

export default Hero;
