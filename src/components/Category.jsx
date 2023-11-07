import React from "react";

function Category(category, onCategoryClick) {
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

export default Category;
