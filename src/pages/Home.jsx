import React from "react";
import iphoneMock from "../assets/iphoneMock.jpg";
import iphoneMock1 from "../assets/iphonem1.jpg";
import iphoneMock2 from "../assets/iphonem2.jpg";
import akLogo from "../assets/akLogo.png";
import akMock from "../assets/ak1.png";
import { useNavigate } from "react-router-dom";
import mockExample from "../assets/mockEx.png";
import b1 from "../assets/b1.jpg";
import b2 from "../assets/b2.jpg";
import b3 from "../assets/b3.jpg";
import b4 from "../assets/b4.jpg";
import b5 from "../assets/b5.jpg";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="mx-10 flex flex-col items-center border-gray-400">
        <div>
          <h1 className="text-[#414141] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl px-10 pt-10 pb-4">
            Generate Mockups Easily
          </h1>
          <h3 className="text-[#5a5a5a] mx-auto items-center text-center sm:text-base md:text-xl lg:text-2xl xl:text-3xl">Effortlessly Create Professional Mockups with Just a Click!</h3>
        </div>
        <button
          className="p-3 bg-gray-100 w-1/2 sm:w-1/3 md:w-1/4 lg:w-48 m-8 rounded-xl"
          onClick={() => navigate("generate")}
        >
          Make Your Mockup
        </button>
        <div className="flex flex-col sm:flex-row sm:mx-auto">
          <img className="w-full sm:w-1/3" src={iphoneMock} alt="iPhone Mock" />
          <img className="w-full sm:w-1/3" src={iphoneMock1} alt="iPhone Mock 1" />
          <img className="w-full sm:w-1/3" src={iphoneMock2} alt="iPhone Mock 2" />
        </div>
      </div>
      <div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl px-10 pt-10 pb-5 text-[#414141]">
          What are Mockups?
        </h1>
        <p className="w-full sm:w-3/4 mx-auto text-center text-lg sm:text-xl md:text-2xl">
          Mockups are visual representations or prototypes of a product,
          typically used in design and development processes to showcase how a
          final product will look and function. They help in communicating
          design ideas, gathering feedback, and aligning the team on the
          project's direction.
        </p>
        <div className="flex flex-col sm:flex-row sm:gap-10 items-center justify-center  p-9">
          <div className="flex flex-col items-center justify-center mb-5 sm:mb-0">
            <img src={akLogo} className="max-w-full sm:max-w-96" alt="Restaurant Logo" />
            <p className="text-xl p-3">Restaurant Logo</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src={akMock} className="max-w-full sm:max-w-96" alt="Restaurant Sign MockUp" />
            <p className="text-xl p-3">Restaurant Sign MockUp</p>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl px-10 pt-5 pb-5 text-[#414141]">
          Benefits of Mockups
        </h1>
        <p className="w-3/4 sm:w-3/4 mx-auto text-center text-lg sm:text-xl md:text-2xl">
          Mockups elevate your design presentations, save time on revisions,
          boost client satisfaction, simplify product marketing, and create
          stunning visuals for ads instantly.
        </p>
        <img
          src={mockExample}
          className="w-full sm:w-1/2 mx-auto p-8"
          alt="Mockup Example"
        />
        <p className="w-3/4 sm:w-3/4 mx-auto text-start text-lg sm:text-xl py-3 font-medium">
          Portfolio and Social Media Presentation
        </p>
        <p className="w-4/5 sm:w-3/4 mx-auto text-md sm:text-lg">
          Mockups are a key asset for presenting your design work in a polished and professional manner.
          Instead of just showcasing raw designs, mockups allow you to place them in realistic settings, 
          such as on devices or products, making them more visually engaging.
        </p>
        <img src={b1} alt="b1" className="w-full sm:w-1/2 mx-auto p-5" />
        <p className="w-3/4 sm:w-3/4 mx-auto text-start text-lg sm:text-xl py-3 font-medium">
          Client Presentations
        </p>
        <p className="w-4/5 sm:w-3/4 mx-auto text-md sm:text-lg">
        In client presentations, mockups serve as a powerful tool for conveying your design vision in a tangible way. 
        Clients are often more likely to approve designs when they can visualize how the final product will look in a 
        real-world context, and mockups provide just that. By inserting your designs into mockups, you can showcase them 
        in environments like mobile screens, posters, or packaging, making it easier for clients to grasp the design’s functionality and appeal.
        </p>
        <img src={b2} alt="b2" className="w-full sm:w-1/2 mx-auto p-5" />
        <p className="w-3/4 sm:w-3/4 mx-auto text-start text-lg sm:text-xl py-3 font-medium">
          Speed Up Design Process
        </p>
        <p className="w-4/5 sm:w-3/4 mx-auto text-md sm:text-lg">
        Mockups can significantly speed up the design process by helping designers catch errors early. 
        When designs are inserted into mockups, it becomes easier to spot issues like incorrect aspect ratios, 
        font sizes, or color mismatches that might not be apparent in a design file. 
        This allows for quick adjustments before moving on to final production, preventing costly revisions later.
        </p>
        <img src={b3} alt="b3" className="w-full sm:w-1/2 mx-auto p-5" />
        <p className="w-3/4 sm:w-3/4 mx-auto text-start text-lg sm:text-xl py-3 font-medium">
          E-commerce
        </p>
        <p className="w-4/5 sm:w-3/4 mx-auto text-md sm:text-lg">
        In e-commerce, mockups are invaluable for displaying products online before they are physically produced. 
        With mockups, you can create high-quality visuals of your product packaging, clothing designs, or 
        even digital goods, and display them on your website or social media platforms. 
        This allows you to market and sell products before they are manufactured, giving you a head start on generating interest and revenue.
        </p>
        <img src={b4} alt="b4" className="w-full sm:w-1/2 mx-auto p-5" />
        <p className="w-3/4 sm:w-3/4 mx-auto text-start text-lg sm:text-xl py-3 font-medium">
          Advertising
        </p>
        <p className="w-4/5 sm:w-3/4 mx-auto text-md sm:text-lg">
        Mockups play a crucial role in creating high-quality advertising materials with minimal effort. 
        Once a design is finalized, it can be easily inserted into a mockup to create professional visuals for use in ads, 
        social media posts, or promotional materials. This allows you to quickly produce eye-catching graphics that are 
        ready for deployment without the need for complex photography or additional editing.
        </p>
        <img src={b5} alt="b5" className="w-full sm:w-1/2 mx-auto p-5" />
      </div>
      

    </>
  );
};

export default Home;
