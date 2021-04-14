import React, { Component } from 'react'

function shf_hh() {
  
}

const jackpot = () => {
  
  var arr_hh = [];
  while (arr_hh.length < 5) {
    var r = Math.floor(Math.random() * 24);
    if (arr_hh.indexOf(r) === -1) arr_hh.push(r);
  }
  arr_hh = arr_hh.sort(function (a, b) { return a - b })
  let h1 = ("0" + arr_hh[0]).slice(-2)
  let h2 = ("0" + arr_hh[1]).slice(-2)
  let h3 = ("0" + arr_hh[2]).slice(-2)
  let h4 = ("0" + arr_hh[3]).slice(-2)
  let h5 = ("0" + arr_hh[4]).slice(-2)

  //--------------------------------------//
  var arr_mm = [];
  while (arr_mm.length < 5) {
    var r = Math.floor(Math.random() * 60);
    if (arr_mm.indexOf(r) === -1) arr_mm.push(r);
  }
  arr_mm = arr_mm.sort(function (a, b) { return a - b })
  let m1 = ("0" + arr_mm[0]).slice(-2)
  let m2 = ("0" + arr_mm[1]).slice(-2)
  let m3 = ("0" + arr_mm[2]).slice(-2)
  let m4 = ("0" + arr_mm[3]).slice(-2)
  let m5 = ("0" + arr_mm[4]).slice(-2)

  let hm1 = h1 + ":" + m1
  let hm2 = h2 + ":" + m2
  let hm3 = h3 + ":" + m3
  let hm4 = h4 + ":" + m4
  let hm5 = h5 + ":" + m5
  document.getElementById('dateTime').innerHTML = hm1

    return (
      <div>
        <div className="container">
          <div>
            <h3 className="text-white">ขอแสดงความยินดีกับลูกค้า Watafak88</h3>
          </div>

          <div className="jackpot-card" id="jackpotCover">
            <div className="row col-12 pr-0 middle">
              <div className="col-5 text-center">
                <p className="mb-0" id="userId">096280XXXX</p>
                <p className="mb-0 text-point" id="dateTime">2021-4-1 22:35</p>
              </div>
              <div className="col-4">
                <p className="mb-0">แจ้งถอน</p>
                <p className="mb-0 text-point" id="deposit">{hm1}
                  <img
                    src="img/coin.png"
                    className="img-fluid"
                    alt="watafak coin"
                  />
                </p>
              </div>
              <div className="col-3">
                <img
                  src="img/game/game1.png"
                  className="img-fluid float-right"
                  alt="watafak game test"
                  id="jockpotImg"
                />
              </div>
            </div>

          </div>
          <div className="jackpot-card">
           
              <div className="row col-12 pr-0 middle">
                <div className="col-5 text-center">
                  <p className="mb-0">096280XXXX</p>
                  <p className="mb-0 text-point">2021-4-1 22:35</p>
                </div>
                <div className="col-4">
                  <p className="mb-0">แจ้งถอน</p>
                  <p className="mb-0 text-point">
                    5,000{" "}
                    <img
                      src="img/coin.png"
                      className="img-fluid"
                      alt="watafak coin"
                    />
                  </p>
                </div>
                <div className="col-3">
                  <img
                    src="img/game/game1.png"
                    className="img-fluid float-right"
                    alt="watafak game test"
                  />
                </div>
              </div>
            
          </div>
          <div className="jackpot-card">
            
              <div className="row col-12 pr-0 middle">
                <div className="col-5 text-center">
                  <p className="mb-0">096280XXXX</p>
                  <p id="datetime1" className="mb-0 text-point">
                    2021-4-1 22:35
                  </p>
                </div>
                <div className="col-4">
                  <p className="mb-0">แจ้งถอน</p>
                  <p className="mb-0 text-point">
                    5,000{" "}
                    <img
                      src="img/coin.png"
                      className="img-fluid"
                      alt="watafak coin"
                    />
                  </p>
                </div>
                <div className="col-3">
                  <img
                    src="img/game/game1.png"
                    className="img-fluid float-right"
                    alt="watafak game test"
                  />
                </div>
              </div>
            
          </div>
          <div className="jackpot-card">
            
              <div className="row col-12 pr-0 middle">
                <div className="col-5 text-center">
                  <p className="mb-0">096280XXXX</p>
                  <p className="mb-0 text-point">2021-4-1 22:35</p>
                </div>
                <div className="col-4">
                  <p className="mb-0">แจ้งถอน</p>
                  <p className="mb-0 text-point">
                    5,000{" "}
                    <img
                      src="img/coin.png"
                      className="img-fluid"
                      alt="watafak coin"
                    />
                  </p>
                </div>
                <div className="col-3">
                  <img
                    src="img/game/game1.png"
                    className="img-fluid float-right"
                    alt="watafak game test"
                  />
                </div>
              </div>
            
          </div>
          <div className="jackpot-card">
            
              <div className="row col-12 pr-0 middle">
                <div className="col-5 text-center">
                  <p className="mb-0">096280XXXX</p>
                  <p className="mb-0 text-point">2021-4-1 22:35</p>
                </div>
                <div className="col-4">
                  <p className="mb-0">แจ้งถอน</p>
                  <p className="mb-0 text-point">
                    5,000{" "}
                    <img
                      src="img/coin.png"
                      className="img-fluid"
                      alt="watafak coin"
                    />
                  </p>
                </div>
                <div className="col-3">
                  <img
                    src="img/game/game1.png"
                    className="img-fluid float-right"
                    alt="watafak game test"
                  />
                </div>
              </div>
            
          </div>
          
          <div className="container m-2 text-center">
            <button className="btn btn-bg1">
              ดูทั้งหมด &gt;&gt;
            </button>
          </div>

        </div>
      </div>
    )
}

export default jackpot;