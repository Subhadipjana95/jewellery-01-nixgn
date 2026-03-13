import React from 'react'
import { ArrowLeft, ArrowRight, Heart, ShoppingCart } from 'lucide-react'

const arrivals = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 py-24">
            <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                <h2 className="text-5xl md:text-6xl font-serif text-[#1e1e1e] tracking-tight">Last Arrivals</h2>
                <p className="text-sm text-[#5e5a52] max-w-sm text-right leading-relaxed font-medium">
                    Discover our new additions over past a week. We are glad to announce we are now offering customized packaging.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {[
                    { id: 1, name: "Loving Heart Locket", price: "$850", img: "https://images.unsplash.com/photo-1599827552599-2f3b9c8b7fca?q=80&w=800&auto=format&fit=crop" },
                    { id: 2, name: "Super Cute Necklace Set", price: "$1200", img: "https://images.unsplash.com/photo-1599643478514-4a00445d0505?q=80&w=800&auto=format&fit=crop" },
                    { id: 3, name: "18 Chain Pendant", price: "$1000", img: "https://images.unsplash.com/photo-1599643477877-5264b54e7f33?q=80&w=800&auto=format&fit=crop" },
                    { id: 4, name: "Gold Bracelet with texture", price: "$300", img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop" },
                ].map((item) => (
                    <div key={item.id} className="group bg-white p-6 relative shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-[400px]">
                        {/* Top Icons */}
                        <div className="absolute top-4 right-4 flex flex-col gap-2 z-10 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                            <button className="w-8 h-8 bg-white border border-[#e9e4d8] rounded-full flex items-center justify-center hover:bg-[#a91d1d] hover:text-white hover:border-[#a91d1d] text-[#1e1e1e] transition-colors shadow-sm">
                                <Heart size={14} />
                            </button>
                            <button className="w-8 h-8 bg-[#1e1e1e] text-white rounded-full flex items-center justify-center hover:bg-[#a91d1d] transition-colors shadow-sm">
                                <ShoppingCart size={14} />
                            </button>
                        </div>

                        {/* Product Image */}
                        <div className="flex-1 w-full bg-[#fcfbf9] overflow-hidden flex items-center justify-center mb-6 pt-4">
                            <img src={item.img} alt={item.name} className="max-h-[200px] object-contain group-hover:scale-110 transition-transform duration-500 mix-blend-multiply" />
                        </div>

                        {/* Product Info */}
                        <div className="pt-4 border-t border-[#e9e4d8]">
                            <h4 className="text-[#1e1e1e] font-serif text-lg mb-1">{item.name}</h4>
                            <p className="text-[#a91d1d] text-sm font-semibold">{item.price}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Pagination & Button */}
            <div className="grid grid-cols-3 items-center border-t border-[#d2cbbb] pt-8">
                <div className="flex items-center gap-3">
                    <button className="w-10 h-10 border border-[#2e2e2e] bg-[#2e2e2e] text-[#e9e4d8] rounded-full flex items-center justify-center hover:bg-transparent hover:text-[#2e2e2e] transition-colors">
                        <ArrowLeft size={16} />
                    </button>
                    <button className="w-10 h-10 border border-[#2e2e2e] bg-transparent text-[#2e2e2e] rounded-full flex items-center justify-center hover:bg-[#2e2e2e] hover:text-[#e9e4d8] transition-colors">
                        <ArrowRight size={16} />
                    </button>
                </div>

                <div className="flex justify-center gap-2">
                    <div className="w-8 h-[2px] bg-[#1e1e1e]"></div>
                    <div className="w-8 h-[2px] bg-[#d2cbbb]"></div>
                    <div className="w-8 h-[2px] bg-[#d2cbbb]"></div>
                </div>

                <div className="flex justify-end items-center gap-6">
                    <span className="text-sm font-medium uppercase tracking-widest text-[#2e2e2e]">All products</span>
                    <button className="bg-[#a91d1d] hover:bg-[#8b1818] text-white px-8 py-3 text-sm tracking-wider transition-colors shadow-md">
                        New arrivals
                    </button>
                </div>
            </div>
        </section>
    )
}

export default arrivals