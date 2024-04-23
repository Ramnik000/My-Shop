import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProductList from './Components/ProductList.js';
import HomePage from './Components/HomePage.js';
import AddProduct from './Components/AddProduct.js'
import UpdateProduct from './Components/UpdateProduct.js'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
       <Router>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/products" element={<ProductList/>}/>
                <Route path="/add" element={<AddProduct/>}/>
                <Route path="/update" element={<UpdateProduct/>}/>
                
            </Routes>
       </Router>        
    );
}

export default App;
