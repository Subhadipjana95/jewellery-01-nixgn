import { ShoppingCart } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="relative z-20 w-full pl-6 pr-8 py-6 flex items-center justify-between text-[#e9e4d8]">
          <div className="flex items-center gap-8">
            <button className="flex flex-col gap-[5px] group">
              <span className="w-6 h-[1.5px] bg-current transition-all group-hover:w-8" />
              <span className="w-8 h-[1.5px] bg-current" />
            </button>
            <div className="hidden md:flex gap-6 text-sm font-medium tracking-wide">
              <a href="#" className="hover:text-white transition-colors">Home</a>
              <a href="#" className="hover:text-white transition-colors">About Us</a>
              <a href="#" className="hover:text-white transition-colors">Store</a>
            </div>
          </div>
          
          <div className="absolute left-1/2 -translate-x-1/2 text-2xl tracking-widest font-serif font-medium text-white shadow-sm">
            EFRONA
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden md:block bg-[#1a1a1a]/80 backdrop-blur-md border border-white/20 text-white px-6 py-2 text-xs uppercase tracking-wider hover:bg-black transition-colors rounded-none">
              Contact us
            </button>
            <button className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors backdrop-blur-md">
              <ShoppingCart size={16} />
            </button>
          </div>
        </nav>
  )
}

export default Navbar