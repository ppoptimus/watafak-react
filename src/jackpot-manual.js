import React, { useState } from "react"

export default function JackpotManual() {
	let [userId, setUserId] = useState("")
	let [date, setDate] = useState("")
	//let [time, setTime] = useState("")
	let [withdraw, setWithdraw] = useState("")

	
	const setuser = (e) => {
		setUserId(e.target.value)
	}
	const setdate = (e) => {
		setDate(e.target.value)
	}
	// const settime = (e) => {
	// 	setTime(e.target.value)
	// }
	const setwithdraw = (e) => {
		setWithdraw(e.target.value)
	}

	return (
		<div>
			<form>
				<div className='form-group'>
					<input type='text' className='form-control' placeholder='user id' onChange={setuser} value={userId} />
				</div>
				<div className='form-group'>
					<input type='text' className='form-control' placeholder='วันที่ถอน' onChange={setdate} value={date} />
				</div>
				{/* <div className='form-group'>
					<input type='text' className='form-control' placeholder='เวลา' onChange={settime} value={time} />
				</div> */}
				<div className='form-group'>
					<input type='text' className='form-control' placeholder='จำนวนเงิน' onChange={setwithdraw} value={withdraw} />
				</div>
				<button type='submit' className='btn btn-primary'>
					Submit
				</button>
			</form>
		</div>
	)
}
