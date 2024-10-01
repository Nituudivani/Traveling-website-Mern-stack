import React,{useContext, useState} from 'react'
import '../Package/Package.css';
import "bootstrap/dist/css/bootstrap.css";


// react icon
import { FaStar } from "react-icons/fa";
import { StoreContext } from '../../context/StoreContect';



export default function Package(props) {
const {add} = useContext(StoreContext);
  
  return (
    <div >
     <section className='packages' id='package'>
      <div className="container">
        <div className="main-txt">
          <h1 data-aos='fade-left'><span>P</span>ackages</h1>
        </div>

        <div className="row" >

        {props.packagedata.map((e)=>{
            return(
          <div className='col-md-4 py-3 py-md-0'>
            <div data-aos='fade-up' className='card'>
              <img src={e.Image} alt=''/>
              <div className='card-body'>
                <h3>{e.country}</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea eum mollitia.</p>
                <div className='star'>
                  <i><FaStar  className='fa-solid fa-star checked'/></i>
                  <i><FaStar  className='fa-solid fa-star checked'/></i>
                  <i><FaStar  className='fa-solid fa-star checked'/></i>
                  <i><FaStar  className='fa-solid fa-star '/></i>
                  <i><FaStar  className='fa-solid fa-star '/></i>
                </div>
                <h6>Price:<strong>{e.price}</strong></h6>
                <button className='btu' onClick={()=> add(e._id)}>Book Now</button>
              </div>
            </div>
          </div>

         )

        })}
        
        </div>
      </div>
     </section>
    </div>

  )
}
