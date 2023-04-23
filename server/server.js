const port = 8000;
const express = require('express');
const app = express();

//Commented out by RB
// const { notFound, errorHandler } = require('./error')

//Added by RB
const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
};
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message: err.message,
        // stack: process.env.NODE_ENV === "production" ? null : err.stack,
    });
};


// cors cross-origin requests
const cors = require('cors')

// middleware for cookies
const cookieParser = require('cookie-parser');

app.use(express.json()) // to accept JSON data
app.use(express.urlencoded({ extended: true }))
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(cookieParser())

//RB updated to .use and pulled back into code
app.use(notFound);
app.use(errorHandler);

require('dotenv').config();
require('./config/mongoose.config');
require('./routes/user.routes')(app);
require('./routes/message.routes')(app);

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
});

