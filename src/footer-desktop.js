import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer_desktop() {
  return (
    <div>
      <footer
        id="footerdesktop"
        className="dk-footer d-none d-sm-none d-md-none d-lg-block mb-6"
        style={{ marginTop: '5rem' }}
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
              </div>
            </div>

            <div className="col-md-12 col-lg-8">
              <div className="row">
                <div className="col-md-6">
                  <div className="contact-us">
                    <div className="contact-icon">
                      <i className="fa fa-map-o" />
                    </div>

                    <div className="contact-info">
                      <h3>Bangkok Thailand</h3>
                      <p>________________</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="contact-us contact-us-last">
                    <div className="contact-icon">
                      <i
                        className="fa fa-volume-control-phone"
                        aria-hidden="true"
                      />
                    </div>

                    <div className="contact-info">
                      <h3>Give us a call</h3>
                      <p>________________</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12 col-lg-6">
                  <div className="footer-widget footer-left-widget">
                    <div className="section-heading">
                      <h3>Useful Links</h3>
                      <span className="animate-border border-black" />
                    </div>
                    <ul>
                      <li>
                        <Link to="/article">บทความ</Link>
                      </li>
                      <li>
                        <Link to="/playgame">บริการเกมส์</Link>
                      </li>
                      <li>
                        <Link to="/promotion">โปรโมชั่น</Link>
                      </li>
                      <li>
                        <a href="https://lin.ee/Cg7O5nx" target="blank">ติดต่อเรา</a>
                      </li>
                    </ul>
                  </div>
                </div>

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
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="container-fluid">
                <h6>
                  <marquee>
                    <i className="fa fa-trophy" /> เปิดให้บริการเต็มรูปแบบเร็วๆ นี้
                  </marquee>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
