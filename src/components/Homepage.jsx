import Lanyard from "../components/Lanyard";


const Homepage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-brown via-brown-800 to-brown-950 text-white flex flex-col">
      <div className="flex-1 flex flex-col md:flex-row items-center justify-evenly px-6 md:px-36">
        <div className="max-w-lg text-center md:text-left mt-5">
          <h1 className="text-l md:text-6xl font-bold leading-tight mb-4 sm:mb-6 sm:mt-8">
           Haii..!!
          </h1>
          <p className="text-yellow-600 text-3xl  uppercase tracking-widest mb-6">
          I am Sentot Ali Basah 
          </p>
          <p className="text-gray-200 text-3xl  leading-relaxed">
          A Data Scientist who is passionate about turning data into insights, exploring AI, Machine Learning & analytics to solve real-world problems.
          </p>
        </div>

        {/* Lanyard */}
        <div className="col-span-6 relative">
          <Lanyard position={[0, 0, 8]} gravity={[0, -30, 0]} />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
