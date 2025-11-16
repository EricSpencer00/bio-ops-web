import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="py-12">
      <h3 className="text-2xl font-semibold text-emerald-800">Contact & Get Involved</h3>
      <p className="mt-2 text-emerald-700">Interested in volunteering or collaborating? Send us a message or join a local chapter.</p>
      <div className="mt-6 max-w-xl">
        <form className="grid gap-3">
          <input className="p-2 border rounded" placeholder="Your name" />
          <input className="p-2 border rounded" placeholder="Email" />
          <textarea className="p-2 border rounded" rows="4" placeholder="How would you like to help?"></textarea>
          <button className="w-max bg-emerald-600 text-white px-4 py-2 rounded">Send</button>
        </form>
      </div>
    </section>
  )
}
