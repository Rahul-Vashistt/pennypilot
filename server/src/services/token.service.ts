import jwt from "jsonwebtoken";
import type { User } from "../types/userType.js";
import { AppError } from "../utils/AppError.js";

interface CustomJwtPayload {
  userId: string;
}

const fetchJwtSecret = () => {
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new Error("JWT_SECRET is missing");
  }

  return secret;
};

export function createToken(user: User): string {
  const secret = fetchJwtSecret();

  try {
    return jwt.sign(
      {
        userId: user._id.toString(),
      },
      secret,
      {
        expiresIn: "1d",
      },
    );
  } catch (err) {
    throw new Error("Failed to create token");
  }
}

export function verifyToken(token: string): string {
  const secret = fetchJwtSecret();

  try {
    const decoded = jwt.verify(token, secret) as CustomJwtPayload;

    if (typeof decoded.userId !== "string" || !decoded.userId) {
      throw new AppError("Invalid token", 401);
    }

    return decoded.userId;
  } catch (err) {
    if (err instanceof AppError) {
      throw err;
    }

    throw new AppError("Invalid or expired token", 401);
  }
}
