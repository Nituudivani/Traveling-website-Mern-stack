import React from 'react'
import '../About/About.css';

// let me import the images so we don't have this error on the browser.
import img1 from '../Assets/img4.jpeg';
import img2 from '../Assets/img5.png';
import img3 from '../Assets/img6.png';
import image from '../Assets/img7.webp';



export default function About() {
  return (
    <div className='about section container'id='about'>
      <div className="secContainer grid">
        <div className="leftContent">
            <div className="secHeading">
                <h3>Why Should You choose Us</h3>
                <p>
                    We have extensive knowledge and experience in the travel industry.
                </p>
            </div>

            <div className="grid">
                <div className="singleAbout flex">
                    <div className="iconDiv">
                    <img src={img1} alt='Icon image' /> 
                    </div>

                    <div className="infor">
                        <h4><b>Safety and support</b></h4>
                        <p>
                            Our top Priority is the Safety and well-beign of our clients. We maintain high Safety standards and have emergency support available during the trip.
                        </p>
                    </div>
                </div>

                <div className="singleAbout flex">
                    <div className="iconDiv">
                       <img src={img2} alt='Icon image' /> 
                    </div>

                    <div className="infor">
                        <h4><b>Diverse Range of Destination</b></h4>
                        <p>
                            Whether it's a domestic tour or an international advanture, We cover a wide ranfe of destinations to cater to differents.
                        </p>
                    </div>
                </div>

                <div className="singleAbout flex">
                    <div className="iconDiv">
                       <img src={img3} alt='Icon image' /> 
                    </div>

                    <div className="infor">
                        <h4><b>24/7 Customer Support</b></h4>
                        <p>
                            Our dedicated customer support team is available round the clock to address any queries or concerns before, during and after the trip.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className="rightContent">
            <img src={image} alt='Image' />
        </div>
      </div>
    </div>
  )
}
