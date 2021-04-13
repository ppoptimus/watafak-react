import React from "react";
import Carrousel_amin from "./carousel";
import Jackpot from './jackpot-top5';

function main() {
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          
        {/*Carousel*/}
         <Carrousel_amin/>
        </div>

      </div>

      <div>
        <br/>
        {/*Jackpot*/}
        <Jackpot/>

        <div className="view_port">
          <div className="cylon_eye" />
        </div>
        {/* About game*/}
        <section id="sectiongame" className="container-fluid mt-5">
          <div className=" text-center  justify-content-center">
            <div className="container">
              <h3>
                <strong style={{ color: "blueviolet" }}>สล็อตออนไลน์</strong>
              </h3>
              <h3>
                <strong style={{ color: "blueviolet" }}>
                  ทดลองเล่นสล็อตฟรี
                </strong>
              </h3>
              <p>
                สล็อตออนไลน์ ทดลองเล่นสล็อตฟรี สล็อตออนไลน์ ทดลองเล่นสล็อตฟรี
                ที่เว็ป Watafak88 ที่ทำเงินสูงสุดในปัจจุบัน slotxo
                มีเกมสนุกๆให้เลือกเล่นมากมาย มีเกมส์ใหม่อัพเดตอยู่เสมอ
                แถมเกมที่เล่นยังสามารถทำเงินได้อีกด้วย
                ซึ่งเงินที่ได้จากการเล่นเกมสล็อตเป็นเงินจริง
                เป็นการหาเงินจากการเล่นเกมที่ง่ายแสนง่าย
                จึงทำให้เกมสล็อตได้รับความนิยมเป็นอย่างมาก โอกาสของคุณมาถึงแล้ว
                รีบคว้ามันเอาไว้ก่อนดีกว่าที่จะมานั่งเสียดายเอาทีหลัง
                ถ้าไม่มั่นใจสามารถเข้าไปทดลองเล่นฟรีก่อนได้เลย
              </p>
            </div>
            {/*ค่ายเกม*/}
            <div className="row justify-content-center">
              <ul className="navbar-nav font-weight-bolder list-group list-group-horizontal text-center">
                <li className="bg-gamelabel popup">
                  <a-nav href="#">
                    <img
                      className="img-box1"
                      src="img/gametest/OngBak.png"
                      onMouseOver={show1}
                      onClick={show1}
                      alt="WATAFAK888"
                    />
                  </a-nav>
                </li>
                <li className="bg-gamelabel popup">
                  <a-nav href="#">
                    <img
                      className="img-box1"
                      src="img/gametest/2.png"
                      onMouseOver={show2}
                      onClick={show2}
                      alt="WATAFAK888"
                    />
                  </a-nav>
                </li>
                <li className="bg-gamelabel popup">
                  <a-nav href="#">
                    <img
                      className="img-box1"
                      src="img/gametest/3.png"
                      onMouseOver={show3}
                      onClick={show3}
                      alt="WATAFAK888"
                    />
                  </a-nav>
                </li>
                <li className="bg-gamelabel popup">
                  <a-nav href="#">
                    <img
                      className="img-box1"
                      src="img/gametest/4.png"
                      onMouseOver={show4}
                      onClick={show4}
                      alt="WATAFAK888"
                    />
                  </a-nav>
                </li>
                <li className="bg-gamelabel popup">
                  <a-nav href="#">
                    <img
                      className="img-box1"
                      src="img/gametest/5.png"
                      onMouseOver={show5}
                      onClick={show5}
                      alt="WATAFAK888"
                    />
                  </a-nav>
                </li>
              </ul>
              <div className="container-fluid">
                <div className="row  justify-content-center">
                  <div className="col-12 col-md-4 p-0 text-center">
                    <div id="game1">
                      <div className="container">
                        <img
                          src="img/gametest/OngBak.png"
                          className="rounded-lg blockgame"
                          alt="watafak game test"
                        />
                      </div>
                      <div className="container m-2">
                        <a
                          href="https://www.eagaming.com/en/games/ongbak.html?locale=en&redirectUrl=http%3A//www.eagaming.com/en/games.html"
                          className="btn btn-bg1"
                        >
                          เข้าทดลองเล่นเลย
                        </a>
                      </div>
                    </div>
                    <div id="game2" className="hide">
                      <div className="container">
                        <img
                          src="img/gametest/2.png"
                          className="rounded-bottom blockgame"
                          alt="watafak game test"
                        />
                      </div>
                      <div className="container m-2">
                        <a
                          href="https://www.eagaming.com/en/games/joker-madness.html"
                          className="btn btn-bg1"
                        >
                          เข้าทดลองเล่นเลย
                        </a>
                      </div>
                    </div>
                    <div id="game3" className="hide">
                      <div className="container">
                        <img
                          src="img/gametest/3.png"
                          className="rounded-circle blockgame"
                          alt="watafak game test"
                        />
                      </div>
                      <div className="container m-2">
                        <a
                          href="https://www.eagaming.com/en/games/wild-giant-panda.html?locale=en&redirectUrl=http%3A//www.eagaming.com/en/games.html"
                          className="btn btn-bg1"
                        >
                          เข้าทดลองเล่นเลย
                        </a>
                      </div>
                    </div>
                    <div id="game4" className="hide">
                      <div className="container">
                        <img
                          src="img/gametest/4.png"
                          className="rounded-circle blockgame"
                          alt="watafak game test"
                        />
                      </div>
                      <div className="container m-2">
                        <a
                          href="https://www.eagaming.com/en/games/fish-hunter-haiba.html?locale=en&redirectUrl=http%3A//www.eagaming.com/en/games.html"
                          className="btn btn-bg1"
                        >
                          เข้าทดลองเล่นเลย
                        </a>
                      </div>
                    </div>
                    <div id="game5" className="hide">
                      <div className="container">
                        <img
                          src="img/gametest/5.png"
                          className="rounded-circle blockgame"
                          alt="watafak game test"
                        />
                      </div>
                      <div className="container m-2">
                        <a
                          href="https://www.eagaming.com/en/games/lucky-streak.html?locale=en&redirectUrl=http%3A//www.eagaming.com/en/games.html"
                          className="btn btn-bg1"
                        >
                          เข้าทดลองเล่นเลย
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="view_port">
              <div className="cylon_eye" />
            </div>
          </div>
        </section>

        {/* Articleslide */}
        <div className="container mt-3">
          <div className="row">
            <div
              id="articleslide"
              className="carousel slide"
              data-ride="carousel"
              style={{ width: "100%" }}
            >
              <h1 className="float-left">บทความ</h1>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row col-12">
                    <div className="col-6">
                      <img
                        src="#"
                        className="d-block"
                        alt="..."
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="col-6">
                      <p className="text-white-50 text-left">
                        คาสิโนออนไลน์ (Casino online) สล็อต (Slot)
                        เกมส์ยิงปลาได้เงินจริง ลุ้นแจ็คพ๊อตทุกวัน กับเว็บ
                        WATAFAK888 ..
                      </p>
                      <p className="text-white-50 text-right">
                        อ่านต่อ &gt;&gt;
                      </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row col-12 pl-2 pr-2">
                    <div className="col-6">
                      <img
                        src="#"
                        className="d-block"
                        alt="..."
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="col-6">
                      <p className="text-white-50 text-left">
                        คาสิโนออนไลน์ (Casino online) สล็อต (Slot)
                        เกมส์ยิงปลาได้เงินจริง ลุ้นแจ็คพ๊อตทุกวัน กับเว็บ
                        WATAFAK888 ..
                      </p>
                      <p className="text-white-50 text-right">
                        อ่านต่อ &gt;&gt;
                      </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row col-12 pl-2 pr-2">
                    <div className="col-6">
                      <img
                        src="#"
                        className="d-block"
                        alt="..."
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="col-6">
                      <p className="text-white-50 text-left">
                        คาสิโนออนไลน์ (Casino online) สล็อต (Slot)
                        เกมส์ยิงปลาได้เงินจริง ลุ้นแจ็คพ๊อตทุกวัน กับเว็บ
                        WATAFAK888 ..
                      </p>
                      <p className="text-white-50 text-right">
                        อ่านต่อ &gt;&gt;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#articleslide"
                role="button"
                data-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#articleslide"
                role="button"
                data-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="view_port">
          <div className="cylon_eye" />
        </div>
        
        {/* Footer in main*/}
        <footer id="footmain">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h4 className="text-white text-left">
                  คาสิโนออนไลน์ (Casino online) สล็อต (Slot) เกมส์ยิงปลา
                  WATAFAK888 จากหลากหลายค่ายเกมส์ดัง <br />
                </h4>
                <h5 className="text-white-50">
                  SlotXo / PG / Joker / Live22 / Epic Win
                </h5>
                <p
                  className="text-white-50 text-left"
                  style={{ fontSize: "large" }}
                >
                  คาสิโนออนไลน์ (Casino online) สล็อต (Slot)
                  เกมส์ยิงปลาได้เงินจริง ลุ้นแจ็คพ๊อตทุกวัน กับเว็บ WATAFAK888
                  รวมเกมส์สล็อตเอาไว้ที่นี้ที่เดียว เกมส์สล็อต ยิงปลา
                  และอีกมากมายจากหลายค่ายเกมส์ดัง ยืนยันเบอร์โทร รับเครดิตฟรี
                  แจกฟรีเครดิต
                </p>
                <p>
                  #WATAFAK888 | #slotxo | #pgslot | #amb | poker | #jili |
                  #superslot | #joker123 | #spadegaming | #AskMeBet | #pragmatic
                  | #play | #เกมยิงปลา #ambbo | #slot | #slotonline | #casino
                </p>
              </div>
              <div className="col-lg-6 text-lg-right">
                <p className=" text-center">
                  <a href="#" target="_blank">
                    <img
                      src="img/qrline.png"
                      alt="line"
                      className="img-fluid"
                      style={{ width: "50%" }}
                    />
                  </a>
                </p>
                <p className="row float-right"></p>
                <div className="sign text-center">
                  <h4>
                    <a href="#" target="_blank">
                      <img src="img/lineicon_s.png" />
                    </a>
                    ให้บริการตลอด<span className="fast-flicker"> 24 </span>
                    ชั่วโมง
                  </h4>
                </div>
                <p />
                <p className="row float-right"></p>
                <ul className="list-inline bg-primary2 text-center">
                  <li className="list-inline-item">
                    <img
                      src="https://superslot1234.com/asset/web/img/TrueMoney.png"
                      alt=""
                    />
                  </li>
                  <li className="list-inline-item">
                    <img
                      src="https://superslot1234.com/asset/web/img/BBL.png"
                      alt=""
                    />
                  </li>
                  <li className="list-inline-item">
                    <img
                      src="https://superslot1234.com/asset/web/img/KBank.png"
                      alt=""
                    />
                  </li>
                  <li className="list-inline-item">
                    <img
                      src="https://superslot1234.com/asset/web/img/SCB.png"
                      alt=""
                    />
                  </li>
                  <li className="list-inline-item">
                    <img
                      src="https://superslot1234.com/asset/web/img/TMB.png"
                      alt=""
                    />
                  </li>
                  <li className="list-inline-item">
                    <img
                      src="https://superslot1234.com/asset/web/img/BAY.png"
                      alt=""
                    />
                  </li>
                </ul>
                <p />
              </div>
            </div>
          </div>
        </footer>
      </div>
    
    </div>
  );
}

function show1() {
  document.getElementById("game1").style.display = "block";
  document.getElementById("game2").style.display = "none";
  document.getElementById("game3").style.display = "none";
  document.getElementById("game4").style.display = "none";
  document.getElementById("game5").style.display = "none";
}
function show2() {
  document.getElementById("game1").style.display = "none";
  document.getElementById("game2").style.display = "block";
  document.getElementById("game3").style.display = "none";
  document.getElementById("game4").style.display = "none";
  document.getElementById("game5").style.display = "none";
}
function show3() {
  document.getElementById("game1").style.display = "none";
  document.getElementById("game2").style.display = "none";
  document.getElementById("game3").style.display = "block";
  document.getElementById("game4").style.display = "none";
  document.getElementById("game5").style.display = "none";
}
function show4() {
  document.getElementById("game1").style.display = "none";
  document.getElementById("game2").style.display = "none";
  document.getElementById("game3").style.display = "none";
  document.getElementById("game4").style.display = "block";
  document.getElementById("game5").style.display = "none";
}
function show5() {
  document.getElementById("game1").style.display = "none";
  document.getElementById("game2").style.display = "none";
  document.getElementById("game3").style.display = "none";
  document.getElementById("game4").style.display = "none";
  document.getElementById("game5").style.display = "block";
}
export default main;
