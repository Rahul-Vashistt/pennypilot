import { USER } from "../models/user.model.js";

export async function findUserByEmail(email: string) {
  const user = await USER.findOne({ email });

  if (!user) {
    return null;
  }

  return user;
}

export async function findUserById(_id: string) {
  const user = await USER.findOne({ _id });

  if (!user) {
    return null;
  }

  return user;
}

export async function createUser(
  fullName: string,
  email: string,
  password: string,
) {
  await USER.create({
    fullName,
    email,
    password,
  });
}
