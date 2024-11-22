import HGap from "../../utils/HGap";
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import Projects from "../Projects/Projects";
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
      <Projects></Projects>
      <HGap></HGap>
      <Contact></Contact>
      <HGap></HGap>
      <Blog></Blog>
      <HGap></HGap>
    </div>
  );
};

export default Home;
