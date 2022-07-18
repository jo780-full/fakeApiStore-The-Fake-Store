import React from "react";
import LowerNavbar from "./lowernav.js";
const Navbar = () => {
  return (
  
    <nav id="Nvbar" className="navbar navbar-expand-lg navbar-light bg-light" >
      <a className="navbar-brand" href="#">
      <img id="searchlogobtn" src="https://us.123rf.com/450wm/outchill/outchill2105/outchill210501798/168713230-fake-text-written-on-black-grungy-zig-zag-borders-round-stamp-.jpg?ver=6"></img>
       
      </a>
      

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home 
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Deals
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
            Orders
            </a>

          </li>
          <li className="nav-item">
          <div class="input-group rounded">
  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
  <span class="input-group-text border-0" id="search-addon">
 <a  class="search"href="#" ><i class="fa fa-search"></i></a>
  </span>
  </div></li>
          <li className="nav-item">
            <a className="nav-link" href="#">
             History
            </a>
          </li>
        
          <li className="nav-item">
            <a className="nav-link" href="#">
            Language
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
            Wishlist
            </a>
          </li>
        
          </ul>
       
</div>
      <h2 className="FakerSection">The fake store</h2>
      
<img class="user_img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAMAAAAL34HQAAAAY1BMVEX///8AAAD8/Pz39/f09PTW1tbBwcHv7+9lZWWJiYmCgoKxsbHc3NyTk5O8vLwKCgro6OidnZ1xcXHHx8fNzc08PDxVVVVgYGAcHBxbW1t3d3dNTU0lJSURERGkpKQyMjJDQ0NX2kvwAAAFJUlEQVR4nO1a6ZbqIAweu+92s3az+v5PeWcI1I6jtgRSz7mH76cW+AghZPv6MjAwMDAwMDAwMDDYBb7rxrHr+p/mIWD7VdxdDzPGLvZ8+8OknLpvLocHHIe+/qTYkvT6SGkWWuh+iJTzmhQQcz5Ays7+nN3x8Zd4d2J5sFi+HYIwjus6jsNgGBd/dPm+rOL74rfU+7V4XhW3+RZcJmtHVsVMqsnyPwtbuXeXZbobL3tetEtefXM/5GYnI2b3QsezN5KwKnHOwT42TMihX7lnVsg/HPaQl9CrflVpZl4hvX5N/IplWz6uW86LmlUi1Grb5xXnRfwS5TdYpt46wIXvry+vrBak0ofCDz2i4zQfYSSjwoWkfOVhRZgL37FBJd1trNlbN0puPDkxXhsvCQJnnBWCYxxIKH0jZ9O30m+JPZJqV4q9U+iBW+APTLMQFihn2nWl8QnBMgaYoSWh0of4uRV2tIqGzY0by4ae9PIBOKPC1OwUjxQPIzw8BW5wzAZXehkxeCpqW7HBsV5GDGzDF+SG3auCqN/BYjbxhFQPh92XSL9TD475gDSJNntOS/3Bv82cmgYZXAGtQD8th93xM/IYyGjBIapJi+AQrUJdtwhUHmIFbATjs5tIkSbJ1O3WpJcRg5Kh9sisPLyJKW5wTOc2MxfziBsLji1J5gbiHpzWsqE3rXQEIGxHqW1GGGO4LMEdYMTVk7lb3waVpQEvCL1NmGPbEGXp4RRL+YEQJ5Ll3tjs8ik0H9L0ZCUNUBGpNNIPiHMQXwl7Qo6SxhoSqC1hnhKU5Cp1HFaDk7EEfMi9dBK8RHGBtCjFc6cShpGP6Ok4fcPhJYzNoRWvOsrIFwMHlmk3qr133eEIf1DzGmu6Yf8Wz36TOFoPEEttSB1H/NNdaoqiFjWsvI6JKKWRV3wYLH65DuNbJycWdf9wr2YNweswZi/iRt87HXaVFUMs1jwM8ZMQLcma+YNizxp6sug3CFI3n6+lkyfp4r+GsNTzDH55X/swns5hWkxTkYbB6VcfxP6tNnl3WMHwmTabenxHqn1X96eDXxW3d7RO6atrSgh76tq1Q2ybYl9iSfSnl+w5jgFtkfoXwkelaoeyjKYpKsvhUYaXtS4OTbDT5aLXc5q5v3TbSrIiOC3ZhTscZb0wlscgTp4u6edZuSDWecSknIWoyvitFHyvv38bkfqB9xapw7laN0v1/SkYCDXsbj/7jbvPhSf4bV2pWHlCXW4SBtwTzoRs1LsRltj4KOmrTML1Cij8wdknlfZVEsGLILKewwXMloX7r71aLeIdZKa5UBu+Mu0FbRdrHnBozZ9WnJXCZRKNlRrvY8X9BSXHPLlo5mVftUzoAa9Wk70XGSrl97aGebA1yQfwXJCGDBXvQ9VSKLM5Kw0mWjwUOtyJUN9UXw5koTT0CUIlUFeTU6XrNkKQiqr0PANcn5vqdFxY2pw4q9UhLu6OakwGwTOmmJwAE4htM3gGp9Mgrl73OybMoFIFCDpN5Yopa7BY3VqpVb3QZd+XUO5Cha4rTKfpO0AX6g2vr9CXWeqODHpFLynSr/A/gN126PEQsegPV8Dvwo724aHQR0egV7qLZP06ahMXiqr5EtAXgQxmwVk+EaSA4AFCvov5oNWlWUJlw2D2SPp1mHrIJzMY3FFbPPAIFgMhg+GMeWwkac9cIQKa9IUWj8gVnMuCjpavQCs+ave1BMDnwvWp+2f00FXEKq7NFJJVbPJw12qxgYGBgYGBgYGBwX+HfwOHMn/nWPd5AAAAAElFTkSuQmCC"></img>
<img class="user_img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAACNCAMAAAAgjQAfAAAAb1BMVEX///8jJygAAAD19vb6+/scISIhJSfy8/NcXV5XWFgaISEbHh8fIyRHSkpSU1NLTk7T1NRBRETq6+sIDxAPFRcVGhvh4uKFh4d6e3y2uLidn6BvcHBhZGUAAQatr66LjIy/wcAwNDOWl5c2OzzJycoBRGelAAAEfklEQVR4nO2bi3KqMBCGIZKAgnJJgiLIrb7/Mx4QVFBAT80mdibftLYd7cw/y7LZbH4MQ6PRaDQajUaj0Wg0Go1GIwxr9YClWtEClhHtKXqArgPVuhZYI2I+wszvVZwg05xQvLaML02MPXtS2+DRSLWwOQo6JdhEpWphcwRoUjDdqxY2ywFt8ACvE4zXqnXNk6ROy7pj1yuuYtW6FrCbxcK+4uOLYDdRrepd+ruQ1qqFvEvZ3YUsXalW8haWEXfriGd+bSV+wHZ4V4nP97we8tgptc3SayAV90mMw90kbSVZT+PMk5VwghPe9RYe9q409Xmzacr1tWK77uW1/6N97861oI+qO3ZRChbloJpc+z4FnaEEW30lFgxPoQQbh8kG7mPBGZjgZLof+hB0BBMcT3ecnwqG28SsfgCS2DNtMMHGHiDEDLLBzgHuOg7Z/QFUYlJB7sNt3xMtGDug7cSBixYM3F6Lr8SARa0lFi8YeCwzMb76CAbXSHRkggsbyoEF5yexgjfQw8VAbJnADuC6fCES2xNz8MGXJbYSU/ipzFHoXcfhRwZCk5g74HoNe2Is/2uQjLFXJjDEVMaJyVHc6ox96KLWMjOZ/w1sL+N8JxK3sQPdbNxYpeIKm5xDv6OonSj2peg1SlEpIetAKvoRtLGDmwI+4IipxJ4p6+yhENMTM7jB8AOCKjGD3mzcsLGIJCZEnpNBQBITF3DK+kT9+0pMPMxbb8vJl6j3F5W41ck4d12z8rM6P8f2SqZRJA7fTmLiueyEKGl07uu8DCIldpaVs3kl1PNc3ihFp03YRjSIIxmd5CzFbP9DMKenE6/CXXYo2ks//Dd1ZqFyWIkJueRoe+kR2oTO/pg0EbW/yspk3QS3V54ytwr97FDn36bzjtnXCWzu0iaizc30rUp7+tMZVkT233BPlJ1gvv7uuN65mj1cpcXqP7Az9xJiaT34xxRd/0MLO4qiSYPKjEmlpc172bmU9EsHdp/pfB3eHULIeL5VpdLNb/G1wySkk0P638aY3cvDe6ZH5dv1wpftxCJUytBnyIfn5O5OtpnswyNG+YLt0L05uMnzyJi8GCPTQrLeJsSUDc262Bv8MQ/pfpxUeGSDdOc/s22+nggbtv33hYMaT+/Ikzi3SEwuKErk/lnsIEnOr+95KyiT8hvc3fmuYszcFi8WgiCtPIp/UtUPrkQ+wpc9HSXnhYbGqhFvi5/HUa20hV45twWPLxmh8/syQ2WOfJ4YDq14NnvzB4PxIUEKHd7x6EQJz3bzh2HjAeqse0E56oDmDVKjvsPbqgvxcTSL53Mj9WjcKIFa65awjHos2JlJ4rEXC9YLuMzYAcQOMxFejVPiR93ycabDJnK+YPHheBbv1M0G7LX7Vm7WwxDLPCt4YlgmFtwa0fZe/rgpUd8ze3S92qelsdWZXXfZvFnClT5VeqyQ2z4qSveLmXn2EWu2TQwpftC4CVVchAhVh/Ni1CwjytcbxLP8K4ZxbzxS3n7AunwM9nkpjUaj0Wg0Go1Go9FoNBqN8Q8h1kvoBKX4QQAAAABJRU5ErkJggg=="></img>
<LowerNavbar/>
    </nav>
  );
};


export default Navbar;
