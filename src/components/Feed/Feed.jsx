import * as React from "react";
import Tweet from "../Tweet/Tweet";
import TweetBox from "../TweetBox/TweetBox";
import "./Feed.css";

export default function Feed({
  setTweets,
  userProfile,
  tweets,
  tweetText,
  setTweetText,
}) {
  return (
    <div className="col feed">
      {/* UPDATE TWEET BOX PROPS HERE */}
      <TweetBox
        tweets={tweets}
        setTweets={setTweets}
        userProfile={userProfile}
        tweetText={tweetText}
        setTweetText={setTweetText}
      />

      <div className="see-new-tweets beet">
        <p>
          See <span>{13}</span> New Tweets
        </p>
      </div>

      <div className="twitter-feed">
        {tweets.map((tweet, i) => {
          return <Tweet key={i} tweet={tweet} />;
        })}
      </div>
    </div>
  );
}
