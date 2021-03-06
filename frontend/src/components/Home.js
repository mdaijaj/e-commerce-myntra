import react from "react";
import '../App.css'
import './Footer.css'


const Home = () => {
  return (
    <>
      {/* using carousel */}
      <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>

        </ol>
        <div className="carousel-inner">
        <div className="carousel-item active">
            <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/5/22579c45-4247-4a6a-8aa0-c307fed3e8c01636050638545-Weekend-sale_DK.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item active">
            <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/3/3e64386d-6b1c-45cc-aed8-32a5d0669cd91635955686435-W_Ethnic_Dk.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/10/13/e93499c5-270b-4151-9acd-11fbbf5cc6b11634139203927-Men---s-Top-Wear_Desk.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/3/3e64386d-6b1c-45cc-aed8-32a5d0669cd91635955686435-W_Ethnic_Dk.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/3/5f3f4cdd-ffd2-4853-9767-d98a1455e9361635955686449-Footwear_Dk.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <br />
      <center><h3>BIGGEST DEALS ON TOP BRANDS</h3></center>


      {/* using card */}
      <div class="row row-cols-2 row-cols-md-5" style={{ width: "75rem" }}>
        <div class="col mb-2">
          <div class="card h-50">
            <img src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/7c28bc7a-0184-44b2-8666-ea1438d595561598892377316-J_J.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              {/* <h5 class ="card-title">Card title</h5>
            <p class ="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p> */}
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card h-100">
            <img src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/cec595c6-c7ec-4259-af8b-997a33a09ce71598892377444-Puma.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              {/* <h5 class ="card-title">Card title</h5>
            <p class ="card-text">This is a short card.</p> */}
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card h-100">
            <img src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/0206da63-a7cc-4f83-8527-90d7dc74706b1598892377489-Skechers.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              {/* <h5 class ="card-title">Card title</h5>
            <p class ="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p> */}
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card h-100">
            <img src="https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/14983728/2021/7/30/e43ab6d1-38f3-4e21-a43c-7fae5947490f1627641517125na1.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              {/* <h5 class ="card-title">Card title</h5>
            <p class ="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p> */}
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card h-100">
            <img src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/d977e7ac-67dd-4fa6-b922-fe0057385dfa1598892377205-Crocs.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              {/* <h5 class ="card-title">Card title</h5>
            <p class ="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p> */}
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card h-100">
            <img src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/a7d3676a-9694-4a84-835e-0408fdad884b1598892377407-Nike.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              {/* <h5 class ="card-title">Card title</h5>
            <p class ="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p> */}
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card h-100">
            <img src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/0206da63-a7cc-4f83-8527-90d7dc74706b1598892377489-Skechers.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              {/* <h5 class ="card-title">Card title</h5>
            <p class ="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p> */}
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card h-100">
            <img src="https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/14983728/2021/7/30/e43ab6d1-38f3-4e21-a43c-7fae5947490f1627641517125na1.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              {/* <h5 class ="card-title">Card title</h5>
            <p class ="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p> */}
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card h-100">
            <img src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/d977e7ac-67dd-4fa6-b922-fe0057385dfa1598892377205-Crocs.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              {/* <h5 class ="card-title">Card title</h5>
            <p class ="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p> */}
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card h-100">
            <img src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/a7d3676a-9694-4a84-835e-0408fdad884b1598892377407-Nike.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              {/* <h5 class ="card-title">Card title</h5>
            <p class ="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p> */}
            </div>
          </div>
        </div>
      </div>

      <center><h2> This are categories</h2></center>
      <div className="main_div">
        <div className="circle">
          <img className="circle" src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg"></img>
          <center><strong>Topwear</strong></center>
        </div>
        <div className="circle">
          <img className="circle" src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10046869/2019/11/19/ee04959f-a3a4-4ded-a9af-9d21304a46b51574168805815-Roadster-Men-Navy-Blue-Super-Skinny-Fit-Mid-Rise-Low-Distres-1.jpg"></img>
          <center><strong>Bottomwear</strong></center>
        </div>
        <div className="circle">
          <img className="circle" src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/10714408/2019/10/14/d509d6e8-c0af-4bfe-ae39-43d3d4a197191571030731966-Nike-Men-White-AIR-MAX-OKETO-Sneakers-3141571030730367-1.jpg"></img>
          <center><strong>Footwear</strong></center>
        </div>
        <div className="circle">
          <img className="circle" src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/1868246/2017/10/25/11508911098449-HRX-by-Hrithik-Roshan-Men-Off-White-Solid-Sporty-Jacket-9701508911098165-1.jpg"></img>
          <center><strong>Sports Accessries</strong></center>
        </div>
        <div className="circle">
          <img className="circle" src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/13471916/2021/2/9/a9a87e2a-f8c8-4953-9e5f-b8c1b8f4ff201612846540076-boAT-Unisex-Black-Storm-Smart-Watch-621612846538704-1.jpg"></img>
          <center><strong>FashionWear & Accesseries</strong></center>
        </div>
        <div className="circle">
          <img className="circle" src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/10686488/2019/12/27/e8b6793b-54b6-4024-ad62-9eaf272124491577446273983-Safari-Unisex-Multi-Printed-Trolley-Bag-5321577446270220-1.jpg"></img>
          <center><strong>Bag</strong></center>
        </div>
      </div>

      <br /><br />




      {/* footer */}
      <div className="footerCommon">
        <div className="_2uz0vJ"><div className="_2uz0vJ" ><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE2IDE1Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODYuODc2JSIgeTE9IjAlIiB5Mj0iODAuMjAyJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ4MDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBRjAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0yLTJoMjB2MjBILTJ6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTUuOTMgNS42MTRoLTIuOTQ4VjQuMTRjMC0uODE4LS42NTUtMS40NzMtMS40NzMtMS40NzNIOC41NmMtLjgxNyAwLTEuNDczLjY1NS0xLjQ3MyAxLjQ3M3YxLjQ3NEg0LjE0Yy0uODE4IDAtMS40NjYuNjU2LTEuNDY2IDEuNDc0bC0uMDA3IDguMTA1YzAgLjgxOC42NTUgMS40NzQgMS40NzMgMS40NzRoMTEuNzljLjgxOCAwIDEuNDc0LS42NTYgMS40NzQtMS40NzRWNy4wODhjMC0uODE4LS42NTYtMS40NzQtMS40NzQtMS40NzR6bS00LjQyMSAwSDguNTZWNC4xNGgyLjk0OHYxLjQ3NHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yIC0yKSIvPgogICAgPC9nPgo8L3N2Zz4K" />
          <a href="https://seller.flipkart.com/?utm_source=fkwebsite&amp;utm_medium=websitedirect"><span className="hDTmm5">Sell On Myntra</span></a>
        </div>
          <div className="_2uz0vJ">
            <a href="https://brands.flipkart.com"><span className="hDTmm5">Advertise</span></a>
          </div>
          <div className="_2uz0vJ"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDE4IDE3Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODYuODc2JSIgeTE9IjAlIiB5Mj0iODAuMjAyJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ4MDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBRjAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0xLTFoMjB2MjBILTF6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTYuNjY3IDVIMTQuODVjLjA5Mi0uMjU4LjE1LS41NDIuMTUtLjgzM2EyLjQ5NyAyLjQ5NyAwIDAgMC00LjU4My0xLjM3NUwxMCAzLjM1bC0uNDE3LS41NjdBMi41MSAyLjUxIDAgMCAwIDcuNSAxLjY2N2EyLjQ5NyAyLjQ5NyAwIDAgMC0yLjUgMi41YzAgLjI5MS4wNTguNTc1LjE1LjgzM0gzLjMzM2MtLjkyNSAwLTEuNjU4Ljc0Mi0xLjY1OCAxLjY2N2wtLjAwOCA5LjE2NkExLjY2IDEuNjYgMCAwIDAgMy4zMzMgMTcuNWgxMy4zMzRhMS42NiAxLjY2IDAgMCAwIDEuNjY2LTEuNjY3VjYuNjY3QTEuNjYgMS42NiAwIDAgMCAxNi42NjcgNXptMCA2LjY2N0gzLjMzM3YtNWg0LjIzNEw1LjgzMyA5LjAyNWwxLjM1Ljk3NSAxLjk4NC0yLjdMMTAgNi4xNjdsLjgzMyAxLjEzMyAxLjk4NCAyLjcgMS4zNS0uOTc1LTEuNzM0LTIuMzU4aDQuMjM0djV6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMSAtMSkiLz4KICAgIDwvZz4KPC9zdmc+Cg==" />
            <a href="/the-gift-card-store?otracker=undefined_footer_footer_navlinks"><span className="hDTmm5">Gift Cards</span></a></div>
          <div className="_2uz0vJ"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE1IDE1Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODYuODc2JSIgeTE9IjAlIiB5Mj0iODAuMjAyJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ4MDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBRjAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0yLTNoMjB2MjBILTJ6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNOS41IDNDNS4zNiAzIDIgNi4zNiAyIDEwLjUgMiAxNC42NCA1LjM2IDE4IDkuNSAxOGM0LjE0IDAgNy41LTMuMzYgNy41LTcuNUMxNyA2LjM2IDEzLjY0IDMgOS41IDN6bS43NSAxMi43NWgtMS41di0xLjVoMS41djEuNXptMS41NTMtNS44MTNsLS42NzYuNjljLS41NC41NDgtLjg3Ny45OTgtLjg3NyAyLjEyM2gtMS41di0uMzc1YzAtLjgyNS4zMzgtMS41NzUuODc3LTIuMTIzbC45My0uOTQ1Yy4yNzgtLjI3LjQ0My0uNjQ1LjQ0My0xLjA1NyAwLS44MjUtLjY3NS0xLjUtMS41LTEuNVM4IDcuNDI1IDggOC4yNUg2LjVhMyAzIDAgMSAxIDYgMGMwIC42Ni0uMjcgMS4yNi0uNjk3IDEuNjg4eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIgLTMpIi8+CiAgICA8L2c+Cjwvc3ZnPgo=" />
            <a href="/helpcentre?otracker=undefined_footer_footer_navlinks"><span className="hDTmm5">Help Center</span></a>
          </div>
          <div className="_2uz0vJ">
            <span className="z3ht-w">?? 2007-2021<span>Flipkart.com</span></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;