import './promotion.css';
import { Link } from "react-router-dom";

function promotion() {
    
  return (
    <div className="container text-center mb-6">
      <h1>โปรโมชั่น ล่าสุดของ watafak88 จากค่าย PG SLOT</h1> 
      <div className="row  justify-content-around">

        <div className="card1 col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 mb-3">
          <img
            src="img/promotion/1-1080.jpg"
            className="card-img-top"
            alt="..."
          ></img>
          <div className="card-body">
            <h5 className="card-title">โปรน้องใหม่ <strong>watafak88</strong> รับโบนัสสูงสุด 50%</h5>
            <p className="card-text"></p>
            <Link to="/pro1" className="btn btn-bg1">
              รายละเอียด
            </Link>
          </div>
        </div>
        
        <div className="card1 col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 mb-3">
          <img
            src="img/promotion/2-1080.jpg"
            className="card-img-top"
            alt="..."
          ></img>
          <div className="card-body">
            <h5 className="card-title">สมัครสมาชิก watafak88 รับโบนัสสูงสุด 50%</h5>
            <p className="card-text"></p>
            <Link to="/pro2" className="btn btn-bg1">
              รายละเอียด
            </Link>
          </div>
        </div>
        
        <div className="card1 col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 mb-3">
          <img
            src="img/promotion/3-1080.jpg"
            className="card-img-top"
            alt="..."
          ></img>
          <div className="card-body">
            <h5 className="card-title">CASH BACK watafak88 คืนยอดเสียให้ 10%</h5>
            <p className="card-text"></p>
            <Link to="/pro3" className="btn btn-bg1">
              รายละเอียด
            </Link>
          </div>
        </div>
        
        <div className="card1 col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 mb-3">
          <img
            src="img/promotion/4-1080.jpg"
            className="card-img-top"
            alt="..."
          ></img>
          <div className="card-body">
            <h5 className="card-title">ฝากทั้งวัน รับโบนัสทั้งวัน watafak88 จัดให้</h5>
            <p className="card-text"></p>
            <Link to="/pro4" className="btn btn-bg1">
              รายละเอียด
            </Link>
          </div>
        </div>
        
        <div className="card1 col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 mb-3">
          <img
            src="img/promotion/5-1080.jpg"
            className="card-img-top"
            alt="..."
          ></img>
          <div className="card-body">
            <h5 className="card-title">ชวนเพื่อนมาปั่น SLOT รับโบนัส 100</h5>
            <p className="card-text"></p>
            <Link to="/pro5" className="btn btn-bg1">
              รายละเอียด
            </Link>
          </div>
        </div>
        
        <div className="card1 col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 mb-3">
          <img
            src="img/promotion/6-1080.jpg"
            className="card-img-top"
            alt="..."
          ></img>
          <div className="card-body">
            <h5 className="card-title">ฝากขั้นต่ำ 1 บาท</h5>
            <p className="card-text"></p>
            <Link to="/pro6" className="btn btn-bg1">
              รายละเอียด
            </Link>
          </div>
        </div>
      
        <div className="card1 col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 mb-3">
          <img
            src="img/promotion/11-1080.jpg"
            className="card-img-top"
            alt="..."
          ></img>
          <div className="card-body">
            <h5 className="card-title">watafak88 แจกเครดิตฟรี PG SLOT</h5>
            <p className="card-text"></p>
            <a href="#" className="btn btn-bg1">
              Coming soon
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