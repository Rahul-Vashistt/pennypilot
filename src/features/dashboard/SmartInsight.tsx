import { Lightbulb } from "lucide-react";

export default function SmartInsight(){
    return (
        <section className="relative group overflow-hidden rounded-3xl border border-zinc-200/50 bg-emerald-600/5 shadow-xl p-6 sm:p-8 dark:border-slate-800/70 dark:bg-slate-900 mb-5 hover:-translate-y-1 transition-all duration-200">
            <div className="flex justify-around items-start gap-4">
                <span className="bg-emerald-600 rounded-full group-hover:bg-yellow-500 p-2 transition-colors duration-300 ">
                    <Lightbulb 
                        size={24}
                        className="group-hover:text-white transition-colors duration-300"
                    />
                </span>

                <div className="flex flex-col gap-3 items-start">
                    <h2 className="text-zinc-950 dark:text-zinc-50 font-bold cursor-default">Smart Insight</h2>
                    <p className="text-zinc-500 dark:text-zinc-400 cursor-default">You're spending 18% less on dining this month. Your food spending is trending below last month's average. Keep it up!</p>
                </div>
            </div>
        </section>
    )
}