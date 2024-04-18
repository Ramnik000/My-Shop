import express from 'express';
import cors from 'cors';
import Routes from './src/Routes/MyRoutes.js';
import mongoose from 'mongoose';


const app = express();
//Middleware for cors
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());

// Connect to MongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('Failed to connect to MongoDB:', error));

// Routes
app.use('/products', Routes);

// Default route handler
app.use((req, res) => {
  res.status(404).send('Page not found');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
