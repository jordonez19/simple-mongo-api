import Product from "../models/products.model";
//----------------------------------------------------------------------
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error(`getProducts ----->  ${error}`);
  }
};
//----------------------------------------------------------------------
export const createProduct = async (req, res) => {
  try {
    const { name, price, category, description } = req.body;
    const newProduct = new Product({ name, price, category, description });
    const savedProduct = await newProduct.save();
    res.json(savedProduct);
  } catch (error) {
    console.error(`createProduct ----->  ${error}`);
  }
};
//----------------------------------------------------------------------
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    console.error(`getProductById ----->  ${error}`);
  }
};
//----------------------------------------------------------------------
export const updateProductById = async (req, res) => {
  try {
    const updateProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    const productUpdated = await updateProduct.save();
    res.json(productUpdated);
  } catch (error) {
    console.error(`updateProductById ----->  ${error}`);
  }
};
//----------------------------------------------------------------------
export const deleteProductById = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json();
  } catch (error) {
    console.error(`deleteProductById ----->  ${error}`);
  }
};
