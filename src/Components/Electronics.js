import React, { useState, useEffect } from 'react'


const Electronics = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      fakestore();
    }, []);
    
  const fakestore=async()=>{
    const response=await fetch("https://fakestoreapi.com/products/category/electronics");
    const jsonData=await response.json();
    setProducts(jsonData);

  }
  return(
    <div className="Card_viewHolder">
      <h2>Electronics</h2>
      <div className="container_2">
        {products.map((product)=>{
          return(
            <div className="box_2">
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

export default Electronics;