// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require("hbs");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

const capitalized = require("./utils/capitalized");
const projectName = "CRUD";

app.locals.appTitle = `${capitalized(projectName)} created with IronLauncher`;

// 👇 Start handling routes here
const index = require("./routes/index.routes");
app.use("/", index);

const authRoutes = require("./routes/auth.routes");
app.use("/", authRoutes);

//routes to work on below: create seperate .routes.js file for each, as well as seperate .hbs file for each.

const search = require("./routes/search.routes");  // luisa
app.use("/", search);
// 
// const results = require("./routes/results.routes");   --luisa
// app.use("/", results);
// 
 const profileRoutes = require("./routes/profile.routes");  // --john
 app.use("/", profileRoutes);
// 
// const editProfile = require("./routes/profile.routes");  --john
// app.use("/", editProfile);
// 
// const match = require("./routes/match.routes");  --jason
// app.use("/", match);
// 
// const conversation = require("./routes/conversation.routes") --jason
// app.use("/", conversation)

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
