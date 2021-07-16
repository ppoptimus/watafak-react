import React from "react";

export default function Pro_4() {
  return (
    <div className="container text-center mb-6">
      <div className="row card1 justify-content-around">
        <img
          src="img/promotion/4-1080.jpg"
          className="card-img-top"
          alt="..."
          //   style={{ width: "-webkit-fill-available" }}
        />
      </div>
      <div className="row  justify-content-around">
        <div className="card bg-dark">
          <div className="card-header">
            <h2> ฝากทั้งวัน รับโบนัสทั้งวัน</h2>
          </div>
          <div className="card-body">
            <h5 className="card-title">
              <strong>
                ฟรีโบนัสทั้งวัน สามารถรับได้ทั้งวัน ตามยอดฝากที่กำหนด เงื่อนไข :
              </strong>
            </h5>
            <div className="card-text">
              <p>1. ฝากขั้นต่ำ 100 บาท</p>
              <p>2. ยอดถอนขั้นต่ำ 200 บาท</p>
              <p>
                3. สมาชิกที่รับโบนัส ฝากทั้งวัน รับโบนัสทั้งวัน ทำเทิร์น 2 เท่า
                ถอนไม่อั้น
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
