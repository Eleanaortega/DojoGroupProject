
const port = 8000;
const express = require('express');
const app = express();
const { notFound, errorHandler } = require('./error')

// cors cross-origin requests
const cors = require('cors')

// middleware for cookies
const cookieParser = require('cookie-parser');
const { errorHandler } = require('./error');
const PORT = 8000;


app.use( express.json() )
app.use( express.urlencoded({extended:true}) )
// app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(cookieParser())

require('dotenv').config();
require('./config/mongoose.config');
require('./routes/user.routes')(app);
require('./routes/message.routes')(app);

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
});
app.use(notFound);
app.use(errorHandler)