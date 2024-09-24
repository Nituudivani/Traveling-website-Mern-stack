const Booking = require('../models/Booking');

// Function to handle booking creation
exports.createBooking = async (req, res) => {
  const { userId, items, subtotal, gst, total } = req.body;

  // Log incoming request data
  console.log("Request Body:", req.body);

  // Validate input data
  if (!userId || !items || items.length === 0 || !subtotal || !gst || !total) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Create a new booking using the model
    const newBooking = new Booking({
      userId,  // Associate the booking with a user
      items,   // Array of items (contains image, place, country, etc.)
      subtotal,
      gst,
      total,
    });

    // Save the booking to the database
    const savedBooking = await newBooking.save();

    // Respond with the saved booking data
    res.status(201).json({
      message: 'Booking successfully created',
      bookingData: savedBooking,
    });

  } catch (error) {
    console.error('Error creating booking:', error.message);  // Log error details
    res.status(500).json({ message: 'Error creating booking', error: error.message });
  }
};
