import React from "react";
import driver from "../assets/image/driver.png";
import flag from "../assets/image/flag.png";
import phone from "../assets/image/phone.png";
import people from "../assets/image/people.png";
import wallet from "../assets/image/money-recive.png";

const Banner4 = () => {
  return (
    <div className="car-rental">
      <div className="border-green all-padding">
        <div className="row">
          <div className="col-lg-3 col-12 ">
            <img
              className="image display-sm-none"
              src={driver}
              alt="kjhggshd"
            />
          </div>
          <div className="col-lg-9 col-12 pa-xl">
            <h1>Why choose Yatri Car Rental?</h1>
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-6">
                  <div className="media">
                    <div className="icon">
                      <img src={flag} alt="kjhggshd" />
                    </div>
                    <div>
                      <h4>Fast response time</h4>
                      <p>
                        Avail Best Car Rental Service in Lucknow with driver for
                        Local or Outstation within the moment of your call for
                        best car hire experience.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="media">
                    <div className="icon">
                      <img src={phone} alt="kjhggshd" />
                    </div>
                    <div>
                      <h4>Easy to order</h4>
                      <p className="small-font">
                        Easily Book Cab Online with our website or call our
                        customer support team
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-lg-6">
                  <div className="media">
                    <div className="icon">
                      <img src={people} alt="kjhggshd" />
                    </div>
                    <div>
                      <h4>Vast fleet</h4>
                      <p className="small-font">
                        We have all kinds of Car on Rent available like Sedan,
                        Suv, Muv, Premium Sedan, Tampo Traveller etc as per ur
                        requirement
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-lg-6">
                  <div className="media">
                    <div className="icon">
                      <img src={wallet} alt="kjhggshd" />
                    </div>
                    <div>
                      <h4>Great tariffs</h4>
                      <p className="small-font">
                        Rent A Car !Our car hire tariff are very low when
                        compare to other operators in Lucknow. Book online cabs
                        with best prices in Lucknow at Yatri Car Rental
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="oneway-cab margin-top">
        <h1>Why Choose Oneway Cab?</h1>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-6">
              <ul>
                <li>Instant Booking & Confirmation</li>
                <li>Confirmed Booking Immediately</li>
                <li>No Return Fare for One-Way Trip</li>
                <li>Clean & Professional Cab Services</li>
                <li>No Night or Luggage Charges</li>
              </ul>
            </div>
            <div className="col-lg-6 col-6">
              <ul>
                <li>Pick-up from your house</li>
                <li>Dedicated Cab just for you</li>
                <li>Drop to your desired destination</li>
                <li>Completed more than 20,000+ One-Way Trips</li>
                <li>Multiple Payment Option including Credit Card</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner4;
