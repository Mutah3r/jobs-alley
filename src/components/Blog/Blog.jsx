import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blog-wrapper'>
            <div className="blog-post">
                <h3 className='blog-qstn'>When should you use context API?</h3>
                <p className="blog-qstn-ans">When a large number of components at various nesting levels require access to a single piece of data, context API is usually used. It offers a method for sending data down the component tree without having to manually send props down at each level. Context API can therefore be used when it is necessary to prevent providing some props via numerous layers.</p>
            </div>
            
            <div className="blog-post">
                <h3 className='blog-qstn'>What is a custom hook?</h3>
                <p className="blog-qstn-ans">A custom hook in React is a function that enables the sharing of stateful functionality among components. Reusable stateful functionality from components is extracted and written in a function to produce custom hooks. Using the "use" prefix is the standard naming pattern for React custom hooks. Any of the React hooks that already exist can be utilized inside the new hook.</p>
            </div>
            
            <div className="blog-post">
                <h3 className='blog-qstn'>What is useRef?</h3>
                <p className="blog-qstn-ans">The useRef hook can be used to directly access a DOM element inside a functional component or to create a reference to it. The value of a ref can be altered unlike state variables without forcing the component to redraw. As a result, refs can be used to store values that don't impact how a component looks but yet need to be available from within the component.</p>
            </div>
            
            <div className="blog-post">
                <h3 className='blog-qstn'>What is useMemo?</h3>
                <p className="blog-qstn-ans">The useMemo hook in React is used to return a memoized value. It is used to enhance a component's performance by memoizing a function's result, which is computationally expensive. Two arguments are passed to useMemo hook, one is an array of dependencies that specify when the memoized value should be recomputed and another is a function that computes the value to be memoized.</p>
            </div>
        </div>
    );
};

export default Blog;