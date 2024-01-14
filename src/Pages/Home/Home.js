import React from "react";
import Navbar2 from "../../Components/Navbar2/Navbar2";
import "./Home.scss";
import Moai1 from "../../Assets/img/moai_1.png"
import Moai2 from "../../Assets/img/moai_2.png"
import YellowMoai from "../../Assets/img/yellow_moai.png"

const Home = () => {
    return (
        <div className="home-container">
            <Navbar2 />
            <div className="header-home">
                <div>
                    <h1>Furniture that everyone loves</h1>
                    <div>We have 5000+ reivew and our customers trust on our furniture and quality products</div>
                    <button>Buy now</button>
                    <button>Explone</button>
                </div>
                <img src={Moai1} alt=""/>
                <img src={Moai2} alt=""/>
                <img src={YellowMoai} alt=""/>
            </div>
        </div>
    );
};

export default Home;
