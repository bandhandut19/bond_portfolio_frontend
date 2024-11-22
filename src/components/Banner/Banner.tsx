import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="grid lg:grid-cols-2  lg:gap-2 gap-10 items-center justify-center lg:pt-20 pt-10 text-[#E4E0E1]">
      <div className="items-center justify-center flex">
        <img
          className="w-2/3 bg-[#AB886D] rounded-e-badge"
          src="https://i.postimg.cc/hPyw8nb2/suit-01-Photoroom.png"
        ></img>
      </div>
      <div className="grid lg:gap-5 gap-2 grid-rows-3 lg:pb-0 pb-10">
        <div className="bg-[#AB886D] text-center lg:rounded-s-badge font-extrabold lg:text-5xl text-xl py-1">
          <span>Bondon Datta</span>
        </div>
        <div className="bg-[#AB886D]  lg:rounded-s-badge text-center lg:text-2xl font-bold text-xl py-2">
          <span>Mern Stack Developer</span>
        </div>
        <div className="bg-[#AB886D] cursor-pointer lg:rounded-s-badge animate-pulse text-center lg:text-2xl font-bold text-xl py-2">
          <Link
            to={
              "https://drive.google.com/file/d/1YBKUXB6OxOY-_IkzlS3TUmSGZOScyhrJ/view?usp=sharing"
            }
            target="_blank"
          >
            <span>Download CV</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
