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
    //vvv avg. of investment/ cap. raised/turnover: number, 
    firstParameter: Number,
    //industries: [String],
    //vvv type of investor/manufacturer: [],
    secondParameter: Number,
    //vvv number of employees/companies: number,
    thirdParameter: Number,
    location: String,
    capacity: Number,
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;