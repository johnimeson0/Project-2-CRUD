const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    username: String,
    email: String,
    password: String,
    entrepreneur: Boolean,
    manufacturer: Boolean,
    //favorites: [],
    //vvv avg. of investment/turnover: number, 
    firstParameter: String,
    //industries: [String], - should be a string
    //industries: [],
    //vvv type of investor/manufacturer: [], - do not need this 
    secondParameter: Number,
    //vvv number of employees/companies: number,
    thirdParameter: Number,
    location: String,
    capacity: Number,
    name: String,
    contact: String,
    imgUrl: String,
    description: String,
    matchSent: [{
      type: Schema.Types.ObjectId,
      ref: "User"
    }],
    matchRecieved: [
      {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
    ],
    matches: [
      {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
    ]
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;