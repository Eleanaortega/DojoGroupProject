const Chat = require('../models/chat.model')
const asyncHandler = require("express-async-handler");
const User = require('../models/user.model')

// Using Async Handler to perform different tasks simultaneously
//Eleana was here// 

const accessChat = asyncHandler(async (req, res) => {
    const { userId } = req.body;

    if (!userId) {
    console.log("UserId param not sent with request");
    return res.sendStatus(400);
    }

    var isChat = await Chat.find({
    isGroupChat: false,
    $and: [
        { users: { $elemMatch: { $eq: req.cookies._id } } },
        { users: { $elemMatch: { $eq: userId } } },
    ],
    })
    .populate("users", "-password")
    .populate("lastMessage");

    isChat = await User.populate(isChat, {
    path: "lastMessage.sender",
    select: "firstName lastName picture email",
    });

    if (isChat.length > 0) {
    res.send(isChat[0]);
    } else {
    var chatData = {
        chatName: "sender",
        isGroupChat: false,
        users: [  req.cookies._id , userId],
    };

    try {
        const createdChat = await Chat.create(chatData);
        const FullChat = await Chat.findOne({ _id: createdChat?._id }).populate(
        "users",
        "-password"
        );
        res.status(200).json(FullChat);
    } catch (error) {
        res.status(400);
        throw new Error(error.message);
    }
    }
});

module.exports = { accessChat };