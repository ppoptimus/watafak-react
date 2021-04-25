import React, { useState, lazy } from "react";
import ShowJackpotAll from "./jackpot-all";
import Firebase from "./utils/firebase";

export default function GenerateJackpot() {
 
  var [count, setCount] = useState("");

  const handleOnChange = (e) => {
    setCount(e.target.value);
  };
  count = (count > 100) ? 100 : count;

  const generate = () => {
    for (let i = 0; i < count; i++) {
      //---user_id
      let running = Math.floor(Math.random() * 29) + 1;
      let user_id = "2021" + ("000" + running).slice(-3) + "XXX";

      //--date
      let today = new Date(); //
      let lastday = today.setDate(today.getDate() - 1);
      let showdate = new Intl.DateTimeFormat("en-GB").format(lastday);

      //--time
      let hh = Math.floor(Math.random() * 24);
      let mm = Math.floor(Math.random() * 60);
      hh = ("0" + hh).slice(-2);
      mm = ("0" + mm).slice(-2);
      let time = hh + ":" + mm;

      //--withdraw
      let formatter = new Intl.NumberFormat("th-TH", {
        style: "currency",
        currency: "THB",
      });
      let withdraw = formatter.format(
        (Math.floor(Math.random() * 2100) + 1) * 10
      );

      //--game img
      let img = "img" + (Math.floor(Math.random() * 10) + 1);

      const jackpotRef = Firebase.database().ref("Jackpot");
      const list = {
        i,
        user_id,
        showdate,
        time,
        withdraw,
        img,
      };
      jackpotRef.push(list);
    }
  };

  const deleteAll = () => {
    const jackpotList = Firebase.database().ref('Jackpot')
    jackpotList.remove()
  }
  //---------------------------//
  return (
    <div className="container mt-5 mb-6 ">
      <div className="row d-flex align-content-center">
          <div className="m-3">
            <div>ระบุจำนวนผู้ถอน</div>
            <input
              type="number"
              className="form-control w-50 m-1"
              onChange={handleOnChange} value={count}
            />
            <button type="submit" className="btn btn-success m-1" onClick={generate}>เพิ่ม</button>
            <button type="delete" className="btn btn-danger m-1" onClick={deleteAll}>เคลียร์ทั้งหมด</button>
          </div>
      </div>
      
      <ShowJackpotAll />
    </div>
  );
}
