import type { Request, Response } from "express";
import { createUser, findUserByEmail } from "../services/auth.service.js";
import { comparePassword, hashPassword } from "../utils/password.js";
import { createToken } from "../services/token.service.js";
import { AppError } from "../utils/AppError.js";

export async function handleSignIn(req: Request, res: Response) {
  const { email, password } = req.body;

  if (!email) {
    throw new AppError("Email cannot be blank", 400);
  }

  if (!password) {
    throw new AppError("Password cannot be blank", 400);
  }

  const user = await findUserByEmail(email);

  if (!user) {
    throw new AppError("Invalid email or password", 401);
  }

  const isPasswordValid = await comparePassword(password, user.password);

  if (!isPasswordValid) {
    throw new AppError("Invalid email or password", 401);
  }

  const token = createToken(user);

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });

  return res.status(200).json({
    message: "Login successful",
  });
}

export async function handleSignUp(req: Request, res: Response) {
  const { fullName, email, password } = req.body;

  if (!fullName) {
    throw new AppError("Full name cannot be blank", 400);
  }

  if (!email) {
    throw new AppError("Email cannot be blank", 400);
  }

  if (!password) {
    throw new AppError("Password cannot be blank", 400);
  }

  const user = await findUserByEmail(email);

  if (user) {
    throw new AppError("Email is already registered. Please log in", 409);
  }

  const hashedPassword = await hashPassword(password);

  await createUser(fullName, email, hashedPassword);

  return res.status(201).json({
    message: "New user successfully created",
  });
}
