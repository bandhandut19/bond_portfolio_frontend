import HGap from "../../utils/HGap";
import Banner from "../Banner/Banner";
import Education from "../Education/Education";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <div className="bg-[#D6C0B3] min-h-screen">
      <Banner></Banner>
      <HGap></HGap>
      <Education></Education>
      <HGap></HGap>
      <Skills></Skills>
      <HGap></HGap>
    </div>
  );
};

export default Home;
