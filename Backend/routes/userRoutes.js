const express = require('express');
const router = express.Router();
const {registerUser, loginUser, getUserProfile, updateUserProfile, resetPassword} = require('../controllers/userController');
const {addDestination, selectDestinations} = require('../controllers/destination');
const {addPackage, selectPackages} = require('../controllers/packageData');
const {createBooking} = require('../controllers/booking')

// Routes Mapping
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile/:id', getUserProfile);   // Get profile by user ID
router.put('/profile/:id', updateUserProfile);  
router.post('/reset-password', resetPassword);  // Update profile by user ID

// Destination
// Route to create new data
router.post('/destination', addDestination);
router.get('/destinations', selectDestinations);

// package route create
router.post('/package', addPackage);
router.get('/packages', selectPackages);

// POST route to create a booking
router.post('/bookings', createBooking);

module.exports = router;
