import Slider from "./Slider";

const Hero = () => {
  return (
    <div className="">
      {/* layer with opacity  */}
      <div className="absolute  h-[100vh] w-full bg-black opacity-30"></div>

      <Slider />
    </div>
  );
};

export default Hero;
