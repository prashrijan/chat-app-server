import express from "express";
import authRouter from "./src/routes/auth.route.js";
import { connectDb } from "./src/db/db.config.js";
import { config } from "./src/config/conf.config.js";

const app = express();
const port = config.port;
app.use(express.json());

app.use("/api/auth", authRouter);

app.listen(port, () => {
    console.log("server is running on port ", port);
    connectDb();
});
