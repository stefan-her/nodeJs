import { Router } from "express";
import { getAllProduct, getIdProduct, addProduct, updateProduct, deleteProduct } from "./../controllers/product.controller.js";
const productRouter = Router();

productRouter.get("/", getAllProduct);
productRouter.get('/:id', getIdProduct);
productRouter.post('/', addProduct);
productRouter.put('/:id', updateProduct);
productRouter.delete('/', deleteProduct);


export default productRouter;