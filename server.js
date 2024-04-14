import express from 'express';
import Routes from './src/Routes/MyRoutes.js';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();

Routes(app);

//mongodb connection

mongoose.Promise= global.Promise;
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
}).then(()=> console.log('connected to mongodb')).catch((error)=>console.error("Failed to connect:", error));

//setting bodyparser for incoming req
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use((req, res, next) => {
    res.status(200).json({
        message: 'It works!'
    })
});

const port = process.env.PORT || 3000;  

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
