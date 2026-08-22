import type { Document } from "mongoose";

export interface User extends Document {
  fullName: string;
  email: string;
  password: string;
  isVerified: boolean;
  verificationToken?: string | undefined;
  verificationTokenExpiry?: Date | undefined;
  passwordResetToken?: string | undefined;
  passwordResetTokenExpiry?: Date | undefined;
}