import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar.js";
import './App.css';
import ProductDetail from "./Components/ProductDetail.js";
import Herosection from "./Components/herosection.js";
import CardView from "./Components/cardview.js";
import React from 'react';
import WoMenCatalog from "./Components/Womens.js";
import Jewelry from "./Components/Jewelery.js";
import Electronic from "./Components/Electronics.js";
import MenCatalog from "./Components/MensCatalog.js";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Footer from "./Components/footer.js";

function App() {
  return (

    <div className="App">

    
      <header className="App-header">
        <Navbar />
       <hr/>
  
      </header>

       <main>
      
       
        <BrowserRouter>
    <Routes>
   
    <Route path="/" element={
  <>
      <Herosection/>    
      <hr/>
      
   <CardView/>
    <MenCatalog/>
    <WoMenCatalog/>
    <Electronic/>
    <Jewelry/>
    </>
     
    }/>
 
     <Route path="/products/:productId"  element={<ProductDetail/>}/>  
     
<Route>Error 404 Items not found</Route>

      
     </Routes>
     </BrowserRouter>
        </main> 
        <footer class="footerMain">
        <Footer/>
        <div class="bg-light py-4">
      <div class="container text-center">
        <p class="text-muted mb-0 py-2">© Fake Store All rights reserved.</p>
      </div>
    </div>
        </footer>
        
    </div>
  );
}

export default App;
