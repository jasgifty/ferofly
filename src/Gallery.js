import React from "react";
import "./Gallery.css";
import Image from "./Image";

const ImageList1 = [
  "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
];
const ImageList2 = [
  "https://images.pexels.com/photos/2736387/pexels-photo-2736387.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
];
const ImageList3 = [
  "https://images.pexels.com/photos/261041/pexels-photo-261041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/2678053/pexels-photo-2678053.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
];

function Gallery() {
  return (
    <div className="gallery">
      <h1>GALLERY</h1>
      <div className="gallery__images">
        <Image imageList={ImageList1} />
        <Image imageList={ImageList2} />
        <Image imageList={ImageList3} />
      </div>
    </div>
  );
}

export default Gallery;
