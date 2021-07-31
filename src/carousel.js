import {useMemo} from "react";
import { useHistory } from "react-router-dom";

import Carouseldemo from "./carouseldemo1";


const Carrousel_main = () => {
  let history = useHistory();

  const allPromotion = () => {
    history.push("/promotion");
  };

  const img0 = useMemo(() => {
    return (
      <div className="img-fluid rounded">
        <Carouseldemo/>
      </div>
    );
  });

  const img1 = useMemo(() => {
    return (
      <img
        onClick={allPromotion}
        // rel='preload'
        as="image"
        src="img/promotion/pgslot_1-500.jpg"
        className="img-fluid rounded"
        alt="pgslot"
        imagesizes="50vw"
        width="500px"
        height="500px"
        title="promotion pg slot"
      ></img>
    );
  });

  const img2 = useMemo(() => {
    return (
      <img
        onClick={allPromotion}
        rel="preload"
        as="image"
        src="img/promotion/pgslot_5-500.jpg"
        className="img-fluid rounded"
        alt="pgslot"
        imagesizes="50vw"
        width="500px"
        height="500px"
        title="promotion pg slot"
      ></img>
    );
  });

  const img3 = useMemo(() => {
    return (
      <img
        onClick={allPromotion}
        rel="preload"
        as="image"
        src="img/promotion/pgslot_3-500.jpg"
        className="img-fluid rounded"
        alt="pgslot"
        imagesizes="50vw"
        width="500px"
        height="500px"
        title="promotion pg slot"
      ></img>
    );
  });

  return (
    <div className="container justify-content-center">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to={0}
            className="active"
          />
          <li data-target="#carouselExampleIndicators" data-slide-to={1} />
          <li data-target="#carouselExampleIndicators" data-slide-to={2} />
          <li data-target="#carouselExampleIndicators" data-slide-to={3} />
        </ol>
        <div className="carousel-inner text-center">
          <div className="carousel-item active">{img0}</div>
          <div className="carousel-item">{img1}</div>
          <div className="carousel-item">{img2}</div>
          <div className="carousel-item">{img3}</div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Carrousel_main;
