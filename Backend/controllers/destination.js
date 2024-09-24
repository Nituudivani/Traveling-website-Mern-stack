const Data = require('../models/Destination'); // Adjust path as necessary

// Add a new destination entry
exports.addDestination = async (req, res) => {
    const {imageUrl, place, country, price, content} = req.body;

    try {
        // Create a new data entry
        const newData = new Data({
            image: imageUrl,  // Save the image URL in the database
            place,
            country,
            price,
            content
            
        });

        // Save the new data entry to the database
        await newData.save();

        // Send a success response
        res.status(201).json({
            message: 'Destination added successfully',
            data: newData
        });
    } catch (error) {
        // Handle errors
        res.status(500).json({ error: error.message });
    }
};

// Select and retrieve destination data
exports.selectDestinations = async (req, res) => {
    try {
        // Retrieve all destinations from the database
        const destinations = await Data.find();

        // Send a success response with the destination data
        res.status(200).json({
            message: 'Destinations retrieved successfully',
            data: destinations
        });
    } catch (error) {
        // Handle errors
        res.status(500).json({ error: error.message });
    }
};





