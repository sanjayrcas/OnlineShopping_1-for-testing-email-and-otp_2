const dotEnv = require('dotenv');
dotEnv.config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./configs/db');
const productRoutes = require('./routers/productRoutes');
const authRoutes = require('./routers/authRoutes');
const otpRoutes = require('./routers/otpRoutes');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors({
      origin: 'http://localhost:3000'
    // origin: 'https://onlineshopping-1-mernstack-sanjay.netlify.app'
}));

app.use(express.json()); // allows us to parse incoming requests: req.body

// database.
connectDB();

// Routes
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/otp', otpRoutes);

// Port.
app.listen(port, () => {
    try {
        console.log(`server is running on http://localhost:${port}`);
    } catch (error) {
        console.log(error, 'server is not connecting');
    }
})