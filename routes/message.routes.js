const { findByIdAndUpdate } = require("../models/Conversation.model");
const User = require("../models/User.model");
const Conversation = require('../models/Conversation.model')
const Message = require('../models/Message.model')
const router = require("express").Router();

/* chat page  */
/* create a new chat */
router.post("/chat/create/:otherUserId", (req, res, next) => {
    const {otherUserId} = req.params
    const user = req.session.user

    const id = user._id

    Conversation.findOne({ participants: {$all: [otherUserId, id]}})
    .then((foundConversation) => {
        if(foundConversation === null){
            Conversation.create({participants: [otherUserId, user._id]})
            .then((conversation) => {
                console.log(conversation)
                res.redirect(`/chat/${conversation._id}`)
            }).catch(err => next(err))
        }else {
            res.redirect(`/chat/${foundConversation._id}`)
        }
    })
    .catch((err) => next(err))

});

/* enter the chat already created  */
router.get('/chat/:chatId', (req, res, next) => {
    const {chatId} = req.params;
    Conversation.findById(chatId)
    .populate('participants messages')
    .populate({
        path: 'messages',
        populate: {
          path: 'author', 
          model: 'User',
        },
      })
    .then((chat) => res.render('conversation/message', chat))
    .catch(err => next(err))
})


/* the name of the person who sent a message appears  */
router.post('/chat/:chatId/message', (req, res, next) => {
    const {chatId} = req.params
    const {content} = req.body
    const id = req.session.user._id

    Message.create({content, author: id})
    .then((message) => {
        return Conversation.findByIdAndUpdate(chatId, {$push: {messages: message._id}})
    })
    .then((chat) => res.redirect(`/chat/${chat._id}`))
    .catch(err => next(err)) 
})




module.exports = router;
