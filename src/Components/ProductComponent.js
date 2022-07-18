import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from "react-redux";

const ProductComponent=()=>{
  const products=useSelector((state)=>state.allProducts.products);
  const renderList=products.map((product)=>{
    const{id,title,image,price,category}=product
    return(
      <div className="four column wide" key={id}>
       
      <div className="ui link cards">
       
        <div className="card">
        <hr/>
        <Link to={`/products/${id}`}>
        <div className="ImagesForCardView"><img src={image} alt="image"></img></div>
        </Link>
        <div className="content">
        <Link to={`/products/${id}`}>
          <div className="Card_titles">{title}</div>
          </Link>
          <h2>
                <a className="ui teal tag label">${price}</a>
              </h2>
          <div className="meta category">{category}</div>
       
        </div>
        </div>
        <hr/>
      </div>
      <hr/>
      </div>
    )
  }
      
      
    );
    return(
      <>{renderList}</>
      );
  }
  
  
export default ProductComponent;