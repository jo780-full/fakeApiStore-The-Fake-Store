import React, { useState, useEffect } from 'react'


const Jewelry = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      fakestore();
    }, []);
    
  const fakestore=async()=>{
    const response=await fetch("https://fakestoreapi.com/products/category/jewelery");
    const jsonData=await response.json();
    setProducts(jsonData);

  }
  return(
    <div className="Card_viewHolder" background-color="primary">
      <h2>Jewlery</h2>
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

export default Jewelry;