
import Hero from "@/components/Hero"
import Collection from "@/components/Collection"
import CTA from "@/components/CTA"
import Footer from "@/components/common/Footer"
import Arrivals from "@/components/Arrivals"
import Testimonials from "@/components/Testimonials"

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-[#2e2e2e] font-sans overflow-x-hidden selection:bg-[#a91d1d] selection:text-white">
      {/* 1. Hero Section */}
      <Hero />
      {/* 2. Our Collections Section */}
      <Collection />

      {/* 3. CEO and Designer Section */}
      <section className="bg-[#f4efe4] py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-4">
            <h2 className="text-5xl md:text-6xl font-serif text-[#1e1e1e] tracking-tight leading-tight mb-8">
              CEO and designer
            </h2>
            <p className="text-sm text-[#5e5a52] leading-relaxed mb-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
            </p>
            <button className="bg-[#a91d1d] hover:bg-[#8b1818] text-white px-8 py-3 text-sm tracking-wider transition-colors shadow-none hover:shadow-lg">
              Contact Me
            </button>
          </div>

          {/* Middle Image */}
          <div className="lg:col-span-4 h-full">
            <div className="w-full h-[500px] overflow-hidden">
               <img 
                 src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop" 
                 alt="CEO"
                 className="w-full h-full object-cover object-center"
               />
            </div>
          </div>

          {/* Right Stats */}
          <div className="lg:col-span-4 flex flex-col justify-center gap-12 lg:pl-16">
            <div>
              <p className="text-6xl font-serif text-[#1e1e1e] mb-2">+300</p>
              <p className="text-xs uppercase tracking-widest text-[#5e5a52] font-semibold">Successful projects</p>
            </div>
            <div>
              <p className="text-6xl font-serif text-[#1e1e1e] mb-2">+10</p>
              <p className="text-xs uppercase tracking-widest text-[#5e5a52] font-semibold">Awards for best design</p>
            </div>
            <div>
              <p className="text-6xl font-serif text-[#1e1e1e] mb-2">+15</p>
              <p className="text-xs uppercase tracking-widest text-[#5e5a52] font-semibold">Own stores</p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Latest Arrivals Section */}
      <Arrivals />
      {/* 5. Testimonials */}
      <Testimonials />
      {/* 6. CTA */}
      <CTA />
      {/* 7. Footer */}
      <Footer />
    </div>
  )
}
