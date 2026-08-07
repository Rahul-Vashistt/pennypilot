import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-4xl bg-emerald-700 px-6 py-14 shadow-xl sm:px-10 md:px-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-manrope text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Take Control of
              <br className="hidden sm:block" />
              {" "}Your Money.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl font-hanken text-base leading-relaxed text-emerald-50/90 sm:text-lg md:mt-6 md:text-xl">
              Start tracking your money with a clean, simple workspace built
              for everyday budgeting.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                to="/signup"
                className="flex w-full items-center justify-center rounded-full bg-white px-8 py-4 font-manrope text-base font-semibold text-emerald-700 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl active:scale-95 sm:w-auto md:px-10 md:py-5 md:text-lg"
              >
                Create Free Account
              </Link>

              <Link
                to="/login"
                className="flex w-full items-center justify-center rounded-full border border-white/30 px-8 py-4 font-manrope text-base font-semibold text-white transition-all duration-200 hover:bg-white/10 active:scale-95 sm:w-auto md:px-10 md:py-5 md:text-lg"
              >
                Sign In
              </Link>
            </div>

            <p className="mt-8 font-hanken text-sm leading-relaxed text-emerald-100/80 sm:text-base">
              Free to get started • Secure authentication • Your data stays
              yours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}