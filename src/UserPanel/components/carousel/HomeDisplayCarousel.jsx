import React, { useState } from "react";
import HomeDisplayCard from "../homedisplaycard/HomeDisplayCard";
import { women_kurtis } from "../../data/women_kurtis";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const HomeDisplayCarousel = ({data,sectionName}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Responsive settings
  const responsive = {
    0: { items: 1 },
    720: { items: 2 },
    1024: { items: 4 },
  };

  const itemsPerView = responsive[1024].items; // Max visible items for large screens
  const totalItems = women_kurtis.length;

  // Slice items to show the visible cards
  const visibleItems = women_kurtis.slice(
    activeIndex,
    activeIndex + itemsPerView
  );

  // Handlers for navigation
  const slidePrev = () => {
    setActiveIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const slideNext = () => {
    setActiveIndex((prevIndex) =>
      Math.min(prevIndex + 1, totalItems - itemsPerView)
    );
  };

  return (
    <>
    <h2 className="text-2xl font-extrabold text-orange-500 py-5">{sectionName}</h2>
    <div className="relative border p-5">
      <div className="flex overflow-hidden space-x-4">
        {visibleItems.map((item, index) => (
          <div key={index} className="flex-shrink-0 w-1/4">
            <HomeDisplayCard product={item} />
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      {activeIndex > 0 && (
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white shadow-md p-3 z-10"
          onClick={slidePrev}
          aria-label="previous"
        >
          <KeyboardArrowLeftIcon />
        </button>
      )}

      {activeIndex < totalItems - itemsPerView && (
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white shadow-md p-3 z-10"
          onClick={slideNext}
          aria-label="next"
        >
          <KeyboardArrowRightIcon />
        </button>
      )}
    </div>
    </>
  );
};

export default HomeDisplayCarousel;
