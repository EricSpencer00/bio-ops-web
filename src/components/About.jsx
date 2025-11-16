import React from 'react'

export default function About() {
  return (
    <section id="about" className="py-12">
      <h3 className="text-2xl font-semibold text-emerald-800">About BioOps</h3>
      <p className="mt-4 text-emerald-700 max-w-3xl">BioOps is a brand and movement dedicated to raising awareness about the environment. We provide resources, organize local initiatives, and partner with communities to protect biodiversity and promote sustainable practices.</p>
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded shadow">
          <h4 className="font-semibold text-emerald-800">Education</h4>
          <p className="text-sm mt-2 text-emerald-700">Workshops, guides, and learning tracks about ecosystems and climate.</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h4 className="font-semibold text-emerald-800">Community</h4>
          <p className="text-sm mt-2 text-emerald-700">Local groups, volunteer drives, and citizen science projects.</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h4 className="font-semibold text-emerald-800">Action</h4>
          <p className="text-sm mt-2 text-emerald-700">On-the-ground initiatives to restore and protect habitats.</p>
        </div>
      </div>
    </section>
  )
}
