import React from "react";
import Navbar2 from "../../Components/Navbar2/Navbar2";
import "./Home.scss";
import Categories from "../../Components/Categories/Categories";
import ProductDetail from "../../Components/ProductDetail/ProductDetail";

import Moai1 from "../../Assets/img/moai_1.png";
import Moai2 from "../../Assets/img/moai_2.png";
import YellowMoai from "../../Assets/img/yellow_moai.png";
import FriendMoai from "../../Assets/img/Moai_Va_Nhung_Nguoi_Ban.png";
import BroMoai from "../../Assets/img/Anh_Em_Moai.png";

const Home = () => {
    return (
        <div className="home-container">
            <Navbar2 />
            <div className="header-home">
                <div className="slogan">
                    <h1>Furniture that everyone loves</h1>
                    <div className="review">
                        We have 5000+ reivew and our customers trust on our furniture and quality products
                    </div>
                    <div className="">
                        <button className="button buy-now">Buy now</button>
                        <button className="button explone">Explone</button>
                    </div>
                </div>
                <img className="img-position moai2" src={Moai2} alt="" />
                <img className="img-position moai1" src={Moai1} alt="" />
                <img className="img-position yellowMoai" src={YellowMoai} alt="" />
                {/* <img className="img-position yellowMoai" src={BroMoai} alt="" /> */}
            </div>

            <div className="categories-container">
                <div>
                    <h2>Browse The Range</h2>
                    <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                </div>
                <div className="categories">
                    <Categories src={BroMoai} categoryName={"Hoang"}/>
                    <Categories src={BroMoai} categoryName={"Hoang"}/>
                    <Categories src={BroMoai} categoryName={"Hoang"}/>
                </div>
            </div>

            <div className="products-container">
                <h1>Our Products</h1>
                <div className="products">
                    <ProductDetail />
                </div>
            </div>
        </div>
    );
};

export default Home;
