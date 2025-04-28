import React, { useEffect, useState, useRef } from "react";
import imageslogo from "../assets/images";
export default function Carousel() {
  const images = [
    "https://onecricketnews.akamaized.net/parth-editor/oc-dashboard/news-images-prod/1729088018880_pakveng.jpg",
    "https://onecricketnews.akamaized.net/parth-editor/oc-dashboard/news-images-prod/1720083782977_india_t20wc2024.jpg",
    "https://wallpaperaccess.com/full/2604895.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState([]);
  const scrollContainerRef = useRef(null); // Ref for the grid scroll container
  const scrollIntervalRef = useRef(null); // Ref for the scroll interval

  useEffect(() => {
    // Fetch data from API (replace with your actual API endpoint)
    

    // Automatic image carousel
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    // Function to automatically scroll the grids
    const startScrolling = () => {
      scrollIntervalRef.current = setInterval(() => {
        if (scrollContainerRef.current) {
          const container = scrollContainerRef.current;
  
          // If we’ve reached the end, reset scrollLeft to 0 (infinite loop)
          if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
            container.scrollLeft = 0;
          } else {
            container.scrollLeft += 1; // Scroll forward
          }
        }
      }, 50); // Speed
    };

    // Start scrolling when the component is mounted
    startScrolling();

    return () => {
      clearInterval(scrollIntervalRef.current); // Cleanup on component unmount
    };
  }, []);

  // Function to stop scrolling on hover
  const handleMouseEnter = () => {
    clearInterval(scrollIntervalRef.current); // Stop the automatic scroll on hover
  };

  // Function to resume scrolling on mouse leave
  const handleMouseLeave = () => {
    const startScrolling = () => {
      scrollIntervalRef.current = setInterval(() => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollLeft += 1;
        }
      }, 50);
    };
    startScrolling(); // Resume scrolling when the user stops hovering
  };

  return (
    <div className="relative h-screen w-full bg-transparent ">
      {/* Carousel Background */}
      <div
        className="h-full w-full bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        {/* Overlay for opacity effect */}
        <div className="absolute inset-0 bg-black opacity-40"></div>{" "}
        {/* Semi-transparent overlay */}
      </div>

      {/* Horizontally Scrollable Grid Overlay at the bottom */}
      <div className="absolute bottom-3 w-full p-4">
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto whitespace-nowrap space-x-6 scrollbar-hide"
      >
      {[...imageslogo, ...imageslogo].map((url, index) => (
        <div key={index} className="inline-block" >
          <div className="bg-transparent rounded-lg shadow-lg w-32 h-32 flex items-center justify-center  overflow-hidden">
            <img src={url} alt={`Image ${index + 1}`} className="object-cover w-full h-full" />
          </div>
        </div>
      ))}
      </div>
    </div>
    
    </div>
  );
}
