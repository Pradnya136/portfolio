import React from "react";
import "./PartOne.css";

function PartOne(props) {
  return (
    <>
      <div className="partoneDiv">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src="https://picsum.photos/id/21/1000/400"
                alt="First slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="https://picsum.photos/id/35/1000/400"
                alt="Second slide"
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>this i h5 in carousel</h5>
                <p>this is para in carousel</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="https://picsum.photos/id/50/1000/400"
                alt="Third slide"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="https://picsum.photos/id/50/1000/400"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="https://picsum.photos/id/35/1000/400"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default PartOne;
