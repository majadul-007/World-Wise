import React from 'react';
import PageNav from '../components/PageNav';
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <div>

        <PageNav></PageNav>
        <h1>WorldWise</h1>
        <Link to='/pricing'>Pricing</Link>
        </div>
    );
};

export default Homepage;