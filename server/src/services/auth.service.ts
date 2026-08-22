import { USER } from "../models/user.model.js";

export async function findUserByEmail(email: string) {
  try {
    const user = await USER.findOne({ email });

    if (!user) {
      return null;
    }

    return user;
  } catch (err) {
    console.error(err);
    throw new Error("isLoggedIn check failed:");
  }
}

export async function createUser(
  fullName: string,
  email: string,
  password: string,
) {
  try {
    await USER.create({
      fullName,
      email,
      password,
    });
  } catch (err) {
    console.error(err);
    throw new Error("Failed to create user");
  }
}
