import React from 'react'

const footer = () => {
    return (
        <footer className="bg-[#1a1a1a] text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    {/* Logo & Info */}
                    <div className="col-span-1">
                        <div className="text-3xl tracking-widest font-serif font-medium text-white mb-6">
                            EFRONA
                        </div>
                        <p className="text-[#a89f8f] text-xs leading-loose mb-6">
                            Via della Scafa 48, Bozza,<br />
                            Alessandria, 15048, Italy<br /><br />
                            info@efrona.com
                        </p>

                        <div className="flex gap-2">
                            {/* Mock Payment Chips */}
                            <div className="w-8 h-5 bg-white rounded-[2px] flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-orange-500 mr-[-2px] mix-blend-multiply"></div>
                                <div className="w-2 h-2 rounded-full bg-red-500 mix-blend-multiply"></div>
                            </div>
                            <div className="w-8 h-5 bg-white rounded-[2px] flex items-center justify-center">
                                <div className="w-4 h-1.5 bg-blue-500/80 italic text-[4px] text-white font-bold leading-none">VISA</div>
                            </div>
                            <div className="w-8 h-5 bg-white rounded-[2px] flex items-center justify-center">
                                <div className="w-3 h-3 bg-blue-400 rounded-sm"></div>
                            </div>
                            <div className="w-8 h-5 bg-white border border-[#2c2c2c] rounded-[2px]"></div>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-sm font-semibold mb-6 tracking-wide">Useful links</h4>
                        <ul className="space-y-4 text-xs text-[#a89f8f] font-medium">
                            <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Store</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Cart</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-semibold mb-6 tracking-wide">Contact us</h4>
                        <ul className="space-y-4 text-xs text-[#a89f8f] font-medium">
                            <li>+1 213 4567 89 00</li>
                            <li>+1 213 4567 89 00</li>
                            <li className="pt-2">Monday - Friday:</li>
                            <li className="text-white">9AM - 8PM</li>
                            <li className="pt-2">Saturday - Sunday:</li>
                            <li className="text-white">10AM - 2PM</li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h4 className="text-sm font-semibold mb-6 tracking-wide">Customer Service</h4>
                        <ul className="space-y-4 text-xs text-[#a89f8f] font-medium">
                            <li><a href="#" className="hover:text-white transition-colors">Orders</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Help</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Wishlist</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>

                </div>

                {/* Copyright */}
                <div className="border-t border-[#2c2c2c] pt-8 text-center text-[10px] text-[#5e5a52] uppercase tracking-widest font-medium">
                    Copyright © EFRONA All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default footer