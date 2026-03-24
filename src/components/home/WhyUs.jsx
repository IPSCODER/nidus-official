import HeadingText from '../../../components/ui/HeadingText'


const HeroStatsGrid = () => {
    return (
      <section className="bg-[#ececec] p-6">
        <HeadingText className={'-mb-24'} >Why Us</HeadingText>
        <div className="mx-auto w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
  
          {/* LEFT BIG CARD */}
          <div className="relative col-span-1 md:col-span-2 rounded-2xl overflow-hidden bg-black text-white p-6">
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20" />
            <div className="relative z-10 grid grid-cols-2 gap-6">
              <div>
                <h2 className="text-6xl font-bold">5+</h2>
                <p className="text-sm opacity-80">Specialized Projects</p>
              </div>
              <div>
                <h2 className="text-6xl font-bold">98%</h2>
                <p className="text-sm opacity-80">Client satisfaction rate</p>
              </div>
              <div className="col-span-2">
                <h2 className="text-6xl font-bold">100K</h2>
                <p className="text-sm opacity-80">Users Impacted</p>
              </div>
            </div>
          </div>
  
          {/* TESTIMONIAL CARD */}
          <div className="rounded-2xl bg-[#f6f5f2] p-6 flex flex-col justify-between">
            <div>
              <p className="text-sm font-medium">★★★★★</p>
              <p className="mt-2 text-sm text-gray-600">
                10+ Happy clients worldwide
              </p>
            </div>
  
            <div className="relative mt-6 flex justify-center">
              <div className="text-xl font-semibold text-gray-800">Kaif.</div>
            </div>
          </div>
  
          {/* CTA BIG CARD */}
          <div className="row-span-2 rounded-2xl bg-gradient-to-br from-black via-[#2a140a] to-[#d15b1c] p-8 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold">
                Strategic solutions for lasting impact
              </h3>
              <ul className="mt-6 space-y-3 text-sm opacity-90">
                <li>✦ Tailored strategy</li>
                <li>✦ High-Quality output</li>
                <li>✦ Timely delivery</li>
                <li>✦ Transparent process</li>
                <li>✦ Post-Launch support</li>
              </ul>
            </div>
  
            <div>
              <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-medium text-black hover:bg-gray-100 transition">
                Book a Call →
              </button>
              <p className="mt-4 text-xs opacity-60">© 2025 Kaif</p>
            </div>
          </div>
  
          {/* BUILT FOR AI */}
          <div className="rounded-2xl bg-[#f6f5f2] p-6">
            <h4 className="font-semibold">Built for the AI Era</h4>
            <p className="mt-2 text-sm text-gray-600">
              From idea to AI product – scalable & production ready
            </p>
  
            <div className="mt-4 flex gap-3 flex-wrap">
              {["OpenAI", "AWS", "Bolt", "LLMs"].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-black/5 px-3 py-1 text-xs"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
  
          {/* IMAGE CARD */}
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1546484959-f9a88e1f2b69"
              className="h-full w-full object-cover"
              alt=""
            />
            <div className="absolute inset-0 bg-orange-900/60 flex items-center justify-center">
              <h4 className="text-white text-xl font-semibold">
                Reliable & Future-ready
              </h4>
            </div>
          </div>
  
          {/* SUPPORT CARD */}
          <div className="rounded-2xl bg-[#f6f5f2] p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold">24/7</h3>
              <p className="text-sm text-gray-600">Always-On support</p>
            </div>
  
            <div className="mt-4 text-sm bg-black text-white inline-block px-4 py-2 rounded-full">
              How can I help you?
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroStatsGrid;
  