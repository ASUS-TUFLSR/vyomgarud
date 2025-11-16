import React, { useState } from 'react'

const Contact = () => {
  const [form, setForm] = useState({name:'',email:'',message:''})
const [sent, setSent] = useState(false)


function handleChange(e){
setForm({...form,[e.target.name]: e.target.value})
}


function handleSubmit(e){
e.preventDefault()
// For demo: simply show success state. In real deploy hook up to API or Netlify Functions.
setSent(true)
setTimeout(()=> setSent(false), 4000)
}


return (
<section id="contact" className="pt-6 pb-12 text-gray-400">
<h3 className="text-2xl font-semibold">Contact</h3>
<p className="mt-2 text-gray-400 text-sm max-w-xl">Reach out for partnership, procurement or technical briefings.</p>


<form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4 max-w-xl">
<input required name="name" value={form.name} onChange={handleChange} placeholder="Your name" className="bg-[#0b0c0d] border border-gray-800 rounded-md p-3 placeholder-gray-500" />
<input required name="email" value={form.email} onChange={handleChange} placeholder="Email" type="email" className="bg-[#0b0c0d] border border-gray-800 rounded-md p-3 placeholder-gray-500" />
<textarea required name="message" value={form.message} onChange={handleChange} rows="4" placeholder="How can we help?" className="bg-[#0b0c0d] border border-gray-800 rounded-md p-3 placeholder-gray-500"></textarea>
<div className="flex items-center gap-4">
<button type="submit" className="px-5 py-3 bg-primary text-gray-400 rounded-md font-semibold">Send message</button>
{sent && <div className="text-sm text-green-400">Message queued (demo)</div>}
</div>
</form>


<footer className="mt-10 border-t border-gray-800 pt-6 text-sm text-gray-400">
<div className="flex flex-col sm:flex-row sm:justify-between gap-4">
<div>© {new Date().getFullYear()} VyomGarud — All rights reserved.</div>
<div className="flex gap-4">
<a href="#" className="hover:text-white">Privacy</a>
<a href="#" className="hover:text-white">Terms</a>
</div>
</div>
</footer>
</section>
)
}

export default Contact