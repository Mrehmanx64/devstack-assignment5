import LogoText from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="mt-16 mb-12 pt-16 border border-white border-t-[#F1F5F9]">
      <div className="container mx-auto px-4">
        <div className="mb-14 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
          <div className="md:col-span-2 flex flex-col gap-3 text-center md:text-left items-center md:items-start">
            <img src={LogoText} alt="Dev Stack" className="w-30" />
            <p className="max-w-md text-xs leading-6 text-[#64748B]">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="mt-6 flex items-center gap-5">
              <button className="text-xs font-semibold text-[#475569] hover:text-[#DB2777] transition-colors duration-300">
                GitHub
              </button>

              <button className="text-xs font-semibold text-[#475569] hover:text-[#DB2777] transition-colors duration-300">
                Twitter
              </button>

              <button className="text-xs font-semibold text-[#475569] hover:text-[#DB2777] transition-colors duration-300">
                LinkedIn
              </button>
            </div>
          </div>

          <div className="hidden md:block">
            <h2 className="font-bold text-[#0F172A] uppercase mb-4">Product</h2>

            <ul className="space-y-3 text-xs text-[#64748B]">
              <li className="cursor-pointer hover:text-[#DB2777] transition-colors duration-300">Home</li>
              <li className="cursor-pointer hover:text-[#DB2777] transition-colors duration-300">Technologies</li>
              <li className="cursor-pointer hover:text-[#DB2777] transition-colors duration-300">Projects</li>
            </ul>
          </div>

          <div className="hidden md:block">
            <h2 className="font-bold text-[#0F172A] uppercase mb-4">Company</h2>

            <ul className="space-y-3 text-xs text-[#64748B]">
              <li className="cursor-pointer hover:text-[#DB2777] transition-colors duration-300">About</li>
              <li className="cursor-pointer hover:text-[#DB2777] transition-colors duration-300">Contact</li>
              <li className="cursor-pointer hover:text-[#DB2777] transition-colors duration-300">Careers</li>
            </ul>
          </div>

          <div className="hidden md:block">
            <h2 className="font-bold text-[#0F172A] uppercase mb-4">Legal</h2>

            <ul className="space-y-3 text-xs text-[#64748B]">
              <li className="cursor-pointer hover:text-[#DB2777] transition-colors duration-300">Privacy Policy</li>
              <li className="cursor-pointer hover:text-[#DB2777] transition-colors duration-300">Terms of Services</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border border-white border-t-[#F1F5F9]">
          <p className="text-xs text-[#94A3B8]">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-xs text-[#94A3B8]">
            <span className="cursor-pointer hover:text-[#DB2777] transition-colors duration-300">Privacy</span>

            <span className="cursor-pointer hover:text-[#DB2777] transition-colors duration-300">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
