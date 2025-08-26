// routes/productRoutes.js का कोड
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/', async (req, res) => {
    try {
        const products = await Product.find().sort({ createdAt: -1 });
        res.json(products);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

router.post('/', async (req, res) => {
    const { name, price, imageUrl, sizes, description, sourceLink, category, gender, exclusive } = req.body;
    try {
        const newProduct = new Product({ name, price, imageUrl, sizes, description, sourceLink, category, gender, exclusive });
        const product = await newProduct.save();
        res.json(product);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

module.exports = router;
