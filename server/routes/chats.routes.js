const ChatController = require('../controllers/chat.controller')
const { authenticate }= require('../config/jwt.config')


module.exports = app => {
    app.post('/api/users/chats', authenticate, ChatController.accessChat);
    // app.get('/api/users/chats', authenticate, ChatController.getChats);
    // app.post('/api/users/chats/groups', authenticate, ChatController.groupChats);
    // app.put('/api/users/chats/groups/rename', authenticate, ChatController.editGroupChatName);
    // app.put('/api/users/chats/groups/delete', authenticate, ChatController.groupChatDelete);
    // app.put('/api/users/chats/groups/add', authenticate, ChatController.groupChatAdd);
}   