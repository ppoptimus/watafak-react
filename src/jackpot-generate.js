import React from "react";

export default function GenerateJackpot() {
  var data = [];

  const generate = () => {
    for (let i = 0; i < 5; i++) {
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
      let time = hh + ':' + mm

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

      data = {user_id:user_id, showdate:showdate + ' ' + time, withdraw:withdraw, img:img}
      const jsontext =  JSON.stringify(data)
        console.table(jsontext)
    }
  };

  //---------------------------//
  return (
    <div className="content-wrapper">
      <div className="btn" onClick={generate}>
        click
      </div>
    </div>
  );
}
