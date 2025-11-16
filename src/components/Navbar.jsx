import React from 'react'

export default function Navbar() {
  return (
    <header className="bg-white/80 backdrop-blur sticky top-0 z-40 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold">B</div>
          <h1 className="text-lg font-semibold">BioOps</h1>
        </div>
        <nav className="hidden md:flex gap-6 text-sm text-emerald-800">
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Initiatives</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </div>
    </header>
  )
}
