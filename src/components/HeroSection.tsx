import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-bakery-display.jpg";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage}
          alt="ویترین نان‌خانه آرام با نان‌های تازه پخت"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-background/20"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow leading-tight">
                <span className="block text-foreground">جایی که</span>
                <span className="block text-accent font-bold">نان روح پیدا می‌کند</span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                در گوشه‌ای آرام از شهر، جایی که خمیر و عشق در آغوش یکدیگر به نان تبدیل می‌شوند
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="#breads"
                  className="px-8 py-4 bg-accent text-primary font-medium rounded-lg hover:bg-accent/90 transition-warm golden-glow hover:scale-105"
                >
                  نان‌های امروز ما
                </a>
                <a 
                  href="#story"
                  className="px-8 py-4 border border-accent text-accent font-medium rounded-lg hover:bg-accent/10 transition-warm"
                >
                  داستان ما
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-1/2 transform translate-x-1/2 animate-gentle-float">
        <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Wheat texture overlay */}
      <div className="absolute inset-0 wheat-texture pointer-events-none z-5"></div>
    </section>
  );
};

export default HeroSection;