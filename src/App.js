import React from "react";
import "./App.css";
import Header from "./Header";
import ImageParallax from "./ImageParallax";
import SideElements from "./SideElements";
import Title from "./Title";
import Calander from "./Calander.js";
import About from "./About";
import List from "./List";
import Gallery from "./Gallery";
import FreeBreakfastOutlinedIcon from "@material-ui/icons/FreeBreakfastOutlined";
import DeckOutlinedIcon from "@material-ui/icons/DeckOutlined";
import PoolOutlinedIcon from "@material-ui/icons/PoolOutlined";
import WifiOutlinedIcon from "@material-ui/icons/WifiOutlined";
import EmojiPeopleOutlinedIcon from "@material-ui/icons/EmojiPeopleOutlined";
import RoomServiceOutlinedIcon from "@material-ui/icons/RoomServiceOutlined";
import Contact from "./Contact";
import Maps from "./Maps";
import Footer from "./Footer";
import Chat from "./Chat";

function App() {
  return (
    <div className="app">
      <Header />
      <Title />
      <SideElements />
      <Chat />
      <ImageParallax />
      <Calander />
      <About />
      <ImageParallax box="static" />
      <List
        title="OUR SERVICES"
        items={[
          "Breakfast",
          "Garden",
          "Pool",
          "Free Wifi",
          "Daily Housekeeping",
          "In-Room Dining Service",
        ]}
        icons={[
          FreeBreakfastOutlinedIcon,
          DeckOutlinedIcon,
          PoolOutlinedIcon,
          WifiOutlinedIcon,
          EmojiPeopleOutlinedIcon,
          RoomServiceOutlinedIcon,
        ]}
      />
      <Gallery />
      <List
        title="THINGS TO DO"
        items={[
          "Wineries Tour",
          "Cultural Sites",
          "Market Tour",
          "Leisure Activities",
          "Birds Safari",
          "Horse Riding ",
        ]}
      />
      <ImageParallax box="dynamic" />
      <Contact />
      <Maps />
      <Footer />
    </div>
  );
}

export default App;
