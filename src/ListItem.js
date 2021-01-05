import React from "react";
import "./ListItem.css";
import { Avatar } from "@material-ui/core";

function ListItem({ Icon, title, text }) {
  return (
    <div className="listItem">
      {Icon && <Icon />}
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
}

export default ListItem;
