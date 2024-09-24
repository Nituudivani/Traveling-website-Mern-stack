const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
    image: { 
        type: String  // Store the image URL here
    },
    country: { 
        type: String,
        required: true 
     },
    content: { 
        type: String, 
        required: true 
    },
    price: { 
        type: Number, 
        required: true 
    }
    
});

const Package = mongoose.model('Package', packageSchema);

module.exports = Package;
