const { Schema, model } = require("mongoose");

const conversationSchema = new Schema(
    {
      //conversation: [userId, userId],
      participants: [{
        type: Schema.Types.ObjectId,
        ref: "User"
      }],
      messages: [{
        type: Schema.Types.ObjectId,
        ref: "Message"
      }]
    }
  );
  
const Conversation = model("Conversation", conversationSchema)

module.exports = Conversation;