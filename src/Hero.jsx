import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga iure
            cum quaerat reiciendis rem veniam non dignissimos minima dolorem.
            Dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Numquam, nam doloremque amet aspernatur alias illum voluptates
            neque similique non voluptatum.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
