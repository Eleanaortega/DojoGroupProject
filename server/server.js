const port = 8000;
const express = require('express');
const app = express();
// const { notFound, errorHandler } = require('./error')

// cors cross-origin requests
const cors = require('cors')

// middleware for cookies
const cookieParser = require('cookie-parser');

app.use( express.json() ) // to accept JSON data
app.use( express.urlencoded({extended:true}) )
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(cookieParser())
// app.use(notFound);
// app.use(errorHandler);

require('dotenv').config();
require('./config/mongoose.config');
require('./routes/user.routes')(app);
require('./routes/message.routes')(app);

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
});

