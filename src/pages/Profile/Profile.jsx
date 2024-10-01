import React, { useEffect, useState } from 'react';
import './Profile.css';
import { FaUserCircle } from 'react-icons/fa';
import Swal from 'sweetalert2'; // Import SweetAlert2

const Profile = () => {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
  });

  const [originalUsername, setOriginalUsername] = useState(''); // Store the original username
  const userId = sessionStorage.getItem('userId'); // Assuming userId is stored in session storage after login

  useEffect(() => {
    // Fetch user profile when the component loads
    const fetchUserProfile = async () => {
      try {
        const response = await fetch(`http://localhost:7000/api/v1/profile/${userId}`);
        const data = await response.json();

        if (response.ok) {
          setUserData({
            username: data.username,
            email: data.email,
          });
          setOriginalUsername(data.username); // Save original username
        } else {
          console.error('Failed to fetch user profile:', data.message);
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    if (userId) {
      fetchUserProfile();
    }
  }, [userId]);

  // Handle form submission to update user profile
  const handleSaveChanges = async (e) => {
    e.preventDefault();

    // Check if the username has changed
    if (userData.username === originalUsername) {
      Swal.fire({
        icon: 'info',
        title: 'No Changes',
        text: 'No changes made to the username.',
      });
      return;
    }

    try {
      const response = await fetch(`http://localhost:7000/api/v1/profile/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: userData.username }), // Only send the updated username
      });

      const result = await response.json();

      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Profile Updated',
          text: 'Your profile has been updated successfully!',
        });
        setOriginalUsername(userData.username); // Update the original username after successful save
      } else {
        console.error('Failed to update profile:', result.message);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: `Error: ${result.message}`,
        });
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An error occurred while updating the profile.',
      });
    }
  };

  return (
    <div className="profile-container-1">
      <h1 className="profile-title">Edit Profile</h1>
      <FaUserCircle className="profile-icon-1" size={150} style={{ color: '#007bff' }} />

      <form className="profile-form" onSubmit={handleSaveChanges}>
        <label className="profile-label">Username</label>
        <input
          className="profile-input"
          type="text"
          name="username"
          value={userData.username}
          placeholder="Enter username"
          onChange={(e) => setUserData({ ...userData, username: e.target.value })}
        />

        <label className="profile-label">Email</label>
        <input
          className="profile-input"
          type="email"
          name="email"
          value={userData.email}
          placeholder="Enter email"
          disabled // Make email field uneditable
        />

        <button className="profile-button" type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default Profile;
