import React, { useState, useEffect } from "react";
import firebase from "./utils/firebase";

function AllJackpot() {
  const [jackpotList, setJackpotList] = useState();

  useEffect(() => {
    const jackpotRef = firebase.database().ref("Jackpot");
    jackpotRef.on("value", (snapshot) => {
      const data = snapshot.val();
      const jackpotList = [];
      for (let id in data) {
        jackpotList.push({ id, ...data[id] });
      }
      setJackpotList(jackpotList);

      console.log(jackpotList);
    });
  }, []);

  //-----html------//
  return (
    <div className="container mb-5">
      {jackpotList
        ? jackpotList.map((i) => (
            <div className="jackpot-card" key={i.id}>
              <div className="row col-12 pr-0 pl-0 middle">
                <div className="col-5 text-center pr-0 pl-0">
                  <p className="mb-0">{i.user_id}XXXX</p>
                  <p className="mb-0 text-point">
                    {i.showdate} {i.time}
                  </p>
                </div>
                <div className="col-4">
                  <p className="mb-0">แจ้งถอน</p>
                  <p className="mb-0 text-point">
                    {i.withdraw}{" "}
                    <img
                      src="img/coin.png"
                      className="img-fluid"
                      alt="watafak88 coin"
                    />
                  </p>
                </div>
                <div className="col-3 pr-1 pl-0">
                  {/* <img
                    src={i.img}
                    className="img-fluid float-right"
                    alt="watafak88 game jackpot"

                  ></img> */}
                  <div className="full-page-loader">
                    <img className="w-75" src={'img/jackpot/'+ i.img + '.png'} alt="watafak88 game jackpot" imagesizes="50vw"></img>
                  </div>
                </div>
              </div>
            </div>
          ))
        : "No data"}
    </div>
  );
}

export default AllJackpot;
