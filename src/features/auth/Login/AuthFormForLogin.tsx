import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Eye, EyeOff, Lock, Mail } from "lucide-react";

export default function AuthFormForLogin() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-white p-6 dark:bg-slate-950 sm:p-8 lg:w-[55%]">
      <div className="flex w-full max-w-105 flex-col">
        {/* Mobile Logo */}
        <div className="mb-8 flex items-center justify-center gap-3 lg:hidden">
          <img src="/logo.png" alt="PennyPilot" className="h-8 w-8" />

          <span className="text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
            PennyPilot
          </span>
        </div>

        {/* Header */}
        <div className="mb-8 text-center lg:text-left">
          <h1 className="mb-2 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
            Welcome back
          </h1>

          <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
            Sign in to continue managing your money.
          </p>
        </div>

        {/* Form */}
        <form action="#" method="POST" className="space-y-6">
          {/* Email */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-xs font-medium uppercase tracking-wider text-slate-600 dark:text-slate-400"
            >
              Email address
            </label>

            <div className="group relative">
              <Mail
                aria-hidden="true"
                strokeWidth={1.8}
                className="
                  pointer-events-none absolute left-3 top-1/2
                  h-5 w-5 -translate-y-1/2
                  text-slate-400
                  transition-colors
                  group-focus-within:text-emerald-600
                  dark:text-slate-500
                  dark:group-focus-within:text-emerald-400
                "
              />

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                required
                className="
                  h-13 w-full rounded-lg
                  border border-slate-200
                  bg-slate-50
                  pl-10 pr-3
                  text-sm text-slate-900
                  shadow-sm
                  outline-none
                  transition-all
                  placeholder:text-slate-400
                  hover:border-slate-300
                  focus:border-emerald-500
                  focus:ring-4
                  focus:ring-emerald-500/10
                  dark:border-slate-800
                  dark:bg-slate-900
                  dark:text-slate-100
                  dark:placeholder:text-slate-600
                  dark:hover:border-slate-700
                  dark:focus:border-emerald-500
                  dark:focus:ring-emerald-500/10
                "
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-xs font-medium uppercase tracking-wider text-slate-600 dark:text-slate-400"
              >
                Password
              </label>

              <a
                href="#"
                className="text-xs font-medium text-emerald-600 transition-colors hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
              >
                Forgot password?
              </a>
            </div>

            <div className="group relative">
              <Lock
                aria-hidden="true"
                strokeWidth={1.8}
                className="
                  pointer-events-none absolute left-3 top-1/2
                  h-5 w-5 -translate-y-1/2
                  text-slate-400
                  transition-colors
                  group-focus-within:text-emerald-600
                  dark:text-slate-500
                  dark:group-focus-within:text-emerald-400
                "
              />

              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                placeholder="••••••••"
                required
                className="
                  h-13 w-full rounded-lg
                  border border-slate-200
                  bg-slate-50
                  pl-10 pr-11
                  text-sm text-slate-900
                  shadow-sm
                  outline-none
                  transition-all
                  placeholder:text-slate-400
                  hover:border-slate-300
                  focus:border-emerald-500
                  focus:ring-4
                  focus:ring-emerald-500/10
                  dark:border-slate-800
                  dark:bg-slate-900
                  dark:text-slate-100
                  dark:placeholder:text-slate-600
                  dark:hover:border-slate-700
                  dark:focus:border-emerald-500
                  dark:focus:ring-emerald-500/10
                "
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="
                  absolute right-3 top-1/2
                  -translate-y-1/2
                  rounded-md p-1
                  text-slate-400
                  transition-colors
                  hover:text-slate-700
                  focus:outline-none
                  focus:ring-2
                  focus:ring-emerald-500/20
                  dark:text-slate-500
                  dark:hover:text-slate-200
                "
              >
                {showPassword ? (
                  <EyeOff aria-hidden="true" className="h-5 w-5" />
                ) : (
                  <Eye aria-hidden="true" className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="
              group mt-2 flex h-13 w-full
              items-center justify-center gap-2
              rounded-lg cursor-pointer
              bg-emerald-600
              text-sm font-semibold text-white
              shadow-sm
              transition-all
              hover:bg-emerald-700
              hover:shadow-md
              focus:outline-none
              focus:ring-4
              focus:ring-emerald-500/20
              active:scale-[0.99]
              dark:bg-emerald-500
              dark:text-slate-950
              dark:hover:bg-emerald-400
            "
          >
            <span>Sign in</span>

            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
            />
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-8">
          <div
            aria-hidden="true"
            className="absolute inset-0 flex items-center"
          >
            <div className="w-full border-t border-slate-200 dark:border-slate-800" />
          </div>

          <div className="relative flex justify-center">
            <span className="bg-white px-4 text-xs font-medium uppercase tracking-wider text-slate-500 dark:bg-slate-950 dark:text-slate-500">
              or continue with
            </span>
          </div>
        </div>

        {/* Social Auth */}
        <div className="grid grid-cols-2 gap-3">
          {/* Google */}
          <button
            type="button"
            className="
              flex h-12 items-center justify-center gap-2
              rounded-lg
              border border-slate-200
              bg-slate-50
              text-sm font-medium text-slate-800
              shadow-sm
              transition-all
              hover:border-slate-300
              hover:bg-slate-100
              focus:outline-none
              focus:ring-4
              focus:ring-emerald-500/10
              dark:border-slate-800
              dark:bg-slate-900
              dark:text-slate-200
              dark:hover:border-slate-700
              dark:hover:bg-slate-800
            "
          >
            {/* Google G */}
            <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.67 15.63 16.89 16.79 15.73 17.57V20.32H19.29C21.38 18.4 22.56 15.58 22.56 12.25Z"
                fill="#4285F4"
              />
              <path
                d="M12 23C14.97 23 17.46 22.02 19.29 20.32L15.73 17.57C14.74 18.23 13.48 18.63 12 18.63C9.13 18.63 6.7 16.69 5.82 14.08H2.15V16.94C3.96 20.53 7.69 23 12 23Z"
                fill="#34A853"
              />
              <path
                d="M5.82 14.08C5.59 13.41 5.46 12.72 5.82 9.92V7.06H2.15V16.94L5.82 14.08Z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38C13.62 5.38 15.06 5.93 16.2 7.02L19.37 3.85C17.46 2.06 14.97 1 12 1C7.69 1 3.96 3.47 2.15 7.06L5.82 9.92C6.7 7.31 9.13 5.38 12 5.38Z"
                fill="#EA4335"
              />
            </svg>

            <span>Google</span>
          </button>

          {/* GitHub */}
          <button
            type="button"
            className="
              flex h-12 items-center justify-center gap-2
              rounded-lg
              border border-slate-200
              bg-slate-50
              text-sm font-medium text-slate-800
              shadow-sm
              transition-all
              hover:border-slate-300
              hover:bg-slate-100
              focus:outline-none
              focus:ring-4
              focus:ring-emerald-500/10
              dark:border-slate-800
              dark:bg-slate-900
              dark:text-slate-200
              dark:hover:border-slate-700
              dark:hover:bg-slate-800
            "
          >
            {/* GitHub */}
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.342-3.369-1.342-.455-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.071 1.532 1.032 1.532 1.032.892 1.529 2.341 1.087 2.91.831.092-.646.349-1.087.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.58 9.58 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .268.18.579.688.481A10.001 10.001 0 0 0 22 12c0-5.523-4.477-10-10-10Z" />
            </svg>

            <span>GitHub</span>
          </button>
        </div>

        {/* Footer */}
        <p className="mt-8 text-center text-sm text-slate-600 dark:text-slate-400">
          Don't have an account?{" "}
          <Link
            to="/sign-up"
            className="ml-1 font-semibold text-emerald-600 transition-colors hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
          >
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
