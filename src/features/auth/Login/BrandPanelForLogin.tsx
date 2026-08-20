import LoginLightBrandImg from "../../../assets/LoginLightBrandImg.png";
import LoginDarkBrandImg from "../../../assets/LoginDarkBrandImg.png";
import { useTheme } from "../../../context/useTheme";

export default function BrandPanelForLogin() {
  const { isDark } = useTheme();

  return (
    <div className="relative min-h-screen hidden w-[45%] flex-col justify-between overflow-hidden bg-slate-50 p-8 dark:bg-slate-950 lg:flex">
      {/* Decorative background blur */}
      <div
        className="pointer-events-none absolute left-[-10%] top-[-10%] h-[50%] w-[50%] rounded-full bg-emerald-500/10 blur-[100px] dark:bg-emerald-400/10"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute bottom-[-10%] right-[-10%] h-[60%] w-[60%] rounded-full bg-emerald-600/10 blur-[120px] dark:bg-emerald-400/10"
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

      {/* Center Content & Visualization */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center">
        <div className="relative mx-auto mb-8 w-full max-w-150">
          <div className="relative aspect-square w-full drop-shadow-xl transition-transform duration-700 hover:scale-[1.02]">
            <img
              src={isDark ? LoginDarkBrandImg : LoginLightBrandImg}
              alt="PennyPilot financial illustration"
              className="h-full w-full object-contain mix-blend-multiply dark:mix-blend-normal"
            />
          </div>
        </div>

        <div className="mx-auto max-w-[320px] text-center -translate-y-12">
          <h2 className="text-3xl mb-2 font-semibold leading-tight tracking-tight text-slate-900 dark:text-slate-100">
            Your Money.
            <br />
            Under Control.
            <br />
            Every Day.
          </h2>

          <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
            Sign in to see how your finances are becoming clearer.
          </p>
        </div>
      </div>
    </div>
  );
}