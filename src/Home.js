import Navbar from "./Navbar";
import GIF from "./BeeSustainable.gif";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-[#FFF3AC] to-[#F4B04E] min-h-screen flex flex-col">
      <Navbar />
      <div className="flex justify-start items-center mx-4 mt-8">
        <h1 className="text-4xl font-bold">
          Bees are the original environmentalists – they've been buzzing about sustainability long before it was cool.
          They're the real eco-hive-minded champions!
        </h1>
      </div>
      <div className="flex justify-center items-center mt-4">
        <img src={GIF} alt="Flowers in Chania" />
      </div>
    </div>
  );
};

export default Home;
