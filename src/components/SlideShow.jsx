import React, { useState, useEffect } from "react";
import "./modules.css";

const SlideShow = () => {
  const images = [
    "pexels-godisable-jacob-977538.jpg",
    "pexels-marcelo-chagas-2229490.jpg",
    "pexels-the-lazy-artist-gallery-1303862.jpg",
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
    }, 4000); //CZAS ZMIANY SLAJDU

    return () => {
      clearInterval(intervalID);
    };
  });

  return (
    <div>
      <div className="slideshow-container">
        <button className="btnLeft">
            <img className="btnLeft" src="left-arrow.png"></img>
        </button>
        <button className="btnRight">
            <img className="btnRight" src="right-arrow.png"></img>
        </button>
        <div className="mySlides fade">
          {images.map((image, id) => {
                return (
                    <img src={image} 
                        className={`image ${currentImage === id && 'image--showed'}`}/> )
                })}    
        </div>
      </div>
    </div>
  );
};

export default SlideShow;
