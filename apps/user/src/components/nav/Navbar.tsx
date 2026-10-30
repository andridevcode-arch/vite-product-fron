import { motion } from 'framer-motion'
import { ShoppingBag, Sparkles, Users } from 'lucide-react'

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 border-b border-white/10 backdrop-blur-md bg-slate-900/60"
    >
      <div className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center shadow-lg shadow-violet-500/30">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter text-white">
                NARA<span className="text-violet-400">.</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-blue-400/70 font-medium">
                Digital Goods
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#home" className="hover:text-white transition-colors">
              Home
            </a>
            <a href="#shop" className="hover:text-white transition-colors">
              Shop
            </a>
            <a href="#features" className="hover:text-white transition-colors">
              Features
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white transition-colors">
              <Users className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
