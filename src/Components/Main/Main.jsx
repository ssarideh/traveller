import React, { useEffect } from "react";
import "./main.css";
import {
  HiOutlineClipboardCheck,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import Aos from "aos";
import "aos/dist/aos.css";

// data
const data = [
  {
    id: 1,
    imgSrc:
      "https://images.pexels.com/photos/10006127/pexels-photo-10006127.jpeg?auto=compress&cs=tinysrgb&w=1200",
    desTitle: "Taranaki",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "Striking, 2518m volcanic mountain with trekking routes, surrounded by a protected forest reserve.",
  },
  {
    id: 2,
    imgSrc:
      "https://images.pexels.com/photos/3538245/pexels-photo-3538245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desTitle: "Phuket",
    location: "Thailand",
    grade: "CULTURAL RELAX",
    fees: "$500",
    description:
      "huket is famous for a number of things like exotic beaches, vibrant nightlife, colorful night markets, delicious seafood.",
  },
  {
    id: 3,
    imgSrc:
      "https://images.pexels.com/photos/3727258/pexels-photo-3727258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desTitle: "New York",
    location: "The U.S.",
    grade: "CULTURAL RELAX",
    fees: "$800",
    description:
      "composed of five boroughs – Brooklyn, the Bronx, Manhattan, Queens and Staten Island",
  },
];
const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="main container section">
      <div className="sectionTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {data?.map(
          ({ id, imgSrc, desTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos="fade-up" className="singleDesitnation">
                <div className="imageDiv">
                  <img src={imgSrc} alt={desTitle} />
                </div>
                <div className="cardInfo">
                  <h4 className="destTitle">{desTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small> +1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS
                    <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
