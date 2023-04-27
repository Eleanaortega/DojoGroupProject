const Message = require("../models/message.models");
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET_KEY;

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

// Create Message Two
const sendMessage = asyncHandler(async (req, res) => {
    const { content, chatId } = req.body;
  
    if (!content || !chatId) {
      console.log("Invalid data passed into request");
      return res.sendStatus(400);
    }
  
    var newMessage = {
      sender: req.user._id,
      content: content,
      chat: chatId,
    };
  
    try {
      var message = await Message.create(newMessage);
  
      message = await message.populate("sender", "firstName picture").execPopulate();
      message = await message.populate("chat").execPopulate();
      message = await User.populate(message, {
        path: "chat.users",
        select: "firstName picture email",
      });
  
      await Chat.findByIdAndUpdate(req.body.chatId, { lastMessage: message });
  
      res.json(message);
    } catch (error) {
      res.status(400);
      throw new Error(error.message);
    }
  });
  
  module.exports = { sendMessage };
  

// // CREATE MESSAGE
// module.exports.createMessage = async (req, res) => {
//     const { content, chatId } = req.body;
//     const { userId } = req.body;
//     const decodedToken = jwt.verify(req.cookies.usertoken, secret);
//     console.log("token from body:", decodedToken._id)
//     const loggedInUserId = decodedToken._id
//     console.log(req.body)
//     if (!content || !chatId) {
//         console.log("Invalid data passed into request");
//         return res.sendStatus(400);
//     }

//     console.log("User", loggedInUserId)
    
//     var newMessage = {
//         sender: loggedInUserId,
//         content: content,
//         chat: chatId,
//     };

//     console.log("UserTwo", req.user)

//     var message = await Message.create(newMessage)
//         .then(newMessage => {
//             message = message.populate('sender', 'firstName', 'lastName', 'picture').execPopulate();
//             message = message.populate('chat').execPopulate();
//             message = User.populate(message, {
//                 path: 'chat.users',
//                 select: 'firstName picture email'
//             });

//             Chat.findByIdAndUpdate(req.body.chatId), {
//                 lastMessage: message,
//             }
//                 res.json(message);
//             })
//         .catch(err => res.json({ message: "Something went wrong", error: err }));
// }

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