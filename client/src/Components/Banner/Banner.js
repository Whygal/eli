import React, { useState, useEffect } from "react";
import { Carousel, Image } from "react-bootstrap";
import bannerDesktop from "../../images/baner-desktop.jpg";
import bannerDesktop2 from "../../images/baner-desktop2.jpg";
import bannerDesktop3 from "../../images/baner-desktop3.jpg";
import bannerMobile from "../../images/baner-mobail1.jpg";
import bannerMobile2 from "../../images/baner-mobail2.jpg";
import bannerMobile3 from "../../images/baner-mobail3.jpg";

export default function Banner() {
  const desktopImages = [bannerDesktop, bannerDesktop2, bannerDesktop3];
  const mobileImages = [bannerMobile, bannerMobile2, bannerMobile3];

  const [currentImages, setCurrentImages] = useState(
    window.innerWidth < 768 ? mobileImages : desktopImages
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCurrentImages(mobileImages);
      } else {
        setCurrentImages(desktopImages);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [desktopImages, mobileImages]);

  return (
    <div style={{ position: "relative" }}>
      <Carousel>
        {currentImages.map((item, index) => (
          <Carousel.Item key={index}>
            <Image src={item} alt={`Slide ${index}`} fluid />
          </Carousel.Item>
        ))}
      </Carousel>

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          cursor: "pointer",
          opacity: 0.7,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          fill="currentColor"
          className="bi bi-play-circle"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
        </svg>
      </div>
    </div>
  );
}
