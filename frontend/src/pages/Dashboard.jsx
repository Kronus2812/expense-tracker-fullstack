import { useAuth } from '../context/AuthContext';
import { LayoutDashboard, LogOut, Plus, ArrowUpCircle, ArrowDownCircle, Wallet } from 'lucide-react';

const Dashboard = () => {
    const { user, logout } = useAuth();

    return (
        <div className="min-h-screen bg-slate-950 text-white">
            <nav className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-xl sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                <Wallet className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold tracking-tight">ExpenseTracker</span>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                            <div className="text-sm hidden sm:block">
                                <span className="text-slate-400">Welcome, </span>
                                <span className="text-white font-medium">{user?.name}</span>
                            </div>
                            <button
                                onClick={logout}
                                className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all"
                                title="Logout"
                            >
                                <LogOut className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <header className="mb-8">
                    <h1 className="text-3xl font-bold">Dashboard</h1>
                    <p className="text-slate-400">Here's your financial overview for this month.</p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {/* Summary Cards */}
                    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-slate-400 text-sm font-medium uppercase tracking-wider">Total Balance</span>
                            <div className="p-2 bg-blue-500/10 rounded-lg">
                                <Wallet className="w-5 h-5 text-blue-500" />
                            </div>
                        </div>
                        <div className="text-3xl font-bold">$0.00</div>
                    </div>

                    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-slate-400 text-sm font-medium uppercase tracking-wider">Incomes</span>
                            <div className="p-2 bg-emerald-500/10 rounded-lg">
                                <ArrowUpCircle className="w-5 h-5 text-emerald-500" />
                            </div>
                        </div>
                        <div className="text-3xl font-bold text-emerald-500">+$0.00</div>
                    </div>

                    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-slate-400 text-sm font-medium uppercase tracking-wider">Expenses</span>
                            <div className="p-2 bg-red-500/10 rounded-lg">
                                <ArrowDownCircle className="w-5 h-5 text-red-400" />
                            </div>
                        </div>
                        <div className="text-3xl font-bold text-red-400">-$0.00</div>
                    </div>
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col items-center justify-center min-h-[400px]">
                    <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-4">
                        <Plus className="w-8 h-8 text-slate-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white">No transactions yet</h3>
                    <p className="text-slate-400 text-center max-w-xs mb-6">
                        Start by adding your first income or expense to see the detailed analytics.
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-medium transition-all shadow-lg shadow-blue-600/20">
                        Add My First Transaction
                    </button>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
