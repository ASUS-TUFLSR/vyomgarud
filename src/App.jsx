import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Highlights from './components/Highlights'
import Contact from './components/Contact'

const App = () => {
  return (
<div className="min-h-screen font-inter bg-gradient-to-b from-[#060607] to-[#0b0b0d]">
<div className="max-w-6xl mx-auto px-6 lg:px-8">
<Hero />
<main className="space-y-20 py-16">
<About />
<Products />
<Highlights />
<Contact />
</main>
</div>
</div>
)
}

export default App