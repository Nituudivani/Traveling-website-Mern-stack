const Package = require('../models/PackageData');

// Add a new destination entry
exports.addPackage = async (req, res) => {
    const {imageUrl, country, content, price} = req.body;

    try {
        // Create a new data entry
        const newPackage = new Package({
            image: imageUrl,  // Save the image URL in the database
            country,
            content,
            price
           
        });

        // Save the new data entry to the database
        await newPackage.save();

        // Send a success response
        res.status(201).json({
            message: 'Package added successfully',
            data: newPackage
        });
    } catch (error) {
        // Handle errors
        res.status(500).json({ error: error.message });
    }
};

// Select and retrieve destination data
exports.selectPackages = async (req, res) => {
    try {
        // Retrieve all destinations from the database
        const packages = await Package.find();

        // Send a success response with the destination data
        res.status(200).json({
            message: 'Packages retrieved successfully',
            data: packages
        });
    } catch (error) {
        // Handle errors
        res.status(500).json({ error: error.message });
    }
};

 