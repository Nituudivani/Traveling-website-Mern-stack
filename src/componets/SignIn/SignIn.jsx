import React, { useState } from 'react';
import axios from 'axios';
import '../SignIn/SignIn.css';
import { aesEncryptedText, encryptedKey } from '../../../src/encryDecryption'; 
import {getRandomKey} from '../../../src/randomKey';



export default function SignIn(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [signin, setSignin] = useState(false);

  
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload on form submit

    let key = getRandomKey();

    if (email && password) {
      try {
        const response = await axios.post('http://localhost:7000/api/v1/login', {
          email:aesEncryptedText(email, key),
          password:aesEncryptedText(password, key),

          key: encryptedKey(key),


        });
         console.log(response.data.userId);
        if (response.status === 200) {
          console.log('Signin Successful'); // Changed from alert to console.log
          sessionStorage.setItem('userId', response.data.userId); // Store login state in session
          setSignin(true);  // Hide the form upon successful sign-in
          props.isUserLogin(true);
          
        }
      } catch (err) {
        setError(err.response?.data?.message || 'Invalid email or password');
      }
    } else {
      console.log('Please enter both email and password'); // Changed from alert to console.log
    }
  };

  const handleResetPassword = async () => {
    if (!email) {
      console.log('Please enter your email for password reset'); // Changed from alert to console.log
      return;
    }

    try {
      const response = await axios.post('http://localhost:7000/api/v1/reset-password', {
        email,
      });

      if (response.status === 200) {
        console.log('Password reset email sent. Please check your inbox.'); // Changed from alert to console.log
      }
    } catch (err) {
      console.log('Error sending reset email. Please try again later.'); // Changed from alert to console.log
    }
  };

  return (
    <div>
      {!signin ? (  // Conditional rendering based on signin state
        <form className='firm' onSubmit={handleSubmit}>
          <h2 className='firm-title'>SignIn</h2>
          <div className="form-group">
            <input
              type="email"
              id="email"
              className="firm-input"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              className="firm-input"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="signup-btn" type="submit">Sign In</button>
          {error && <p className="error-message">{error}</p>}
          <p>
            Forgot your password?{' '}
            <span className="reset-password" onClick={handleResetPassword}>
              Reset here
            </span>
          </p>
          <p>
            Create New account?{' '}
            <span onClick={() => { props.setSigInpClick(false); props.setSignupClick(true); }}>
              Click here
            </span>
          </p>
        </form>
      ) : (
        // Return null if signin is successful
        null
      )}
    </div>
  );
}
