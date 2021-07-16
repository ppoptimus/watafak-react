import React from "react";

export default function Pro_2() {
  return (
    <div className="container text-center mb-6">
      <div className="row  justify-content-around">
        <img
          src="img/promotion/2-1080.jpg"
          className="card-img-top"
          alt="..."
          style={{width: '-webkit-fill-available'}}
        />
      </div>
      <div className="row  justify-content-around">
        <div className="card bg-dark">
          <div className="card-header">
            <h2>สมัครสมาชิก รับโบนัสสูงสุด 50%</h2>
          </div>
          <div className="card-body">
            <h5 className="card-title">
              <strong>โปรสมัครสมาชิกใหม่รับ 50% เงื่อนไข :</strong>
            </h5>
            <div className="card-text">
              <p>
                1. ผู้ที่สมัครสมาชิกใหม่จะต้องกรอกข้อมูลชื่อ-นามสกุล
                และเลขที่บัญที่ ตรงกันตรงและที่เป็นความจริงเท่านั้น
              </p>
              <p>2. สมาชิก 1 ท่าน มียูสเซอร์ได้ 1 ยูสเท่านั้น</p>
              <p>3. สมัครสมาชิกใหม่รับโบนัส 50% ฝากขั้นต่ำ 100 บาท</p>
              <p>4. ยอดถอนขั้นต่ำ 200 บาท</p>
              <p>
                5. สมาชิกที่รับโบนัสสมาชิกใหม่ทำเทิร์น 3 เท่า ถอนสูงสุด 50 เท่า
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
