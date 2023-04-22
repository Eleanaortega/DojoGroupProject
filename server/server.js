// const express = require('express');
// const app = express();
const port = 8000;
// const cors = require('cors');
// const cookieParser = require('cookie-parser');
// const { chats } = require('./data/data')





// app.use(cookieParser());
// app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
// app.use(express.json(), express.urlencoded({ extended: true }));

const express = require('express');
const app = express();

// cors cross-origin requests
const cors = require('cors')

// middleware for cookies
const cookieParser = require('cookie-parser')
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

// app.get('/api/chat', (req,res) => {
//     res.send(chats);
// })

// app.get('/api/chat/:id', (req,res) => {
//     console.log(req.params.id);
//     const singleChat = chats.find((chat) => chat._id === req.params.id);
//     res.send(singleChat);
// });

