import { useEffect, useRef, useState } from "react";

const CommunitySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const communityFeatures = [
    {
      title: "کارگاه‌های نان‌پزی",
      description: "یادگیری هنر نان‌پزی در کنار استادان",
      icon: "👨‍🍳",
      schedule: "جمعه‌ها، ساعت ۱۶"
    },
    {
      title: "میز مشترک",
      description: "فضایی برای آشنایی و گفتگو",
      icon: "🤝",
      schedule: "همه روزه"
    },
    {
      title: "نمایشگاه هنری",
      description: "آثار هنرمندان محلی روی دیوارهای ما",
      icon: "🎨",
      schedule: "ماهیانه"
    },
    {
      title: "شب شعر و ادب",
      description: "شب‌هایی پر از شعر و موسیقی",
      icon: "📚",
      schedule: "اول هر ماه"
    }
  ];

  const testimonials = [
    {
      name: "سارا احمدی",
      text: "اینجا فقط نان‌خانه نیست، خانه دوم من است. جایی که هر صبح با لبخند استقبال می‌شوم.",
      role: "مشتری وفادار"
    },
    {
      name: "محمد رضایی",
      text: "طعم نان‌هایشان مرا به خاطرات کودکی می‌برد. اینجا روح شهر را حس می‌کنم.",
      role: "ساکن محله"
    },
    {
      name: "مریم کریمی",
      text: "در کارگاه نان‌پزی چیزهای زیادی یاد گرفتم. نه فقط نان‌پزی، بلکه صبر و عشق.",
      role: "شرکت‌کننده کارگاه"
    }
  ];

  return (
    <section ref={sectionRef} id="community" className="py-24 bg-card wheat-texture">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
              جامعه ما
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              بیش از یک نان‌خانه، جمع‌آوری دوستان و خانواده‌ای گرم و صمیمی
            </p>
          </div>

          {/* Community Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {communityFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className={`transition-all duration-700 ${
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-background border border-border rounded-xl p-6 text-center hover:bg-background/80 transition-warm group hover:golden-glow">
                  <div className="text-4xl mb-4 group-hover:animate-gentle-float">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="text-xs text-accent font-medium">
                    {feature.schedule}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-glow">
              صدای جامعه ما
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.name}
                  className={`transition-all duration-700 ${
                    isVisible ? 'animate-slide-in-right' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${(index + 3) * 200}ms` }}
                >
                  <div className="bg-background border border-border rounded-xl p-6 hover:bg-background/80 transition-warm">
                    <div className="mb-4">
                      <svg className="w-8 h-8 text-accent mb-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                      </svg>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      "{testimonial.text}"
                    </p>
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-accent">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Join Community CTA */}
          <div className={`text-center mt-16 transition-all duration-700 delay-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="bg-gradient-to-br from-muted to-primary/20 rounded-2xl p-8 golden-glow">
              <h4 className="text-2xl font-bold text-foreground mb-4">
                عضو جامعه ما شوید
              </h4>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                برای اطلاع از رویدادها، کارگاه‌ها و اخبار نان‌خانه، عضو خانواده بزرگ ما شوید
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="#contact"
                  className="px-8 py-4 bg-accent text-primary font-medium rounded-lg hover:bg-accent/90 transition-warm hover:scale-105"
                >
                  عضویت در جامعه
                </a>
                <span className="text-muted-foreground">یا</span>
                <a 
                  href="#contact"
                  className="px-8 py-4 border border-accent text-accent font-medium rounded-lg hover:bg-accent/10 transition-warm"
                >
                  دنبال کردن در شبکه‌های اجتماعی
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;