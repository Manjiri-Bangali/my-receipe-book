import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Category from '../category/category';
import './categoriesList.scss';

const CategoriesList = ({ categories })  => {
    useEffect(() => {
        console.log("categories updated");
        // fetchCategoryList();
    }, [categories]);

    // const fetchCategoryList= async () => {
    //     const data= await
    // }
    
    return (
        <div className="category-list-container">
            {
               categories.map(category => (
                   <Link to={`/${category.categoryName}`} key={category.categoryId} >
                       <Category category= {category}></Category>
                   </Link>
               ))
            }
        </div>
    )
}

export default CategoriesList;