import React, {useRef} from "react";
import { motion } from "framer-motion";
import ArrowIcon from "../../Icons/ArrowIcon";
import Kilid from "./Descriptions/Kilid";
import Esafar from "./Descriptions/Esafar";
import Freelance from "./Descriptions/Freelance";
import Citex from "./Descriptions/Citex";
export default function WhereIHaveWorked() {
  const barRef = React.useRef<HTMLDivElement>(null);
  // ? INFORMATIONAL control the green position using px,
  // ? INFORMATIONAL the default value of barRef's class should be at the beginning translate-y-[0px]
  const GetDescription = () => {
    switch (DescriptionJob) {
      case "Kilid":
        return <Kilid />;
      case "Esafar":
        return <Esafar />;
      case "Freelance":
        return <Freelance />;
      case "Citex":
        return <Citex />;
    }
  };
  const [DescriptionJob, setDescriptionJob] = React.useState("Kilid");
  return (
    <div id={'WhereIhaveWorkedSection'} data-aos="fade-up" className="flex flex-col items-center justify-center py-24 space-y-12 bg-AAprimary">
      {/* // ? Title "Where I've Worked" */}
      <section className="flex flex-row items-center">
        <div className="flex flex-row items-center">
          <ArrowIcon className={"flex-none h-4 md:h-6 w-4 md:w-5 text-AAsecondary"} />
          <span className="text-AAsecondary font-sans text-sm  sm:text-xl"> 02.</span>
        </div>

        <span className="text-gray-200 opacity-85 font-bold tracking-wider text-lg md:text-2xl px-3">
          Where I&apos;ve Worked
        </span>
        <div className="bg-gray-400 h-[0.2px] w-16 sm:w-44 md:w-80"></div>
      </section>
      {/* // ? Where I've Worked Content section */}
      <section
        className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0
      justify-center md:justify-center items-center md:items-start "
      >
        {/* // ? Left side of Where I've Worked, contains the bar and name of companies */}
        <CompaniesBar setDescriptionJob={setDescriptionJob} />
        {/* // ? Description for The job */}
        {GetDescription()}
      </section>
    </div>
  );
}

const CompaniesBar = props => {
  const [barPosition, setBarPosition] = React.useState<number>(35); // Green bar position by the default it's -20px
  const [barAbovePosition, setBarAbovePosition] = React.useState<number>(0);
  const [scrollPosition, setScrollPosition] = React.useState<number>(0);
  const [companyNameBackgroundColorGreen, setCompanyNameBackgroundColorGreen] = React.useState<boolean[]>([
    true,
    false,
    false,
    false,
  ]);
  const scrollRef = useRef(null);

  const scroll = (scrollPosition) => {
    scrollRef.current.scrollTo(scrollPosition, scrollRef.current.scrollHeight);
  }
  const CompanyButton = props => {
    return (
      <button
        onClick={() => {
          scroll(props.scrollPosition)
          setBarPosition(props.BarPosition);
          setBarAbovePosition(props.BarAvobePosition);
          props.setDescriptionJob(props.DescriptionJob);
          setCompanyNameBackgroundColorGreen(props.CompanyNameBackgroundColorGreen);
        }}
        className={`flex-none sm:text-sm text-xs text-center md:text-left  hover:text-AAsecondary
             hover:bg-ResumeButtonHover rounded  font-mono  
             py-3 md:pl-6 md:px-4 md:w-44 w-32 duration-500
             ${
               companyNameBackgroundColorGreen[props.ButtonOrderOfcompanyNameBackgroundColorGreen]
                 ? "bg-ResumeButtonHover text-AAsecondary"
                 : "text-gray-500"
             }`}
      >
        {props.CompanyName}
      </button>
    );
  };

  return (
    <div
        ref={scrollRef}
      id="WhereIhaveWorkedSection"
      className=" flex flex-col md:flex-row  w-screen md:w-auto 
      overflow-auto scrollbar-hide md:overflow-hidden pb-4 md:pb-0 justify-start
       sm:justify-center items-start sm:items-center"
    >
      {/* // ? left bar Holder */}
      <div
        className=" hidden md:block bg-gray-500 relative h-0.5 w-34 md:h-64 translate-y-1 md:w-0.5  
        rounded md:order-1 order-2  "
      >
        {/* // ? animated left bar */}
        <motion.div
          animate={{ y: barPosition }}
          // ref={barRef}
          className={`absolute w-10 h-0.5 md:w-0.5 md:h-12 rounded bg-AAsecondary `}
        ></motion.div>
      </div>
      {/* // ? Companies name as buttons */}
      <div className="flex flex-col md:order-2 order-1 space-y-1 pl-8 md:pl-0 ">
        <div className="flex flex-row md:flex-col">
          {/*<CompanyButton*/}
          {/*  ButtonOrderOfcompanyNameBackgroundColorGreen={0}*/}
          {/*  CompanyName="TrouveTavoie"*/}
          {/*  BarPosition={-8}*/}
          {/*  BarAvobePosition={1}*/}
          {/*  DescriptionJob="TrouveTavoie"*/}
          {/*  CompanyNameBackgroundColorGreen={[true, false, false, false, false]}*/}
          {/*  setDescriptionJob={props.setDescriptionJob}*/}
          {/*/>*/}
          {/*<CompanyButton*/}
          {/*  ButtonOrderOfcompanyNameBackgroundColorGreen={1}*/}
          {/*  CompanyName="FeverTokens"*/}
          {/*  BarPosition={36}*/}
          {/*  BarAvobePosition={129}*/}
          {/*  DescriptionJob="FeverTokens"*/}
          {/*  CompanyNameBackgroundColorGreen={[false, true, false, false, false]}*/}
          {/*  setDescriptionJob={props.setDescriptionJob}*/}
          {/*/>*/}
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={0}
            CompanyName="Kilid"
            BarPosition={35}
            BarAvobePosition={1}
            scrollPosition = {0}
            DescriptionJob="Kilid"
            CompanyNameBackgroundColorGreen={[true, false, false, false]}
            setDescriptionJob={props.setDescriptionJob}
          />
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={1}
            CompanyName="Esafar"
            BarPosition={78}
            BarAvobePosition={126}
            scrollPosition = {95}
            DescriptionJob="Esafar"
            CompanyNameBackgroundColorGreen={[false, true, false, false]}
            setDescriptionJob={props.setDescriptionJob}
          />
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={2}
            CompanyName="Citex"
            BarPosition={122}
            BarAvobePosition={255}
            scrollPosition = {170}
            DescriptionJob="Citex"
            CompanyNameBackgroundColorGreen={[false, false, true, false]}
            setDescriptionJob={props.setDescriptionJob}
          />
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={3}
            CompanyName="Freelance"
            BarPosition={167}
            BarAvobePosition={388}
            scrollPosition = {200}
            DescriptionJob="Freelance"
            CompanyNameBackgroundColorGreen={[false, false, false, true]}
            setDescriptionJob={props.setDescriptionJob}
          />
        </div>
        <div className="block md:hidden w-[760px] h-0.5 rounded bg-gray-500">
          <motion.div  animate={{ x: barAbovePosition }} className="w-[128px] h-0.5 rounded bg-AAsecondary"></motion.div>
        </div>
      </div>
    </div>
  );
};
