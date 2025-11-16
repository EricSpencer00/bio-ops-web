import React from 'react'

export default function Hero() {
  return (
    <section className="relative py-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-extrabold text-emerald-800">BioOps — Protecting nature, together</h2>
          <p className="mt-4 text-emerald-700 max-w-xl">We are a community-driven initiative focused on environmental awareness, conservation, and regenerative practices. Join projects, learn, and contribute.</p>
          <div className="mt-6 flex gap-3">
            <a className="inline-block bg-emerald-600 text-white px-5 py-2 rounded shadow hover:bg-emerald-700" href="#projects">See Initiatives</a>
            <a className="inline-block border border-emerald-600 text-emerald-600 px-5 py-2 rounded hover:bg-emerald-50" href="#contact">Get Involved</a>
          </div>
        </div>
        <div className="flex-1">
          <div className="w-full h-64 md:h-80 rounded-lg bg-gradient-to-br from-emerald-300 to-emerald-500 shadow-inner flex items-center justify-center text-white font-bold">
            Placeholder: Hero imagery / illustration
          </div>
        </div>
      </div>
    </section>
  )
}
