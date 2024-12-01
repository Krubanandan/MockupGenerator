import React, { useState } from "react";
import "./App.css";
import iphoneMockup from "./assets/iphone-mockup.jpg"; // iPhone mockup image
import macbookMockup from "./assets/macbook-mockup.jpg"; // MacBook mockup image

const App = () => {
  const [uploadedImage, setUploadedImage] = useState(null);

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
    <div className="App">
      <h1>Mockup Generator</h1>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <div className="mockups">
        {/* iPhone Mockup */}
        <div className="mockup-container">
          <img src={iphoneMockup} alt="iPhone Mockup" className="mockup" />
          {uploadedImage && (
            <img src={uploadedImage} alt="Uploaded" className="iphone-screen" />
          )}
        </div>

        {/* MacBook Mockup */}
        <div className="mockup-container">
          <img src={macbookMockup} alt="MacBook Mockup" className="mockup" />
          {uploadedImage && (
            <img src={uploadedImage} alt="Uploaded" className="macbook-screen" />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
