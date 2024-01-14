import React, { useEffect , useState} from "react";

import carData from "../assets/data/carData";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom";
import BookingForm from "../components/UI/BookingForm";
import PaymentMethod from "../components/UI/PaymentMethod";
import axios from "axios";

const CarDetails = () => {
  const [car, setCar] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/cars/${id}`)
      .then(response => setCar(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);


  // Asigură-te că useEffect este apelat înainte de orice return condiționat
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [car]);

  // Verifică dacă singleCarItem este definit înainte de a încerca să accesezi proprietăți
  if (!car) {
    return <div>Car not found</div>;
  }

  return (
    <Helmet title={car.name}>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={car.imageUrl} alt="" className="w-100" />
            </Col>

            <Col lg="6">
              <div className="car__info">
                <h2 className="section__title">{car.name}</h2>

                <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
                  <h6 className="rent__price fw-bold fs-4">
                    €{car.price}.00 / Day
                  </h6>

                  <span className=" d-flex align-items-center gap-2">
                    <span style={{ color: "#000d6b" }}>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    (100 ratings)
                  </span>
                </div>

                <p className="section__description">
                  {car.description}
                </p>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "4rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-roadster-line"
                      style={{ color: "#000d6b" }}
                    ></i>{" "}
                    {car.make}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-settings-2-line"
                      style={{ color: "#000d6b" }}
                    ></i>{" "}
                    {car.gearBox}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-timer-flash-line"
                      style={{ color: "#000d6b" }}
                    ></i>{" "}
                    {car.year}
                  </span>
                </div>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "2.8rem" }}
                >
                  {/* <span className=" d-flex align-items-center gap-1 section__description">
                    <i class="ri-map-pin-line" style={{ color: "#000d6b" }}></i>{" "}
                    {singleCarItem.gps}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-wheelchair-line"
                      style={{ color: "#000d6b" }}
                    ></i>{" "}
                    {singleCarItem.seatType}
                  </span> */}


                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-building-2-line"
                      style={{ color: "#000d6b" }}
                    ></i>{" "}
                    {car.make}
                  </span>
                </div>
              </div>
            </Col>

            <Col lg="7" className="mt-5">
              <div className="booking-info mt-5">
                <h5 className="mb-4 fw-bold ">Booking Information</h5>
                <BookingForm carId={id}/>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarDetails;