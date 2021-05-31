import React from 'react';
import './promotion.css';

function promotion() {
    
  return (
    <div className="container text-center mb-6">
      <h1>โปรโมชั่น ล่าสุด</h1>

      <div className="row  justify-content-around">
        <div className="card1 col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 mb-3">
          <img
            src="img/promotion/1-500.jpg"
            className="card-img-top"
            alt="..."
          ></img>
          <div className="card-body">
            <h5 className="card-title">แจกเครดิตฟรี</h5>
            <p className="card-text"></p>
            <a href="https://lin.ee/I1ww4mL" target="blank" className="btn btn-bg1">
              คลิก
            </a>
          </div>
        </div>

        <div className="card1 col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 mb-3">
          <img
            src="img/promotion/2-500.jpg"
            className="card-img-top"
            alt="..."
          ></img>
          <div className="card-body">
            <h5 className="card-title">ไม่รับโบนัส ไม่ต้องทำยอด</h5>
            <p className="card-text"></p>
            <a href="#" className="btn btn-bg1">
              รายละเอียด
            </a>
          </div>
        </div>

        <div className="card1 col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 mb-3">
          <img
            src="img/promotion/3-500.jpg"
            className="card-img-top"
            alt="..."
          ></img>
          <div className="card-body">
            <h5 className="card-title">ไม่รับโบนัส ได้เครดิตคืน</h5>
            <p className="card-text"></p>
            <a href="#" className="btn btn-bg1">
              รายละเอียด
            </a>
          </div>
        </div>

        <div className="card1 col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 mb-3">
          <img
            src="img/promotion/4-500.jpg"
            className="card-img-top"
            alt="..."
          ></img>
          <div className="card-body">
            <h5 className="card-title">เด็กใหม่รับโบนัสเพิ่ม</h5>
            <p className="card-text"></p>
            <a href="#" className="btn btn-bg1">
              รายละเอียด
            </a>
          </div>
        </div>
        <div className="card1 col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 mb-3">
          <img
            src="img/promotion/5-500.jpg"
            className="card-img-top"
            alt="..."
          ></img>
          <div className="card-body">
            <h5 className="card-title">ชวนเพื่อนได้โบนัสเพิ่มอีก</h5>
            <p className="card-text"></p>
            <a href="#" className="btn btn-bg1">
              รายละเอียด
            </a>
          </div>
        </div>
        <div className="card1 col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 mb-3">
          <img
            src="img/promotion/6-500.jpg"
            className="card-img-top"
            alt="..."
          ></img>
          <div className="card-body">
            <h5 className="card-title">ฝากทั้งวัน รับโบนัสไม่อั้น</h5>
            <p className="card-text"></p>
            <a href="#" className="btn btn-bg1">
              รายละเอียด
            </a>
          </div>
        </div>
        <div className="card1 col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 mb-3">
          <img
            src="img/promotion/7-500.jpg"
            className="card-img-top"
            alt="..."
          ></img>
          <div className="card-body">
            <h5 className="card-title">สมาชิกใหม่ รับโบนัสเพิ่ม</h5>
            <p className="card-text"></p>
            <a href="#" className="btn btn-bg1">
              รายละเอียด
            </a>
          </div>
        </div>
      </div>

      <div>
        <div className="stars-01"></div>
        <div className="stars-02"></div>
        <div className="stars-03"></div>
        <div className="stars-04"></div>
      </div>
    </div>
  );
}
export default promotion;
