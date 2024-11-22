import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoSchoolSharp } from "react-icons/io5";
const Education = () => {
  return (
    <>
      <div className="bg-[#AB886D] text-center text-5xl py-10 h-1/4 rounded-b-full text-[#E4E0E1] pt-10 mb-10">
        <span className="font-extrabold">Education</span>
      </div>
      <div className="min-h-screen pb-20">
        <div>
          <VerticalTimeline>
            <VerticalTimelineElement
              date="2010 - 2015"
              iconStyle={{ background: "#D6C0B3", color: "#493628" }}
              icon={<IoSchoolSharp />}
            >
              <div className="">
                <h3>Kanaipur High School</h3>
                <p>Secondary School Education</p>
                <p>Science</p>
                <p>5.00 out of 5.00</p>
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="2016 - 2018"
              iconStyle={{ background: "#D6C0B3", color: "#493628" }}
              icon={<IoSchoolSharp />}
            >
              <div className="">
                <h3>Government Rajendra College</h3>
                <p>Higher Secondary School Education</p>
                <p>Science</p>
                <p>4.33 out of 5.00</p>
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="2019 - 2023 "
              iconStyle={{ background: "#D6C0B3", color: "#493628" }}
              icon={<IoSchoolSharp />}
            >
              <div className="">
                <h3>Brac University</h3>
                <p>Bachelor's in Computer Science and Engineering</p>
                <p>3.49 out of 4.00</p>
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="2024 - present"
              iconStyle={{ background: "#D6C0B3", color: "#493628" }}
              icon={<IoSchoolSharp />}
            >
              <div className="">
                <h3>Brac University</h3>
                <p>Master's in Computer Science and Engineering</p>
                <p>3.85 out of 4.00</p>
              </div>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default Education;
