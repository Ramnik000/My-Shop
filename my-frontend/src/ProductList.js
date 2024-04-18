import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/products');
                setProducts(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error);
                setError(error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Products</h1>
            {loading && <p>Loading...</p>}
            {error && <div>Error fetching products: {error.message}</div>}
            {!loading && products.length === 0 && <p>No products available</p>}
            {!loading && products.length > 0 && (
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
            )}
        </div>
    );
}

export default ProductList;
