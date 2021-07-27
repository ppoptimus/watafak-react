import React from "react"
import { useForm } from "react-hook-form"
import Firebase from "./utils/firebase"

export default function JackpotManualHook() {
	const { register, handleSubmit } = useForm()
	const onSubmit = (data) => {
		if (data.user_id === "" || data.showdate === "" || data.withdraw === "") {
			alert('ใส่ข้อมูลให้ครบ')
		} else {
            let formatter = new Intl.NumberFormat("th-TH", {
				style: "currency",
				currency: "THB",
			})

            const jackpotRef = Firebase.ref("Jackpot")
			const list = {
				user_id: data.user_id,
				showdate: data.showdate,
				withdraw: formatter.format(data.withdraw),
				img: "logo-pg-slot",
			}
			jackpotRef.push(list)

		}
	}

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='form-group'>
					<input {...register("user_id")} className='form-control' maxLength='13' placeholder='user id' />
				</div>
				<div className='form-group'>
					<input {...register("showdate")} type="text" className='form-control' placeholder='วันที่ถอน รูปแบบ YYYY-MM-DD' />
				</div>
				{/* <div className='form-group'>
					<input {...register("time")} className='form-control' placeholder='เวลา รูปแบบ hh.mm' />
				</div> */}
				<div className='form-group'>
					<input {...register("withdraw")} className='form-control' placeholder='จำนวนเงิน' />
				</div>
				<input type='submit' className='btn btn-primary' name="บันทึก" />
			</form>
		</div>
	)
}
