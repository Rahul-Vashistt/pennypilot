import type { NextFunction, Request, Response } from "express";
import { verifyToken } from "../services/token.service.js";
import { findUserById } from "../services/auth.service.js";

export async function checkAuth(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({
      status: "Unauthorized",
      message: "Authentication required",
    });
  }

  const userId = verifyToken(token);

  if (!userId) {
    return res.status(401).json({
      status: "Unauthorized",
      message: "Invalid or expired token",
    });
  }

  const user = await findUserById(userId);

  if (!user) {
    return res.status(401).json({
      status: "Unauthorized",
      message: "User not found",
    });
  }

  req.user = user;

  next();
}
