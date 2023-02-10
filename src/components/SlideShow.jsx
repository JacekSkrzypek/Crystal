import React, { useState, useEffect } from "react";
import "./modules.css";

const SlideShow = () => {
  const images = [
    "pexels-photo-9558256.jpg",
    "pexels-photo-9558601.jpg",
    "pexels-photo-9558791.jpg",
  ];
  const [currentImage, setCurrentImage] = useState(0);

  const showSlides = () => {
    if (currentImage < images.length -1) {
      setCurrentImage(currentImage + 1);
    } else {
      setCurrentImage(0);
    }
  };

  useEffect(() => {
    const intervalID = setInterval(() => {
      showSlides();
    }, 2000);

    return () => {
      clearInterval(intervalID);
    };
  });

  return (
    <div>
      <p>slideshow</p>

      <h2>Slideshow</h2>

      <div className="slideshow-container">
        <div className="mySlides fade">
          <div className="numbertext"> {currentImage + 1} / {images.length}</div>
          {images.map((image, id) => {
                return (
                    <img src={image} 
                        className={`image ${currentImage === id && 'image--showed'}`} 
                        style={{ width: "100px" }} />)
                })}    
        </div>
      </div>
    </div>
  );
};

export default SlideShow;
