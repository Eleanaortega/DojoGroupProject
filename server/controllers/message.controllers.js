const Message = require("../models/message.models");

// FIND ALL MESSAGES
module.exports.findAllMessages = (req, res) => {
    Message.find()
        .then(allMessages => res.json({ messages: allMessages}))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}

// FIND A MESSAGE
module.exports.findOneMessage = (req, res) => {
    Message.findById(req.params.id)
        .then(oneMessage => res.json({ message: oneMessage}))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}

// CREATE MESSAGE
module.exports.createMessage = (req, res) => {
    console.log(req.body)
    Message.create(req.body)
        .then(newMessage => res.json({ message: newMessage }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}

// UPDATE MESSAGE
module.exports.updateMessage = (req, res) => {
    Message.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        .then(updatedMessage => res.json({ Message: updatedMessage }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}

// DELETE MESSAGE
module.exports.deleteMessage = (req, res) => {
    Message.findByIdAndDelete(req.params.id)
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}