import express from "express";
import { handleSignUp } from "../controllers/auth.controller.js";

export const authRouter = express.Router();

// authRouter.post("/sign-in");
authRouter.post("/sign-up", handleSignUp)