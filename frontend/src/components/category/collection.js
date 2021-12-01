import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';
import ProductDetails from './product_details';
import './style.css'


const  CollectionPage= () => {
  const [collect, setCollect] = useState([])

  const getCollection=async()=>{
    const response= await fetch('/getAllProduct')
    const allData= await response.json();
    console.log("allData", allData)
    // const data=allData.data
    setCollect([...allData])
  }
  useEffect(()=>{
    getCollection()
  }, [])
  const dataList=collect.filter((item)=> (item.collections==="t-shirt"))
  console.log("dataList", dataList)

  return (
    <>
    <h2>Shirts collectios page</h2>
        <div class="row">
          <div class="col-xs-12 col-md-2">
            <div className="h6">
              <h5>FILTER</h5>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
              <label class="form-check-label" for="exampleRadios1">
                Man
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
              <label class="form-check-label" for="exampleRadios2">
                Woman
              </label>
            </div>
            <div class="form-check disabled">
              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3"/>
              <label class="form-check-label" for="exampleRadios3">
                Boys
              </label>
            </div>
            <div class="form-check disabled">
              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios4" value="option4"/>
              <label class="form-check-label" for="exampleRadios4">
                Girls
              </label>
            </div>
          </div>

          <div className="h6">
            <h6>CATEGORIES</h6>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                <label class="form-check-label" for="defaultCheck1">
                  Default checkbox
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                <label class="form-check-label" for="defaultCheck2">
                  Disabled checkbox
                </label>
              </div>
          </div>

          <h6>PRICE</h6>
          <h6>COLOR</h6>
          <h6>DISCOUNT RANGE</h6>
        </div>

      <div class="col-xs-12 col-md-10">
      {/* <div class="row row-cols-2 row-cols-md-4" style={{width: "75rem"}}> */}
      
        {dataList.map((data)=>{
          return(
            <div class="cards">
              <Product product={data}/>

            </div>
          )
        })} 
        </div>
    </div>
    <Link className='btn btn-dark my-3' to="/men">Go Back</Link>
  </>
  );
}

export default CollectionPage;

