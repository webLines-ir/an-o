import { useEffect, useRef, useState } from "react";

const StorySection = () => {
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

  return (
    <section ref={sectionRef} id="story" className="py-24 bg-card wheat-texture">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
              داستان نان‌خانه آرام
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              هر روز صبح، وقتی شهر هنوز خواب است، ما با عشق و دقت نان‌هایمان را می‌پزیم
            </p>
          </div>

          {/* Story Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className={`space-y-8 transition-all duration-700 delay-300 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-accent">فلسفه ما</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  در دنیای پرشتاب امروز، ما معتقدیم که نان نباید فقط غذا باشد. نان باید پل ارتباطی باشد، 
                  جایی که مردم گرد هم می‌آیند و لحظات زیبا را با یکدیگر تجربه می‌کنند.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  هر قرص نان که از دستان ما بیرون می‌آید، حاصل ساعت‌ها دقت، صبر و عشق است. 
                  ما نه تنها نان می‌پزیم، بلکه خاطره می‌سازیم.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-accent">صنعت دستی نان</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  از انتخاب بهترین دانه‌های گندم گرفته تا لحظه‌ای که نان طلایی رنگ از کوره بیرون می‌آید، 
                  هر مرحله با دقت و عشق انجام می‌شود.
                </p>
              </div>
            </div>

            {/* Visual Element */}
            <div className={`transition-all duration-700 delay-500 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <div className="relative">
                <div className="bg-gradient-to-br from-muted to-primary/20 rounded-2xl p-8 golden-glow">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-reverse space-x-4">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                        <span className="text-2xl">🌾</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold">مواد اولیه طبیعی</h4>
                        <p className="text-muted-foreground">آرد ارگانیک و مواد طبیعی</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-reverse space-x-4">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                        <span className="text-2xl">⏰</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold">زمان کافی برای تخمیر</h4>
                        <p className="text-muted-foreground">صبر و دقت در هر مرحله</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-reverse space-x-4">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                        <span className="text-2xl">❤️</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold">عشق در هر قرص</h4>
                        <p className="text-muted-foreground">حس تعلق و مراقبت</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;