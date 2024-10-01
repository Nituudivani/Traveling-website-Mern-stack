import React, { useContext, useState, useEffect} from 'react';
import '../Navbar/Navbar.css';
import { useNavigate } from 'react-router-dom';

// React icons
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaCartPlus, FaUserCircle, FaCalendarAlt, FaSignOutAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContect';

export default function Navbar(props) {
  const navigate = useNavigate();
  const { cartIconCount } = useContext(StoreContext);
  
  // State to manage the visibility of the profile dropdown
  const [showDropdown, setShowDropdown] = useState(false);
   // Login state

  // useEffect(() => {
  //   if( ! isUserLogin){
  //   let x = sessionStorage.getItem('userId');
  //   console.log("x =", x);
  //   if (x !== null) {
  //     setIsUserLogin(true);
  //   }
  // }
  //   // } else {
  //   //   setIsUserLogin(false);
  //   // }
  // }, []);




  const handleProfileClick = () => {
    setShowDropdown(!showDropdown); // Toggle dropdown visibility
  };

  const handleLogout = () => {
    // Add your logout logic here
    console.log("Logged out");
    setShowDropdown(false);
    sessionStorage.removeItem("userId")
    props.setIsUserLogin(false);
    navigate('/');
    
  };

  

  return (
    <header>
      <div className='navbar'>
        <div className='logoDiv'>
          <Link to={'/'} className='logo flex'>
            <h1>
              <MdOutlineTravelExplore className='icon-1' /> Travel.
            </h1>
          </Link>
        </div>
        <ul className="links">
          <Link to={'/'} className='nav-link active' href='#'>Home</Link>
          <li className='nav-item'><a className='nav-link active' href='#mainIn'>Destination</a></li>
          <li className='nav-item'><a className='nav-link active' href='#package'>Package</a></li>
          <li className='nav-item'><a className='nav-link active' href='#about'>About Us</a></li>
          <li className='nav-item'><a className='nav-link active' href='#contact'>Contact</a></li>
        </ul>
        
        <div className="cart-icon">
          <p onClick={() => navigate("/Cart")}><FaCartPlus /></p> 
          <div className={cartIconCount() === 0 ? "" : "dot"}>
            {cartIconCount() > 0 && <span>{cartIconCount()}</span>}
          </div>
        </div>

        {!props.isUserLogin &&(
        <>
        <button onClick={() => {props.setSigInpClick(!props.signInClick); props.setSignupClick(false)}}  className='action_btn'>Sign In</button>
        <button onClick={() => {props.setSignupClick(!props.signupClick); props.setSigInpClick(false)}} className='action_btn-1'>Sign Up</button>
        </>
        )}

        {/* Profile Icon and Dropdown */}
        {props.isUserLogin && (
        <div className="profile-container">
          <FaUserCircle className="profile-icon" onClick={handleProfileClick} />
          {showDropdown && (
            <div className="profile-dropdown">
              <ul>
                {/* <li onClick={() => navigate('/profile')}>Profile</li>
                <li onClick={() => navigate('/booking')}>Booking</li> */}
                <li onClick={() => navigate('/Profile')}><FaUserCircle className="dropdown-icon"/>Profile</li>
                <li onClick={() => navigate("/Cart")}><FaCalendarAlt className="dropdown-icon"/>Booking</li>
                <li onClick={handleLogout}>
                <FaSignOutAlt className="dropdown-icon" /> Logout</li>
              </ul>
            </div>
          )}
        </div>
         )} 
      </div>
    </header>
  );
}
