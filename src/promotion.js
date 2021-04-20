import React from "react";
import './promotion.css'

function promotion(){
    return(
        <div className="text-center mb-6">
            
            <h1>โปรโมชั่น ล่าสุด</h1>
            <div className="container">
                <img src="img/promotion/pro1.jpg" className="img-fluid" alt="watafak88 promotion"></img>
            </div>
            <div className="container">
                <img src="img/promotion/pro2.jpg" className="img-fluid" alt="watafak88 promotion"></img>
            </div>
            <div className="container">
                <img src="img/promotion/pro3.jpg" className="img-fluid" alt="watafak88 promotion"></img>
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