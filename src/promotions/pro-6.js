import React from "react";

export default function Pro_6() {
  return (
    <div className="container text-center mb-6 col-12">
      <div className="row card1 justify-content-around">
        <img
          src="img/promotion/6-1080.jpg"
          className="card-img-top"
          alt="..."
        />
      </div>
      <div className="row justify-content-around mt-3">
        <div className="card bg-dark text-left text-white" style={{width:'-webkit-fill-available'}}>
          <div className="card-header">
            <h5>ฝากขั้นต่ำ 1 บาท</h5>
          </div>
          <div className="card-body">
            <h6 className="card-title">
              <strong>
                ฝากแบบไม่รับโบนัสขั้นต่ำ 1 บาท ฝากขั้นต่ำ 1 บาทไม่รับโบนัส
                ถอนได้เลย ไม่ต้องทำเทิร์น และยังได้รับ เงินคืน(CASHBACK)
                จากยอดเสียอีก 10% เงินคืน(CASHBACK) 10% ทำยอด 2 เท่า ถอนไม่อั้น
                <p>เงื่อนไข :</p>
              </strong>
            </h6>
            <div className="card-text">
              <p>
                1. สมาชิกเลือกฝากแบบไม่รับโบนัส ฝากขั้นต่ำ 1 บาท ไม่ต้องทำเทิร์น
              </p>
              <p>
                2. เงินคืน(CASHBACK) 10% สูงสุด 1000 ทำยอด 2 เท่า ถอนไม่อั้น
              </p>
              <p>3. ยอดถอนขั้นต่ำ 200 บาท</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
