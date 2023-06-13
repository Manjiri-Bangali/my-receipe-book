import React from 'react';

const Category = ({ category }) => {
    return (
        <div className= {`category ${category.categoryName}`}>
            <p className="category-title">{category.title}</p>
        </div>
    );
}

export default Category;