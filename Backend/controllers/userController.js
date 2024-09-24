const User = require('../models/User');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const nodemailer = require('nodemailer');



// Register a new user
exports.registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const user = new User({ username, email, password });
        await user.save();

        res.status(201).json({
            message: 'User registered successfully',
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Login user
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        res.status(200).json({
            message: 'Login successful',
            userId: user._id,  // Adding the user ID to the response
            

        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get user profile
exports.getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update user profile
exports.updateUserProfile = async (req, res) => {
    const { username, email } = req.body;

    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.username = username || user.username;
        user.email = email || user.email;
        await user.save();

        res.json({ message: 'Profile updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Setup Nodemailer transporter (email mate)
const transporter = nodemailer.createTransport({
    service: 'gmail', // You can use other email services
    auth: {
        user: 'nitindivani2711@gmail.com', // Your email
        pass: 'xkax moqz dvby wyvr', // Your email password or app password
    },
});

// Generate a random string for the password  (Reset password)
const generateRandomPassword = () => {
    return crypto.randomBytes(8).toString('hex'); // Generates a 16 character long random string
};



// Reset password API
exports.resetPassword = async (req, res) => {
    const { email } = req.body; // Now we don't need the newPassword since it will be random

    try {
        // Validate that email is provided
        if (!email) {
            return res.status(400).json({ message: 'Email is required' });
        }

        // Find user by email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Generate a random new password
        const newPassword = generateRandomPassword();

        // Update the user's password (assuming hashing is handled by pre-save middleware)
        user.password = newPassword;

        // Save the user with the new password
        await user.save();

        // Send the new password via email
        const mailOptions = {
            from: 'nitindivani2711@gmail.com',
            to: user.email,
            subject: 'Password Reset',
            text: `Your new password is: ${newPassword}`
        };

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return res.status(500).json({ message: 'Error sending email', error: err.message });
            }

            // Send response after email is sent successfully
            res.json({ message: 'Password reset successfully. A new password has been sent to your email.' });
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
