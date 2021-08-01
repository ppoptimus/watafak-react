import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-toggleable-sm p-1 mb-3 bg-header border-primary1 justify-content-center">
          <div className="container m-0">
            <Link className="navbar-brand d-block d-sm-block d-md-block d-lg-none d-xl-none" to="/">
              <img src="img/menu/logomini.png" className="img-fluid d-inline-block align-center" alt="pg slot online" width={50} height={36} />
              <span className="navtext flip ml-1">Watafak88</span>
            </Link>
            <button type="button" className="navbar-toggler navbar-dark" data-toggle="modal" data-target="#exampleModal" aria-label="menu collape">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content nav-modal">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">
                        <i className="fa fa-times text-white" />
                      </span>
                    </button>
                  </div>
                  <div className="modal-body text-center">
                    <Link to="/" role="button" className="btn-modal">
                      <i style={{ fontSize: "x-large" }} className="fa fa-home" />
                      <p className="p-modal">หน้าหลัก</p>
                    </Link>
                    <Link role="button" to="/playgame" className="btn-modal">
                      <i style={{ fontSize: "x-large" }} className="fa fa-cloud-download" />
                      <p className="p-modal">ฝาก-ถอน</p>
                    </Link>
                    <Link role="button" to="/playgame" className="btn-modal">
                      <i style={{ fontSize: "x-large" }} className="fa fa-gamepad" />
                      <p className="p-modal">เล่นเกมส์</p>
                    </Link>
                    <Link role="button" to="article" className="btn-modal">
                      <i style={{ fontSize: "x-large" }} className="fa fa-book" />
                      <p className="p-modal">บทความ</p>
                    </Link>
                    <Link role="button" to="/promotion" className="btn-modal">
                      <i style={{ fontSize: "x-large" }} className="fa fa-gift" />
                      <p className="p-modal">โปรโมชั่น</p>
                    </Link>
                    <a role="button" href="https://lin.ee/bDb5ic7" target="_blank" rel="noopener" className="btn-modal">
                      <i style={{ fontSize: "x-large" }} className="fa fa-comments" />
                      <p className="p-modal">ติดต่อเรา</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/*nav desktop*/}
            <div className="collapse navbar-collapse text-center">
              <ul className="navbar-nav font-weight-bolder text-center mx-auto">
                <li className="nav-item">
                  <Link to="/" className="btn btn-bg2">
                    <p className="font-navmobile">หน้าหลัก</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="register" className="btn btn-bg1">
                    <p className="font-navmobile">สมัครสมาชิก</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/download" className="btn btn-bg2">
                    <p className="font-navmobile">ดาวน์โหลด</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/playgame" className="btn btn-bg1">
                    <p className="font-navmobile">เล่นเกมส์</p>
                  </Link>
                </li>

                <li className="nav-item nav-logo m-3">
                  <Link to="/" className="nav-link d-none d-sm-none d-md-block d-lg-block">
                    <img src="img/menu/logo-nav.png" alt="WATAFAK" width="150px" height="150px" />
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
                  <Link to="/playgame" className="btn btn-bg1">
                    <p className="font-navmobile">ฝาก-ถอน</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="https://lin.ee/bDb5ic7" target="_blank" rel="noopener" className="btn btn-bg2">
                    <p className="font-navmobile">ติดต่อเรา</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
