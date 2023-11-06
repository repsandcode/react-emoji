import React from "react";
import PropTypes from 'prop-types';

function Category({category, onCategoryClick}) {
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

Category.propTypes = {
    category: PropTypes.node,
    onCategoryClick: PropTypes.node,
}

export default Category;
