const Home = () => {
  return (
    <div className=" container flex flex-col pt-16 lg:pt-20 items-center">
      <div className="left text-center flex flex-col items-center gap-4 lg:gap-6 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl ClashGrotesk font-semibold">
          Your Safety, Our <span className="yellow_gradient">Priority</span>
        </h1>
        <p className="w-full text-sm sm:w-[75ch] sm:text-base lg:w-[75ch] lg:text-xl">
          Providing top-tier security solutions to ensure your peace of mind.
          Dedicated to safeguarding your assets and ensuring a secure
          environment.
        </p>
        <h1 className="text-lg Technor tracking-wider">
          <span className="text-xl ">~</span> Securing Tomorrow, Today!
        </h1>
        <a href="#Services">
          <button className="Home_Btn mt-6 ClashGrotesk text-sm font-medium tracking-wider">
            Our Services
          </button>
        </a>
        <div className="imgdiv w-full sm:w-[480px] xl:w-[550px] xl:mt-4">
          <img
            src="/Companylogo1.png"
            className="w-full h-full"
            alt="Company Star"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
