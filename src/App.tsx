import { TechBackground } from './TechBackground'

function App() {
    return (
        <div className="relative min-h-screen w-full bg-slate-950 text-white flex items-center justify-center overflow-hidden">
            <TechBackground />
            <div className="relative z-10 text-center px-4">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    Configuração Completa
                </h1>
                <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
                    O componente TechBackground está ativo e pronto para uso.
                </p>
            </div>
        </div>
    )
}

export default App
