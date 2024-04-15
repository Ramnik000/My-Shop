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
