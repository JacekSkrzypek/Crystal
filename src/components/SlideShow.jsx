import React, { useState, useEffect } from "react";
import "./modules.css";

const SlideShow = () => {
  const images = [
    "productphotos/pexels-godisable-jacob-977538.jpg",
    "productphotos/pexels-marcelo-chagas-2229490.jpg",
    "productphotos/pexels-the-lazy-artist-gallery-1303862.jpg",
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
    }, 4000);

    return () => {
      clearInterval(intervalID);
    };
  });

  return (
    <div>
      <div className="slideshow-container">
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