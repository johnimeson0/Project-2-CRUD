const { Schema, model } = require("mongoose");

const conversationSchema = new Schema(
    {
      //conversation: [userId, userId],
    }
  );
  
const Conversation = model("Conversation", conversationSchema)

module.exports = Conversation;