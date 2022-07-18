import React, { useState, useEffect } from 'react'


const MenCatalog = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      fakestore();
    }, []);
    
  const fakestore=async()=>{
    const response=await fetch("https://fakestoreapi.com/products/category/men's clothing");
    const jsonData=await response.json();
    setProducts(jsonData);

  }
  return(
    <div className="Card_viewHolder">
     
      <h2>Men's Wear</h2>
    
      <div className="container_1">
        {products.map((product)=>{
          return(
            <div className="box_1">
            <div className="content">
              <h5 class="Card_title">{product.title}</h5>
   <img className="ImagesForCardView" src={product.image}></img>
 
  
  
            </div>
            </div>
          )
        }
      
        
   
  )   }
  </div>
  </div>
  )
}

export default MenCatalog;