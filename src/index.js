// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import {app} from './app.js'
dotenv.config({
    path: './.env'
})



connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})
















// import dotenv from 'dotenv';
// import connectDB from './db/index.js';
// import {app} from './app.js'

// // Load environment variables from .env file
// dotenv.config({
//   path: './env'
// });



// // Middleware to parse JSON
// //app.use(express.json());

// // Define a simple route
// // app.post('/', (req, res) => {
// //   res.send('Hello World!');
// // });

// // Connect to the database and start the server
// connectDB()
//   .then(() => {
//     const PORT = process.env.PORT || 8000;
//     app.listen(PORT, () => {
//       console.log(`Server is running at port: ${PORT}`);
//     });
    
//     // Optional error handling
//     // app.on("error", (error) => {
//     //   console.log("ERROR: ", error);
//     //   throw error;
//     // });
//   })
//   .catch((err) => {
//     console.log("MongoDB connection failed !!! ", err);
//   });
