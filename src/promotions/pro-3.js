import React from "react";

export default function Pro_3() {
  return (
    <div className="container text-center mb-6">
      <div className="row  justify-content-around">
        <img
          src="img/promotion/3-1080.jpg"
          className="card-img-top"
          alt="..."
          style={{ width: "-webkit-fill-available" }}
        />
      </div>
      <div className="row  justify-content-around">
        <div className="card bg-dark">
          <div className="card-header">
            <h2>CASH BACK คืนยอดเสีย 10%</h2>
          </div>
          <div className="card-body">
            <h5 className="card-title">
              <strong>
                ไม่รับโบนัสไม่ต้องทำเทิร์น ไม่รับโบนัส ถอนได้เลย ไม่ต้องทำเทิร์น
                และยังได้รับ เงินคืน(CASHBACK) จากยอดเสียอีก 10%
                เงินคืน(CASHBACK) 10% ทำยอด 2 เท่า ถอนไม่อั้น เงื่อนไข :
              </strong>
            </h5>
            <div className="card-text">
              <p>1. สมาชิกเลือกฝากแบบไม่รับโบนัส ไม่ต้องทำเทิร์น</p>
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
