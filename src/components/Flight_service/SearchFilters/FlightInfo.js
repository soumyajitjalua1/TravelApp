import React from 'react';
import './FlightInfo.css';
import FlightCard from './FlightCard';

const flightData = [
  {
    airline: 'IndiGo',
    flightNumber: '6E 2716',
    departureTime: '01:45',
    departureCity: 'New Delhi',
    duration: '02h 15m',
    stops: 'Non-stop',
    arrivalTime: '04:00',
    arrivalCity: 'Mumbai',
    price: '₹3,598',
    imageUrl: 'https://play-lh.googleusercontent.com/zG1e9Pdw27RYpUo_TpSZcD-zjCeShkN5pxwgy7L-e9hra170T_SpBzcUc5nsBu3gWQ'
  },
  {
    airline: 'Air India',
    flightNumber: 'AI 302',
    departureTime: '05:30',
    departureCity: 'Mumbai',
    duration: '01h 45m',
    stops: 'Non-stop',
    arrivalTime: '07:15',
    arrivalCity: 'Bangalore',
    price: '₹4,200',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh1Kr8laTGlDVTddeP0N9wHw8iAbgoDo_bSg&s'
  },
  // Add more flight objects here
  {
    airline: 'Vistara',
    flightNumber: 'UK 819',
    departureTime: '09:00',
    departureCity: 'Chennai',
    duration: '02h 30m',
    stops: '1 Stop',
    arrivalTime: '11:30',
    arrivalCity: 'Kolkata',
    price: '₹5,300',
    imageUrl: 'https://logos-world.net/wp-content/uploads/2023/06/Vistara-Logo.jpg'
  },
  {
    airline: 'Air India',
    flightNumber: 'AI 202',
    departureTime: '06:30',
    departureCity: 'Mumbai',
    duration: '2h 30m',
    stops: 'Non-stop',
    arrivalTime: '09:00',
    arrivalCity: 'Delhi',
    price: '₹4,500',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh1Kr8laTGlDVTddeP0N9wHw8iAbgoDo_bSg&s'
  },
  {
    airline: 'SpiceJet',
    flightNumber: 'SG 512',
    departureTime: '08:15',
    departureCity: 'Bengaluru',
    duration: '3h 05m',
    stops: 'Non-stop',
    arrivalTime: '11:20',
    arrivalCity: 'Kolkata',
    price: '₹3,200',
    imageUrl: 'https://logos-world.net/wp-content/uploads/2023/01/SpiceJet-Logo.jpg'
  },
  {
    airline: 'Vistara',
    flightNumber: 'UK 987',
    departureTime: '12:00',
    departureCity: 'Chennai',
    duration: '2h 45m',
    stops: 'Non-stop',
    arrivalTime: '14:45',
    arrivalCity: 'Hyderabad',
    price: '₹4,800',
    imageUrl: 'https://logos-world.net/wp-content/uploads/2023/06/Vistara-Logo.jpg'
  },
  {
    airline: 'GoAir',
    flightNumber: 'G8 320',
    departureTime: '14:50',
    departureCity: 'Pune',
    duration: '1h 55m',
    stops: 'Non-stop',
    arrivalTime: '16:45',
    arrivalCity: 'Goa',
    price: '₹2,900',
    imageUrl: 'https://mir-s3-cdn-cf.behance.net/projects/404/79baea121704737.Y3JvcCw5MTIsNzEzLDgzLDE4Mg.png'
  },
  {
    airline: 'AirAsia',
    flightNumber: 'I5 458',
    departureTime: '17:30',
    departureCity: 'Jaipur',
    duration: '1h 30m',
    stops: 'Non-stop',
    arrivalTime: '19:00',
    arrivalCity: 'Udaipur',
    price: '₹2,700',
    imageUrl: 'https://e7.pngegg.com/pngimages/747/165/png-clipart-air-asia-logo-flight-airasia-logo-airline-ticket-asia-text-passenger.png'
  },
  {
    airline: 'Emirates',
    flightNumber: 'EK 511',
    departureTime: '22:15',
    departureCity: 'Delhi',
    duration: '3h 45m',
    stops: 'Non-stop',
    arrivalTime: '02:00 (+1 day)',
    arrivalCity: 'Dubai',
    price: '₹18,000',
    imageUrl: 'https://cdn.worldvectorlogo.com/logos/emirates-airlines-1.svg'
  },
  // Add other flight data objects here, up to 10 flights.
];

const FlightInfo = () => {
  return (
    <div className="plan-travel">
      <h2>Available Flights</h2>
      <div className="flight-cards-container">
        {flightData.map((flight, index) => (
          <FlightCard
            key={index}
            airline={flight.airline}
            flightNumber={flight.flightNumber}
            departureTime={flight.departureTime}
            departureCity={flight.departureCity}
            duration={flight.duration}
            stops={flight.stops}
            arrivalTime={flight.arrivalTime}
            arrivalCity={flight.arrivalCity}
            price={flight.price}
            imageUrl={flight.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default FlightInfo;


