import { Link, Route, Switch } from "react-router-dom";
import Main from "./main";
import Promotion from "./promotion";
import Article from "./article";
import Download from "./download";

function App() {
  return (
    <div>
      <header>
        <div className="header-top row medium bg-top">
          <div className="col-lg d-none d-lg-block ml-4">
            <strong>WATAFAK88 คาสิโน สล็อตออนไลน์ เกมส์ยิงปลา</strong>
          </div>
          <div className="col-lg-auto text-center d-md-block d-sm-block mr-4">
            <a-nav href="#" target="_blank" rel="noopener noreferrer nofollow">
              <strong>@LINE | ให้บริการตลอด 24 ชั่วโมง</strong>
            </a-nav>
          </div>
        </div>

        <nav className="navbar navbar-expand-lg navbar-toggleable-sm p-1 mb-3 bg-header border-primary1 justify-content-center">
          <div className="container m-0">
            {/*nav mobile*/}
            <a className="navbar-brand" href="#">
              <img
                className="d-block d-sm-block d-md-block d-lg-none d-xl-none"
                src="img/menu/logo-nav1.png"
                alt=""
                width={50}
                height="auto;"
              />
            </a>
            <button
              type="button"
              className="navbar-toggler navbar-dark"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content nav-modal">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">
                        <i className="fa fa-times text-white" />
                      </span>
                    </button>
                  </div>
                  <div className="modal-body text-center">
                    <Link to="/" role="button" className="btn-modal">
                      <i
                        style={{ fontSize: "x-large" }}
                        className="fa fa-home"
                      />
                      <p className="p-modal">หน้าหลัก</p>
                    </Link>
                    <Link role="button" to="#" className="btn-modal">
                      <i
                        style={{ fontSize: "x-large" }}
                        className="fa fa-cloud-download"
                      />
                      <p className="p-modal">ฝาก-ถอน</p>
                    </Link>
                    <Link role="button" to="#" className="btn-modal">
                      <i
                        style={{ fontSize: "x-large" }}
                        className="fa fa-gamepad"
                      />
                      <p className="p-modal">เล่นเกมส์</p>
                    </Link>
                    <Link role="button" to="article" className="btn-modal">
                      <i
                        style={{ fontSize: "x-large" }}
                        className="fa fa-book"
                      />
                      <p className="p-modal">บทความ</p>
                    </Link>
                    <Link role="button" to="/promotion" className="btn-modal">
                      <i
                        style={{ fontSize: "x-large" }}
                        className="fa fa-gift"
                      />
                      <p className="p-modal">โปรโมชั่น</p>
                    </Link>
                    <Link role="button" to="#" className="btn-modal">
                      <i
                        style={{ fontSize: "x-large" }}
                        className="fa fa-comments"
                      />
                      <p className="p-modal">ติดต่อเรา</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/*nav desktop*/}
            <div className="collapse navbar-collapse text-center">
              <ul className="navbar-nav font-weight-bolder text-center mx-auto">
                <li className="nav-item">
                  <Link to="#" className="btn btn-bg2">
                    <p className="font-navmobile">สมัครสมาชิก</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/download" className="btn btn-bg1">
                    <p className="font-navmobile">ดาวน์โหลด</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#" className="btn btn-bg2">
                    <p className="font-navmobile">เล่นเกมส์</p>
                  </Link>
                </li>
                <li className="nav-item nav-logo m-4">
                  <Link
                    to="/"
                    className="nav-link d-none d-sm-none d-md-block d-lg-block"
                  >
                    <img src="img/menu/logo-nav.png" alt="WATAFAK" />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/promotion" className="btn btn-bg1">
                    <p className="font-navmobile">โปรโมชั่น</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/article" className="btn btn-bg2">
                    <p className="font-navmobile">บทความ</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#" className="btn btn-bg1">
                    <p className="font-navmobile">ฝาก-ถอน</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <div id="announcement" className="container mt-4">
        <h6>
          <marquee className="marquee1">
            <i className="fa fa-trophy"></i> สมัครใหม่...WATAFAK88
            รับโบนัสสูงสุด 300 บาท ติดต่อ Admin ได้ตลอด 24
            ชั่วโมงที่เมนูติดต่อเรา
          </marquee>
        </h6>
      </div>

      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/promotion">
          <Promotion />
        </Route>
        <Route exact path="/article">
          <Article />
        </Route>
        <Route exact path="/download">
          <Download />
        </Route>
      </Switch>

      {/* Footer all page desktop */}
      <footer
        id="footerdesktop"
        className="dk-footer d-none d-sm-none d-md-none d-lg-block"
        style={{ marginTop: "5rem" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-4">
              <div className="dk-footer-box-info">
                <a href="index.html" className="footer-logo">
                  <img
                    src="img/footer1.png"
                    alt="footer_logo"
                    className="img-fluid"
                  />
                </a>
                <p className="footer-info-text">
                  เว็บสล็อตออนไลน์ (Slot online) คาสิโนออนไลน์ (casino online)
                  เกมส์ยิงปลา ที่ดีที่สุด ฟรีเครดิต เครดิตฟรี
                  มีเกมส์ให้เลือกเล่นมากมายหลายเกมส์ มีพนักงานคอยดูแลลูกค้าตลอด
                  24 ชั่วโมง มีระบบฝาก-ถอนออโต้ที่ดีที่สุดในประเทศไทย สะดวก
                  รวดเร็ว สมัครเล่นได้แล้ววันนี้ที่เว็บ WATAFAK888 บริการดี
                  โปรโมชั่นจัดเต็ม ต้องมาที่ WATAFAK888
                </p>
                <div className="footer-social-link">
                  <h3>Follow us</h3>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
                {/* End Social link */}
              </div>
            </div>
            {/* End Col */}
            <div className="col-md-12 col-lg-8">
              <div className="row">
                <div className="col-md-6">
                  <div className="contact-us">
                    <div className="contact-icon">
                      <i className="fa fa-map-o" />
                    </div>
                    {/* End contact Icon */}
                    <div className="contact-info">
                      <h3>Bangkok Thailand</h3>
                      <p>5353 Road Avenue</p>
                    </div>
                    {/* End Contact Info */}
                  </div>
                  {/* End Contact Us */}
                </div>
                {/* End Col */}
                <div className="col-md-6">
                  <div className="contact-us contact-us-last">
                    <div className="contact-icon">
                      <i
                        className="fa fa-volume-control-phone"
                        aria-hidden="true"
                      />
                    </div>
                    {/* End contact Icon */}
                    <div className="contact-info">
                      <h3>++6 95 533 9999</h3>
                      <p>Give us a call</p>
                    </div>
                    {/* End Contact Info */}
                  </div>
                  {/* End Contact Us */}
                </div>
                {/* End Col */}
              </div>
              {/* End Contact Row */}
              <div className="row">
                <div className="col-md-12 col-lg-6">
                  <div className="footer-widget footer-left-widget">
                    <div className="section-heading">
                      <h3>Useful Links</h3>
                      <span className="animate-border border-black" />
                    </div>
                    <ul>
                      <li>
                        <a href="#">บทความ</a>
                      </li>
                      <li>
                        <a href="#">บริการเกมส์</a>
                      </li>
                      <li>
                        <a href="#">โปรโมชั่น</a>
                      </li>
                      <li>
                        <a href="#">ติดต่อเรา</a>
                      </li>
                    </ul>
                  </div>
                  {/* End Footer Widget */}
                </div>
                {/* End col */}
                <div className="col-md-12 col-lg-6">
                  <div className="footer-widget">
                    <div className="section-heading">
                      <h3>Subscribe</h3>
                      <span className="animate-border border-black" />
                    </div>
                    <p>
                      Don’t miss to subscribe to our new feeds, kindly fill the
                      form below
                    </p>
                  </div>
                  {/* End footer widget */}
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            {/* End Col */}
          </div>
          {/* End Widget Row */}
        </div>
        {/* End Contact Container */}
        <div className="copyright">
          <div className="container">
            <div className="row">
              {/* End Col */}
              <div className="container-fluid">
                <h6>
                  <marquee>
                    <i className="fa fa-trophy" /> สมัครใหม่...รับโบนัสสูงสุด
                    300 บาท ติดต่อ Admin ได้ตลอด 24 ชั่วโมงที่เมนูติดต่อเรา
                  </marquee>
                </h6>
              </div>
            </div>
            {/* End Row */}
          </div>
          {/* End Copyright Container */}
        </div>
        {/* End Copyright */}
      </footer>

      {/* Marquee-game */}
      <div className="container-marq">
        <div className="marquee-game">
          <div className="img-marq">
            <img src="img/game/game1.png" className="img-box1" />
          </div>
          <div className="img-marq">
            <img src="img/game/game2.png" className="img-box1" />
          </div>
          <div className="img-marq">
            <img src="img/game/game3.png" className="img-box1" />
          </div>
          <div className="img-marq">
            <img src="img/game/game4.png" className="img-box1" />
          </div>
          <div className="img-marq">
            <img src="img/game/game5.png" className="img-box1" />
          </div>
          <div className="img-marq">
            <img src="img/game/game6.png" className="img-box1" />
          </div>
          <div className="img-marq">
            <img src="img/game/game7.png" className="img-box1" />
          </div>
          <div className="img-marq">
            <img src="img/game/game8.png" className="img-box1" />
          </div>
        </div>
      </div>

      <div className="line-button">
        <a href="#">
          <img rel="preload" as="image" imagesizes="50vw" src="img/line_icon.svg" className="img-fluid"></img>
        </a>
      </div>
      <div className="facebook-button">
        <a href="#">
          <img rel="preload" as="image" imagesizes="50vw" src="img/facebook_icon.svg" className="img-fluid"></img>
        </a>
      </div>

      {/* Footer mobile menu */}
      <div className="d-block d-sm-block d-md-block d-lg-none d-xl-none menu-mobile fixed-bottom">
        <ul className="bg-navmobile2 row">
          <li>
            <Link to="#">
              <i className="fa fa-user-plus fa-navmobile" />
              <p className="font-navmobile">สมัครเลย</p>
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="fa fa-gamepad fa-navmobile" />
              <p className="font-navmobile">เล่นเกมส์</p>
            </Link>
          </li>
          <li>
            <Link to="/download">
              <i className="fa fa-download fa-navmobile" />
              <p className="font-navmobile">ดาวน์โหลด</p>
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="fa fa-money fa-navmobile" />
              <p className="font-navmobile">โปรโมชั่น</p>
            </Link>
          </li>
        </ul>
      </div>

      {/* Snow Flakes */}
      <div className="snowflakes" aria-hidden="true">
        <div className="snowflake">WATAFAK88</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">WATAFAK88</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">WATAFAK88</div>
        <div className="snowflake">❄</div>
      </div>

      {/* Back to top */}
      {/* <div id="back-to-top" className="back-to-top">
        <button
          className="btn btn-warning"
          title="Back to Top"
          style={{ display: "block" }}
        >
          <i className="fa fa-angle-up" />
        </button>
      </div> */}
      {/* End Back to top */}

      

      {/* close div */}
    </div>
  );
}

export default App;
