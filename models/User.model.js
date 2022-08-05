const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    username: String,
    email: String,
    password: String,
    entrepreneur: Boolean,
    manufacturer: Boolean,
    favorites: [userId],
    //vvv avg. of investment/ cap. raised/turnover: number, 
    firstParameter: number,
    industries: [],
    //vvv type of investor/manufacturer: [],
    secondParameter: number,
    //vvv number of employees/companies: number,
    thirdParameter: number,
    location: String,
    capacity: number,
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;