import React, { useState, useEffect } from "react";
import Firebase from "./utils/firebase";
import Pagination from "react-responsive-pagination";

function AllJackpot() {
  const [jackpotList, setJackpotList] = useState("");

  //#region ----------------- set jackpot into Array ----------------//
  useEffect(() => {
    const jackpotRef = Firebase.database().ref("Jackpot");

    jackpotRef.on("value", (snapshot) => {
      const data = snapshot.val();
      const jackpotList = [];
      for (let id in data) {
        jackpotList.push({ id, ...data[id] });
      }
      jackpotList.sort((a, b) => (a.showdate < b.showdate ? 1 : -1));

      setJackpotList(jackpotList);
    });
  }, []);
  //#endregion --------------------------------------------------------

  const usersPerPage = 10;
  const totalPages = Math.ceil(jackpotList.length / usersPerPage);
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div className="container mb-6 mt-5">
      {jackpotList
        ? jackpotList
            .slice(currentPage * usersPerPage, (currentPage * usersPerPage) + usersPerPage)
            .map((i) => (
              <div className="jackpot-card" key={i.id}>
                <div className="row col-12 pr-0 pl-0 middle">
                  <div className="col-5 text-center pr-0 pl-0">
                    <p className="mb-0">{i.user_id}</p>
                    <p className="mb-0 text-point">{i.showdate}</p>
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
                    <div className="full-page-loader">
                      <img
                        className="img-fluid w-50"
                        src={"img/download/" + i.img + ".png"}
                        alt="watafak88 game jackpot"
                        imagesizes="50vw"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            ))
        : "Loading.."}

      <div className="container mt-4 text-center" style={{fontSize:'large'}}>
      <Pagination
        current={currentPage}
        total={totalPages - 1}
        onPageChange={setCurrentPage}
      />
      </div>
    </div>
  );
}

export default AllJackpot;
