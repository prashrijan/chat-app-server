import express from "express";
import { authenticateUser } from "../middlewares/auth.middleware.js";
import {
    getMessages,
    getUsersForSidebar,
} from "../controllers/message.controller.js";

const router = express.Router();

router.route("/users").get(authenticateUser, getUsersForSidebar);
router.route("/messages/:id").get(authenticateUser, getMessages);

export default router;
