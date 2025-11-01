import express from "express";
import { signUp, signIn, signOut } from "../controllers/auth.controller.js";

const router = express.Router();

router.route("/signup").post(signUp);
router.route("/signin").post(signIn);
router.route("/signout").post(signOut);

export default router;
