import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Product = ({product}) => {
    return (
        <>
        {console.log("data......", product)}
        {/* <div class="cards"> */}
            <Link to={`/product/${product._id}`}>
            <img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2402707/2018/7/16/bb6d0a03-5155-432c-93df-4f15793006321531743871097-W-Women-Black-Embroidered-Straight-Kurta-2071531743870936-1.jpg" class="card-img-top" alt="..."  />
              <div class="card-body">
                <p><strong>{product.name}</strong><br/>
                  {product.description} <br/>
                  <strong>{`Rs.${product.price}`}</strong>
                </p>
              </div>
              </Link>
        {/* </div> */}
        </>
    )
}

export default Product;
