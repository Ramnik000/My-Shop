import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate(); 
    return (
        <div className="home-page">
            <div className= "home-container">
            <h1>Welcome to My Shop</h1>
            <br></br>
            <p>This is the homepage of our online shop.</p>
            <p>Explore our products and find what you need!</p>
           
            <p className="text-center mt-3"> <span onClick={() => navigate('/products')}>Go to Products</span></p>
            </div>
        </div>
    );
}

export default HomePage;
