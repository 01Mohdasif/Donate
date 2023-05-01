
// const express = require("express");
// require("./db/conn.js");
// const cors = require("cors");
// const router = require("./routers/donation.js");
// const projectRouter=require("./routers/project.js");
// const userRouter = require("./routers/user.js")
// const donateRouter=require("./routers/donate.js")

// const app = express(); // Declare app here
// const port = process.env.PORT || 8080;

// app.use(cors());
// app.use(express.json());

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );
//   res.header("Access-Control-Allow-Methods", "GET,PUT,PATCH,POST,DELETE");
//   next();
// });

// // const userRouter = require("./routers/user.js");
// // const donateRouter = require("./routers/donation.js");
// // const router=require("./routers/donation.js");


// app.use(router);
// app.use(projectRouter);
// app.use(userRouter);
// app.use(donateRouter);


// app.listen(port, () => {
//   console.log(`connection is live at port no.${port}`);
// });


const express = require("express");
require("./db/conn.js");
const cors = require("cors");
const router = require("./routers/donation.js");
const projectRouter = require("./routers/project.js");
const userRouter = require("./routers/user.js");
const donateRouter = require("./routers/donate.js");

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.static("public"));

app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET,PUT,PATCH,POST,DELETE");
  next();
});

app.use(router);
app.use(projectRouter);
app.use(userRouter);
app.use(donateRouter);

app.listen(port, () => {
  console.log(`connection is live at port no.${port}`);
});
