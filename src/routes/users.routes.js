import { Router } from "express";
const router = Router();
//----------------------------------------------------------------------
import * as usersController from "../controllers/users.controllers";
//----------------------------------------------------------------------

router.get("/", usersController.getProducts);

router.post("/", usersController.createProduct);

router.get("/:id", usersController.getProductById);

router.put("/:id", usersController.updateProductById);

router.delete("/:id", usersController.deleteProductById);

export default router;
