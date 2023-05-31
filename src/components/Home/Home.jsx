import React, { useContext } from 'react';
import CategoryList from '../CategoryList/CategoryList';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Home = () => {
    return (
        <div>
            <CategoryList />
            <FeaturedJobs />
        </div>
    );
};

export default Home;