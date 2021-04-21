import React, { useState, lazy } from "react";
import firebase from "./utils/firebase";
import ShowJackpot from "./jackpot-all";

export default function GenerateJackpot() {
  var dataArray = [];

  const [count, setCount] = useState("");

  const handleOnChange = (e) => {
    setCount(e.target.value);
  };

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
        (Math.floor(Math.random() * 1000) + 1) * 10
      );

      //--game img
      let img = "img" + (Math.floor(Math.random() * 10) + 1);

      const jackpotRef = firebase.database().ref("Jackpot");
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
    const jackpotList = firebase.database().ref('Jackpot')
    jackpotList.remove()
  }
  //---------------------------//
  return (
    <div className="container mb-5">
      
      <form className="form-inline">
        <div className="form-group mx-sm-3 mb-2">
          <h4>ระบุจำนวนผู้ถอน</h4>
          <input
            type="number"
            className="form-control w-50"
            onChange={handleOnChange} value={count}
          />
        <button type="submit" className="btn btn-success mt-2" onClick={generate}>เพิ่ม</button>
        <button type="delete" className="btn btn-danger ml-1 mt-2" onClick={deleteAll}>เคลียร์ทั้งหมด</button>
        </div>
      </form>

      <ShowJackpot />

    </div>
  );
}
