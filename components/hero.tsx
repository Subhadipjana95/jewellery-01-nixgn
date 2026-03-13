import React from 'react'
import Navbar from './common/navbar'
import { ArrowRight, Play } from 'lucide-react'

const hero = () => {
    return (
        <section className="relative w-full min-h-screen lg:h-[90vh] flex flex-col items-center overflow-hidden">
            {/* Hero Background */}
            <div className="absolute inset-0 z-0 bg-[#3a2f26]">
                <video
                    src="/Gold_ring_with_light_rays_delpmaspu_.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-80 scale-105"
                />
            </div>

            {/* Navbar */}
            <Navbar />

            {/* Hero Content */}
            <div className="relative z-10 flex-1 w-full max-w-7xl mx-auto px-6 flex flex-col justify-center mt-[-40px]">
                <h1 className="text-[120px] md:text-[200px] leading-none text-center font-serif text-[#fdfcf8] drop-shadow-2xl mb-12 tracking-tight">
                    Jewelry
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end mt-4">
                    {/* Left Box */}
                    <div className="text-[#fdfcf8] max-w-sm">
                        <p className="text-sm leading-relaxed mb-6 font-medium drop-shadow-md">
                            Our curated collection of fine jewelry is designed to captivate and celebrate the unique essence of every individual.
                        </p>
                        <button className="bg-[#a91d1d] hover:bg-[#8b1818] text-white px-8 py-3 text-sm tracking-wider transition-colors mb-8 shadow-xl">
                            Open Menu
                        </button>

                        {/* Video preview inset */}
                        <div className="relative w-48 h-28 bg-white/10 p-1 border border-white/10 shadow-2xl overflow-hidden group cursor-pointer">
                            <img
                                src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop"
                                alt="Video thumbnail"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <button className="absolute inset-0 m-auto w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-black group-hover:bg-white group-hover:scale-110 transition-all">
                                <Play size={16} className="ml-1" fill="currentColor" />
                            </button>
                        </div>
                    </div>

                    {/* Spacer */}
                    <div className="hidden md:block" />

                    {/* Right Box - Deal Card */}
                    <div className="justify-self-end relative">
                        <div className="bg-[#a91d1d] text-white p-6 w-64 shadow-2xl relative overflow-hidden group cursor-pointer">
                            <div className="relative z-10 flex flex-col items-start gap-4 h-full">
                                <p className="text-sm font-medium">Only today - 50% OFF</p>
                                <button className="w-8 h-8 bg-white text-[#a91d1d] rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                                    <ArrowRight size={14} strokeWidth={3} />
                                </button>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=600&auto=format&fit=crop"
                                alt="Discount bracelet"
                                className="absolute bottom-[-10px] right-[-10px] w-40 object-cover opacity-90 mix-blend-screen group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <div className="text-right text-[#fdfcf8] text-xs font-medium mt-16 leading-tight drop-shadow-md">
                            Via della Scafa 48, Bozza,<br />Alessandria, 15048, Italy
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default hero