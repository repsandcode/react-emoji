import React, { useState } from "react";
import CategoryNavbar from "./components/CategoryNavbar";
import EmojiView from "./components/EmojiView";
import "./styles.css";

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
