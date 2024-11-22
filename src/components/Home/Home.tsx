import HGap from "../../utils/HGap";
import Banner from "../Banner/Banner";
import Education from "../Education/Education";

const Home = () => {
  return (
    <div className="bg-[#D6C0B3] min-h-screen">
      <Banner></Banner>
      <HGap></HGap>
      <Education></Education>
    </div>
  );
};

export default Home;
