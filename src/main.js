import { Suspense, lazy } from "react";
import Jackpot from "./jackpot-top5";
import { useHistory } from "react-router-dom";

const CarrouselMain = lazy(() => import("./carousel"));
// const renderLoader = () => <p>Loading</p>;

// const DetailsComponent = () => (
//   <Suspense fallback={renderLoader()}>
//     <CarrouselMain />
//     <Jackpot />
//   </Suspense>
// );

function Main() {
  let history = useHistory();

  const onLogin = (e) => {
    e.preventDefault();
    history.push("/login");
  };

  const article = (e) => {
    e.preventDefault();
    let sec = e.target.getAttribute("name");
    console.log(sec);
    history.push("/article#" + sec);
  };

  return (
    <div className="mb-5">
      <Suspense fallback={<div>Loading...</div>}>
        <CarrouselMain />
        <div className="text-center mt-3 mb-5">
          <span className="h1">PG SLOT ยินดีต้อนรับ</span>
          <h3 className="marquee1">สล็อต PG แตกง่าย ล่าสุด 2021</h3>
          <h4 className="marquee1"> พร้อมสูตรทำเงินมหาศาล</h4>
        </div>
        <Jackpot />
      </Suspense>
      <div className="cylon_eye" />

      {/* About game*/}
      <div className="container-fluid mt-5 text-center  justify-content-center">
        {/* <div className="container">
          <h3>
            <strong style={{ color: "blueviolet" }}>สล็อตออนไลน์ PG SLOT</strong>
          </h3>
          <h3>
            <strong style={{ color: "blueviolet" }}>ทดลองเล่นสล็อตฟรี</strong>
          </h3>
          <p>
            สล็อตออนไลน์ ทดลองเล่นสล็อตฟรี ที่เว็ป <strong>Watafak88</strong> ที่ทำเงินสูงสุด pgslot มีเกมสนุกๆให้เลือกเล่นมากมาย มีเกมส์ใหม่อัพเดตอยู่เสมอ ซึ่งเงินที่ได้จากการเล่นเกมสล็อตเป็นเงินจริง
            เป็นการหาเงินจากการเล่นเกมที่ง่ายแสนง่าย ถ้าไม่มั่นใจสามารถเข้าไปทดลองเล่นฟรีก่อนได้เลย
          </p>
        </div> */}
        {/*ค่ายเกม*/}
        <div className="row justify-content-center">
          <ul className="navbar-nav font-weight-bolder list-group list-group-horizontal text-center">
            <li className="bg-gamelabel popup">
              <a-nav href="#">
                <img className="img-box1 rounded-circle" src="img/gametest/pgslot1.jpg" width="50" height="50" onMouseOver={show1} onClick={show1} alt="PGSLOT" title="pg slot" />
              </a-nav>
            </li>
            <li className="bg-gamelabel popup">
              <a-nav href="#">
                <img className="img-box1 rounded-circle" src="img/gametest/pgslot2.jpg" width="50" height="50" onMouseOver={show2} onClick={show2} alt="PGSLOT" title="pg slot" />
              </a-nav>
            </li>
            <li className="bg-gamelabel popup">
              <a-nav href="#">
                <img className="img-box1 rounded-circle" src="img/gametest/pgslot3.jpg" width="50" height="50" onMouseOver={show3} onClick={show3} alt="PGSLOT" title="pg slot" />
              </a-nav>
            </li>
            <li className="bg-gamelabel popup">
              <a-nav href="#">
                <img className="img-box1 rounded-circle" src="img/gametest/pgslot4.jpg" width="50" height="50" onMouseOver={show4} onClick={show4} alt="PGSLOT" title="pg slot" />
              </a-nav>
            </li>
            <li className="bg-gamelabel popup">
              <a-nav href="#">
                <img className="img-box1 rounded-circle" src="img/gametest/pgslot5.jpg" width="50" height="50" onMouseOver={show5} onClick={show5} alt="PGSLOT" title="pg slot" />
              </a-nav>
            </li>
          </ul>
          <div className="container-fluid mt-2">
            <div className="row  justify-content-center">
              <div className="col-12 col-md-4 p-0 text-center">
                <div id="game1">
                  <div className="container">
                    <img src="img/gametest/pgslot1.jpg" width="290" height="290" className="img-fluid rounded-circle blockgame" alt="watafak pgslot" title="สล็อตออนไลน์ฟรี" />
                  </div>
                  <div className="container m-2">
                    <a href="https://www.eagaming.com/en/games/ongbak.html?locale=en&redirectUrl=http%3A//www.eagaming.com/en/games.html" className="btn btn-bg1">
                      ลองเล่นฟรีเลย
                    </a>
                  </div>
                </div>
                <div id="game2" className="hide">
                  <div className="container">
                    <img src="img/gametest/pgslot2.jpg" width="290" height="290" className="img-fluid rounded-circle blockgame" alt="watafak pgslot" title="สล็อตออนไลน์ฟรี" />
                  </div>
                  <div className="container m-2">
                    <a href="https://www.eagaming.com/en/games/joker-madness.html" className="btn btn-bg1">
                      เข้าทดลองเล่นเลย
                    </a>
                  </div>
                </div>
                <div id="game3" className="hide">
                  <div className="container">
                    <img src="img/gametest/pgslot3.jpg" width="290" height="290" className="img-fluid rounded-circle blockgame" alt="watafak pgslot" title="สล็อตออนไลน์ฟรี" />
                  </div>
                  <div className="container m-2">
                    <a href="https://www.eagaming.com/en/games/wild-giant-panda.html?locale=en&redirectUrl=http%3A//www.eagaming.com/en/games.html" className="btn btn-bg1">
                      เข้าทดลองเล่นเลย
                    </a>
                  </div>
                </div>
                <div id="game4" className="hide">
                  <div className="container">
                    <img src="img/gametest/pgslot4.jpg" width="290" height="290" className="img-fluid rounded-circle blockgame" alt="pgslot" title="สล็อตออนไลน์ฟรี" />
                  </div>
                  <div className="container m-2">
                    <a href="https://www.eagaming.com/en/games/fish-hunter-haiba.html?locale=en&redirectUrl=http%3A//www.eagaming.com/en/games.html" className="btn btn-bg1">
                      เข้าทดลองเล่นเลย
                    </a>
                  </div>
                </div>
                <div id="game5" className="hide">
                  <div className="container">
                    <img src="img/gametest/pgslot5.jpg" width="290" height="290" className="img-fluid rounded-circle blockgame" alt="pgslot" title="สล็อตออนไลน์ฟรี" />
                  </div>
                  <div className="container m-2">
                    <a href="https://www.eagaming.com/en/games/lucky-streak.html?locale=en&redirectUrl=http%3A//www.eagaming.com/en/games.html" className="btn btn-bg1">
                      เข้าทดลองเล่นเลย
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cylon_eye" />

      {/* Articleslide */}
      <div className="container mt-3">
        <div className="row">
          <div id="articleslide" className="carousel slide" data-ride="carousel" style={{ width: "100%", maxHeight: 400 }}>
            <h1 className="float-left h1">บทความ PGSLOT</h1>
            <div className="carousel-inner d-block">
              <div className="carousel-item active">
                <div className="row col-12 pl-2 pr-2">
                  <div className="col-6">
                    <img src="img/article/pg.png" width="400" height="225" className="img-fluid" alt="pgslot" title="pgslot บทความ" style={{ width: "100%" }} />
                  </div>
                  <div className="col-6">
                    <p className="text-white-50 text-left">สล็อตออนไลน์ (Slot online) เกมส์ยิงปลาได้เงินจริง ลุ้นแจ็คพ๊อตทุกวันกับ WATAFAK88</p>
                    <p onClick={article} id="ongbak" name="ongbak" className="text-white-50 text-left">
                      อ่านต่อ &gt;&gt;
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row col-12 pl-2 pr-2">
                  <div className="col-6">
                    <img src="img/article/waysCover.jpg" width="400" height="225" className="img-fluid rounded-pill" alt="pgslot" title="pgslot บทความ" style={{ width: "100%" }}></img>
                  </div>
                  <div className="col-6">
                    <p className="text-white-50 text-left">สล็อตออนไลน์ (Slot online) เกมส์ยิงปลาได้เงินจริง ลุ้นแจ็คพ๊อตทุกวันกับ WATAFAK88</p>
                    <p onClick={article} id="roma" name="roma" className="text-white-50 text-left">
                      อ่านต่อ &gt;&gt;
                    </p>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="row col-12 pl-2 pr-2">
                  <div className="col-6">
                    <img src="img/article/เกมยิงปลา.jpg" width="400" height="225" className="img-fluid rounded-pill" alt="pgslot" title="pgslot บทความ" style={{ width: "100%" }} />
                  </div>
                  <div className="col-6">
                    <p className="text-white-50 text-left">สล็อตออนไลน์ (Slot online) เกมส์ยิงปลาได้เงินจริง ลุ้นแจ็คพ๊อตทุกวันกับ WATAFAK88</p>
                    <p onClick={article} id="fish" name="fish" className="text-white-50 text-left">
                      อ่านต่อ &gt;&gt;
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#articleslide" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#articleslide" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>

      <div className="cylon_eye" />

      {/* Footer in main*/}
      <footer id="footmain">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h1 className="text-white text-left h1">
                PGSLOT สล็อตออนไลน์ (Slot online) เกมส์ยิงปลา
                <br />
              </h1>

              <h2 className="text-white-50 text-left">
                สล็อตออนไลน์ (Slot online) เกมส์ยิงปลาได้เงินจริง ลุ้นแจ็คพ๊อตทุกวัน กับเว็บ WATAFAK88 รวมเกมส์สล็อตเอาไว้ที่นี้ที่เดียว เกมส์สล็อต ยิงปลา และอีกมากมายจากหลายค่ายเกมส์ดัง
                ยืนยันเบอร์โทร รับเครดิตฟรี
              </h2>
              <h3>
                #WATAFAK88 | #pgslot | #amb | #AskMeBet | #เกมยิงปลา | #ambbo | #slot | #slotonline | #casino |<span onClick={onLogin}> #admin</span>
              </h3>
            </div>
            <div className="col-lg-6 text-lg-right">
              <p className=" text-center">
                <a href="https://lin.ee/bDb5ic7">
                  <img src="img/qrline.png" width="250" height="250" alt="pgslot official" className="img-fluid" />
                </a>
              </p>
              <p className="row float-right"></p>
              <div className="sign text-center">
                <h4>
                  <a href="https://lin.ee/bDb5ic7" target="_blank" rel="noreferrer noopener">
                    <img src="img/lineicon_s.png" width="32" height="32" alt="pgslot official"></img>
                  </a>
                  ให้บริการตลอด<span className="fast-flicker"> 24 </span> ชั่วโมง
                </h4>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Snow Flakes */}
      <div className="snowflakes" aria-hidden="true">
        <div className="snowflake">❅</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❄</div>
      </div>

      <div className="line-button">
        <a href="https://lin.ee/bDb5ic7" target="blank" rel="noopener">
          <img rel="preload" as="image" imagesizes="50vw" src="img/line_icon.svg" width="50" height="50" className="img-fluid" alt="@watafak88"></img>
        </a>
      </div>

      <div className="facebook-button">
        <a href="https://www.facebook.com/Watafak88/" target="blank" rel="noopener">
          <img rel="preload" as="image" imagesizes="50vw" src="img/facebook_icon.svg" width="50" height="50" className="img-fluid" alt="watafak88 fanpage"></img>
        </a>
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
export default Main;
