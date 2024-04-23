import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; 

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

    const handleDelete = async (productId) => {
        try {
            await axios.delete(`http://localhost:3000/products/${productId}`);
            setProducts(products.filter(product => product._id !== productId));
        } catch (error) {
            console.error('Error deleting product:', error);
            setError(error);
        }
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                    <div className="sidebar-sticky">
                    <h1 className="mt-4 mb-4">Products</h1>
                        <ul className="nav flex-column">
                            
                            <li className="nav-item">
                                <a className="nav-link" href="#">Add Product</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Update Product</a>
                            </li>

                        </ul>
                        <form className="mt-4">
                            <input type="text" className="form-control" placeholder="Search..." />
                        </form>
                    </div>
                </nav>
                <main role="main" className="col-md-10 ml-sm-auto col-lg-10 px-4">
                    <br></br>
                    <div className="row">
                        {products.map(product => (
                            <div key={product._id} className="col-md-4 mb-4">
                                <div className="card">
                                    <img src={product.imageUrl} className="card-img-top" alt={product.name} />
                                    <div className="card-body">
                                        <h5 className="card-title">Product: {product.name}</h5>
                                        <p className="card-text">Description: {product.description}</p>
                                        <p className="card-text">Price: ${product.price}</p>
                                        <p className="card-text">Category: ${product.category}</p>
                                        <button className="btn btn-danger" onClick={() => handleDelete(product._id)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}

export default ProductList;
