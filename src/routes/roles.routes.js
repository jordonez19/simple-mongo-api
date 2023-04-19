import { Router } from "express";
const router = Router();
//----------------------------------------------------------------------
import * as productController from "../controllers/product.controller";
//----------------------------------------------------------------------

router.get("/", productController.getProducts);

router.post("/", productController.createProduct);

router.get("/:id", productController.getProductById);

router.put("/:id", productController.updateProductById);

router.delete("/:id", productController.deleteProductById);

export default router;
