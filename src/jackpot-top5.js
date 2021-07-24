import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Firebase from "./utils/firebase"

const Jackpot = () => {
	const [jackpot5, setJackpot5] = useState()

	useEffect(() => {
		const jackpotRef = Firebase.database().ref("Jackpot").orderByChild("showdate").limitToLast(5)
		var count = 0
		jackpotRef.on("value", (snapshot) => {
			const data = snapshot.val()
			const jackpot5 = []
			for (let id in data) {
				count++
				
				jackpot5.push({ id, ...data[id] })
				if (count >= 5) {
					break
				}
			}
			setJackpot5(jackpot5)
		})
	}, [])

	return (
		<div className='container mt-2 text-center'>
			<h5 className='text-white'>ขอแสดงความยินดีกับลูกค้า Watafak88</h5>

			{jackpot5 ? (
				jackpot5
					.sort((a, b) => (a.showdate < b.showdate ? 1 : -1))
					.map((i) => (
						<div className='jackpot-card' key={i.id}>
							<div className='row col-12 pr-0 pl-0 middle'>
								<div className='col-5 text-center pr-0 pl-0'>
									<p className='mb-0'>{i.user_id}</p>
									<p className='mb-0 text-point'>
										{i.showdate} 
									</p>
								</div>
								<div className='col-4'>
									<p className='mb-0'>แจ้งถอน</p>
									<p className='mb-0 text-point'>
										{i.withdraw} <img src='img/coin.png' className='img-fluid' alt='watafak88 coin' />
									</p>
								</div>
								<div className='col-3 pr-1 pl-0'>
									<div className='full-page-loader'>
										<img className='w-50 img-fluid' src={"img/download/" + i.img + ".png"} alt='watafak88 game jackpot' imagesizes='50vw'></img>
									</div>
								</div>
							</div>
						</div>
					))
			) : (
				<p>"Loading.."</p>
			)}

			<Link to='/alljackpot'>
				<div className='container m-2 text-center'>
					<button className='btn btn-bg1'>ดูทั้งหมด &gt;&gt;</button>
				</div>
			</Link>
		</div>
	)
}

export default Jackpot
