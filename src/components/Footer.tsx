import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-black">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link
              to="/"
              className="font-manrope text-3xl font-bold text-slate-900 dark:text-white"
            >
              PennyPilot
            </Link>

            <p className="mt-4 max-w-md font-hanken text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              A clean, modern expense tracker that helps you manage budgets,
              monitor spending, and build better financial habits.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-manrope text-lg font-semibold text-slate-900 dark:text-white">
              Product
            </h3>

            <ul className="mt-5 space-y-3 font-hanken text-slate-600 dark:text-slate-400">
              <li>
                <a href="#features" className="transition hover:text-emerald-600">
                  Features
                </a>
              </li>

              <li>
                <a href="#how-it-works" className="transition hover:text-emerald-600">
                  How It Works
                </a>
              </li>

              <li>
                <Link to="/signup" className="transition hover:text-emerald-600">
                  Get Started
                </Link>
              </li>

              <li>
                <Link to="/login" className="transition hover:text-emerald-600">
                  Sign In
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-manrope text-lg font-semibold text-slate-900 dark:text-white">
              Resources
            </h3>

            <ul className="mt-5 space-y-3 font-hanken text-slate-600 dark:text-slate-400">
              <li>
                <a
                  href="https://github.com/Rahul-Vashistt/pennypilot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-emerald-600"
                >
                  GitHub
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-emerald-600">
                  Documentation
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-emerald-600">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-emerald-600">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-5 border-t border-slate-200 pt-8 dark:border-slate-800 md:flex-row">
          <p className="font-hanken text-sm text-slate-500 dark:text-slate-500">
            © {new Date().getFullYear()} PennyPilot. Built with ❤️ by Rahul
            Vashist.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/Rahul-Vashistt/pennypilot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 transition hover:text-emerald-600 dark:hover:text-emerald-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-6 w-6 fill-current"
              >
                <path d="M12 .5C5.65.5.5 5.66.5 12.02c0 5.09 3.29 9.4 7.86 10.93.58.11.79-.25.79-.56v-2.02c-3.2.69-3.87-1.54-3.87-1.54-.52-1.34-1.28-1.7-1.28-1.7-1.05-.71.08-.69.08-.69 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.29-5.25-5.73 0-1.27.45-2.31 1.2-3.13-.12-.3-.52-1.5.11-3.13 0 0 .98-.31 3.2 1.2a11.1 11.1 0 0 1 5.82 0c2.21-1.51 3.19-1.2 3.19-1.2.64 1.63.24 2.83.12 3.13.75.82 1.2 1.86 1.2 3.13 0 4.45-2.7 5.44-5.27 5.72.42.36.79 1.06.79 2.14v3.17c0 .31.21.68.8.56A11.53 11.53 0 0 0 23.5 12C23.5 5.66 18.35.5 12 .5Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}