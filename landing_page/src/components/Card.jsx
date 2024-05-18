import Image1 from "../assets/images/Hotel Earth.png";
import Image2 from "../assets/images/Green Park.png";
import Image3 from "../assets/images/Jungle Crown.png";
import Image4 from "../assets/images/Wildlife Jungle.png";

import "../assets/css/Card.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Card() {
  const hotels = [
    {
      name: "Hotel Earth Light",
      location: "Chitwan, Sauraha",
      price: "$299/day",
      rating: 9.0,
      URL: Image1,
    },
    {
      name: "Green Park Hotel",
      location: "Chitwan, Sauraha",
      price: "$150/day",
      rating: 7.0,
      URL: Image2,
    },
    {
      name: "Jungle Crown",
      location: "Kathmandu, Thamel",
      price: "$70/day",
      rating: 5.0,
      URL: Image3,
    },
    {
      name: "Wildlife Jungle Hotel",
      location: "Kathmandu, Dallu",
      price: "$199/day",
      rating: 9.0,
      URL: Image4,
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Maikalal.</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Booking</li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="hero">
          <h2>BOOKING JUST GOT EASIER</h2>
        </div>
        <div className="hotel-list">
          {hotels.map((hotel, index) => (
            <div key={index} className="hotel-card">
              <img src={hotel.URL} alt={hotel.name} />
              <div className="hotel-info">
                <h3>{hotel.name}</h3>
                <p>
                  <i className="fas fa-location"></i>
                  {hotel.location}
                </p>
                <div className="price-rating">
                  <p className="price">{hotel.price}</p>
                  <button className="rating">{hotel.rating}</button>
                </div>
              </div>
              <div className="hotel-icons">
                <i className="fas fa-bed"></i>
                <i className="fas fa-tv"></i>
                <i className="fas fa-wifi"></i>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
export default Card;
