const { Schema, model } = require("mongoose");

const messageSchema = new Schema(
    {
      userId: [],
      allMessages: [],
    }
    
  );
  
  const Message = model("Message", messageSchema)

module.exports = Message;