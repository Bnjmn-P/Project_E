import React from "react";
import "./Gallery1.css";

const Gallery1 = () => {
  return (
    <div className="gallery-container">
      <h1>Gallery 1</h1>
      <div className="photo-gallery">
        <div className="gallery-item" data-title="Tame 1" data-caption="Caption for Image 1">
          <img src={require("../Images/Tame1.jpg").default} alt="Tame1" />
        </div>
        <div className="gallery-item" data-title="Tame 2" data-caption="Caption for Image 2">
          <img src={require("../Images/Tame2.jpg").default} alt="Tame2" />
        </div>
        {/* Add more gallery items as needed */}
      </div>
    </div>
  );
};

export default Gallery1;
