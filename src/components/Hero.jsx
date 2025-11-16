import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
<section className="pt-16">
<nav className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-md bg-gradient-to-br from-[#222] to-[#111] flex items-center justify-center border border-gray-800">
<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L15 8L21 9L16 13L17 20L12 16L7 20L8 13L3 9L9 8L12 2Z" stroke="#ff7b00" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
</div>
<div>
<div className="text-sm text-gray-300 font-medium">VyomGarud</div>
</div>
</div>
<div className="hidden md:flex items-center gap-6 text-sm text-gray-300">
<a href="#about" className="hover:text-white">About</a>
<a href="#products" className="hover:text-white">Capabilities</a>
<a href="#contact" className="hover:text-white">Contact</a>
<button className="ml-4 px-4 py-2 rounded-md border border-gray-700 text-sm">Request Demo</button>
</div>
</nav>


<div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
<div>
<motion.h1 initial={{y:10,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.1}} className="text-4xl md:text-5xl font-poppins font-extrabold text-white leading-tight">
VyomGarud — Precision UAV Systems
</motion.h1>
<motion.p initial={{y:8,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.2}} className="mt-4 text-gray-300 max-w-xl">
Military-grade unmanned aerial platforms and autonomy software engineered for reliability, fast deployment, and decisive situational awareness.
</motion.p>


<div className="mt-6 flex gap-4">
<a href="#contact" className="inline-flex items-center gap-3 bg-primary  px-5 py-3 rounded-md font-semibold shadow-sm text-gray-300">Get in touch</a>
<a href="#products" className="inline-flex items-center gap-3 border border-gray-700 px-4 py-3 rounded-md text-gray-300">View capabilities</a>
</div>


<div className="mt-8 text-sm text-gray-400">Trusted for mission-critical operations • Rapid field support • Secure comms</div>
</div>


<div className="relative">
<motion.div initial={{scale:0.98,opacity:0}} animate={{scale:1,opacity:1}} transition={{delay:0.25}} className="bg-gradient-to-br from-[#0f1112] to-[#161719] border border-gray-800 rounded-xl p-6">
<div className="w-full h-64 md:h-80 rounded-md bg-[linear-gradient(135deg,#111111_0%,#141414_100%)] flex items-center justify-center">
{/* Simple stylized drone illustration */}
<svg width="240" height="240" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="#9aa0a6" strokeWidth="2">
<ellipse cx="100" cy="100" rx="48" ry="18" opacity="0.6" />
<rect x="76" y="72" width="48" height="24" rx="6" />
<path d="M52 40 L80 60" />
<path d="M148 40 L120 60" />
<circle cx="52" cy="40" r="8" />
<circle cx="148" cy="40" r="8" />
</g>
<path d="M100 100 L100 40" stroke="#ff7b00" strokeWidth="1.6" strokeLinecap="round" />
</svg>
</div>
</motion.div>
</div>
</div>
</section>
)
}

export default Hero