import React, { useState, useEffect } from 'react';
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
    {/* <div className="container">
      <div className="aside"></div>
      <section className="sec"></section>
    </div> */}

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

      {/* <div class="col-xs-6 col-md-10">
      <div class="row row-cols-2 row-cols-md-4" style={{width: "75rem"}}> */}
      <ul>
        {dataList.map((data)=>{
          return(
            <div class="row">
              <div class="column">
                <div class="card">
                  <img src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/7c28bc7a-0184-44b2-8666-ea1438d595561598892377316-J_J.jpg"  alt="..." />
                  <div class ="card-body">
                    <h5 class ="card-title">Roadster hover</h5>
                    <p class ="card-text">2020</p>
                  </div>
                  </div>
              </div>
            </div>
          )
        })}
      </ul>
        
        {/* <div class="col mb-2">
          <div class="card h-30">
            <img src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/cec595c6-c7ec-4259-af8b-997a33a09ce71598892377444-Puma.jpg" class="card-img-top" alt="..." />
            <div class ="card-body">
            <h5 class ="card-title">Roadster hover</h5>
            <p class ="card-text">2020</p>
            </div>
          </div>
        </div>
        <div class="col mb-2">
          <div class="card h-30">
            <img src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/0206da63-a7cc-4f83-8527-90d7dc74706b1598892377489-Skechers.jpg" class="card-img-top" alt="..." />
            <div class ="card-body">
            <h5 class ="card-title">Roadster hover</h5>
            <p class ="card-text">2020</p>
            </div>
          </div>
        </div>
  
        <div class="col mb-2">
          <div class="card h-30">
            <img src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/d977e7ac-67dd-4fa6-b922-fe0057385dfa1598892377205-Crocs.jpg" class="card-img-top" alt="..." />
            <div class ="card-body">
            <h5 class ="card-title">Card title</h5>
            <p class ="card-text">2020</p>
            </div>
          </div>
        </div>
        <div class="col mb-2">
          <div class="card h-30">
            <img src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/a7d3676a-9694-4a84-835e-0408fdad884b1598892377407-Nike.jpg" class="card-img-top" alt="..." />
            <div class ="card-body">
            <h5 class ="card-title">Card title</h5>
            <p class ="card-text">This is</p>
            </div>
          </div>
        </div>
        <div class="col mb-2">
          <div class="card h-30">
            <img src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/0206da63-a7cc-4f83-8527-90d7dc74706b1598892377489-Skechers.jpg" class="card-img-top" alt="..." />
            <div class ="card-body">
            <h5 class ="card-title">Card title</h5>
            <p class ="card-text"> content</p>
            </div>
          </div>
        </div>
        <div class="col mb-2">
          <div class="card h-30">
            <img src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/a7d3676a-9694-4a84-835e-0408fdad884b1598892377407-Nike.jpg" class="card-img-top" alt="..." />
            <div class ="card-body">
            <h5 class ="card-title">Card title</h5>
            <p class ="card-text">longer</p>
            </div>
          </div>
        </div> */}
      </div>
      {/* </div>
    </div> */}
    
  </>
  );
}

export default CollectionPage;

