import { useEffect, useRef, useState } from "react";

const BreadShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const breads = [
    {
      name: "نان سوردو کلاسیک",
      description: "با ۲۴ ساعت تخمیر طبیعی، پوسته ترد و مغز نرم",
      features: ["بدون مخمر تجاری", "تخمیر طولانی", "طعم اصیل"],
      time: "۲۴ ساعت"
    },
    {
      name: "باگت فرانسوی",
      description: "نان سنتی با پوسته طلایی و بافت هوادار",
      features: ["روش فرانسوی", "پوسته ترد", "مغز نرم"],
      time: "۱۲ ساعت"
    },
    {
      name: "نان کامل گندم",
      description: "سرشار از فیبر و مواد مغذی طبیعی",
      features: ["گندم کامل", "بدون قند", "پروتئین بالا"],
      time: "۸ ساعت"
    },
    {
      name: "نان روستایی",
      description: "با آرد محلی و طعم سنتی خانگی",
      features: ["آرد محلی", "دست ساز", "طعم خانگی"],
      time: "۶ ساعت"
    }
  ];

  return (
    <section ref={sectionRef} id="breads" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
              نان‌های امروز ما
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              هر نان داستانی دارد، هر قرص حاصل ساعت‌ها عشق و دقت
            </p>
          </div>

          {/* Bread Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {breads.map((bread, index) => (
              <div
                key={bread.name}
                className={`transition-all duration-700 ${
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-card border border-border rounded-xl p-6 hover:bg-card/80 transition-warm group hover:golden-glow">
                  {/* Bread Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-xl flex items-center justify-center mb-6 group-hover:animate-gentle-float">
                    <span className="text-3xl">🍞</span>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {bread.name}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {bread.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      {bread.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-reverse space-x-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Time */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-sm text-muted-foreground">زمان تهیه:</span>
                      <span className="text-sm font-medium text-accent">{bread.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className={`text-center mt-16 transition-all duration-700 delay-500 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <p className="text-lg text-muted-foreground mb-6">
              نان‌های تازه هر روز از ساعت ۷ صبح آماده است
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-accent text-primary font-medium rounded-lg hover:bg-accent/90 transition-warm golden-glow hover:scale-105"
            >
              سفارش نان تازه
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadShowcase;