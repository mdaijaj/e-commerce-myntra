import react from "react";
import './product_details_style.css'

const  ProductDetails= () => {
  return (
    <>
    <h2>Product details page</h2>
        <div class="row" style={{height: "auto"}}>
            <div class="col-3">image show1</div>
            <div class="col-3">image show2</div>
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
                    <button type="button" class="btn btn-lg btn-primary">BAG</button> 
                    <button type="button" class="btn btn-secondary btn-lg">WISHLIST</button>
                </div>
                
            </div>
        </div>
    </>
  );
}

export default ProductDetails;
