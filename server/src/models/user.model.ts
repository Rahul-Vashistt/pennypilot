import mongoose from "mongoose";
import type { User } from "../types/userType.js";

const userSchema = new mongoose.Schema<User>(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
    },
    verificationTokenExpiry: {
      type: String,
    },
    passwordResetToken: {
      type: String,
    },
    passwordResetTokenExpiry: {
      type: String,
    },
  },
  { timestamps: true },
);

export const USER = mongoose.model<User>("User", userSchema);
