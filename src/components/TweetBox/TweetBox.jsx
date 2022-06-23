import * as React from "react";
import TweetInput from "./TweetInput";
import "./TweetBox.css";

export default function TweetBox({
  setTweets,
  userProfile,
  tweets,
  tweetText,
  setTweetText,
}) {
  function handleOnTweetTextChange(event) {
    setTweetText(event.target.value);
  }
  function handleOnSubmit() {
    var newTweet = {
      id: tweets.length, // this shows the total length (how many) are in the array
      name: userProfile.name,
      handle: userProfile.handle,
      text: tweetText,
      comments: 0,
      retweets: 0,
      likes: 0,
    };
    setTweets(tweets.concat(newTweet));
    setTweetText(" ");
  }
  return (
    <div className="tweet-box">
      <TweetInput
        tweets={tweets}
        value={tweetText}
        // setTweetText={setTweetText}
        handleOnChange={handleOnTweetTextChange}
      />

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount />
        <TweetSubmitButton handleOnSubmit={handleOnSubmit} />
      </div>
    </div>
  );
}

export function TweetBoxIcons(props) {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  );
}

export function TweetCharacterCount(props) {
  // ADD CODE HERE
  return <span></span>;
}

export function TweetSubmitButton({ handleOnSubmit }) {
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button className="tweet-submit-button" onClick={handleOnSubmit}>
        Tweet
      </button>
    </div>
  );
}
// <button className="tweet-submit-button" onClick={handleOnSubmit} />

// element.addEventListener("click", handleOnSubmit());
