import React from 'react';

const JobCategory = ({ cat }) => {
    return (
        <div>
            <div className="category-lists">
                <div>
                    <img draggable={false} src={cat.categoryLogo} alt="" />
                    <h3>{cat.categoryName}</h3>
                    <p>{cat.jobsAvailable} Jobs Available</p>
                </div>
            </div>
        </div>
    );
};

export default JobCategory;