import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import carData from "../assets/data/carData";
import axios from 'axios';



const CarListing = () => {
  const [cars, setCars] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:5000/cars') // Replace with your backend server URL
      .then(response => {
        setCars(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  return (
    <Helmet title="Cars">
      <CommonSection title="Car Listing" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <span className=" d-flex align-items-center gap-2">
                  <i class="ri-sort-asc"></i> Sort By
                </span>

                <select>
                  <option>Select</option>
                  <option value="low">Low to High</option>
                  <option value="high">High to Low</option>
                </select>
              </div>
            </Col>

            {cars.map(car => (
              <CarItem item={car} key={car.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
