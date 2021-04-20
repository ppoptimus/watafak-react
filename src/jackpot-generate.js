import React from "react";

export default function GenerateJackpot() {
    var arr_hh = [];
  const generate = () => {
    for (let i = 0; i < 5; i++) {
        var r1 = Math.floor(Math.random() * 24);
        var r2 = Math.floor(Math.random() * 60);
        r1 = ("0" + r1).slice(-2)
        r2 = ("0" + r2).slice(-2)
        let testdate = new Date()//
		let test2 = testdate.setDate(testdate.getDate() - 1);
		let date = new Intl.DateTimeFormat('en-GB').format(test2);
		let run = (Math.floor(Math.random() * 29) + 1);
		let id = '2021'+("000" + run).slice(-3)+'XXX';
		let formatter = new Intl.NumberFormat('th-TH', {  style: 'currency',  currency: 'THB',});
		let img = 'img' + (Math.floor(Math.random() * 10) + 1);
		let test = formatter.format((Math.floor(Math.random() * 1000) + 1) * 10)

        document.getElementById.innerHtml = (id + '___' + date + ' ' + r1 + ':' + r2 + '___' + test + '___' + img + "<br>") 
        if (arr_hh.indexOf(r1) === -1) arr_hh.push(r1);
    }
  };
  return (
  <div>
    <div className="btn" onClick={generate}>click</div>
    <p id="result"></p>
  </div>
  );
}
