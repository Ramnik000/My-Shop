import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted');
        try {
            const response = await axios.post('http://localhost:3000/products', {
                name,
                description,
                price,
                category,
                imageUrl
            });
            console.log('Product added:', response.data);
            setName('');
            setDescription('');
            setPrice(0);
            setCategory('');
            setImageUrl('');
            console.log('Navigating...');
            navigate('/products');
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="form-container" style={{ width: '700px' }}>
                        <h2 className="mb-4">Add Product</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Product Name" required />
                            </div>
                            <div className="mb-3">
                                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" placeholder="Description" required />
                            </div>
                            <div className="mb-3">
                                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="form-control" placeholder="Price" required />
                            </div>
                            <div className="mb-3">
                                <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} className="form-control" placeholder="Category" required />
                            </div>
                            <div className="mb-3">
                                <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} className="form-control" placeholder="Image URL" required />
                            </div>
                            <button type="submit" className="btn btn-primary">Add Product</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddProduct;
