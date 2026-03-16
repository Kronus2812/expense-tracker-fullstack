import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogIn, Mail, Lock, Loader2, Sparkles } from 'lucide-react';

const Login = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            await login(credentials);
            navigate('/dashboard');
        } catch (err) {
            setError(err.response?.data?.message || 'Credenciales incorrectas. Inténtalo de nuevo.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center p-4 relative overflow-hidden">
            <div className="glow-mesh"></div>
            
            {/* Animated Circles in background */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-indigo-600/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>

            <div className="w-full max-w-md relative z-10">
                <div className="glass-effect rounded-3xl shadow-2xl p-8 sm:p-10 border border-white/5">
                    <div className="flex flex-col items-center mb-10 text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-blue-900/30">
                            <Sparkles className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-4xl font-extrabold text-white tracking-tight mb-3">
                            Bienvenido
                        </h1>
                        <p className="text-slate-400 font-medium">
                            Accede a tu cuenta y gestiona tus finanzas profesionales.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {error && (
                            <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-xl text-sm font-medium animate-shake">
                                {error}
                            </div>
                        )}

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-300 ml-1">Email</label>
                            <div className="relative group">
                                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors">
                                    <Mail className="w-5 h-5" />
                                </span>
                                <input
                                    type="email"
                                    required
                                    className="w-full bg-slate-800/40 border border-slate-700/50 rounded-2xl py-3.5 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all"
                                    placeholder="correo@ejemplo.com"
                                    value={credentials.email}
                                    onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center px-1">
                                <label className="text-sm font-semibold text-slate-300">Contraseña</label>
                                <a href="#" className="text-xs text-blue-400 hover:text-blue-300 transition-colors">¿Olvidaste tu contraseña?</a>
                            </div>
                            <div className="relative group">
                                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors">
                                    <Lock className="w-5 h-5" />
                                </span>
                                <input
                                    type="password"
                                    required
                                    className="w-full bg-slate-800/40 border border-slate-700/50 rounded-2xl py-3.5 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all"
                                    placeholder="••••••••"
                                    value={credentials.password}
                                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="btn-primary py-4 text-lg mt-4"
                        >
                            {loading ? (
                                <Loader2 className="w-6 h-6 animate-spin" />
                            ) : (
                                <>
                                    <span>Iniciar Sesión</span>
                                    <LogIn className="w-5 h-5" />
                                </>
                            )}
                        </button>
                    </form>

                    <div className="mt-10 text-center pt-8 border-t border-white/5">
                        <p className="text-slate-400 font-medium">
                            ¿No tienes una cuenta?{' '}
                            <Link to="/register" className="text-blue-400 hover:text-blue-300 font-bold ml-1 transition-colors">
                                Regístrate gratis
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
