import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProductList from './Components/ProductList.js';
import HomePage from './Components/HomePage.js';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
       <Router>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/products" element={<ProductList/>}/>
            </Routes>
       </Router>        
    );
}

export default App;
