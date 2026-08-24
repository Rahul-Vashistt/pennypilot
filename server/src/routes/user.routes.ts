import express from "express";
import { checkAuth } from "../middlewares/auth.middleware.js";

export const userRouter = express.Router();

userRouter.use(checkAuth);

userRouter.route("/me").get((req, res) => {
    return res.json({
        user: req.user,
    })
})
