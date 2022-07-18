import React from "react";

const LowerNavbar = () => {
  return (
    
   
   
<div class="hamburger-menu">
    <input id="menu__toggle" type="checkbox" />
    <label class="menu__btn" for="menu__toggle">
      <span></span>
    </label>

    <ul class="menu__box">
     <li>   <div class="input-group rounded">
  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
  <span class="input-group-text border-0" id="search-addon">
 <a  class="search"href="#" ><i class="fa fa-search"></i></a>
  </span>
  
  

</div></li>
      <li><a class="menu__item" href="#">Home</a>
      </li>
      <li><a class="menu__item" href="#">About</a></li>
      <li><a class="menu__item" href="#">Your Order</a></li>
      <li><a class="menu__item" href="#">Wishlist</a></li>
      <li><a class="menu__item" href="#">Previous Orders</a></li>
      <a class="menu__item" href="#">Today's Deal</a>
    <a class="menu__item"href="#">Buy Again</a>
    <a href="#"class="menu__item">Customer Service</a>
    <a href="#"class="menu__item">Browsing History</a>
    <a href="#"class="menu__item">Register</a>
    <a href="#"class="menu__item">Language</a>
    <a href="#"class="menu__item">Your Orders</a>
    <a href="#"class="menu__item">About Us</a>
    <a href="#"class="menu__item">In Store</a>
    </ul>
    </div>
 
    
 
    );
  };
  
  
  export default LowerNavbar;
  