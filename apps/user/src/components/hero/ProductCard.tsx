import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'

interface ProductCardProps {
  title: string
  subtitle: string
  price: string
  color: string
  imageUrl?: string
  onClick?: () => void
}

export function ProductCard({
  title,
  subtitle,
  price,
  color,
  imageUrl,
  onClick,
}: ProductCardProps) {
  return (
    <motion.article
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group relative rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md p-6 overflow-hidden transition-all duration-300"
      onClick={onClick}
    >
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20 mix-blend-screen" style={{ backgroundColor: color }} />

      <div className="relative z-10 mb-6 h-48 rounded-2xl overflow-hidden bg-slate-900/30 border border-white/5">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
            <div className={`w-24 h-24 rounded-full bg-slate-700 ${color}/30 flex items-center justify-center animate-pulse`}>
              <div className={`w-12 h-12 ${color} rounded-full flex items-center justify-center`}>
                <Play className="w-6 h-6 text-white ml-0.5" />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="relative z-10">
        <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
        <p className="text-slate-400 text-sm mb-4">{subtitle}</p>
        <div className="flex items-center justify-between">
          <span className="font-bold text-violet-400">{price}</span>
          <button className="w-10 h-10 rounded-full bg-violet-500/20 hover:bg-violet-500 text-violet-400 flex items-center justify-center transition-all group-hover:text-white">
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.article>
  )
}
