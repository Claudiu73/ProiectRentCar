import React, { useEffect , useState} from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup, Button } from "reactstrap";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function dateDifference(date1, date2) {
  // Convert the date strings to Date objects
  const d1 = new Date(date1);
  const d2 = new Date(date2);

  // Calculate the difference in milliseconds
  const differenceInMilliseconds = Math.abs(d2 - d1);

  // Convert milliseconds to days (1 day = 24 * 60 * 60 * 1000 milliseconds)
  const differenceInDays = differenceInMilliseconds / (24 * 60 * 60 * 1000);

  return differenceInDays;
}

const BookingForm = ({carId}) => {
  carId = parseInt(carId, 10);
  const [rentalDetails, setRentalDetails] = useState({
    idCar: carId,
    userName: '',
    userEmail: '',
    userPhone: '',
    startDate: '',
    endDate: '',
    luggage: 0,
    status: 'active', // Default status, adjust as necessary
    comment: ''
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === 'luggage') { // Assuming 'luggage' should be an integer
      formattedValue = parseInt(value, 10);
    }

    setRentalDetails({ ...rentalDetails, [name]: formattedValue });
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    dateDifference(rentalDetails.startDate, rentalDetails.endDate)

    const submissionData = {
      ...rentalDetails,
      luggage: parseInt(rentalDetails.luggage, 10)
    };
    try {
      await axios.post('http://localhost:5000/rentals', submissionData);
      navigate('/'); // Redirect to home
    } catch (error) {
      console.log(rentalDetails)
      console.error('Error creating rental:', error);
      alert('Failed to create rental');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" name="userName" placeholder="Name" value={rentalDetails.userName} onChange={handleInputChange}/>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="email" name="userEmail" placeholder="Email" value={rentalDetails.userEmail} onChange={handleInputChange}/>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" name="userPhone" placeholder="Phone Number" value={rentalDetails.userPhone} onChange={handleInputChange}/>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <select name="" id="">
          <option value="1 person">1 Person</option>
          <option value="2 person">2 Person</option>
          <option value="3 person">3 Person</option>
          <option value="4 person">4 Person</option>
          <option value="5+ person">5+ Person</option>
        </select>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <select name="luggage" id="" value={rentalDetails.luggage} onChange={handleInputChange}>
          <option value="1">1 luggage</option>
          <option value="2">2 luggage</option>
          <option value="3">3 luggage</option>
          <option value="4">4 luggage</option>
          <option value="5">5+ luggage</option>
        </select>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="date" name="startDate" placeholder="Start Date" value={rentalDetails.startDate} onChange={handleInputChange}/>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="date" name="endDate" placeholder="End Date" value={rentalDetails.endDate} onChange={handleInputChange}/>
      </FormGroup>

      <FormGroup>
        <textarea
          rows={5}
          name="comment"
          type="textarea"
          className="textarea"
          placeholder="Write"
          value={rentalDetails.comment} 
          onChange={handleInputChange}
        ></textarea>
      </FormGroup>

      <Button className="w-50" type="submit" variant="primary">Submit</Button>
    </Form>
  );
};

export default BookingForm;
