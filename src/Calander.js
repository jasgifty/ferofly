import React from "react";
import "./Calander.css";

function Calander() {
  return (
    <div className="calander">
      <div className="calander__block">
        <div className="calander__line1">Check In</div>
        <input className="calander__line2 big" type="date"></input>
      </div>
      <div className="calander__block">
        <div className="calander__line1">Check Out</div>
        <input className="calander__line2 big" type="date"></input>
      </div>
      <div className="calander__block">
        <div className="calander__line1">Adults</div>
        <input
          className="calander__line2 small"
          type="number"
          placeholder="1"
        ></input>
      </div>
      <div className="calander__block">
        <div className="calander__line1">Kids</div>
        <input
          className="calander__line2 small"
          type="number"
          placeholder="0"
        ></input>
      </div>
      <div className="calander__block">
        <div className="calander__line1 "></div>
        <button className="calander__button" type="submit">
          Search
        </button>
      </div>
    </div>
  );
}

export default Calander;
