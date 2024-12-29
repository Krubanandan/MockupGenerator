import React, { useState, useRef, useEffect } from "react";
import "./Mocked.css";
import iphoneMockup from "../assets/iphone-mockup.jpg"; // iPhone mockup image
import macbookMockup from "../assets/macbook-mockup.jpg"; // MacBook mockup image
import iphoneDy from "../assets/iphone di.png";

const MockupGen = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [img1Loaded, setImg1Loaded] = useState(false);
  const [img2Loaded, setImg2Loaded] = useState(false);
  const [img3Loaded, setImg3Loaded] = useState(false);
  // const [selectedMockup, setSelectedMockup] = useState("iphone");
  const [iphoneImg, setIphoneImg] = useState(false);

  const canvasRef = useRef(null);
  const highResCanvas = useRef(null);
  const fileInputRef = useRef(null);

  const img1 = useRef(new Image());
  const img3 = useRef(new Image());

  // Load mockup images
  useEffect(() => {
    img1.current.src = iphoneMockup;
    img1.current.onload = () => setImg1Loaded(true);

    img3.current.src = iphoneDy;
    img3.current.onload = () => setImg3Loaded(true);
  }, []);

  // Handle image upload

  const drawImages = (canvas, ctx, width, height) => {
    const originalWidth = 5000;
    const originalHeight = 5000;

    ctx.clearRect(0, 0, width, height); // Clear canvas
    ctx.drawImage(img1.current, 0, 0, originalWidth, originalHeight);

    if (uploadedImage) {
      ctx.globalAlpha = 0.9;

      // Adjust for uploaded image scaling and clipping
      const cropWidth = uploadedImage.width * (19 / 41);
      const cropHeight = uploadedImage.height;
      const targetX = 1565;
      const targetY = 445;

      const scaleWidth = 1900;
      const scaleHeight = 4100;

      const borderRadii = { tl: 270, tr: 290, br: 270, bl: 270 };

      function drawRoundedRect(ctx, x, y, width, height, radii) {
        const { tl, tr, br, bl } = radii;
        ctx.beginPath();
        ctx.moveTo(x + tl, y);
        ctx.lineTo(x + width - tr, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + tr);
        ctx.lineTo(x + width, y + height - br);
        ctx.quadraticCurveTo(x + width, y + height, x + width - br, y + height);
        ctx.lineTo(x + bl, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - bl);
        ctx.lineTo(x, y + tl);
        ctx.quadraticCurveTo(x, y, x + tl, y);
        ctx.closePath();
      }

      drawRoundedRect(
        ctx,
        targetX,
        targetY,
        scaleWidth,
        scaleHeight,
        borderRadii
      );
      ctx.clip();

      ctx.drawImage(
        uploadedImage,
        0,
        0,
        cropWidth,
        cropHeight,
        targetX,
        targetY,
        scaleWidth,
        scaleHeight
      );
    }

    ctx.globalAlpha = 1.0;
    ctx.drawImage(
      img3.current,
      2200,
      280,
      (img3.current.width * 2) / 17,
      (img3.current.height * 2) / 17
    );
  };

  const mergeAndCropImages = () => {
    if (img1Loaded && img2Loaded && img3Loaded) {
      const highCanvas = highResCanvas.current;
      if (!highCanvas) {
        console.error("High resolution canvas not found.");
        return;
      }

      const highCtx = highCanvas.getContext("2d");
      if (!highCtx) {
        console.error("Failed to get context for high resolution canvas.");
        return;
      }

      highCanvas.width = 5000;
      highCanvas.height = 5000;

      drawImages(highCanvas, highCtx, 5000, 5000);

      const displayCanvas = canvasRef.current;
      if (!displayCanvas) {
        console.error("Display canvas not found.");
        return;
      }

      const displayCtx = displayCanvas.getContext("2d");
      if (!displayCtx) {
        console.error("Failed to get context for display canvas.");
        return;
      }

      displayCanvas.width = 500;
      displayCanvas.height = 500;

      displayCtx.drawImage(highCanvas, 0, 0, 500, 500);
      setIphoneImg(true);
    }
  };

  useEffect(() => {
    if (canvasRef.current && highResCanvas.current) {
      console.log("Canvas references are ready!");
    }
  }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        setUploadedImage(img);
        setImg2Loaded(true);
      };
      img.src = e.target.result;
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = () => {
    const highCanvas = highResCanvas.current;
    const dataUrl = highCanvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = "merged-image.png";
    a.click();
  };

  useEffect(() => {
    if (img2Loaded && img1Loaded && img3Loaded) {
      mergeAndCropImages();
    }
  }, [img2Loaded, img1Loaded, img3Loaded]);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-semibold mt-4">Mockup Generator</h1>
      <div className="mockup-selector">
        <button
          className="selected"
          onClick={() => setSelectedMockup("iphone")}
        >
          iPhone
        </button>
      </div>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleImageUpload}
        className="file:border file:border-none file:bg-gray-100 file:px-4 file:py-2 file:rounded-md file:text-gray-700 file:hover:bg-gray-150 cursor-pointer "
      />

      {/* <div className="mockups">
        <div className="mockup-container">
          <img src={iphoneImg} alt="iPhone Mockup" className="mockupIphone" />
        </div>
      </div> */}

      {!iphoneImg && (
        <img src={iphoneMockup} alt="iPhone Mockup" className="mockupIphone" />
      )}
      <canvas ref={canvasRef} className="border border-white m-7"></canvas>
      <canvas ref={highResCanvas} className="hidden m-7"></canvas>

      {uploadedImage && (
        <button
          onClick={handleDownload}
          className="bg-blue-500  text-white px-3 py-2 rounded-lg"
        >
          Download Mockup Image
        </button>
      )}
    </div>
  );
};

export default MockupGen;
