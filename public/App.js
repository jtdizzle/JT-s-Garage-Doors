import React from 'react';
import './styles.css';

function App() {
  return (
    <div>
      {/* Header */}
      <div className="header">
        <h1>JT's Garage Doors</h1>
        <p>Your Trusted Garage Door Experts</p>
      </div>

      {/* Main Content */}
      <div className="container">
        <h2>About Us</h2>
        <p>
          Welcome to JT's Garage Doors! We are a dedicated team of professionals
          passionate about providing top-notch garage door services to our
          customers. With years of experience in the industry, we offer a wide
          range of garage door solutions, including installation, repairs, and
          maintenance.
        </p>

        <h2>Services</h2>
        <ul>
          <li>Garage Door Installation</li>
          <li>Garage Door Repairs</li>
          <li>Garage Door Maintenance</li>
        </ul>

        <h2>Contact Us</h2>
        <p>
          Have a question or need assistance with your garage door? Feel free to
          contact us at (123) 456-7890 or email us at info@jtgaragedoors.com.
          We are here to help!
        </p>
      </div>
    </div>
  );
}

export default App;
