import express from "express";
import { handleSignIn, handleSignUp } from "../controllers/auth.controller.js";

export const authRouter = express.Router();

authRouter.post("/sign-in", handleSignIn);
authRouter.post("/sign-up", handleSignUp);

authRouter.post("/sign-out", (req, res) => {
    res.clearCookie("token");

    return res.status(200).json({
        message: "Signout successful!"
    })
})