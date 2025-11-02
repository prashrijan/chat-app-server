import express from "express";
import authRouter from "./src/routes/auth.route.js";
import messageRouter from "./src/routes/messages.route.js";
import { connectDb } from "./src/db/db.config.js";
import { config } from "./src/config/conf.config.js";
import cookieParser from "cookie-parser";

const app = express();
const port = config.port;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/message", messageRouter);

app.listen(port, () => {
    console.log("server is running on port ", port);
    connectDb();
});
