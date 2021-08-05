import { Link } from "react-router-dom"

export default function Footer_desktop() {
	return (
		<div>
			<footer id='footerdesktop' className=' d-none d-sm-none d-md-none d-lg-block mb-6' style={{ marginTop: "5rem" }}>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12 col-lg-4'>
							<div className='dk-footer-box-info mt-5'>
								<a href='index.html' className='footer-logo'>
									<img src='img/footer1.png' alt='footer_logo' className='img-fluid' />
								</a>
								<p className='footer-info-text'>
									เว็บสล็อตออนไลน์ (Slot online) คาสิโนออนไลน์ (casino online) เกมส์ยิงปลา ที่ดีที่สุด ฟรีเครดิต เครดิตฟรี
									มีเกมส์ให้เลือกเล่นมากมายหลายเกมส์ มีพนักงานคอยดูแลลูกค้าตลอด 24 ชั่วโมง มีระบบฝาก-ถอนออโต้ที่ดีที่สุดในประเทศไทย สะดวก รวดเร็ว
									สมัครเล่นได้แล้ววันนี้ที่เว็บ WATAFAK888 บริการดี โปรโมชั่นจัดเต็ม ต้องมาที่ WATAFAK888
								</p>
							</div>
						</div>

						<div className='col-md-12 col-lg-8'>
							<div className='row'>
								<div className='col-md-6 mt-4'>
									<div className='contact-us'>
										<div className='contact-icon'>
											<i className='fa fa-map-o' />
										</div>

										<div className='contact-info'>
											<h3>Bangkok Thailand</h3>
											<p>________________</p>
										</div>
									</div>
								</div>

								<div className='col-md-6'>
									<img src='img/download/logo-pg-slot.png' alt="pgslot" className='img-fluid m-3 w-75'></img>
								</div>
							</div>

							<div className='row'>
								<div className='col-md-12 col-lg-6'>
									<div className='footer-widget footer-left-widget'>
										<div className='section-heading'>
											<h3>Useful Links</h3>
											<span className='animate-border border-black' />
										</div>
										<ul>
											<li>
												<Link to='/article'>บทความ</Link>
											</li>
											<li>
												<Link to='/playgame'>บริการเกมส์</Link>
											</li>
											<li>
												<Link to='/promotion'>โปรโมชั่น</Link>
											</li>
											<li>
												<a href='https://lin.ee/bDb5ic7' target='blank' rel='noopener'>
													ติดต่อเรา
												</a>
											</li>
										</ul>
									</div>
								</div>

								<div className='col-md-12 col-lg-6'>
									<div className='footer-widget'>
										<div className='section-heading'>
											<h3>Subscribe</h3>
											<span className='animate-border border-black' />
										</div>
										<p>ติดตามเรา Watafak88 ได้ที่ Line @watafak88 เพื่อรับสิทธิพิเศษและอัพเดตข่าวสารจากเรา</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='copyright'>
					<div className='container'>
						<div className='row'>
							<div id='announcement' className='container-fiuld'>
								{/* <b>
									<marquee className='marquee1'>
										<i className='fa fa-trophy'></i>
										<b> PG SLOT</b> <b>watafak88</b>เปิดให้บริการแล้ววันนี้ สมาชิกใหม่รับโบนัสสูงสุด 50% โปรเยอะทุกวัน ทุกช่วงเวลา&nbsp; &nbsp;
										<i className='fa fa-trophy'></i>
										มีเกมคาสิโน สล็อต ยิงปลา หลากหลายค่าย PG&nbsp; &nbsp;
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
								</b> */}
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	)
}
