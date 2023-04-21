const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');
const cookieParser = require('cookie-parser');
const socket = require('socket.io');
const http = require('http');


require('dotenv').config();
require('./config/mongoose.config');
require('./routes/user.routes')(app);
require('./routes/message.routes')(app);


app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json(), express.urlencoded({ extended: true }));

const server = app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
});

const io = socket(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
        allowedHeaders: ['*'],
        credentials: true,
    }
});

app.get('/', (req, res) => {
    res.sendFile('/Users/eleanaortega/Desktop/DojoGroupProject/client/src/App.js');
    });

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    });

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
    });
    });