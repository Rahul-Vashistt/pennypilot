import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AlertCircle,
  ArrowRight,
  Check,
  Eye,
  EyeOff,
  Lock,
  LockKeyhole,
  Mail,
  User,
} from "lucide-react";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { signup } from "../../../services/auth.service";
import useAuthStore from "../../../store/useAuth";

export default function AuthFormForSignup() {
  const [fullName, setFullName] = useLocalStorage("signupFullName", "");
  const [email, setEmail] = useLocalStorage("signupEmail", "");
  const [showPassword, setShowPassword] = useLocalStorage(
    "showSignupPass",
    false,
  );
  const [showConfirmPassword, setShowConfirmPassword] = useLocalStorage(
    "showSignupConfirmPass",
    false,
  );
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const hasMinLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);

  const passwordsMatch =
    confirmPassword.length > 0 && password === confirmPassword;

  const navigate = useNavigate();

  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      await signup({
        fullName,
        email,
        password,
      });

      navigate("/sign-in");

      setFullName("");
      setEmail("");
      setShowPassword(false);
      setShowConfirmPassword(false);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-y-auto bg-white p-6 dark:bg-slate-950 sm:p-8 lg:w-[55%]">
      <div className="flex w-full max-w-105 flex-col py-6 sm:py-8">
        {/* Mobile Logo */}
        <div className="mb-8 flex items-center justify-center gap-3 lg:hidden">
          <img src="/logo.png" alt="PennyPilot" className="h-8 w-8" />

          <span className="text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
            PennyPilot
          </span>
        </div>

        {/* Header */}
        {isAuthenticated && (
          <div className="mb-3 flex justify-center md:justify-end">
            <Link
              to="/dashboard"
              className="
                group inline-flex items-center gap-1.5
                rounded-xl px-3 py-2
                text-sm font-medium
                text-zinc-600 dark:text-zinc-400
                transition-all duration-200
                hover:bg-black/5 dark:hover:bg-white/5
                hover:text-emerald-600 dark:hover:text-emerald-500
                hover:font-semibold hover:tracking-tight
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-emerald-500
              "
            >
              <span className="select-none">Go to Dashboard</span>

              <ArrowRight
                size={17}
                className="
                  transition-transform duration-200
                  group-hover:translate-x-1
                "
              />
            </Link>
          </div>
        )}

        <div className="mb-8 text-center lg:text-left">
          <h1 className="mb-2 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
            Create your account
          </h1>

          <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
            Start taking control of your money today.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div
              role="alert"
              className="
                flex items-start gap-3
                rounded-lg
                border border-red-200
                bg-red-50
                px-4 py-3
                text-sm text-red-700
                dark:border-red-900/50
                dark:bg-red-950/30
                dark:text-red-400
              "
            >
              <AlertCircle
                aria-hidden="true"
                className="mt-0.5 h-5 w-5 shrink-0"
              />

              <p>{error}</p>
            </div>
          )}
          {/* Full Name */}
          <div className="space-y-2">
            <label
              htmlFor="fullName"
              className="block text-xs font-medium uppercase tracking-wider text-slate-600 dark:text-slate-400"
            >
              Full name
            </label>

            <div className="group relative">
              <User
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
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                placeholder="Rahul Vashist"
                onChange={(e) => setFullName(e.target.value)}
                value={fullName}
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
                onChange={(e) => setEmail(e.target.value)}
                value={email}
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
            <label
              htmlFor="password"
              className="block text-xs font-medium uppercase tracking-wider text-slate-600 dark:text-slate-400"
            >
              Password
            </label>

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
                autoComplete="new-password"
                placeholder="••••••••"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                onClick={() => setShowPassword((prev: boolean) => !prev)}
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

            {/* Password Requirements */}
            <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2">
              <PasswordRequirement valid={hasMinLength} label="8+ characters" />

              <PasswordRequirement valid={hasUppercase} label="1 uppercase" />

              <PasswordRequirement valid={hasNumber} label="1 number" />
            </div>
          </div>

          {/* Confirm Password */}
          <div className="space-y-2">
            <label
              htmlFor="confirmPassword"
              className="block text-xs font-medium uppercase tracking-wider text-slate-600 dark:text-slate-400"
            >
              Confirm password
            </label>

            <div className="group relative">
              <LockKeyhole
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
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                autoComplete="new-password"
                placeholder="••••••••"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`
                  h-13 w-full rounded-lg
                  border
                  bg-slate-50
                  pl-10 pr-11
                  text-sm text-slate-900
                  shadow-sm
                  outline-none
                  transition-all
                  placeholder:text-slate-400
                  hover:border-slate-300
                  focus:ring-4
                  dark:bg-slate-900
                  dark:text-slate-100
                  dark:placeholder:text-slate-600
                  dark:hover:border-slate-700
                  ${
                    confirmPassword.length > 0 && !passwordsMatch
                      ? "border-red-300 focus:border-red-500 focus:ring-red-500/10 dark:border-red-800 dark:focus:border-red-500"
                      : "border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/10 dark:border-slate-800 dark:focus:border-emerald-500"
                  }
                `}
              />

              <button
                type="button"
                onClick={() => setShowConfirmPassword((prev: boolean) => !prev)}
                aria-label={
                  showConfirmPassword
                    ? "Hide confirm password"
                    : "Show confirm password"
                }
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
                {showConfirmPassword ? (
                  <EyeOff aria-hidden="true" className="h-5 w-5" />
                ) : (
                  <Eye aria-hidden="true" className="h-5 w-5" />
                )}
              </button>
            </div>

            {confirmPassword.length > 0 && !passwordsMatch && (
              <p className="text-xs text-red-500 dark:text-red-400">
                Passwords do not match.
              </p>
            )}
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-start gap-3 pt-1">
            <div className="relative mt-0.5 flex shrink-0 items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                required
                className="
                  peer
                  h-5 w-5
                  cursor-pointer
                  appearance-none
                  rounded
                  border border-slate-300
                  bg-slate-50
                  transition-all
                  checked:border-emerald-600
                  checked:bg-emerald-600
                  focus:outline-none
                  focus:ring-2
                  focus:ring-emerald-500/20
                  dark:border-slate-700
                  dark:bg-slate-900
                  dark:checked:border-emerald-500
                  dark:checked:bg-emerald-500
                "
              />

              <Check
                aria-hidden="true"
                strokeWidth={2.5}
                className="
                  pointer-events-none
                  absolute left-1/2 top-1/2
                  h-3.5 w-3.5
                  -translate-x-1/2
                  -translate-y-1/2
                  text-white
                  opacity-0
                  transition-opacity
                  peer-checked:opacity-100
                  dark:text-slate-950
                "
              />
            </div>

            <label
              htmlFor="terms"
              className="cursor-pointer select-none text-sm leading-relaxed text-slate-600 dark:text-slate-400"
            >
              I agree to the{" "}
              <Link
                to="/terms"
                className="
                  font-medium
                  text-emerald-600
                  transition-colors
                  hover:text-emerald-700
                  dark:text-emerald-400
                  dark:hover:text-emerald-300
                "
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                to="/privacy"
                className="
                  font-medium
                  text-emerald-600
                  transition-colors
                  hover:text-emerald-700
                  dark:text-emerald-400
                  dark:hover:text-emerald-300
                "
              >
                Privacy Policy
              </Link>
              .
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={
              !termsAccepted ||
              !passwordsMatch ||
              !hasMinLength ||
              !hasNumber ||
              !hasUppercase ||
              isSubmitting
            }
            className="
              group
              mt-2
              flex h-13 w-full
              items-center justify-center gap-2
              rounded-lg
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
              disabled:cursor-not-allowed
              disabled:opacity-50
              disabled:hover:bg-emerald-600
              disabled:hover:shadow-sm
              dark:bg-emerald-500
              dark:text-slate-950
              dark:hover:bg-emerald-400
              dark:disabled:hover:bg-emerald-500
            "
          >
            <span>
              {isSubmitting ? "Creating account..." : "Create account"}
            </span>

            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
            />
          </button>
        </form>

        {/* Footer Link */}
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Already have an account?{" "}
            <Link
              to="/sign-in"
              className="
                ml-1
                font-semibold
                text-emerald-600
                transition-colors
                hover:text-emerald-700
                dark:text-emerald-400
                dark:hover:text-emerald-300
              "
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

function PasswordRequirement({
  valid,
  label,
}: {
  valid: boolean;
  label: string;
}) {
  return (
    <div className="flex items-center gap-1.5">
      <Check
        aria-hidden="true"
        strokeWidth={2}
        className={`
          h-4 w-4
          transition-colors
          ${
            valid
              ? "text-emerald-600 dark:text-emerald-400"
              : "text-slate-300 dark:text-slate-700"
          }
        `}
      />

      <span
        className={`
          text-xs
          transition-colors
          ${
            valid
              ? "text-slate-600 dark:text-slate-400"
              : "text-slate-400 dark:text-slate-600"
          }
        `}
      >
        {label}
      </span>
    </div>
  );
}
