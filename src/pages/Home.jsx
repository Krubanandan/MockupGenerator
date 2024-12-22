import React from "react";
import iphoneMock from "../assets/iphoneMock.jpg";
import iphoneMock1 from "../assets/iphonem1.jpg";
import iphoneMock2 from "../assets/iphonem2.webp";
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
        <div className="text-[#414141]">
          <h1 className="text-7xl px-10 pt-10 pb-4">Generate Mockups Easily</h1>
        </div>
        <button
          className="p-3 bg-gray-100 w-75 m-5  rounded-xl"
          onClick={() => navigate("generate")}
        >
          Make Your Mockup
        </button>
        <div className="flex flex-row">
          <img className="w-1/3" src={iphoneMock} alt=""></img>
          <img className="w-1/3" src={iphoneMock1} alt="" />
          <img className="w-1/3" src={iphoneMock2} alt="" />
        </div>
      </div>
      <div>
        <h1 className="text-5xl px-10 pt-10 pb-5 text-[#414141]">
          What are Mockups?
        </h1>
        <p className="w-3/4 mx-auto text-center text-2xl">
          Mockups are visual representations or prototypes of a product,
          typically used in design and development processes to showcase how a
          final product will look and function. They help in communicating
          design ideas, gathering feedback, and aligning the team on the
          project's direction.
        </p>
        <div className="flex flex-row items-center justify-center gap-10 p-9">
          <div className="flex flex-col items-center justify-center">
            <img src={akLogo} className="max-w-96" alt="" />
            <p className="text-xl p-3">Restaurant Logo</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src={akMock} className="max-w-96" alt="" />
            <p className="text-xl p-3">Restaurant Sign MockUp</p>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-4xl px-10 pt-5 pb-5 text-[#414141]">
          Benefits of Mockups
        </h1>
        <p className="w-3/4 mx-auto text-center justify-start text-2xl">
          Mockups elevate your design presentations, save time on revisions,
          boost client satisfaction, simplify product marketing, and create
          stunning visuals for ads instantly.
        </p>
        <img
          src={mockExample}
          className="w-1/2 items-center mx-auto p-8"
          alt=""
        />
        <p className="w-3/4 mx-auto text-start justify-start text-2xl py-3 font-medium">
          Portfolio and Social Media Presentation
        </p>
        <p className="w-3/4 mx-auto text-lg justify-center text-pretty">Mockups are a key asset for presenting your design work in a polished and professional manner. Instead of just showcasing raw designs, mockups allow you to place them in realistic settings, such as on devices or products, making them more visually engaging. Whether you’re sharing your work on your portfolio or social media, mockups provide a sleek, eye-catching presentation that helps your designs stand out. This makes it easier for potential clients or followers to appreciate the full impact of your work.</p>
        <img src={b1} alt="" className="w-1/2 mx-auto p-5"/>
        <p className="w-3/4 mx-auto text-start justify-start text-2xl py-3 font-medium">
        Client Presentations
        </p>
        <p className="w-3/4 mx-auto text-lg justify-center text-pretty"> In client presentations, mockups serve as a powerful tool for conveying your design vision in a tangible way. Clients are often more likely to approve designs when they can visualize how the final product will look in a real-world context, and mockups provide just that. By inserting your designs into mockups, you can showcase them in environments like mobile screens, posters, or packaging, making it easier for clients to grasp the design’s functionality and appeal.</p>
        <img src={b2} alt="" className="w-1/2 mx-auto p-5"/>
        <p className="w-3/4 mx-auto text-start justify-start text-2xl py-3 font-medium">
        Speed Up Design Process
        </p>
        <p className="w-3/4 mx-auto text-lg justify-center text-pretty"> Mockups can significantly speed up the design process by helping designers catch errors early. When designs are inserted into mockups, it becomes easier to spot issues like incorrect aspect ratios, font sizes, or color mismatches that might not be apparent in a design file. This allows for quick adjustments before moving on to final production, preventing costly revisions later.</p>
        <img src={b3} alt="" className="w-1/2 mx-auto p-5"/>
        <p className="w-3/4 mx-auto text-start justify-start text-2xl py-3 font-medium">
        E-commerce
        </p>
        <p className="w-3/4 mx-auto text-lg justify-center text-pretty">In e-commerce, mockups are invaluable for displaying products online before they are physically produced. With mockups, you can create high-quality visuals of your product packaging, clothing designs, or even digital goods, and display them on your website or social media platforms. This allows you to market and sell products before they are manufactured, giving you a head start on generating interest and revenue.</p>
        <img src={b4} alt="" className="w-1/2 mx-auto p-5"/>
        <p className="w-3/4 mx-auto text-start justify-start text-2xl py-3 font-medium">
        Advertising
        </p>
        <p className="w-3/4 mx-auto text-lg justify-center text-pretty">Mockups play a crucial role in creating high-quality advertising materials with minimal effort. Once a design is finalized, it can be easily inserted into a mockup to create professional visuals for use in ads, social media posts, or promotional materials. This allows you to quickly produce eye-catching graphics that are ready for deployment without the need for complex photography or additional editing.</p>
        <img src={b5} alt="" className="w-1/2 mx-auto p-5"/>
      </div>
    </>
  );
};

export default Home;
