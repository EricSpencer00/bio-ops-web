import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-emerald-900 text-emerald-100 py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div>© {new Date().getFullYear()} BioOps — Nature & Community</div>
        <div className="mt-3 md:mt-0 text-sm">
          <a className="underline" href="#">Privacy</a>
          <span className="mx-3">•</span>
          <a className="underline" href="#">Terms</a>
        </div>
      </div>
    </footer>
  )
}
