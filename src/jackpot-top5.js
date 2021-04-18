import React from 'react'
import { Link } from 'react-router-dom'

const jackpot = () => {
  const data = require('./data/jackpot-top5.json');

  return (
    <div className="container">
      <h3 className="text-white">ขอแสดงความยินดีกับลูกค้า Watafak88</h3>

      {data.map(i => (
        <div className="jackpot-card" key={i.id} >
          <div className="row col-12 pr-0 pl-0 middle">
            <div className="col-5 text-center pr-0 pl-0">
              <p className="mb-0">{i.user_id}XXXX</p>
              <p className="mb-0 text-point">{i.deposit_date} {i.deposit_time}</p>
            </div>
            <div className="col-4">
              <p className="mb-0">แจ้งถอน</p>
              <p className="mb-0 text-point">{i.deposit_amount}{" "}
                <img
                  src="img/coin.png"
                  className="img-fluid"
                  alt="watafak88 coin"
                />
              </p>
            </div>
            <div className="col-3 pr-1 pl-0">
              <img
                src={i.deposit_game}
                className="img-fluid float-right"
                alt="watafak88 game jackpot"
              ></img>
            </div>
          </div>

        </div>
      ))}

      <Link to="/alljackpot">
        <div className="container m-2 text-center">
          <button className="btn btn-bg1">
            ดูทั้งหมด &gt;&gt;
            </button>
        </div>
      </Link>

      

    </div>
  )
}

export default jackpot;