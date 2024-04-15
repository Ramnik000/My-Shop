import { addNewProduct , getProducts } from "../Controllers/MyController.js";

const Routes= (app) =>{

    app.route('/products')
    .get((req, res , next)=>{
        console.log(`Request from: ${req.originalUrl}`)
        next();
    }, getProducts)
    .post(addNewProduct);

    app.route('/products/:productId')

    .put((req, res)=>{
        res.send("Put request is successfull");
    })
    .delete((req, res)=>{
        res.send("Delete request is successfull");
    })

}
export default Routes;