import mongoose from 'mongoose';
import Product from "../Models/MyModel.js";

export const addNewProduct = async (req, res) => {
    try {
        let newProduct = new Product(req.body);
        const savedProduct = await newProduct.save();
        res.json(savedProduct);
    } catch (err) {
        res.status(500).send(err);
    }
};

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (err) {
        res.status(500).send(err);
    }
};

export const getProductsByID = async (req, res) => {
    try {
        const product = await Product.findById(req.params.productId);
        res.json(product);
    } catch (err) {
        res.status(500).send(err);
    }
};


export const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findOneAndUpdate(
            { _id: req.params.productId },
            req.body,
            { new: true }
        );
        res.json(updatedProduct);
    } catch (err) {
        res.status(500).send(err);
    }
};

export const deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.productId);
        res.json({ message: 'Successfully deleted' });
    } catch (err) {
        res.status(500).send(err);
    }
};
