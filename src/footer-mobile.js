import React from 'react'
import { Link } from "react-router-dom";

export default function Footer_Mobile() {
    return (
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
            <Link to="/promotion">
              <i className="fa fa-gift fa-navmobile" />
              <p className="font-navmobile">โปรโมชั่น</p>
            </Link>
          </li>
          <li>
            <a href="https://lin.ee/YHAOzAO" target="blank">
              <i className="fa fa-money fa-navmobile" />
              <p className="font-navmobile">เครดิตฟรี</p>
            </a>
          </li>
        </ul>
      </div>
    );
}
