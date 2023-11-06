import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import EmojiBox from "./EmojiBox";

function EmojiView({ category }) {
  const [emojis, setEmojis] = useState([]);

  useEffect(() => {
    const uri = `https://emojihub.yurace.pro/api/all/${
      category === "all" || category === "" ? "" : `category/${category}`
    }`;
    console.log(uri);

    fetch(uri)
      .then((response) => response.json())
      .then((result) => setEmojis(result));
  }, [category]);

  console.log(emojis);

  return (
    <div>
      <h1 className="emoji-counter">{emojis.length} emojis</h1>
      <div className="emoji-view">
        {emojis.map((emoji, id) => {
          const string = emoji.htmlCode[0];
          return <EmojiBox key={id} emoji={string} />;
        })}
      </div>
    </div>
  );
}

EmojiView.propTypes = {
  category: PropTypes.node,
};

export default EmojiView;
