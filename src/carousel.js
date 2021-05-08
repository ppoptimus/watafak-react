import React from 'react';
import { useHistory } from "react-router-dom";

const Carrousel_main = () => {
  let history = useHistory();

  const allPromotion = () => {
    history.push("/promotion");
  }
    return (
      <div className="container justify-content-center">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to={0}
              className="active"
            />
            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
          </ol>
          <div className="carousel-inner text-center">
            <div className="carousel-item active">
              <img
                onClick={allPromotion}
                rel="preload"
                as="image"
                src="img/promotion/1-500.jpg"
                className="img-fluid rounded"
                alt="ว๊อดเดอะฟัค โปรโมชั่น"
                imagesizes="50vw"
                width="500px"
                height="500px"
              ></img>
            </div>
            <div className="carousel-item">
              <img
                onClick={allPromotion}
                rel="preload"
                as="image"
                src="img/promotion/2-500.jpg"
                className="img-fluid rounded"
                alt="ว๊อดเดอะฟัค โปรโมชั่น"
                imagesizes="50vw"
                width="500px"
                height="500px"
              ></img>
            </div>
            <div className="carousel-item">
              <img
                onClick={allPromotion}
                rel="preload"
                as="image"
                src="img/promotion/3-500.jpg"
                className="img-fluid rounded"
                alt="ว๊อดเดอะฟัค โปรโมชั่น"
                imagesizes="50vw"
                width="500px"
                height="500px"
              ></img>
            </div>
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
}

export default Carrousel_main