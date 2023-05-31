import React, { useEffect, useState } from 'react';
import './CategoryLIst.css'
import JobCategory from '../JobCategory/JobCategory';

const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('jobCategories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);

    return (
        <div className='category-list'>
            <div className="category-list-wrapper">
                <h2>Job Category List</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className="all-job-categories">
                {
                    categories.map(cat => <JobCategory key={cat.id} cat={cat} />)
                }
                </div>
            </div>
        </div>
    );
};

export default CategoryList;