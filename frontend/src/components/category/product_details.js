import react from "react";
import './product_details_style.css'

const  ProductDetails= () => {
  return (
    <>
    <h2>Product details page</h2>
        <div class="row" style={{height: "auto"}}>
            <div class="col-3"> 
                <img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg" style={{ width:"400px", height:"auto"}}/>
            </div>
            <div class="col-3">
                <img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/2/14/11adb5a6-9666-4bd2-8ed8-03fd20291f9d1581635929903-1.jpg" style={{ width:"400px", height:"auto"}}/>
            </div>
            <div class="col-6">
                <div className="user_details">                 
                    <h6>Product details</h6>
                </div>
                <div className="product_size">
                    <h6>SELECT SIZE</h6>
                    <div className="btn_style">
                        <button>S</button>
                        <button>M</button>
                        <button>L</button>
                        <button>XL</button>
                        <button>XXL</button>
                    </div> <br/><br/>
                    <button type="button" class="btn btn-secondary btn-lg">BAG</button>
                    <button type="button" class="btn btn-lg btn-primary">WISHLIST</button> 
                </div><br/>
                <div class="row col-md-6">
                    <label for="inputpincode"><strong>DELIVERY OPTIONS</strong></label>
                    <input type="text" class="form-control" id="inputpincode" placeholder="Enter pincode"/>
                </div>
                <div class="content">
                    <p>Please enter PIN code to check delivery time & Pay on Delivery Availability</p>
                    <p2>
                        100% Original Products <br/>
                        Pay on delivery might be available<br/>
                        Easy 30 days returns and exchanges<br/>
                        Try & Buy might be available
                    </p2>
                </div>
                <div className="">
                    <h4>BEST OFFERS </h4>
                    <p>This product is already at its best price</p> <br/>
                    <h4>EMI option available</h4>
                    <p>EMI starting from Rs.27/month</p>
                    <button type="button" class="btn btn-link">View Plan</button>

                </div>
                <div className="product_details">
                    <h3>PRODUCT DETAILS </h3>
                    <p>
                        Green and Beige printed casual shirt, has a spread collar, short <br/>
                        sleeves, button placket, curved hem, and 1 patch pocket
                    </p>
                    <h4>Size & Fit</h4>
                    <p>Slim fit <br/>
                        The model (height 6') is wearing a size 40\
                    </p>
                    <h4>Material & Care</h4>
                    <p>Material: Cotton <br/>
                        Machine Wash
                    </p>
                    <h4>Specifications</h4>
                    <p>form input</p>
                    <h4>Complete The Look</h4>
                    <p>
                        Spruce up your summer-time style with this trendy shirt by HIGHLANDER. <br/>
                        You can team this green piece with slick black jeans, <br/>
                        leather boots, and a lightweight bomber jacket for your next date night.
                    </p>
                </div>
                <div className="rating">
                    <p>input rating image</p>
                </div>
                <div className="customer_photo">
                    <p>input customer_photo</p>
                </div>
                <div className="Customer Reviews">
                    <p>input Customer Reviews</p>
                </div>
                <div>
                <pre>
                    Product Code: 11780930
                    Seller: 
                </pre>
                </div>
            </div> 
        </div>
    </>
  );
}

export default ProductDetails;
