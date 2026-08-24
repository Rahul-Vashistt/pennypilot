import axios from "axios";
import api from "../api/axios";

interface SignupData {
  fullName: string;
  email: string;
  password: string;
}

interface SigninData {
  email: string;
  password: string;
}

export async function signup(data: SignupData) {
  try {
    await api.post("/auth/sign-up", data);
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      throw new Error(err.response?.data?.message || "Signup failed!", {
        cause: err,
      });
    }

    throw new Error("Signup failed!", { cause: err });
  }
}

export async function signin(data: SigninData) {
  try {
    await api.post("/auth/sign-in", data);
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      throw new Error(err.response?.data?.message || "Signin failed!", {
        cause: err,
      });
    }

    throw new Error("Signin failed!", { cause: err });
  }
}
