import { motion } from 'framer-motion'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-blue-600/30 blur-[120px] animate-pulse-slow" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-violet-600/30 blur-[120px] animate-pulse-slow" animation-delay="2000ms" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-blue-500/20 blur-[100px] animate-pulse-slow" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            <span className="text-sm font-semibold text-blue-300 uppercase tracking-wider">
              New Digital Collection
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-7xl font-black leading-tight text-white tracking-tight"
          >
            Digital Goods.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400">
              Futuristic by Design
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-6 text-lg text-slate-300 leading-relaxed max-w-lg"
          >
            Kumpulan produk digital premium dengan desain futuristik, animasi
            halus, dan nuansa gelap yang memukau. Siap untuk proyek berikutnya
            Anda.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-violet-600 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300">
              Explore Collection
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all duration-300">
              Learn More
            </button>
          </motion.div>
        </div>

        <div className="lg:w-1/2 flex justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full max-w-md"
          >
            <div className="relative rounded-[3rem] bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 shadow-2xl overflow-hidden p-8">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-violet-500/20 mix-blend-overlay" />
              <div className="relative z-10">
                <img
                  src="/assets/hero.png"
                  alt="Digital Product Showcase"
                  className="w-full h-auto rounded-[2rem] shadow-2xl animate-float transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center gap-2"
      >
        <div className="w-2 h-2 rounded-full bg-white/50" />
        <div className="w-2 h-2 rounded-full bg-white/30" />
        <div className="w-2 h-2 rounded-full bg-white/10" />
      </motion.div>
    </section>
  )
}
