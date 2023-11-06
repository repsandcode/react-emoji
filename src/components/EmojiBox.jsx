import React from "react";
import PropTypes from "prop-types";

function EmojiBox({ emoji }) {
  return (
    <div className="emoji-box">
      <div
        className="emoji"
        key={emoji}
        dangerouslySetInnerHTML={{ __html: emoji }}
      ></div>
    </div>
  );
}

EmojiBox.propTypes = {
  emoji: PropTypes.node,
};

export default EmojiBox;
