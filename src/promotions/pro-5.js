import React from "react";

export default function Pro_5() {
  return (
    <div className="container text-center mb-6">
      <div className="row card1 justify-content-around">
        <img
          src="img/promotion/5-1080.jpg"
          className="card-img-top"
          alt="..."
          //   style={{ width: "-webkit-fill-available" }}
        />
      </div>
      <div className="row  justify-content-around">
        <div className="card bg-dark">
          <div className="card-header">
            <h2>ชวนเพื่อนรับโบนัส 100</h2>
          </div>
          <div className="card-body">
            <h5 className="card-title">
              <strong>
                ชวนเพื่อนสมัคร รับฟรี 100 เครดิต ชวนเพื่อนสมัคร รับฟรี 100
                เครดิต ต่อเพื่อน 1 คน ทำยอด 300 ถอนได้ทันที (สูงสุด 10 เท่า)
                เงื่อนไข :
              </strong>
            </h5>
            <div className="card-text">
              <p>1. เข้าล็อคอินหน้าเว็บ เลือกหัวข้อ (แชร์ลิงก์รับพอยต์)</p>
              <p>
                2. กดคัดลอกลิงก์และส่งต่อให้เพื่อนสมัครผ่านลิงก์
                (ต้องระบุว่ามาจาก "เพื่อนแนะนำ" เท่านั้น)
              </p>
              <p>
                3. ผู้แนะนำต้องแจ้งรับโบนัสในวันที่สมัครเท่านั้น
                หากไม่แจ้งถือว่าสละสิทธิ์
              </p>
              <p>
                4. เพื่อนที่ถูกแนะนำ ต้องฝากขั้นต่ำ 300 บาท
                และรับโปรโมชั่นสมัครสมาชิกใหม่
                (ทำตามเงื่อนไขของโปรโมชั่นสมัครสมาชิกใหม่)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
