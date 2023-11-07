import React from "react";
import PropTypes from "prop-types";
import Category from "./Category";

const CategoryNavbar = ({ onCategoryClick }) => {
  const categories = [
    "all",
    "smileys-and-people",
    "animals-and-nature",
    "food-and-drink",
    "travel-and-places",
    "activities",
    "objects",
    "symbols",
    "flags",
  ];

  return (
    <div className="categories">
      {categories.map((c) => (
        <Category key={c} category={c} onCategoryClick={onCategoryClick} />
      ))}
    </div>
  );
};

CategoryNavbar.propTypes = {
  onCategoryClick: PropTypes.node,
};

export default CategoryNavbar;
