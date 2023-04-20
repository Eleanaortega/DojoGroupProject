const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    
    text: {
        type: String,
        required: [true, "Message required"],
        minlength: [1, "Must have at least one character before sending a message"]
    }
},  { timestamps: true });



module.exports = mongoose.model("Message", MessageSchema);