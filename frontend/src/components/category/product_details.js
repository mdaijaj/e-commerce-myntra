import React from "react";
import "./product_details_style.css";
import { useState, useEffect } from "react";
// import addToCard from "./bag";
    
let bag=[];
const ProductDetails = ({match}) => {
  const [products, setProducts] = useState({})
  const [counter, setCounter] = useState('')


  const proDetails=async()=>{
    const response= await fetch(`/productInf/${match.params.id}`)
    const singleProduct= await response.json();
    console.log("singleProduct", singleProduct)
    // const data=allData.data
    setProducts(singleProduct.prodInf)
    return singleProduct.prodInf
  }
    


  const addToCard=async()=>{
    let count=0
    const getdata= await proDetails()
    console.log("getdata", JSON.stringify([getdata]))
    if(getdata.stock>0){
      bag.push(getdata._id)
      count+=1
      setCounter(count)
      console.log("bag", bag)
      localStorage.setItem("products", bag);
      let result =await localStorage.getItem("products");
      console.log("result", result)
      const config={
        method: "Post",
        "Content-Type": "application/json",
        body:JSON.stringify(result)
      }
      fetch('/insertToCart', config)
      .then(response => response.json())
      .then(data => {
        console.log(data)
      }).catch((err)=>{console.log(err.message)})
    }
    else{
      window.alert("Out of Stock")
    }
  }

  //same add to cart just remove localstorage
  const WishList=async()=>{
    let count=0
    const getdata= await proDetails()
    console.log("getdata", JSON.stringify(getdata))
    if(getdata.stock>0){
      count+=1
      setCounter(count)
      const config={
        method: "Post",
        "Content-Type": "application/json",
        body:JSON.stringify(getdata._id)
      }
      fetch('/insertToWish', config)
      .then(response => response.json())
      .then(data => {
        console.log(data)
      }).catch((err)=>{console.log(err.message)})
    }
    else{
      window.alert("Out of Stock")
    }
  }

  useEffect(()=>{
    proDetails()
  }, [])

  return (
    <>
    {/* <Product/> */}
      <h2>Product details page</h2>
      <div className="row" style={{ height: "auto" }}>
        <div className="col-2" >
          <img 
            src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg"
            style={{ width: "400px", height: "auto" }}
          />
        </div>
        <div className="col-3">
          <img
            src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/2/14/11adb5a6-9666-4bd2-8ed8-03fd20291f9d1581635929903-1.jpg"
            style={{ width: "400px", height: "auto" }}
          />
        </div>
        <div className="col-6">
          <div className="user_details">
            <h6>Product details</h6>
            
            {/* doubt here */}
            <h1>{products.name}</h1>  
            <p>{products.description}</p>
            <button>{products.rating} | {products.numOfReviews}</button> 
          </div>
          <hr/>
          <div className="product_size">
          <h3>{"Rs."+ products.price + ' Rs. 2995(74% OFF)'}</h3>
          <p>inclusive of all taxes</p>
            <h6>SELECT SIZE</h6>
            <div className="btn_style">
              <button>S</button>
              <button>M</button>
              <button>L</button>
              <button>XL</button>
              <button>XXL</button>
            </div>{" "}
            <br />
            <br />
            <button type="button" onClick={addToCard} className="btn btn-secondary btn-lg">
              BAG 
            </button>
            <button type="button" onClick={WishList} className="btn btn-lg btn-primary">
              WISHLIST
            </button>
          </div>
          <br />
          <div className="row col-md-6">
            <label for="inputpincode">
              <strong>DELIVERY OPTIONS</strong>
            </label>
            <input
              type="text"
              className="form-control"
              id="inputpincode"
              placeholder="Enter pincode"
            />
          </div>
          <div className="content">
            <p>
              Please enter PIN code to check delivery time & Pay on Delivery
              Availability
            </p>
            <p2>
              100% Original Products <br />
              Pay on delivery might be available
              <br />
              Easy 30 days returns and exchanges
              <br />
              Try & Buy might be available
            </p2>
          </div>
          <div className="">
            <h4>BEST OFFERS </h4>
            <p>This product is already at its best price</p> <br />
            <h4>EMI option available</h4>
            <p>EMI starting from Rs.27/month</p>
            <button type="button" className="btn btn-link">
              View Plan
            </button>
          </div><hr/>

          <div className="product_details">
            <h3>PRODUCT DETAILS </h3>
            <p>
              Green and Beige printed casual shirt, has a spread collar, short{" "}
              <br />
              sleeves, button placket, curved hem, and 1 patch pocket
            </p>
            <h4>Size & Fit</h4>
            <p>
              Slim fit <br />
              The model (height 6') is wearing a size 40\
            </p>
            <h4>Material & Care</h4>
            <p>
              Material: Cotton <br />
              Machine Wash
            </p>
            <h4>Specifications</h4>
            <p>form input</p>
            <h4>Complete The Look</h4>
            <p>
              Spruce up your summer-time style with this trendy shirt by
              HIGHLANDER. <br />
              You can team this green piece with slick black jeans, <br />
              leather boots, and a lightweight bomber jacket for your next date
              night.
            </p>
          </div><hr/>
          
          <div className="rating">
            <p>input rating image</p>
          </div>
          <div className="customer_photo">
            <p>input customer_photo</p>
          </div><hr/>

          <div className="Customer Reviews">
            <p>input Customer Reviews</p>
          </div>
          <div>
            <pre>Product Code: 11780930 Seller:</pre>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
