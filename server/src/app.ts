import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { authRouter } from "./routes/auth.routes.js";
import { userRouter } from "./routes/user.routes.js";
import { transactionRouter } from "./routes/transaction.routes.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  }),
);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/transactions", transactionRouter);

app.use(errorMiddleware);

export default app;
