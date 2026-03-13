import React from 'react'

const cta = () => {
    return (
        <section className="bg-[#a91d1d] relative overflow-hidden py-24 min-h-[500px] flex items-center">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 relative z-10 w-full items-center">
                <div className="text-white max-w-lg">
                    <h2 className="text-5xl md:text-6xl font-serif tracking-tight mb-6">
                        Discounted holiday collection
                    </h2>
                    <p className="text-white/80 text-sm leading-relaxed mb-10 font-medium">
                        Find something special for your loved ones with the upcoming holiday at a pleasant discount.
                    </p>
                    <button className="bg-white text-[#a91d1d] hover:bg-[#f4efe4] px-8 py-3 text-sm font-semibold tracking-wider transition-colors shadow-xl">
                        Explore now
                    </button>
                </div>
            </div>

            {/* Giant floating ring image */}
            <div className="absolute right-[-10%] md:right-0 top-1/2 -translate-y-1/2 w-full max-w-[800px] opacity-90 mix-blend-luminosity">
                <img
                    src="/ring.png"
                    height={80}
                    alt="Huge Diamond Ring"
                    className="w-full h-auto object-cover mask-image-linear-to-l scale-125 md:scale-100"
                    style={{ WebkitMaskImage: "linear-gradient(to right, transparent, black 40%)" }}
                />
            </div>
        </section>
    )
}

export default cta