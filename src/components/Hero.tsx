import HeroImage from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-8">
        <div className="lg:col-span-7 text-center lg:text-left">
          <h1 className="font-extrabold text-4xl md:text-5xl lg:text-[60px] lg:leading-tight text-[#0F172A] font-inter tracking-tighter mb-6 flex flex-col">
            <span>Build Your Ideal</span>
            <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
          <p className="max-w-137 font-arimo text-base md:text-lg leading-relaxed text-[#475569] mb-10 mx-auto lg:mx-0">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits your
            next project.
          </p>
          <div className="font-semibold font-inter text-sm text-white flex flex-row justify-center lg:justify-start gap-4">
            <button className="bg-linear-to-r from-[#F97316] to-[#EC4899] rounded-xl px-4 py-3 flex-1 sm:flex-none sm:w-auto">
              Explore Technologies
            </button>
            <button className="border border-[#E5E7EB] rounded-xl px-4 py-3 text-[#374151] font-normal flex-1 sm:flex-none sm:w-auto">
              Learn More
            </button>
          </div>
        </div>

        <img src={HeroImage} alt="HeroImage" className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none" />
      </div>
    </div>
  );
};

export default Hero;
