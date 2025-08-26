const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    sizes: { type: [String], required: true },
    description: { type: String, required: true },
    sourceLink: { type: String, required: true },
    category: { type: [String], required: true },
    gender: { type: String, required: true, enum: ['boy', 'girl', 'other'] },
    exclusive: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);
