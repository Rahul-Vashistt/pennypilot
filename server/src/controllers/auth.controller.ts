import type { Request, Response } from "express";
import { createUser, findUserByEmail } from "../services/auth.service.js";
import { comparePassword, hashPassword } from "../utils/password.js";
import { createToken } from "../services/token.service.js";

export async function handleSignIn(req: Request, res: Response) {
  const { email, password } = req.body;

  if (!password) {
    return res.status(400).json({
      message: "Password cannot be blank",
    });
  }

  const user = await findUserByEmail(email);

  if (!user) {
    return res.status(401).json({
      message: "Invalid email or password",
    });
  }

  const isPasswordValid = await comparePassword(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({
      message: "Invalid email or password",
    });
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
  try {
    const { fullName, email, password } = req.body;

    const user = await findUserByEmail(email);

    if (user) {
      return res.status(409).json({
        message: "Email is already registered. Please log in",
      });
    }

    const hashedPassword = await hashPassword(password);

    await createUser(fullName, email, hashedPassword);

    return res.status(201).json({
      message: "New user successfully created",
    });
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      message: "Something went wrong. Please try again.",
    });
  }
}