import React from 'react'

function InitiativeCard({ title, desc }) {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h5 className="font-semibold text-emerald-800">{title}</h5>
      <p className="text-sm mt-2 text-emerald-700">{desc}</p>
      <div className="mt-3">
        <button className="text-emerald-600 hover:underline">Learn more →</button>
      </div>
    </div>
  )
}

export default function Projects() {
  const items = [
    { title: 'Tree Planting', desc: 'Community events to reforest local parks.' },
    { title: 'Stream Cleanup', desc: 'Volunteer runs to remove trash from waterways.' },
    { title: 'Native Gardens', desc: 'Building pollinator-friendly native plant gardens.' },
  ]

  return (
    <section id="projects" className="py-12">
      <h3 className="text-2xl font-semibold text-emerald-800">Initiatives</h3>
      <p className="mt-2 text-emerald-700">A few placeholder projects to show the structure. Each will have its own page with details, dates, and signup links.</p>
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {items.map((it) => (
          <InitiativeCard key={it.title} title={it.title} desc={it.desc} />
        ))}
      </div>
    </section>
  )
}
