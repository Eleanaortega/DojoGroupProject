const MessageController = require('../controllers/message.controllers');
const { authenticate } = require('../config/jwt.config')


module.exports = app => {
    app.get('/api/messages', authenticate, MessageController.findAllMessages);
    app.get('/api/messages/:id', MessageController.findOneMessage);
    app.post('/api/messages', authenticate, MessageController.createMessage);
    app.put('/api/messages/:id', MessageController.updateMessage);

    // app.patch('/api/messages/:id', MessageController.updateMessage);

    app.delete('/api/messages/:id', MessageController.deleteMessage);
};