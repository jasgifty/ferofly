import React from "react";
import "./Chat.css";
import IconButton from "@material-ui/core/IconButton";
import TextsmsRoundedIcon from "@material-ui/icons/TextsmsRounded";

function Chat() {
  return (
    <div className="chat">
      <IconButton className="chat__button">
        <TextsmsRoundedIcon />
      </IconButton>
    </div>
  );
}

export default Chat;
