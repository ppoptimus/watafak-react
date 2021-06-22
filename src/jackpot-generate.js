import React, { useState } from "react"
import ShowJackpotAll from "./jackpot-all"
import Firebase from "./utils/firebase"
import JackpotManualHook from "./jackpot-manual-hook"
//import JackpotManual from "./jackpot-manual"


export default function GenerateJackpot() {
	let [count, setCount] = useState("")
	count = count > 100 ? 100 : count

	const handleOnCountChange = (e) => {
		setCount(e.target.value)
	}

	const generate = () => {
		for (let i = 0; i < count; i++) {
			//#region defind data --------------------------
			//---user_id
			let arr = ["06", "08", "09"]
			let random = Math.floor(Math.random() * arr.length)
			let user_id = "WAT" + arr[random] + Math.floor(1000 + Math.random() * 9000) + "XXXX"

			//--date
			let today = new Date() //
			let lastday = today.setDate(today.getDate() - 1)
			let showdate = new Intl.DateTimeFormat("en-GB").format(lastday)

			//--time
			let hh = Math.floor(Math.random() * 24)
			let mm = Math.floor(Math.random() * 60)
			hh = ("0" + hh).slice(-2)
			mm = ("0" + mm).slice(-2)
			let time = hh + "." + mm

			//--withdraw
			let formatter = new Intl.NumberFormat("th-TH", {
				style: "currency",
				currency: "THB",
			})
			let withdraw = formatter.format((Math.floor(Math.random() * 2100) + 1) * 10)

			//--game img
			let img = "logo-pg-slot"
			//#endregion defind data ----------------------------

			const jackpotRef = Firebase.database().ref("Jackpot")
			const list = {
				i,
				user_id,
				showdate,
				time,
				withdraw,
				img,
			}
			jackpotRef.push(list)
		}
	}

	const deleteAll = () => {
		const jackpotList = Firebase.database().ref("Jackpot")
		jackpotList.remove()
	}
	//----------------------------------------------------------------------------------------------------------------//
	return (
		<div className='container mt-5 mb-6 '>
			<div className='row d-flex align-content-center'>
				<div className='m-3'>
					<div>ระบุจำนวนผู้ถอน</div>
					<input type='number' className='form-control w-50 m-1' onChange={handleOnCountChange} value={count} />
					<button type='submit' className='btn btn-success m-1' onClick={generate}>
						เพิ่ม
					</button>
					<button type='delete' className='btn btn-danger m-1' onClick={deleteAll}>
						เคลียร์ทั้งหมด
					</button>

					<button
						className='btn btn-secondary m-1'
						type='button'
						data-toggle='collapse'
						data-target='#defind'
						aria-expanded='false'
						aria-controls='defind'>
						กำหนดเอง
					</button>

					<div className='collapse mt-2' id='defind'>
						<JackpotManualHook/>
					</div>
				</div>
			</div>

			<ShowJackpotAll />
		</div>
	)
}
