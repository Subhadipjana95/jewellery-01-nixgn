import React from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
const testimonials = () => {
    return (
        <section className="bg-[#f4efe4] py-24">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-5xl md:text-6xl font-serif text-[#1e1e1e] tracking-tight mb-16">
                    Our satisfied customers
                </h2>

                <div className="relative flex items-center justify-center gap-8">
                    <button className="w-12 h-12 border border-[#d2cbbb] bg-transparent text-[#2e2e2e] rounded-full flex items-center justify-center hover:bg-[#2e2e2e] hover:text-[#e9e4d8] transition-colors shrink-0">
                        <ArrowLeft size={18} />
                    </button>

                    <div className="flex justify-center flex-1 max-w-4xl overflow-hidden gap-6">
                        {/* Testimonial Active */}
                        <div className="bg-white p-10 flex gap-6 text-left shadow-xl max-w-2xl shrink-0 border border-[#e9e4d8]">
                            <img
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
                                alt="Customer"
                                className="w-16 h-16 rounded-full object-cover shrink-0 ring-4 ring-[#f4efe4]"
                            />
                            <div>
                                <p className="text-sm text-[#5e5a52] italic mb-4 leading-relaxed font-medium">
                                    "Honestly, any of those will fit my aesthetic! So choose form EFRONA. This set is killer. No doubt out of the quality as the material is supposed my expectations."
                                </p>
                                <p className="text-[#1e1e1e] font-serif font-bold text-lg">Eloy D.</p>
                            </div>
                        </div>

                        {/* Testimonial Inactive preview */}
                        <div className="bg-white/50 p-10 flex gap-6 text-left opacity-60 scale-95 blur-[1px] max-w-2xl shrink-0 select-none">
                            <img
                                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
                                alt="Customer"
                                className="w-16 h-16 rounded-full object-cover shrink-0"
                            />
                            <div>
                                <p className="text-sm text-[#5e5a52] italic mb-4 leading-relaxed font-medium">
                                    "I've been a works of art more than 3 months now... So quality and elegant."
                                </p>
                                <p className="text-[#1e1e1e] font-serif font-bold text-lg">Chloe B.</p>
                            </div>
                        </div>
                    </div>

                    <button className="w-12 h-12 border border-[#d2cbbb] bg-transparent text-[#2e2e2e] rounded-full flex items-center justify-center hover:bg-[#2e2e2e] hover:text-[#e9e4d8] transition-colors shrink-0">
                        <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default testimonials