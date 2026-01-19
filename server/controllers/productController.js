const productModel = require('../models/productModel');

exports.addProduct = async (req, res) =>{
    try {
        const product = new productModel(req.body); // Product = your Mongoose model, new Product(req.body) = creating a new product document instance ready to be saved to MongoDB
        const savedProduct = await product.save(); // Saves it to your MongoDB collection based on the schema defined.
        res.status(201).json(savedProduct);        
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};

exports.getAllProducts = async (req, res) => {
    try {
        const products = await productModel.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

exports.getProductById = async (req, res) => {
    try {
        const product = await productModel.findById(req.params.id);
        if(!product) {
            return res.status(404).json({message: 'Product not found'});
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateProduct = async (req, res) => {
    try {
        const updatedProduct = await productModel.findByIdAndUpdate(req.params.id, req.body, {new:true} );
        if(!updatedProduct) {
            return res.status(404).json({message: 'Product not found'});
        }
        res.json(updatedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        const deleteProduct = await productModel.findByIdAndDelete(req.params.id);
        if(!deleteProduct) {
            return res.status(404).json({message: 'Product not founded'});
        }
        res.json({message: 'Product deleted successfully'});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}