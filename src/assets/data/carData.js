import img01 from "../all-images/cars-img/nissan-offer.png";
import img02 from "../all-images/cars-img/offer-toyota.png";
import img03 from "../all-images/cars-img/bmw-offer.png";
import img06 from "../all-images/cars-img/mercedes-offer.png";
import img07 from "../all-images/cars-img/toyota-offer-2.png";


const carData = [
  {
    id: 1,
    brand: "Nissan",
    rating: 5000,
    carName: "Nissan Sentra",
    imgUrl: img01,
    model: "Nissan Sentra 2023",
    price: 50,
    speed: "200km/h",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "Elevate your driving experience with the sleek and stylish 2023 Nissan Sentra. This compact sedan seamlessly blends modern design with cutting-edge technology, making it the perfect choice for urban adventures. Enjoy a smooth and efficient ride with advanced features like a responsive CVT transmission and impressive fuel efficiency. The spacious interior and intuitive infotainment system ensure comfort and connectivity on every journey. Rent the 2023 Nissan Sentra for a driving experience that combines elegance and performance, making your city exploration unforgettable.",
  },

  {
    id: 2,
    brand: "Toyota",
    rating: 100000,
    carName: "Toyota Camry",
    imgUrl: img02,
    model: "Toyota Camry 2023",
    price: 50,
    speed: "190km/h",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Embark on a journey of luxury and performance with the 2023 Toyota Camry. This sedan redefines driving excellence, seamlessly blending style, comfort, and cutting-edge technology. Glide through city streets with confidence, courtesy of the Camry's powerful yet efficient engine and precision engineering. The spacious and refined interior provides a first-class driving experience, while advanced safety features ensure peace of mind on every route. Elevate your travel with the 2023 Toyota Camry—where sophistication meets performance. Rent now for an unforgettable driving experience.",
  },

  {
    id: 3,
    brand: "BMW",
    rating: 132,
    carName: "BMW 6 Series",
    imgUrl: img03,
    model: "BMW 6 Series 2015",
    price: 80,
    speed: "300km/h",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Indulge in the epitome of luxury and performance with the 2015 BMW 6 Series. This iconic coupe seamlessly fuses cutting-edge technology with timeless design, creating an unforgettable driving experience. The robust engine delivers exhilarating power, while the meticulously crafted interior exudes opulence and comfort. With its sleek lines and dynamic features, the BMW 6 Series captivates attention on every road. Rent the 2015 BMW 6 Series for a journey where sophistication meets performance, and every drive becomes a celebration of automotive excellence.",
  },

  {
    id: 4,
    brand: "Nissan",
    rating: 5000,
    carName: "Nissan Sentra",
    imgUrl: img01,
    model: "Nissan Sentra 2023",
    price: 50,
    speed: "200km/h",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "Elevate your driving experience with the sleek and stylish 2023 Nissan Sentra. This compact sedan seamlessly blends modern design with cutting-edge technology, making it the perfect choice for urban adventures. Enjoy a smooth and efficient ride with advanced features like a responsive CVT transmission and impressive fuel efficiency. The spacious interior and intuitive infotainment system ensure comfort and connectivity on every journey. Rent the 2023 Nissan Sentra for a driving experience that combines elegance and performance, making your city exploration unforgettable.",
  },

  {
    id: 5,
    brand: "Toyota",
    rating: 100000,
    carName: "Toyota Camry",
    imgUrl: img02,
    model: "Toyota Camry 2023",
    price: 50,
    speed: "190km/h",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Embark on a journey of luxury and performance with the 2023 Toyota Camry. This sedan redefines driving excellence, seamlessly blending style, comfort, and cutting-edge technology. Glide through city streets with confidence, courtesy of the Camry's powerful yet efficient engine and precision engineering. The spacious and refined interior provides a first-class driving experience, while advanced safety features ensure peace of mind on every route. Elevate your travel with the 2023 Toyota Camry—where sophistication meets performance. Rent now for an unforgettable driving experience.",
  },

  {
    id: 6,
    brand: "Mercedes-Benz",
    rating: 119,
    carName: "Mercedes-Benz C63 AMG",
    imgUrl: img06,
    model: "C63 AMG 2012",
    price: 100,
    speed: "350km/h",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Experience the pinnacle of automotive excellence with the Mercedes-Benz C63 AMG. This high-performance sedan seamlessly marries luxury and power, making every drive an exhilarating adventure. The handcrafted AMG engine roars to life, delivering a symphony of power and precision. Immerse yourself in the opulent interior, where cutting-edge technology meets refined craftsmanship. From its sleek exterior design to its thrilling acceleration, the Mercedes-Benz C63 AMG is a statement of uncompromising style and performance. Elevate your driving experience—rent the Mercedes-Benz C63 AMG for a journey where sophistication meets adrenaline.",
  },

  {
    id: 7,
    brand: "Toyota",
    rating: 100000,
    carName: "Toyota Camry",
    imgUrl: img07,
    model: "Toyota Camry 2023",
    price: 50,
    speed: "190km/h",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Embark on a journey of luxury and performance with the 2023 Toyota Camry. This sedan redefines driving excellence, seamlessly blending style, comfort, and cutting-edge technology. Glide through city streets with confidence, courtesy of the Camry's powerful yet efficient engine and precision engineering. The spacious and refined interior provides a first-class driving experience, while advanced safety features ensure peace of mind on every route. Elevate your travel with the 2023 Toyota Camry—where sophistication meets performance. Rent now for an unforgettable driving experience.",
  },

  {
    id: 8,
    brand: "Mercedes-Benz",
    rating: 119,
    carName: "Mercedes-Benz C63 AMG",
    imgUrl: img06,
    model: "C63 AMG 2012",
    price: 100,
    speed: "350km/h",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Experience the pinnacle of automotive excellence with the Mercedes-Benz C63 AMG. This high-performance sedan seamlessly marries luxury and power, making every drive an exhilarating adventure. The handcrafted AMG engine roars to life, delivering a symphony of power and precision. Immerse yourself in the opulent interior, where cutting-edge technology meets refined craftsmanship. From its sleek exterior design to its thrilling acceleration, the Mercedes-Benz C63 AMG is a statement of uncompromising style and performance. Elevate your driving experience—rent the Mercedes-Benz C63 AMG for a journey where sophistication meets adrenaline.",
  },
];

export default carData;
