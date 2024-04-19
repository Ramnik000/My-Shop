import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/products');
                setProducts(response.data);
                
            } catch (error) {
                console.error('Error fetching products:', error);
                setError(error);

            }
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Products</h1>
           
                <ul>
                    {products.map(product => (
                        <li key={product._id}>
                            <p>Name: {product.name}</p>
                            <p>Description: {product.description}</p>
                            <p>Price: ${product.price}</p>
                            <p>Category: {product.category}</p>
                        </li>
                    ))}
                </ul>
        
        </div>
    );
}

export default ProductList;
