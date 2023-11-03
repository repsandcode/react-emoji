import { useState, useEffect } from "react";
import "./styles.css";

function Category({ category, onCategoryClick }) {
  const handleClick = () => {
    console.log("You clicked", category);
    onCategoryClick(category);
  };

  return (
    <div className="category" key={category} onClick={handleClick}>
      {category}
    </div>
  );
}

function CategoryNavbar({ onCategoryClick }) {
  const categories = [
    "all",
    "smileys-and-people",
    "animals-and-nature",
    "food-and-drink",
    "travel-and-places",
    "activities",
    "objects",
    "symbols",
    "flags"
  ];

  return (
    <div className="categories">
      {categories.map((c) => (
        <Category key={c} category={c} onCategoryClick={onCategoryClick} />
      ))}
    </div>
  );
}

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

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="container">
      <CategoryNavbar onCategoryClick={handleCategoryClick} />
      <EmojiView category={selectedCategory} />
    </div>
  );
}

export default App;
