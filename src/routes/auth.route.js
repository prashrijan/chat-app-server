import express from "express";
import {
    signUp,
    signIn,
    signOut,
    updateProfilePic,
} from "../controllers/auth.controller.js";
import { authenticateUser } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.route("/signup").post(signUp);
router.route("/signin").post(signIn);
router.route("/signout").post(signOut);

router.route("/update-profilePic").put(authenticateUser, updateProfilePic);

export default router;
