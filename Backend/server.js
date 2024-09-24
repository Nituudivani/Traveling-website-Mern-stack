const express = require("express");
const mongoose = require("mongoose");

const bodyParser = require('body-parser');   

const mongoSanitize = require('express-mongo-sanitize');

const cookieParser = require('cookie-parser');

const userRoutes = require('./routes/userRoutes'); // Import user routes



const PORT = 7000;    
const app = express();  
const server = require("http").createServer(app);  
let cors = require("cors");  
app.use(cors());  
app.use( express.static("files"));   
app.use( "/", express.static("public"));  
// app.use(express.json({type: "application/json"})); 
// app.use(express.urlencoded({ extended: true}));  
app.use(bodyParser.json());  


// Body parser, add data to the incoming body
// app.use(express.json({limit: '10kb'})); 
app.use(cookieParser());  

// Data sanitization against NoSQL Query injection
app.use(mongoSanitize()); 



const DB = "mongodb://mongoadmin:mongoadmin@localhost:27017/Traveling?authSource=admin";

mongoose.connect(DB)
.then(() => {
    console.log('DB connection successful');
    server.listen(PORT, () => {
        console.log(`Express Server listening on ${PORT}`);
    });
})
.catch((err) => {
    console.error('DB connection error:', err);
});


// Use the user routes
app.use('/api/v1', userRoutes); //update

// Default route
app.get("/welcome",  async (req, res) => {
   res.json({
    message:"Welcome mtt",
    status:200,
   });
});

module.exports = app;