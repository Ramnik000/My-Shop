const Routes= (app) =>{

    app.route('/products')
    .get((req, res)=>{
        res.send("Get request is successfull");
    })
    .post((req, res)=>{
        res.send("Post request is successfull");
    })
    app.route('/products/:productId')

    .put((req, res)=>{
        res.send("Put request is successfull");
    })
    .delete((req, res)=>{
        res.send("Delete request is successfull");
    })

}
export default Routes;