import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';


const app = express();

// Middleware
app.use(express.json()); // for parsing application/json
app.use(cookieParser()); // for parsing cookies

// CORS Configuration with Logging
// app.use((req, res, next) => {
//     console.log('Request Headers:', req.headers);
//     next();
// });

app.use(cors()); // Default configuration, allow all origins
// app.use(cors()({
//     origin: process.env.CORS_ORIGIN,
//     credentials: true
// }))



// Define a route to handle GET requests to the root URL
// app.get('/', (req, res) => {
//     res.send('Welcome to the API');
// });

// Route Declarations
import userRouter from './routes/user.routes.js';
app.use("/api/v1/users", userRouter);

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

export {app};














// import express from 'express'
// import cors from "cors"
// import cookieParser from 'cookie-parser'

// const app = express()

// app.use(cors()({
//     origin: process.env.CORS_ORIGIN,
//     credentials: true
// }))

// app.use(express.json({limit: "16kb"}))

// app.use(express.urlencoded({extended:true, limit:"16kb"}))//object inside other object

// app.use(express.static("public"))

// app.use(cookieParser())

// //routes import

// import userRouter from './routes/user.routes.js'

// //routes declarations

// app.use("/api/v1/users", userRouter)

// //http://localhost:8000/api/v1/users/register

// export {app}