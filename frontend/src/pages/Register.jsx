import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { UserPlus, Mail, Lock, User as UserIcon, Loader2, Rocket } from 'lucide-react';

const Register = () => {
    const [data, setData] = useState({ 
        name: '', 
        email: '', 
        password: '', 
        password_confirmation: '' 
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { register } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            await register(data);
            navigate('/dashboard');
        } catch (err) {
            setError(err.response?.data?.message || 'Error al crear la cuenta. Revisa tus datos.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center p-4 py-12 relative overflow-hidden">
            <div className="glow-mesh"></div>
            
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>

            <div className="w-full max-w-lg relative z-10">
                <div className="glass-effect rounded-[2.5rem] shadow-2xl p-8 sm:p-12 border border-white/5">
                    <div className="flex flex-col items-center mb-10 text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-indigo-900/30">
                            <Rocket className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-4xl font-extrabold text-white tracking-tight mb-3">
                            Únete ahora
                        </h1>
                        <p className="text-slate-400 font-medium max-w-xs">
                            Crea tu cuenta en segundos y empieza a ahorrar como un profesional.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {error && (
                            <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-xl text-sm font-medium">
                                {error}
                            </div>
                        )}

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-300 ml-1">Nombre Completo</label>
                            <div className="relative group">
                                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors">
                                    <UserIcon className="w-5 h-5" />
                                </span>
                                <input
                                    type="text"
                                    required
                                    className="w-full bg-slate-800/40 border border-slate-700/50 rounded-2xl py-3.5 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium"
                                    placeholder="Ej: Tomas Martinez"
                                    value={data.name}
                                    onChange={(e) => setData({ ...data, name: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-300 ml-1">Email Corporativo</label>
                            <div className="relative group">
                                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors">
                                    <Mail className="w-5 h-5" />
                                </span>
                                <input
                                    type="email"
                                    required
                                    className="w-full bg-slate-800/40 border border-slate-700/50 rounded-2xl py-3.5 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium"
                                    placeholder="tomas@ejemplo.com"
                                    value={data.email}
                                    onChange={(e) => setData({ ...data, email: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-300 ml-1">Contraseña</label>
                                <div className="relative group">
                                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors">
                                        <Lock className="w-5 h-5" />
                                    </span>
                                    <input
                                        type="password"
                                        required
                                        className="w-full bg-slate-800/40 border border-slate-700/50 rounded-2xl py-3.5 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium"
                                        placeholder="••••••••"
                                        value={data.password}
                                        onChange={(e) => setData({ ...data, password: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-300 ml-1">Repetir</label>
                                <div className="relative group">
                                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors">
                                        <Lock className="w-5 h-5" />
                                    </span>
                                    <input
                                        type="password"
                                        required
                                        className="w-full bg-slate-800/40 border border-slate-700/50 rounded-2xl py-3.5 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium"
                                        placeholder="••••••••"
                                        value={data.password_confirmation}
                                        onChange={(e) => setData({ ...data, password_confirmation: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold py-4 rounded-2xl shadow-xl shadow-indigo-900/30 transition-all flex items-center justify-center space-x-2 mt-6 active:scale-[0.98]"
                        >
                            {loading ? (
                                <Loader2 className="w-6 h-6 animate-spin" />
                            ) : (
                                <>
                                    <span>Crear mi Cuenta</span>
                                    <Rocket className="w-5 h-5" />
                                </>
                            )}
                        </button>
                    </form>

                    <div className="mt-10 text-center pt-8 border-t border-white/5">
                        <p className="text-slate-400 font-medium">
                            ¿Ya tienes cuenta?{' '}
                            <Link to="/login" className="text-blue-400 hover:text-blue-300 font-bold ml-1 transition-colors">
                                Inicia Sesión
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
