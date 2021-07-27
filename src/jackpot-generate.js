import React, { useState } from "react"
import ShowJackpotAll from "./jackpot-all"
import Firebase from "./utils/firebase"
import JackpotManualHook from "./jackpot-manual-hook"


export default function GenerateJackpot() {
	let [count, setCount] = useState("")
	count = count > 100 ? 100 : count

	const handleOnCountChange = (e) => {
		setCount(e.target.value)
	}

	const test = () => {
		function getRandomBetween(min, max) {
			return Math.floor(Math.random() * (max - min) + min) * 10;
		  }
		  console.log(getRandomBetween(10,1700));
	}

	const generate = () => {
		for (let i = 0; i < count; i++) {
			//#region defind data --------------------------
			//---user_id
			let arr = ["06", "08", "09"]
			let random = Math.floor(Math.random() * arr.length)
			let user_id = "WAT" + arr[random] + Math.floor(1000 + Math.random() * 9000) + "XXXX"

			//--date
			let showdate = new Date().toISOString().slice(0, 10);
			//let lastday = today.setDate(today.getDate() - 1)
			//let showdate = new Intl.DateTimeFormat("en-GB").format(today)

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
			let withdraw = formatter.format((Math.floor(Math.random() * 1700) + 1) * 10)

			//--game img
			let img = "logo-pg-slot"
			//#endregion defind data ----------------------------

			const jackpotRef = Firebase.ref("Jackpot")
			const list = {
				i,
				user_id,
				showdate,
				withdraw,
				img,
			}
			jackpotRef.push(list)
		}
	}

	const deleteAll = () => {
		const jackpotList = Firebase.ref("Jackpot")
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
