import React from "react";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-colssm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/*------left section---- */}
        <div>
          <img className="mb-5 w-40" src="logo.svg" alt=" a logo" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu f{" "}
          </p>
        </div>

        {/*------center section---- */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About</li>
            <li>Contact us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/*------right section---- */}
        <div>
          <p className="text-xl font-medium mb-5">Get in Touch</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>23-45-6789</li>
            <li>mkjgg@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* {} */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025@ kavita -All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
