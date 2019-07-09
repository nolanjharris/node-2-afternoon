let messages = [];
let id = 0;

const getMessages = (req, res, next) => {
    res.send(messages);
}

const addMessage = (req, res, next) => {
    const { text, time } = req.body;
    messages.push({ text, time, id });
    id++;
    res.send(messages);
}

const updateMessage = (req, res, next) => {
    let { text } = req.body;
    let messageIndex = messages.findIndex(a => a.id == req.params.id);
    let message = messages[messageIndex];

    messages[messageIndex] = {
        id: message.id,
        text: text || message.text,
        time: message.time
    };

    res.send(messages);
}

const deleteMessage = (req, res, next) => {
    let messageIndex = messages.findIndex(a => a.id == req.params.id);
    messages.splice(messageIndex, 1);
    res.send(messages);
}

module.exports = {
    getMessages,
    addMessage,
    updateMessage,
    deleteMessage
}