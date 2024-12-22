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

  // Create a canvas to merge the mockup and uploaded image
  const generateDownloadImage = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
  
    const imgMockup = new Image();
    imgMockup.src = iphoneMockup; // The iPhone mockup image
  
    const imgUploaded = new Image();
    imgUploaded.src = uploadedImage; // The uploaded image
  
    imgMockup.onload = () => {
      // Set canvas size to match the iPhone mockup dimensions
      canvas.width = imgMockup.width;
      canvas.height = imgMockup.height;
  
      // Draw the iPhone mockup
      ctx.drawImage(imgMockup, 0, 0, imgMockup.width, imgMockup.height);
  
      imgUploaded.onload = () => {
        // CSS values for cropping and positioning
        const screenTop = 44; // Top position in px
        const screenLeft = 156; // Left position in px
        const screenWidth = 190; // Width in px
        const screenHeight = 410; // Height in px
  
        // Calculate scaling for the uploaded image to crop appropriately
        const scaleWidth = imgUploaded.width / screenWidth;
        const scaleHeight = imgUploaded.height / screenHeight;
  
        const scale = Math.max(scaleWidth, scaleHeight); // Ensure the image fully covers the screen area
  
        const cropWidth = screenWidth * scale;
        const cropHeight = screenHeight * scale;
  
        const cropX = (imgUploaded.width - cropWidth) / 2; // Center the crop horizontally
        const cropY = (imgUploaded.height - cropHeight) / 2; // Center the crop vertically
  
        // Draw the cropped uploaded image
        ctx.drawImage(
          imgUploaded,
          cropX,
          cropY,
          cropWidth,
          cropHeight,
          screenLeft,
          screenTop,
          screenWidth,
          screenHeight
        );
  
        // Create and trigger download link
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "iphone-mockup.png";
        link.click();
      };
    };
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

      {/* Download Button */}
      {uploadedImage && (
        <button onClick={generateDownloadImage} className="download-btn">
          Download Mockup Image
        </button>
      )}
    </div>
  );
};

export default MockupGen;
