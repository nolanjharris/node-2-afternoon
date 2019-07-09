const express = require('express');
const app = express();
const messagesController = require('./controllers/messages_controller');

app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));

app.post('/api/messages', messagesController.addMessage);
app.get('/api/messages', messagesController.getMessages);
app.put('/api/messages/:id', messagesController.updateMessage);
app.delete('/api/messages/:id', messagesController.deleteMessage)

const PORT = 3001;
app.listen(PORT, () => console.log('Listening on port ' + PORT))