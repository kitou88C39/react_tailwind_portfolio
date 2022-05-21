import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-2xl sm:text-7x1 font-bold text-green-500">
          {" "}
          Hi , my name is
        </p>
        <h1 className="text-5xl sm:text-7x1 font-bold text-white">
          Masaomi Kito
        </h1>
        <h2 className="text-3xl sm:text-7x1 font-bold text-white">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-[#fff] py-4 max-w-[700px]">
          I'm a full-stack developer specializing in building(and occasionally
          designing) exceptional digital experiences. Currently, I'm focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-green-500 hover:border-green-500">
            View Work
            <span className="group:hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
