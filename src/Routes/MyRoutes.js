import { Router } from 'express'; 
import { addNewProduct, getProducts, getProductsByID, updateProduct, deleteProduct } from "../Controllers/MyController.js";

const router = Router(); 

router.route('/')
    .get(getProducts)
    .post(addNewProduct);

router.route('/:productId')
    .get(getProductsByID)
    .put(updateProduct)
    .delete(deleteProduct);

export default router; 
