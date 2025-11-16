import React from 'react'

const Highlights = () => {

  const items = [
'Field-proven reliability: designed for harsh environments',
'Fast integration: modular payload interfaces and SDKs',
'Secure & compliant: end-to-end encrypted telemetry and hardened firmware'
]

  return (
<section className="pt-6">
<h3 className="text-2xl font-semibold text-gray-500">Why VyomGarud</h3>
<ul className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
{items.map((i, idx)=> (
<li key={idx} className="bg-[#0e0f10] p-4 rounded-md border border-gray-800">
<div className="text-primary font-semibold text-gray-300">•</div>
<p className="mt-2 text-gray-300 text-sm">{i}</p>
</li>
))}
</ul>
</section>
)
}

export default Highlights