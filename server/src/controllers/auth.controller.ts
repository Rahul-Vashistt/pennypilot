import type { Request, Response } from "express";
import { createUser, isLoggedIn } from "../services/auth.service.js";

export function handleSignIn(req: Request, res: Response) {}

export async function handleSignUp(req: Request, res: Response) {
  try {
    const { fullName, email, password } = req.body;

    const userAlreadyExists = await isLoggedIn(email);

    if (userAlreadyExists) {
      return res.status(409).json({
        message: "Email is already registered. Please log in",
      });
    }

    await createUser(fullName, email, password);

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
