import SignupLightBrandImg from "../../../assets/SignupLightBrandImg.png";
import SignupDarkBrandImg from "../../../assets/SignupDarkBrandImg.png";
import { useTheme } from "../../../context/useTheme";

export default function BrandPanelForSignup() {
  const { isDark } = useTheme();

  return (
    <div className="relative hidden min-h-screen w-[45%] flex-col justify-between overflow-hidden bg-slate-50 p-8 dark:bg-slate-950 lg:flex">
      {/* Decorative background blur */}
      <div
        className="pointer-events-none absolute left-[-10%] top-[-10%] h-[50%] w-[50%] rounded-full bg-emerald-500/10 blur-[100px] dark:bg-emerald-400/10"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute bottom-[-10%] right-[-10%] h-[60%] w-[60%] rounded-full bg-emerald-600/10 blur-[120px] dark:bg-emerald-400/10"
        aria-hidden="true"
      />

      {/* Additional soft center glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/5 blur-[100px] dark:bg-emerald-400/5"
        aria-hidden="true"
      />

      {/* Top Branding */}
      <div className="relative z-10">
        <div className="mb-8 flex items-center gap-3">
          <img
            src="/logo.png"
            alt="PennyPilot Logo"
            className="h-8 w-8"
          />

          <span className="text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
            PennyPilot
          </span>
        </div>
      </div>

      {/* Center Content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center">
        {/* Visualization */}
        <div className="relative mx-auto mb-8 flex w-full max-w-150 items-center justify-center">
          <div className="relative aspect-square w-full">
            <img
              src={isDark ? SignupDarkBrandImg : SignupLightBrandImg}
              alt="Abstract fintech illustration representing intelligent financial tracking and money management"
              className="
                h-full
                w-full
                object-contain
                opacity-90
                drop-shadow-2xl
                transition-transform
                duration-700
                ease-out
                hover:-translate-y-2
                hover:scale-[1.02]
              "
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="mx-auto max-w-105 text-center -translate-y-12">
          <h2 className="mb-4 text-3xl font-semibold leading-tight tracking-tight text-slate-900 dark:text-slate-100">
            Precision control over your financial trajectory.
          </h2>

          <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
            Join PennyPilot to experience intelligent tracking, clear
            insights, and effortless money management designed for the
            modern professional.
          </p>
        </div>
      </div>

      {/* Subtle foreground gradient */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          bg-linear-to-br
          from-emerald-500/5
          via-transparent
          to-emerald-600/5
          mix-blend-multiply
          dark:mix-blend-normal
        "
        aria-hidden="true"
      />
    </div>
  );
}