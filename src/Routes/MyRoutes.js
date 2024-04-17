import { addNewProduct , getProducts, getProductsByID, updateProduct, deleteProduct } from "../Controllers/MyController.js";

const Routes= (app) =>{

    app.route('/products')
    .get((req, res , next)=>{
        console.log(`Request from: ${req.originalUrl}`)
        next();
    }, getProducts)
    .post(addNewProduct)
    .put(updateProduct)
    .delete(deleteProduct)
   
    app.route('/products/:productId')
    .get(getProductsByID)
    .put(updateProduct)
    .delete(deleteProduct)

}

export default Routes;
