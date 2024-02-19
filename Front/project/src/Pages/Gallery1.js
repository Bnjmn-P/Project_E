import React from "react";
import "./Gallery1.css";
import Tame1 from "../Images/Tame1.jpg";
import Tame2 from "../Images/Tame2.jpg";

const Gallery1 = () => {
  return (
    <div className="gallery-container">
      <h1>Gallery 1</h1>
      <div className="photo-gallery">
        <div className="gallery-item" data-title="Tame 1" data-caption="Picture of a handsome cat">
          <img src={Tame1} alt="Tame 1" />
        </div>
        <div className="gallery-item" data-title="Tame 2" data-caption="Another picture of a handsome cat">
          <img src={Tame2} alt="Tame 2" />
        </div>
        {/* Add more gallery items as needed */}
      </div>
    </div>
  );
};

export default Gallery1;
