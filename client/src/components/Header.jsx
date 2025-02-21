import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20">
      {/* -----------left side--------- */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px] ">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
          Book Appointment
          <br />
          With Trusted Doctors
        </p>
        <div className="flex flex-col md:flex-row item-center gap-3 text-white text-sm font-light">
          <img className="w-28" src="group_profiles.png" />
          <p>
            Simply browse through our extensive list of trusted doctors,
            <br />
            Schedule your appointment
          </p>
        </div>
        <a href="#speciality">
          Book Appointment
          <img src="arrow_icon.svg" />
        </a>
      </div>
      {/* ------right side---------- */}
      <div className="md:w-1/2 relative">
        <img
          className="w-full md:absolute bottom-0 h-auto rounded-lg"
          src="header_img.png"
        />
      </div>
    </div>
  );
};

export default Header;
