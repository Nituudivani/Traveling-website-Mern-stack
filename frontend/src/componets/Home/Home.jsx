import React, { useEffect } from "react";
import "../Home/Home.css";
import video from "../Assets/video.mp4";

import MainIn from "../Main/MainIn";
import Package from "../Package/Package";
import Contact from "../Contact/Contact";
import About from "../About/About";
import Carouselk from "../Carouselpage/Carousel";
import Footer from "../Footer/Footer";

// react icon
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
// import { FiFacebook } from "react-icons/fi";
// import { FaInstagram } from "react-icons/fa";
// import { FaTripadvisor } from "react-icons/fa";
// import { FaList } from "react-icons/fa";
// import { TbApps } from "react-icons/tb";

import Aos from "aos";
import "aos/dist/aos.css";

export default function Home(props) {
  // Lets create a react hook to add a scroll animation...
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video.mp4"></video>

      <div className="homeContent container">
        <div className="textDiv">
          <span className="smallText">Our package</span>

          <h1 data-aos="fade-up" className="homeTitle">
            Search Your Holiday
          </h1>
        </div>

        <div data-aos="fade-up" className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">From:</label>
            <div className="input flex">
              <input type="text" placeholder="Enter name here..." />
              <GrLocation className="icon" />
            </div>
          </div>

          <div className="destinationInput">
            <label htmlFor="city">To:</label>
            <div className="input flex">
              <input type="text" placeholder="Enter name here..." />
              <GrLocation className="icon" />
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="date">Select your date:</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>

          {/* <div className="priceInput">
          <div className='label_total flex'>
            <label htmlFor='price'>Max price:</label>
            <h3 className='total'>₹5,00,000</h3>
          </div>
          <div className="input flex">
            <input type='range' max='5000' min='1000'/>
          </div>
        </div> */}

          <div className="searchOptions flex">
            <HiFilter className="icon" />
            <span>MORE FILTERS</span>
          </div>
        </div>

        {/* <div data-aos='fade-up' className="homefooterIcon flex">
        <div className="rightIcon">
        <FiFacebook className='icon' />
        <FaInstagram  className='icon' />
        <FaTripadvisor className='icon' />

        </div>

        <div className="leftIcons">
        <FaList  className='icon' />
        <TbApps  className='icon' />

        </div>
      </div> */}
      </div>
      <MainIn item={props.item} setItem={props.setItem} />
      <Package
        packagedata={props.packagedata}
        setPackagedata={props.setPackagedata}
      />
      <Carouselk />
      <About />
      <Contact />
      <Footer />
    </section>
  );
}
