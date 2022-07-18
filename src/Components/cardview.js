import React,{useEffect} from 'react'
import {useDispatch,useSelector } from "react-redux";
import {setProducts} from '../redux/actions/ProductAction.js';
import axios from 'axios';

import ProductComponent from './ProductComponent.js';
const CardView = () => {
    const products=useSelector((state)=>state);
    const dispatch=useDispatch();
    const fetchProducts=async()=>{
      const response=await axios.get('https://fakestoreapi.com/products').catch(err=>console.log(err));
      dispatch(setProducts(response.data));
    } 
   useEffect(()=>{
    fetchProducts();
   },[]);
console.log("products",products);
  return(
  
  <div className="container">
        
<h2>Top Deal's</h2>
<div className="container_2">
        <ProductComponent/>
        </div>

  </div>

  )
}

export default CardView;