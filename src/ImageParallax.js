import React from "react";
import "./ImageParallax.css";
import { Parallax } from "react-parallax";
import StaticBox from "./StaticBox";
import DynamicBox from "./DynamicBox";

function ImageParallax({ box }) {
  return (
    <div className="imageParallax">
      <Parallax
        className="imageParallax__image"
        bgImage="https://images.pexels.com/photos/3853918/pexels-photo-3853918.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        strength={500}
      >
        {box &&
          (box === "static" ? (
            <StaticBox
              title="OUR ROOMS"
              text="I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you."
            />
          ) : (
            <DynamicBox
              title="GUEST REVIEW"
              text={[
                "“I'm a testimonial. Click to edit me and add text that says something nice about you and your services.”",
                "“I'm a paragraph. Click here to add your own text and edit me.”",
                "“I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.”",
              ]}
            />
          ))}
      </Parallax>
    </div>
  );
}

export default ImageParallax;
