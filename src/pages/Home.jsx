import React from "react";
import iphoneMock from "../assets/iphoneMock.jpg";
import iphoneMock1 from "../assets/iphonem1.jpg";
import iphoneMock2 from "../assets/iphonem2.webp";


const Home = () => {
  return (
    <div className="mx-10 flex flex-col border-gray-400">
      <div className="text-[#414141]">
        <h1 className="text-5xl p-10">
          Generate Mockups Easily
        </h1>
      </div>
      <div className="flex flex-row">
        <img className="w-1/3" src={iphoneMock} alt=""></img>
        <img className="w-1/3" src={iphoneMock1} alt="" />
        <img className="w-1/3" src={iphoneMock2} alt="" />
      </div>
    </div>
  );
};

export default Home;
