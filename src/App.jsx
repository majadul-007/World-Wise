import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import Homepage from './pages/Homepage';
import PageNotFound from './pages/PageNotFound';

const App = () => {
  return (
    <BrowserRouter >
    <div>
    <h1>Hellow Router</h1>
    <h2>Worldwise</h2>
    

    <Routes>
          
          <Route path="" element={<Homepage  />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="*" element={<PageNotFound />} />
      
    </Routes>
    


    </div>
    </BrowserRouter>
    
  );
};

export default App;