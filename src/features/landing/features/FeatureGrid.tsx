import FeatureCard from "./FeatureCard";
import { features } from "./features";

export default function FeatureGrid() {
  return (
    <section 
      id="features"
      className="py-28 bg-slate-50/40 dark:bg-slate-950/40 relative"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Heading */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="rounded-full bg-emerald-100 px-4 py-2 text-xs md:text-sm font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
            Everything you need
          </span>
          

          <h2 className="mt-6 font-manrope text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Every financial tool,
            <br />
            one simple dashboard.
          </h2>

          <p className="mt-6 font-hanken text-md md:text-xl leading-relaxed text-slate-600 dark:text-slate-400">
            From tracking daily expenses to analyzing long-term spending,
            PennyPilot gives you everything you need to manage your finances
            with confidence.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}