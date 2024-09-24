const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    image: { 
        type: String  // Store the image URL here
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
    },
    content: { 
        type: String, 
        required: true 
    }
   
});

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;
