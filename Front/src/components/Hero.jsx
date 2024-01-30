import Slider from "./Slider";

const Hero = () => {
  return (
    <>
      {/* layer with opacity  */}
      <div className="absolute  h-[100vh] w-full bg-black opacity-30"></div>
      <Slider />
    </>
  );
};

export default Hero;
