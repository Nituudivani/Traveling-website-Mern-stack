import React, { useContext, useEffect } from 'react';
import './Cart.css';
import Footer from '../../componets/Footer/Footer';
import { StoreContext } from '../../context/StoreContect';
import { MdDelete } from "react-icons/md";
import { travel_list } from '../../Data/Data';
import { package_list } from '../../Data/DataPackage';
import Swal from 'sweetalert2';  // SweetAlert2 for alerts

const Cart = (props) => {
  const { cartItem, removecart, getTotalAmount } = useContext(StoreContext);

  useEffect(() => {
    console.log(cartItem);
  });
  // cart data remove mate
  const clearCart = () => {
    // Assuming you have a function in your context to clear the cart items
    Object.keys(cartItem).forEach(itemId => {
      removecart(itemId);  // Remove each item from the cart
    });
  };

const handleBooking = () => {
  const userId = sessionStorage.getItem('userId');

  if (!userId) {
    Swal.fire({
      icon: 'error',
      title: 'Please SignIn',
      text: 'You need to SignIn to make a booking!',
    });
    return;
  }

  const items = travel_list.concat(package_list)
    .filter(item => cartItem[item._id] > 0)
    .map(item => ({
      image: item.Image,
      place: item.place || 'Unknown',
      country: item.country || 'Unknown',
      // Remove currency symbol and commas, then convert to number
      price: Number(item.price.replace(/[₹,]/g, '')),
      quantity: cartItem[item._id] || 1,
    }));

  // Calculate subtotal (sum of all item prices)
  const subtotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);

  const bookingData = {
    userId,
    items,
    subtotal: subtotal.toFixed(2),  // Convert to string with two decimals
    gst: 150,
    total: (subtotal + 150).toFixed(2),  // Ensure total is numeric
  };

  fetch('http://localhost:7000/api/v1/bookings', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bookingData),
  })
    .then(response => response.json())
    .then(data => {
      if (data.message === 'Booking successfully created') {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Your booking has been created successfully!',
        })
        // cart data remove mate
      .then(() => {
        // Clear the cart and optionally refresh the page
        clearCart(); // Function to reset cart data
        // Optionally, you can refresh the page instead
        // window.location.reload();
      });


      //  // Clear the cart items after successful booking
      //  Object.keys(cartItem).forEach(itemId => removecart(itemId));


      } else {
        Swal.fire({
          icon: 'error',
          title: 'Booking Failed',
          text: data.message || 'Something went wrong. Please try again!',
        });
      }
    })
    .catch(error => {
      console.error('Error:', error);
      Swal.fire({
        icon: 'error',
        title: 'Booking Error',
        text: 'An error occurred while making the booking.',
      });
    });
};



  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-item-title">
          <p>Image</p>
          <p>Place</p>
          <p>Country</p>
          <p>Price</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {travel_list.map((item, index) => {
          if (cartItem[item._id] > 0) {
            return (
              <div key={index}>
                <div className="cart-item-title cart-output">
                  <img src={item.Image} className="image-1" alt="" />
                  <p className="place">{item.place}</p>
                  <p>{item.country}</p>
                  <p>{item.price}</p>
                  <p onClick={() => removecart(item._id)} className="cross"><MdDelete /></p>
                </div>
              </div>
            );
          }
          return null;
        })}

        {package_list.map((item, index) => {
          if (cartItem[item._id] > 0) {
            return (
              <div key={index}>
                <div className="cart-item-title cart-output">
                  <img src={item.Image} className="image-1" alt="" />
                  <p className="place">{item.country}</p>
                  <p>{item.country}</p>
                  <p>{item.price}</p>
                  <p onClick={() => removecart(item._id)} className="cross"><MdDelete /></p>
                </div>
              </div>
            );
          }
          return null;
        })}
        <br />
        <hr />
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>GST</p>
              <p>{getTotalAmount() === 0 ? 0 : 150}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>{getTotalAmount() === 0 ? 0 : parseInt(getTotalAmount()) + parseInt(150)}</p>
            </div>
          </div>
          <button onClick={handleBooking}>BOOKING</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;




