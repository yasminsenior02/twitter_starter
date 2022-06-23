import * as React from "react";
import AvatarIcon from "../AvatarIcon/AvatarIcon";

export default function TweetInput({ tweets, value, handleOnChange }) {
  return (
    <div className="tweet-textarea">
      <AvatarIcon />

      <textarea
        name="new-tweet-input"
        type="text"
        placeholder="What's Happening?"
        onChange={handleOnChange}
        value={value}
      ></textarea>

      <SmileIcon />
    </div>
  );
}

export const SmileIcon = () => <i className="fas fa-smile"></i>;
export const ImageIcon = () => <i className="fas fa-image"></i>;
