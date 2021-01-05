import React from "react";
import "./List.css";
import ListItem from "./ListItem";

function list({ title, items, icons }) {
  return (
    <div className="list">
      <h1>{title}</h1>
      <div className="list__items">
        <ListItem
          Icon={icons?.[0]}
          title={items[0]}
          text="I'm a paragraph. Click here to add your own text and edit me."
        />
        <ListItem
          Icon={icons?.[1]}
          title={items[1]}
          text="I'm a paragraph. Click here to add your own text and edit me."
        />
        <ListItem
          Icon={icons?.[2]}
          title={items[2]}
          text="I'm a paragraph. Click here to add your own text and edit me."
        />
      </div>
      <div className="list__items">
        <ListItem
          Icon={icons?.[3]}
          title={items[3]}
          text="I'm a paragraph. Click here to add your own text and edit me."
        />
        <ListItem
          Icon={icons?.[4]}
          title={items[4]}
          text="I'm a paragraph. Click here to add your own text and edit me."
        />
        <ListItem
          Icon={icons?.[5]}
          title={items[5]}
          text="I'm a paragraph. Click here to add your own text and edit me."
        />
      </div>
    </div>
  );
}

export default list;
