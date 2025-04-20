import express from "express";
import router from "./routes/home.routes.js";
import otherRouter from './routes/other.routes.js';
import queryRouter from './routes/query.route.js';

const app = express();

// confuqure the app for requests...

//route to our files/endpoints
app.get("/home", (req, res) => res.send("Hello, world!"));
app.use("/my", router);
app.use("/", otherRouter);
app.use("/", queryRouter);
//start the server
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
