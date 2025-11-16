import React from 'react'

const Products = () => {

  const offerings = [
{
title: 'Tactical VTOL Platform',
desc: 'Vertical take-off and landing UAVs with >45 min endurance, modular payload bays and quick-change batteries.'
},
{
title: 'Swarm Autonomy Suite',
desc: 'Coordinated multi-agent behaviors, mesh networking, leaderless redundancy and mission assurance.'
},
{
title: 'Secure Comms & Control',
desc: 'AES-256 encrypted telemetry, anti-jam links, and hardened ground-station software.'
},
{
title: 'Payloads & Sensors',
desc: 'EO/IR gimbals, LiDAR mapping, SIGINT modules and tailored sensor integrations.'
}
]

  return (
<section id="products">
<h3 className="text-2xl font-semibold text-gray-500">Capabilities</h3>
<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
{offerings.map((o)=> (
<article key={o.title} className="bg-[#131619] border border-gray-800 p-5 rounded-lg hover:shadow-lg transition-shadow">
<div className="text-sm font-medium text-gray-300">{o.title.split(' ')[0]}</div>
<h4 className="mt-2 font-semibold text-gray-300">{o.title}</h4>
<p className="mt-3 text-gray-400 text-sm">{o.desc}</p>
<div className="mt-4">
<a href="#contact" className="text-sm font-semibold text-gray-300">Request Specs →</a>
</div>
</article>
))}
</div>
</section>
)
}

export default Products