import express from "express";
import { authenticateUser } from "../middlewares/auth.middleware.js";
import { getUsersForSidebar } from "../controllers/message.controller.js";

const router = express.Router();

router.route("/users").get(authenticateUser, getUsersForSidebar);

export default router;
