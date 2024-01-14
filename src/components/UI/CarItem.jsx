import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/car-item.css";

const CarItem = (props) => {

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car__item">
        <div className="car__img">
          <img src={props.item.imageUrl} alt="" className="w-100" />
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{props.item.name + " " +props.item.year}</h4>
          <h6 className="rent__price text-center mt-">
            €{props.item.price}.00 <span>/ Day</span>
          </h6>

          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-car-line"></i> {props.item.name}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-settings-2-line"></i> {props.item.gearBox}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-timer-flash-line"></i> {props.item.year}
            </span>
          </div>

          <button className=" w-50 car__item-btn car__btn-rent">
            <Link to={`/cars/${props.item.idCar}`}>Rent</Link>
          </button>

          <button className=" w-50 car__item-btn car__btn-details">
            <Link to={`/cars/${props.item.idCar}`}>Details</Link>
          </button>
        </div>
      </div>
    </Col>
  );
};

export default CarItem;