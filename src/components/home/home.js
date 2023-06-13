import React from 'react';
import CategoriesList from '../categoriesList/categoriesList';
import categories from '../../data/categories';

const Home = props => {
    return (
        <CategoriesList categories= {categories}></CategoriesList>
    );
}

export default Home;