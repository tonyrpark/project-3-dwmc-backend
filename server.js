<<<<<<< HEAD
const express = require("express");
const dbConfig = require("./app/config/db.config");
const db = require("./app/models");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const expSession = require("express-session");
const path = require("path");
const { signupHelpers } = require("./app/middlewares");
// mongodb connection
db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`successfuly connected to ${dbConfig.DB}`);
  })
  .catch((err) => {
    console.log(`Connection error : ${err}`);
    process.exit();
  });

// cors setup
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// session setup
app.use(
  expSession({
    name: "cryptinfo-session",
    secret: `my-secret-session`,
    resave: true,
    saveUninitialized: true,
    cookie: {},
  })
);

// routes
require("./app/routes/common.route")(app);
require("./app/routes/user.route")(app);
require("./app/routes/wallet.route")(app);

// server setup
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
=======
const express = require("express");
const dbConfig = require("./app/config/db.config");
const db = require("./app/models");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const expSession = require("express-session");
const path = require("path");
const { signupHelpers } = require("./app/middlewares");
// mongodb connection
db.mongoose
  .connect(`mongodb+srv://tonyrpark:PqKbXn9g5oKiIKIw@cluster0.r0s9n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`successfuly connected to Database`);
  })
  .catch((err) => {
    console.log(`Connection error : ${err}`);
    process.exit();
  });

// cors setup
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// session setup
app.use(
  expSession({
    name: "cryptinfo-session",
    secret: `my-secret-session`,
    resave: true,
    saveUninitialized: true,
    cookie: {},
  })
);

// routes
require("./app/routes/common.route")(app);
require("./app/routes/user.route")(app);
require("./app/routes/wallet.route")(app);

// server setup
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
>>>>>>> 3dd159bd1dac7483a22fe7d5ff9796751335d4b8
