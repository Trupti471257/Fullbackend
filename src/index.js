import dotenv from 'dotenv';
import express from 'express';
import connectDB from './db/index.js';

// Load environment variables from .env file
dotenv.config({
  path: './env'
});

// Create an instance of Express
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Connect to the database and start the server
connectDB()
  .then(() => {
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
      console.log(`Server is running at port: ${PORT}`);
    });
    
    // Optional error handling
    // app.on("error", (error) => {
    //   console.log("ERROR: ", error);
    //   throw error;
    // });
  })
  .catch((err) => {
    console.log("MongoDB connection failed !!! ", err);
  });
