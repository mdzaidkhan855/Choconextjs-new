"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef(null); // Ref to access the video element

  useEffect(() => {
    const videoElement = videoRef.current;

    // Function to handle video play/pause based on visibility
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoElement.play(); // Play video when visible
        } else {
          videoElement.pause(); // Pause video when not visible
        }
      });
    };

    // Intersection Observer to watch the video visibility
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Trigger when 50% of the video is visible
    });

    if (videoElement) {
      observer.observe(videoElement);
    }

    // Cleanup observer on component unmount
    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  return (
    <>
      <header className="hero">
        <div className="hero__container container">
          <div className="hero__content">
            <h1 className="hero__title">
              className Bliss:
              <span className="hero__title--primary">Premium</span> Handcrafted
              Chocolates
            </h1>
            <p className="hero__description">
              Indulge in the rich, artisanal flavors of our handcrafted
              chocolates, made with the finest ingredients and a passion for
              perfection. Each piece is lovingly crafted to deliver a unique,
              melt-in-your-mouth experience.
            </p>
          </div>
          <div className="hero__image">
            <video ref={videoRef} width="400" controls muted>
              <source src="/images/header-chocoVideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </header>
    </>
  );
}
