const MessageController = require('../controllers/message.controllers');

module.exports = app => {
    app.get('/api/messages', MessageController.findAllMessages);
    app.get('/api/messages/:id', MessageController.findOneMessage);
    app.post('/api/messages', MessageController.createMessage);
    app.put('/api/messages/:id', MessageController.updateMessage);

    // app.patch('/api/messages/:id', MessageController.updateMessage);

    app.delete('/api/messages/:id', MessageController.deleteMessage);
};