import React from "react";

function EmojiBox(emoji ) {
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

export default EmojiBox;
