import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          alt=" "
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        />

        <div className="home_row">
          <Product
            id="1A"
            title="Ipad Pro"
            price={400}
            rating={4}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbV6b6oioJ4yw7Cuu2Tlav4K-EZqN6ePX2jg&usqp=CAU"
          />
          <Product
            id="1B"
            title="MIVI Headphones"
            price={99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71Unika6KBL._SL1500_.jpg"
          />
          <Product
            id="1C"
            title="Power Bank"
            price={29}
            rating={3}
            image="https://www.tarbostyle.com/wp-content/uploads/2020/06/Edit_DSC0772-CMYK_1024x1024.jpg"
          />
        </div>

        <div className="home_row">
          <Product
            id="2A"
            title="Xiaomi Tv"
            price={999}
            rating={3}
            image="https://www.powerplanetonline.com/cdnassets/xiaomi_mi_tv_4a_v52r_32_hd_smart_tv_android_os_led_01_l.jpg"
          />

          <Product
            id="2B"
            title="Dell Inspiron 13"
            price={749}
            rating={4}
            image="https://i.dell.com/is/image/DellContent//content/dam/global-asset-library/Products/Notebooks/Inspiron/15_3505_non-touch/in3505nt_xnb_shot03_gr.psd?fmt=pjpg&amp;pscan=auto&amp;scl=1&amp;hei=402&amp;wid=465&amp;qlt=85,0&amp;resMode=sharp2&amp;op_usm=1.75,0.3,2,0&amp;size=465,402"
          />
        </div>

        <div className="home_row">
          <Product
            id="3A"
            title="Iphone 12 Pro Max"
            price={1199}
            rating={5}
            image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1604021663000"
          />

          <Product
            id="3B"
            title="Realme Narzo 20 Pro"
            price={339}
            rating={4}
            image="https://images.news18.com/ibnlive/uploads/2020/09/1600677502_realme-narzo-20-pro-review.jpg"
          />

          <Product
            id="3C"
            title="Samsung Galaxy Note 20 Ultra"
            price={899}
            rating={5}
            image="https://d2xamzlzrdbdbn.cloudfront.net/products/13a38177-186f-4934-a841-889f3e3df472_416x416.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
