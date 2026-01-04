import { Button } from "@/components/ui/button";
import { ArrowRight, Construction, Paintbrush, Axe, Zap } from "lucide-react";

const HeroBanner = () => {
  return (
    <section className="py-8 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Main Banner Container */}
        <div className="relative w-full max-w-6xl mx-auto bg-[#FFFAEB]/50 border-2 border-[#EFC41A]/20 rounded-[3rem] p-10 md:p-16 flex flex-col items-center text-center shadow-[0_0_40px_-10px_rgba(239,196,26,0.3)]">

          {/* Central Text Content */}
          <div className="relative z-20 max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-3">
              Construction and Interior Materials Delivered in 60 Mins*
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-medium italic mb-8">
              Genuine Materials at Low Prices, Guaranteed.
            </p>

            <Button
              className="bg-[#45a049] hover:bg-[#388e3c] text-white text-lg font-bold py-6 px-10 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2 mx-auto"
            >
              Shop Now <ArrowRight className="w-5 h-5" />
            </Button>



            <p className="text-[10px] text-gray-500 mt-4 italic">
              *Delivered within 60, 90 or 120 minutes depending on your pincode.
            </p>
          </div>

          {/* Floating Product Images (Decorations) */}
          {/* Top Left */}
          <div className="absolute top-10 left-10 md:left-20 animate-in fade-in zoom-in duration-700 delay-100 hidden md:block">
            <img src="https://images.unsplash.com/photo-1558618047-f4b511cc0c69?w=100&h=100&fit=crop" className="w-16 h-16 object-contain rotate-12 opacity-80" alt="Hinge" />
          </div>
          <div className="absolute top-32 left-4 md:left-10 animate-in fade-in zoom-in duration-700 delay-200 hidden md:block">
            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&h=100&fit=crop" className="w-12 h-24 object-contain -rotate-12 opacity-80" alt="Handle" />
          </div>

          {/* Top Right */}
          <div className="absolute top-12 right-12 md:right-24 animate-in fade-in zoom-in duration-700 delay-300 hidden md:block">
            <img src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=100&h=100&fit=crop" className="w-20 h-24 object-contain rotate-6 opacity-80" alt="Cement" />
          </div>

          {/* Bottom Left */}
          <div className="absolute bottom-12 left-12 md:left-32 animate-in fade-in zoom-in duration-700 delay-400 hidden md:block">
            <img src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=100&h=100&fit=crop" className="w-20 h-20 object-contain -rotate-6 opacity-80" alt="Paint" />
          </div>

          {/* Bottom Right */}
          <div className="absolute bottom-16 right-10 md:right-28 animate-in fade-in zoom-in duration-700 delay-500 hidden md:block">
            <img src="https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=100&h=100&fit=crop" className="w-16 h-16 object-contain rotate-12 opacity-80" alt="Fevicol" />
          </div>

          {/* Decorative Glow */}
          <div className="absolute inset-0 bg-[#EFC41A]/5 rounded-[3rem] blur-xl -z-10" />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
