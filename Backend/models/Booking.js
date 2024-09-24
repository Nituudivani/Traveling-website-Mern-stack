const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  items: [
    {
      image: { 
        type: String, 
        required: true 
      },
      place: { 
        type: String, 
        required: true 
      },
      country: { 
        type: String, 
        required: true 
      },
      price: { 
        type: Number, 
        required: true 
      },  // Price should be a number
      quantity: { 
        type: Number, 
        required: true 
      },  // Ensure quantity is stored as a number
    },
  ],
  subtotal: { 
    type: Number, 
    required: true 
  },
  gst: { 
    type: Number, 
    required: true 
  },
  total: { type: Number, required: true 
  },
});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;
