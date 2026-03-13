import React from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
const collection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-5xl md:text-6xl font-serif text-[#1e1e1e] tracking-tight">Our collections</h2>
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 border border-[#2e2e2e] bg-[#2e2e2e] text-[#e9e4d8] rounded-full flex items-center justify-center hover:bg-transparent hover:text-[#2e2e2e] transition-colors">
              <ArrowLeft size={16} />
            </button>
            <button className="w-10 h-10 border border-[#2e2e2e] bg-transparent text-[#2e2e2e] rounded-full flex items-center justify-center hover:bg-[#2e2e2e] hover:text-[#e9e4d8] transition-colors">
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Bracelets", img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop" },
            { name: "Rings", img: "https://images.unsplash.com/photo-1605100804763-247f6612d542?q=80&w=800&auto=format&fit=crop" },
            { name: "Earrings", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop" },
          ].map((item) => (
            <div key={item.name} className="group relative aspect-[4/3] bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer">
              <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
              
              <div className="absolute top-4 right-4 bg-white/90 px-4 py-2 text-xs uppercase tracking-widest text-[#2e2e2e] font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                Open Page
              </div>
              
              <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md text-[#e9e4d8] px-6 py-2">
                <h3 className="text-xl font-serif">{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
  )
}

export default collection