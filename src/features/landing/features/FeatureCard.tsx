import type { Feature } from "./features";

interface FeatureCardProps {
  feature: Feature;
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <div className="group relative rounded-3xl border border-slate-200/70 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
      <div
        className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${feature.iconBg} transition-transform duration-300 group-hover:scale-110`}
      >
        <span
          className={`material-symbols-rounded text-3xl ${feature.iconColor}`}
        >
          {feature.icon}
        </span>
      </div>

      <h3 className="mb-3 font-manrope text-lg md:text-2xl font-semibold text-slate-900 dark:text-white">
        {feature.title}
      </h3>

      <p className="font-hanken text-sm md:text-lg leading-relaxed text-slate-600 dark:text-slate-400">
        {feature.description}
      </p>
    </div>
  );
}