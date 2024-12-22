import React, { useState } from "react";
import "./Mocked.css";
import iphoneMockup from "../assets/iphone-mockup.jpg"; // iPhone mockup image
import macbookMockup from "../assets/macbook-mockup.jpg"; // MacBook mockup image
import iphoneDy from "../assets/iphone di.png";

const MockupGen = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [selectedMockup, setSelectedMockup] = useState("iphone"); // Default mockup selection

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target.result); // Set uploaded image as a base64 string
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-semibold">Mockup Generator</h1>
    
        
      
      <div className="mockup-selector">
        <button
          className={selectedMockup === "iphone" ? "selected" : ""}
          onClick={() => setSelectedMockup("iphone")}
        >
          iPhone
        </button>
        <button
          className={selectedMockup === "macbook" ? "selected" : ""}
          onClick={() => setSelectedMockup("macbook")}
        >
          MacBook
        </button>
      </div>

      {/* Image Upload */}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="inputFile"
      />

      {/* Mockup Display */}
      <div className="mockups">
        {selectedMockup === "iphone" && (
          <div className="mockup-container">
            <img
              src={iphoneMockup}
              alt="iPhone Mockup"
              className="mockupIphone"
            />
            {uploadedImage && (
              <img
                src={uploadedImage}
                alt="Uploaded"
                className="iphone-screen"
              />
            )}
            <img src={iphoneDy} className="iphoneDI" />
          </div>
        )}
        {selectedMockup === "macbook" && (
          <div className="mockup-container">
            <img
              src={macbookMockup}
              alt="MacBook Mockup"
              className="mockupMac"
            />
            {uploadedImage && (
              <img
                src={uploadedImage}
                alt="Uploaded"
                className="macbook-screen"
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MockupGen;
