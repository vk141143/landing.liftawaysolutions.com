import { motion } from 'framer-motion';

export default function ChristmasKindnessScene() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="absolute inset-0 pointer-events-none"
    >
      {/* UK Street Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800/90 via-slate-700/80 to-slate-600/70">
        {/* Brick Houses Silhouettes */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3">
          <div className="absolute bottom-0 left-10 w-32 h-24 bg-slate-800/60 rounded-t-sm">
            {/* Warm window lights */}
            <div className="absolute top-4 left-4 w-4 h-6 bg-amber-200/80 rounded-sm blur-sm" />
            <div className="absolute top-4 right-4 w-4 h-6 bg-amber-200/80 rounded-sm blur-sm" />
          </div>
          <div className="absolute bottom-0 right-16 w-28 h-20 bg-slate-800/60 rounded-t-sm">
            <div className="absolute top-3 left-3 w-3 h-5 bg-amber-200/80 rounded-sm blur-sm" />
            <div className="absolute top-3 right-3 w-3 h-5 bg-amber-200/80 rounded-sm blur-sm" />
          </div>
        </div>

        {/* Streetlamp Glow */}
        <div className="absolute top-1/4 right-1/4 w-2 h-16 bg-slate-600/80 rounded-full">
          <div className="absolute -top-2 -left-1 w-4 h-4 bg-amber-100/90 rounded-full blur-md" />
          <div className="absolute -top-8 -left-8 w-16 h-16 bg-amber-100/20 rounded-full blur-xl" />
        </div>

        {/* Ground with frost */}
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-r from-slate-300/30 via-slate-200/40 to-slate-300/30 blur-sm" />
      </div>

      {/* Santa Figure */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        className="absolute bottom-1/4 left-1/3 transform -translate-x-1/2"
      >
        {/* Santa's subtle glow */}
        <div className="absolute inset-0 bg-amber-100/10 rounded-full blur-2xl scale-150" />
        
        {/* Santa Body */}
        <div className="relative">
          {/* Head */}
          <div className="w-12 h-12 bg-amber-100/90 rounded-full relative mb-1">
            {/* Beard */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-6 bg-slate-100/95 rounded-b-full" />
            {/* Hat */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-8 bg-red-700/90 rounded-t-full" />
            <div className="absolute -top-1 right-1 w-3 h-3 bg-slate-100/95 rounded-full" />
            {/* Kind eyes */}
            <div className="absolute top-3 left-3 w-1 h-1 bg-slate-700/80 rounded-full" />
            <div className="absolute top-3 right-3 w-1 h-1 bg-slate-700/80 rounded-full" />
          </div>
          
          {/* Body */}
          <div className="w-16 h-20 bg-red-700/90 rounded-lg relative">
            {/* Belt */}
            <div className="absolute top-1/2 left-0 right-0 h-2 bg-slate-800/80" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-3 h-3 bg-amber-400/90 rounded-sm" />
            {/* Arms */}
            <div className="absolute -left-2 top-2 w-4 h-12 bg-red-700/90 rounded-full transform -rotate-12" />
            <div className="absolute -right-2 top-2 w-4 h-12 bg-red-700/90 rounded-full transform rotate-12" />
          </div>
          
          {/* Legs */}
          <div className="flex justify-center gap-1 mt-1">
            <div className="w-3 h-8 bg-red-700/90 rounded-full" />
            <div className="w-3 h-8 bg-red-700/90 rounded-full" />
          </div>
        </div>
      </motion.div>

      {/* Waste Pickup Worker */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
        className="absolute bottom-1/4 right-1/3 transform translate-x-1/2"
      >
        <div className="relative">
          {/* Head */}
          <div className="w-10 h-10 bg-amber-100/90 rounded-full relative mb-1">
            {/* Surprised expression */}
            <div className="absolute top-3 left-2 w-1 h-1 bg-slate-700/80 rounded-full" />
            <div className="absolute top-3 right-2 w-1 h-1 bg-slate-700/80 rounded-full" />
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-2 h-1 bg-slate-700/60 rounded-full" />
            {/* Work cap */}
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-4 bg-slate-600/90 rounded-t-full" />
          </div>
          
          {/* Body in work uniform */}
          <div className="w-14 h-18 bg-slate-600/90 rounded-lg relative">
            {/* Hi-vis vest */}
            <div className="absolute inset-1 bg-amber-400/80 rounded" />
            {/* Arms reaching out gratefully */}
            <div className="absolute -left-2 top-2 w-3 h-10 bg-slate-600/90 rounded-full transform rotate-12" />
            <div className="absolute -right-2 top-2 w-3 h-10 bg-slate-600/90 rounded-full transform -rotate-12" />
          </div>
          
          {/* Legs */}
          <div className="flex justify-center gap-1 mt-1">
            <div className="w-3 h-6 bg-slate-700/90 rounded-full" />
            <div className="w-3 h-6 bg-slate-700/90 rounded-full" />
          </div>
        </div>
      </motion.div>

      {/* Gift Exchange */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
        className="absolute bottom-1/3 left-1/2 -translate-x-1/2"
      >
        {/* Small eco-friendly gift */}
        <div className="w-6 h-6 bg-green-700/80 rounded-sm relative">
          {/* Natural twine ribbon */}
          <div className="absolute inset-0 border border-amber-600/60" />
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-amber-600/60" />
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-amber-600/60" />
          {/* Small bow */}
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-1 bg-amber-600/60 rounded-full" />
        </div>
      </motion.div>

      {/* Gentle Snowfall */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -20, opacity: 0 }}
            animate={{ 
              y: '100vh', 
              opacity: [0, 0.6, 0.4, 0] 
            }}
            transition={{
              duration: 8 + (i % 3),
              delay: i * 0.5,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="absolute w-1 h-1 bg-white/60 rounded-full blur-sm"
            style={{
              left: `${10 + (i * 7)}%`,
              animationDelay: `${i * 0.3}s`
            }}
          />
        ))}
      </div>

      {/* Warm Light Atmosphere */}
      <div className="absolute inset-0 bg-gradient-radial from-amber-100/5 via-transparent to-transparent pointer-events-none" />
      
      {/* Ground Mist */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-200/10 to-transparent blur-sm" />
    </motion.div>
  );
}