import React from "react"
import { Link } from "react-router-dom"

export default function Footer_Mobile() {
	return (
		<div>
			<div className='container d-sm-block d-md-block d-lg-none d-xl-none' style = {{ marginBottom: "5rem"}} >
				<div className='row'>
					<div className='col-md-12 col-lg-4'>
						<a href='index.html' className='footer-logo'>
							<img src='img/footer2.png' alt='footer_logo' className='img-fluid' />
						</a>
						<p className='footer-info-text'>
							เว็บสล็อตออนไลน์ (Slot online) คาสิโนออนไลน์ (casino online) เกมส์ยิงปลา ที่ดีที่สุด ฟรีเครดิต เครดิตฟรี
							มีเกมส์ให้เลือกเล่นมากมายหลายเกมส์ มีพนักงานคอยดูแลลูกค้าตลอด 24 ชั่วโมง มีระบบฝาก-ถอนออโต้ที่ดีที่สุดในประเทศไทย สะดวก รวดเร็ว
							สมัครเล่นได้แล้ววันนี้ที่เว็บ WATAFAK888 บริการดี โปรโมชั่นจัดเต็ม ต้องมาที่ WATAFAK888
						</p>
					</div>
				</div>
				<div className='row'>
					<h6>
						<marquee className='marquee1'>
							<i className='fa fa-trophy'></i>
							เปิดให้บริการแล้ววันนี้ สมาชิกใหม่รับโบนัสสูงสุด 50% โปรเยอะทุกวัน ทุกช่วงเวลา&nbsp; &nbsp;
							<i className='fa fa-trophy'></i>
							มีเกมคาสิโน สล็อต ยิงปลา หลากหลายค่าย&nbsp; &nbsp;
							<i className='fa fa-trophy'></i>
							สมาชิกใหม่รับโบนัสสูงสุด 50%&nbsp; &nbsp;
							<i className='fa fa-trophy'></i>
							พนักงานคอยบริการลูกค้าตลอด 24 ชั่วโมง&nbsp; &nbsp;
							<i className='fa fa-trophy'></i>
							ระบบฝากถอน อัตโนมัติดีที่สุดในประเทศไทย&nbsp; &nbsp;
							<i className='fa fa-trophy'></i>
							สมาชิกใหม่รับโบนัสสูงสุด 50%&nbsp; &nbsp;
							<i className='fa fa-trophy'></i>
							โปรโมชั่นมากมาย และมีแจกเครดิตฟรี
						</marquee>
					</h6>
				</div>
			</div>
			<div className='d-block d-sm-block d-md-block d-lg-none d-xl-none menu-mobile fixed-bottom'>
				<ul className='bg-navmobile2 row'>
					<li>
						<Link to='/register'>
							<i className='fa fa-user-plus fa-navmobile' />
							<p className='font-navmobile'>สมัครเลย</p>
						</Link>
					</li>
					<li>
						<Link to='/playgame'>
							<i className='fa fa-gamepad fa-navmobile' />
							<p className='font-navmobile'>เล่นเกมส์</p>
						</Link>
					</li>
					<li>
						<Link to='/download'>
							<i className='fa fa-download fa-navmobile' />
							<p className='font-navmobile'>ดาวน์โหลด</p>
						</Link>
					</li>
					<li>
						<Link to='/promotion'>
							<i className='fa fa-gift fa-navmobile' />
							<p className='font-navmobile'>โปรโมชั่น</p>
						</Link>
					</li>
					<li>
						<a href='https://lin.ee/bDb5ic7' target='blank' rel="noopener">
							<i className='fa fa-address-card fa-navmobile' />
							<p className='font-navmobile'>ติดต่อเรา</p>
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}
