import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../../store/useAuth";

function AuthLoading() {
    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#fafaf7] text-zinc-950 transition-colors duration-300 dark:bg-[#0b0d0c] dark:text-white">
            {/* Ambient background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(16,185,129,0.10),transparent_32%)] dark:bg-[radial-gradient(circle_at_50%_42%,rgba(16,185,129,0.13),transparent_32%)]" />

            {/* Subtle financial grid */}
            <div
                className="
                    absolute inset-0 opacity-[0.035]
                    [background-image:linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)]
                    [background-size:32px_32px]
                    dark:opacity-[0.025]
                    dark:[background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
                "
            />

            <div className="relative flex w-full max-w-sm flex-col items-center px-6">

                {/* Penny stack */}
                <div className="relative h-24 w-24">

                    {/* Floating penny */}
                    <div
                        className="
                            absolute left-1/2 top-0 h-12 w-12
                            -translate-x-1/2
                            animate-[pennyFloat_2.2s_ease-in-out_infinite]
                            rounded-full
                            border-[3px]
                            border-emerald-500
                            bg-gradient-to-br from-emerald-300 via-emerald-400 to-emerald-600
                            shadow-[0_12px_30px_rgba(16,185,129,0.25)]
                            dark:shadow-[0_12px_30px_rgba(16,185,129,0.18)]
                        "
                    >
                        <div className="absolute inset-[5px] rounded-full border border-white/30" />

                        <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-white">
                            $
                        </span>
                    </div>

                    {/* Back penny */}
                    <div
                        className="
                            absolute bottom-1 left-1/2 h-12 w-12
                            -translate-x-[58%]
                            rounded-full
                            border-[3px]
                            border-zinc-300
                            bg-gradient-to-br from-zinc-100 to-zinc-300
                            shadow-sm
                            dark:border-zinc-600
                            dark:from-zinc-700
                            dark:to-zinc-800
                            dark:shadow-black/20
                        "
                    />

                    {/* Front penny */}
                    <div
                        className="
                            absolute bottom-0 left-1/2 h-12 w-12
                            -translate-x-[42%]
                            rounded-full
                            border-[3px]
                            border-emerald-600
                            bg-gradient-to-br from-emerald-400 to-emerald-600
                            shadow-[0_8px_24px_rgba(16,185,129,0.18)]
                            dark:shadow-[0_8px_24px_rgba(16,185,129,0.12)]
                        "
                    >
                        <div className="absolute inset-[5px] rounded-full border border-white/20" />
                    </div>
                </div>

                {/* Brand */}
                <div className="mt-10 flex items-center gap-2.5">
                    <div
                        className="
                            flex h-7 w-7 items-center justify-center
                            rounded-lg
                            bg-emerald-500
                            text-sm font-bold text-white
                            shadow-sm shadow-emerald-500/20
                        "
                    >
                        $
                    </div>

                    <span className="text-lg font-bold tracking-tight">
                        Penny Pilot
                    </span>
                </div>

                {/* Message */}
                <div className="mt-5 text-center">
                    <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">
                        Getting your finances ready
                    </h1>

                    <p className="mt-2 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                        Counting the little things that matter
                        <span className="ml-0.5 inline-flex w-5 text-left">
                            <span className="animate-[dot_1.4s_infinite]">.</span>
                            <span className="animate-[dot_1.4s_0.2s_infinite]">.</span>
                            <span className="animate-[dot_1.4s_0.4s_infinite]">.</span>
                        </span>
                    </p>
                </div>

                {/* Progress dots */}
                <div className="mt-8 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500 [animation-delay:100ms]" />
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500 [animation-delay:200ms]" />
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500 [animation-delay:300ms]" />
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500 [animation-delay:400ms]" />
                </div>

                {/* Microcopy */}
                <p className="mt-6 text-[10px] font-medium uppercase tracking-[0.24em] text-zinc-400 dark:text-zinc-600">
                    Every penny has a place
                </p>
            </div>

            <style>{`
                @keyframes pennyFloat {
                    0%, 100% {
                        transform: translate(-50%, 0) rotate(0deg);
                    }

                    50% {
                        transform: translate(-50%, -7px) rotate(4deg);
                    }
                }

                @keyframes dot {
                    0%, 20% {
                        opacity: 0.15;
                    }

                    40% {
                        opacity: 1;
                    }

                    100% {
                        opacity: 0.15;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    *,
                    *::before,
                    *::after {
                        animation-duration: 0.01ms !important;
                        animation-iteration-count: 1 !important;
                    }
                }
            `}</style>
        </div>
    );
}

export default function ProtectedRoute() {
    const { isAuthenticated, isLoading } = useAuthStore();

    if (isLoading) {
        return <AuthLoading />;
    }

    if (!isAuthenticated) {
        return <Navigate to="/sign-in" replace />;
    }

    return <Outlet />;
}