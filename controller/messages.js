const { request, response } = require("express");
const Message = require("../models/message");

const addMessage = async (req = request, res = response) => {
  const { from, to, message } = req.body;
  const newMessage = new Message({
    message: { text: message },
    users: [from, to],
    sender: from,
  });

  await newMessage.save();

  res.json({ newMessage });
};

const getMessages = async (req = request, res = response) => {
  const { from, to } = req.params;

  const messages = await Message.find({ users: { $all: [from, to] } }).sort({
    updateAt: 1,
  });

  const projectedMessages = messages.map((msg) => ({
    fromSelf: msg.sender.toString() === from,
    message: msg.message.text,
  }));

  res.json(projectedMessages);
};

module.exports = {
  addMessage,
  getMessages,
};
