const API_URL = import.meta.env.VITE_API_URL;

export async function signup(data: {
  fullName: string;
  email: string;
  password: string;
}) {
  const res = await fetch(`${API_URL}/user/sign-up`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message || "Signup failed!");
  }
}

export async function signin(data: { email: string; password: string }) {
  const res = await fetch(`${API_URL}/user/sign-in`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message || "Signin failed!");
  }
}
