require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// सही रास्ता: 'public' फोल्डर को ढूंढने के लिए एक डायरेक्टरी पीछे जाएं
app.use(express.static(path.join(__dirname, '..', 'public')));

// DB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.error(err));

// सही रास्ता: 'routes' फोल्डर को ढूंढने के लिए एक डायरेक्टरी पीछे जाएं
app.use('/api/products', require('../routes/productRoutes'));

// सही रास्ता: बाकी सभी रास्तों के लिए फ्रंटएंड को सर्व करें
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
