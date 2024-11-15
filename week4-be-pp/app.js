const express = require("express");
const app = express();
const userRouter = require('./routes/userRouter');
const tourRouter = require('./routes/tourRouter');
const morgan = require('morgan');


// Middleware to parse JSON
app.use(express.json());

// Add morgan for logging HTTP requests
app.use(morgan('tiny'));

// Use userRouter for all /api/users routes
app.use('/api/users', userRouter);

// Use tourRouter for all /api/tours routes
app.use('/api/tours', tourRouter);


const port = 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});