import Sidebar from "../components/Sidebar";
import Toolbar from "../features/transactions/Toolbar";
import TransactionList from "../features/transactions/TransactionList";

export default function TransactionsPage() {
    return (
        <main className="dark:bg-slate-950 min-h-screen">
            <Sidebar />
            <section className="flex flex-col gap-5 xl:pl-82 px-5 pt-10 h-full w-full">
                <Toolbar />
                <TransactionList />
            </section>
        </main>
    )
}