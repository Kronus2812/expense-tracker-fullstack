import { useState, useEffect } from 'react';
import { 
  Wallet, 
  ArrowUpCircle, 
  ArrowDownCircle, 
  Plus, 
  History, 
  PieChart, 
  TrendingUp, 
  Filter,
  Calendar,
  DollarSign,
  Tag,
  ChevronRight,
  MoreVertical,
  Trash2,
  Edit2,
  Sparkles
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Cell,
  PieChart as RePie,
  Pie
} from 'recharts';

const App = () => {
    // Datos de ejemplo para impacto visual inmediato
    const [transactions, setTransactions] = useState([
        { id: 1, type: 'expense', category: 'Comida', amount: 45.50, date: '2026-03-15', description: 'Cena con amigos' },
        { id: 2, type: 'income', category: 'Salario', amount: 2500.00, date: '2026-03-01', description: 'Pago mensual' },
        { id: 3, type: 'expense', category: 'Transporte', amount: 15.00, date: '2026-03-14', description: 'Uber al trabajo' },
        { id: 4, type: 'expense', category: 'Entretenimiento', amount: 12.99, date: '2026-03-10', description: 'Netflix' },
    ]);

    const stats = {
        balance: 2426.51,
        income: 2500.00,
        expenses: 73.49
    };

    const chartData = [
        { name: 'Lun', income: 0, expense: 15 },
        { name: 'Mar', income: 0, expense: 12 },
        { name: 'Mie', income: 0, expense: 0 },
        { name: 'Jue', income: 0, expense: 45 },
        { name: 'Vie', income: 2500, expense: 0 },
        { name: 'Sab', income: 0, expense: 0 },
        { name: 'Dom', income: 0, expense: 0 },
    ];

    const COLORS = ['#3b82f6', '#10b981', '#f43f5e', '#fbbf24', '#8b5cf6'];

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30">
            <div className="glow-mesh"></div>
            
            {/* Encabezado / Barra de Navegación */}
            <nav className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-2xl">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-900/40">
                            <Wallet className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <span className="text-xl font-black text-white tracking-tight">XPENSE</span>
                            <span className="text-xs block text-blue-500 font-bold -mt-1 tracking-widest">TRACKER</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <button className="hidden md:flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors">
                            <Calendar className="w-4 h-4" />
                            Marzo 2026
                        </button>
                        <button className="bg-white/5 hover:bg-white/10 border border-white/10 p-2.5 rounded-xl transition-all">
                            <Plus className="w-5 h-5 text-white" />
                        </button>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-6 py-10 space-y-10">
                {/* Sección Hero / Tarjetas de Resumen */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="glass-effect p-8 rounded-[2rem] relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                            <TrendingUp className="w-24 h-24 text-blue-500" />
                        </div>
                        <p className="text-slate-400 font-semibold mb-2">Balance Total</p>
                        <h2 className="text-4xl font-black text-white">${stats.balance.toLocaleString()}</h2>
                        <div className="mt-4 flex items-center gap-2 text-emerald-400 text-sm font-bold bg-emerald-400/10 w-fit px-3 py-1 rounded-full">
                            +12.5% este mes
                        </div>
                    </div>

                    <div className="glass-effect p-8 rounded-[2rem] border-emerald-500/10">
                        <div className="flex items-center justify-between mb-6">
                             <div className="p-3 bg-emerald-500/10 rounded-2xl">
                                <ArrowUpCircle className="w-6 h-6 text-emerald-500" />
                            </div>
                            <span className="text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Ingresos</span>
                        </div>
                        <h2 className="text-3xl font-black text-white">${stats.income.toLocaleString()}</h2>
                        <p className="text-slate-500 mt-1 font-medium">Desde 1 de Marzo</p>
                    </div>

                    <div className="glass-effect p-8 rounded-[2rem] border-rose-500/10">
                        <div className="flex items-center justify-between mb-6">
                             <div className="p-3 bg-rose-500/10 rounded-2xl">
                                <ArrowDownCircle className="w-6 h-6 text-rose-500" />
                            </div>
                            <span className="text-rose-500 bg-rose-500/10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Gastos</span>
                        </div>
                        <h2 className="text-3xl font-black text-white">${stats.expenses.toLocaleString()}</h2>
                        <p className="text-slate-500 mt-1 font-medium">Total acumulado</p>
                    </div>
                </section>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Área Principal de Analítica */}
                    <div className="lg:col-span-8 space-y-10">
                        {/* Área de Gráficos */}
                        <section className="glass-effect p-8 rounded-[2.5rem]">
                            <div className="flex items-center justify-between mb-10">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1">Actividad Semanal</h3>
                                    <p className="text-sm text-slate-500">Comparativa de ingresos y gastos</p>
                                </div>
                                <div className="flex gap-2">
                                    <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div> Ingresos
                                    </div>
                                    <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                                        <div className="w-3 h-3 bg-rose-500 rounded-full"></div> Gastos
                                    </div>
                                </div>
                            </div>
                            <div className="h-[300px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={chartData}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
                                        <XAxis 
                                            dataKey="name" 
                                            axisLine={false} 
                                            tickLine={false} 
                                            tick={{fill: '#64748b', fontSize: 12, fontWeight: 600}} 
                                            dy={10}
                                        />
                                        <Tooltip 
                                            cursor={{fill: '#1e293b'}} 
                                            contentStyle={{backgroundColor: '#0f172a', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)'}}
                                        />
                                        <Bar dataKey="income" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={20} />
                                        <Bar dataKey="expense" fill="#f43f5e" radius={[4, 4, 0, 0]} barSize={20} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </section>

                        {/* Lista de Transacciones Recientes */}
                        <section className="space-y-6">
                            <div className="flex items-center justify-between">
                                <h3 className="text-2xl font-black text-white">Transacciones Recientes</h3>
                                <button className="text-sm font-bold text-blue-500 hover:text-blue-400 flex items-center gap-1 transition-colors">
                                    Ver Todo <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>

                            <div className="space-y-4">
                                {transactions.map((tr) => (
                                    <div key={tr.id} className="glass-effect group hover:bg-white/5 p-5 rounded-3xl flex items-center justify-between transition-all">
                                        <div className="flex items-center gap-5">
                                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-105 ${
                                                tr.type === 'income' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-rose-500/10 text-rose-500'
                                            }`}>
                                                {tr.type === 'income' ? <ArrowUpCircle className="w-7 h-7" /> : <ArrowDownCircle className="w-7 h-7" />}
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-white transition-colors group-hover:text-blue-400">{tr.description}</h4>
                                                <div className="flex items-center gap-3 text-sm text-slate-500 mt-0.5">
                                                    <span className="flex items-center gap-1 font-semibold uppercase tracking-wider text-[10px]">
                                                        <Tag className="w-3 h-3" /> {tr.category}
                                                    </span>
                                                    <span>•</span>
                                                    <span>{tr.date}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className={`text-xl font-black ${tr.type === 'income' ? 'text-emerald-500' : 'text-slate-200'}`}>
                                                {tr.type === 'income' ? '+' : '-'}${tr.amount.toFixed(2)}
                                            </div>
                                            <div className="flex justify-end gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button className="p-1.5 text-slate-500 hover:text-blue-400 transition-colors"><Edit2 className="w-4 h-4" /></button>
                                                <button className="p-1.5 text-slate-500 hover:text-rose-400 transition-colors"><Trash2 className="w-4 h-4" /></button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Área Lateral (Sidebar) */}
                    <div className="lg:col-span-4 space-y-10">
                        {/* Distribución por Categorías */}
                        <section className="glass-effect p-8 rounded-[2.5rem]">
                            <h3 className="text-xl font-bold text-white mb-6">Categorías</h3>
                            <div className="h-[250px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <RePie>
                                        <Pie
                                            data={[{name: 'Comida', value: 45}, {name: 'Servicios', value: 30}, {name: 'Ocio', value: 25}]}
                                            innerRadius={60}
                                            outerRadius={80}
                                            paddingAngle={8}
                                            dataKey="value"
                                        >
                                            {COLORS.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="rgba(255,255,255,0.05)" />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                    </RePie>
                                </ResponsiveContainer>
                            </div>
                            <div className="space-y-3 mt-6">
                                {['Comida', 'Salario', 'Transporte'].map((cat, i) => (
                                    <div key={cat} className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-3 h-3 rounded-full" style={{backgroundColor: COLORS[i]}}></div>
                                            <span className="text-sm font-semibold text-slate-400">{cat}</span>
                                        </div>
                                        <span className="text-sm font-bold text-white">{i === 0 ? '62%' : '18%'}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Consejos Rápidos o Información Meta */}
                        <section className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-[2.5rem] shadow-xl shadow-blue-900/40 relative overflow-hidden group">
                            <Sparkles className="absolute -bottom-6 -right-6 w-32 h-32 text-white/10 group-hover:rotate-12 transition-transform duration-700" />
                            <h3 className="text-2xl font-black text-white mb-4 relative z-10">¡Buen trabajo!</h3>
                            <p className="text-blue-100 font-medium mb-6 relative z-10 leading-relaxed">
                                Estás ahorrando un 15% más que el mes pasado. Sigue así para alcanzar tu meta de $5,000 en Mayo.
                            </p>
                            <button className="bg-white text-blue-600 px-6 py-3 rounded-2xl font-black shadow-lg hover:scale-105 active:scale-95 transition-all text-sm uppercase tracking-wider relative z-10">
                                Ver Sugerencias
                            </button>
                        </section>
                    </div>
                </div>
            </main>

            <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-white/5 text-center">
                <p className="text-slate-600 text-sm font-semibold tracking-widest uppercase">
                    &copy; 2026 Expense Tracker Full Stack • Design by Antigravity
                </p>
            </footer>
        </div>
    );
};

export default App;
