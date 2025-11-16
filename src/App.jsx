import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-emerald-50 via-emerald-100 to-white text-emerald-900">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <div className="max-w-6xl mx-auto px-6">
          <About />
          <Projects />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  )
}
