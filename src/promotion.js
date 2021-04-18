import React from "react";
import './promotion.css'

function promotion(){
    return(
        <div className="text-center mb-6">
            <img src="img/promotion/pro_banner.jpg" className="w-100 mb-5" alt="banner"></img>
            <h1>โปรโมชั่น ล่าสุด</h1>
            <div className="container">
                <img src="img/promotion/pro1.jpg" className="img-fluid m-2" alt="watafak88 promotion"></img>
            </div>
            <div className="container">
                <img src="img/promotion/pro2.jpg" className="img-fluid m-2" alt="watafak88 promotion"></img>
            </div>
            <div className="container">
                <img src="img/promotion/pro3.jpg" className="img-fluid m-2" alt="watafak88 promotion"></img>
            </div>

            <div>
                <div className="stars-01"></div>
                <div className="stars-02"></div>
                <div className="stars-03"></div>
                <div className="stars-04"></div>
            </div>
        </div>
    )
}
export default promotion;