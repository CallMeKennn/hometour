import React from "react";
import "./Categories.scss";

const Categories = ({ src, categoryName }) => {
    return (
        <div className="category-container">
            <img className="img-category" src={src} />
            <div className="category-name">{categoryName}</div>
        </div>
    );
};

export default Categories;
