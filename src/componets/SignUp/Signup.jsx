import React, { useState } from 'react';
import '../SignUp/Signup.css';
import axios from 'axios';

function Signup(props) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signup, setSignup] = useState(false);
  const [error, setError] = useState(null);

  

  const validation = () => {
    return username && email && password;
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents page reload on form submit
    if (validation()) {
      try {
        const response = await axios.post('http://localhost:7000/api/v1/register', {
          username,
          email,
          password
        });

        if (response.status === 201) {  // Assuming 201 Created for successful registration
          console.log('Signup successful'); // Changed from alert to console.log
          setSignup(true);  // This will hide the form
          try {
            const response = await axios.post('http://localhost:7000/api/v1/login', {
              email,
              password
            });
    
            if (response.status === 200) {  // Assuming 201 Created for successful registration
              console.log('SignIn successful'); // Changed from alert to console.log
              console.log(response.data.userId)
              sessionStorage.setItem('userId', response.data.userId); // Store login state in session
              props.isUserLogin(true);
              
            }
          } catch (err) {
            setError(err.response?.data?.message || 'SignIn failed. Please try again.');
          }
        }
      } catch (err) {
        setError(err.response?.data?.message || 'Signup failed. Please try again.');
      }
    } else {
      console.log('Please fill in all fields.'); // Changed from alert to console.log
    }
  };

  return (
    <div>
      {!signup ? (  // Conditional rendering based on signup state
        <form className='firm' onSubmit={handleSubmit}>
          <h2 className='firm-title'>Signup</h2>
          <div className="form-group div-1">
            <input
              type="text"
              className='firm-input'
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className='firm-input'
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className='firm-input'
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className='signup-button' type="submit">Sign Up</button>
          {error && <p className="error-message">{error}</p>}
          <p>Already have an account? 
            <span onClick={() => { props.setSigInpClick(true); props.setSignupClick(false); }}>Click here</span>
          </p>
        </form>
      ) : (
        null
      )}
    </div>
  );
}

export default Signup;
