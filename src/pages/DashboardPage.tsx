import Header from "../components/Header";
import Sidebar from "../features/dashboard/Sidebar";

export default function DashboardPage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <Header />
            <Sidebar />
        </main>
    )
}