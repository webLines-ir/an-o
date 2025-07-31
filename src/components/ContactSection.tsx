import { useEffect, useRef, useState } from "react";

const ContactSection = () => {
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

  const contactInfo = [
    {
      icon: "📍",
      title: "آدرس",
      detail: "تهران، خیابان ولیعصر، کوچه آرامش، پلاک ۱۲",
      link: "#"
    },
    {
      icon: "📞",
      title: "تلفن",
      detail: "۰۲۱-۱۲۳۴۵۶۷۸",
      link: "tel:+982112345678"
    },
    {
      icon: "📧",
      title: "ایمیل",
      detail: "info@aramnan.com",
      link: "mailto:info@aramnan.com"
    },
    {
      icon: "🕐",
      title: "ساعات کاری",
      detail: "شنبه تا پنج‌شنبه: ۷:۰۰ - ۲۱:۰۰",
      link: null
    }
  ];

  const workingHours = [
    { day: "شنبه - پنج‌شنبه", hours: "۷:۰۰ - ۲۱:۰۰" },
    { day: "جمعه", hours: "۸:۰۰ - ۲۰:۰۰" },
    { day: "کارگاه‌های هفتگی", hours: "جمعه ۱۶:۰۰ - ۱۸:۰۰" },
    { day: "برنامه‌های ویژه", hours: "اعلام در تقویم ماهانه" }
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
              بیایید آشنا شویم
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              درهای نان‌خانه آرام همیشه برای شما باز است. منتظر دیدارتان هستیم
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Information */}
            <div className={`transition-all duration-700 delay-200 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
              <div className="space-y-8">
                {/* Contact Cards */}
                <div className="grid sm:grid-cols-2 gap-6">
                  {contactInfo.map((info, index) => (
                    <div
                      key={info.title}
                      className="bg-card border border-border rounded-xl p-6 hover:bg-card/80 transition-warm group hover:golden-glow"
                    >
                      <div className="text-3xl mb-3 group-hover:animate-gentle-float">
                        {info.icon}
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {info.title}
                      </h3>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-muted-foreground hover:text-accent transition-colors"
                        >
                          {info.detail}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.detail}</p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Working Hours */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                    <span className="text-2xl ml-3">⏰</span>
                    ساعات کاری تفصیلی
                  </h3>
                  <div className="space-y-4">
                    {workingHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                        <span className="text-muted-foreground">{schedule.day}</span>
                        <span className="font-medium text-accent">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-gradient-to-br from-muted to-primary/20 rounded-xl p-6 golden-glow">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    ما را دنبال کنید
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    از آخرین اخبار، نان‌های تازه و رویدادهای جامعه مطلع شوید
                  </p>
                  <div className="flex space-x-reverse space-x-4">
                    <a 
                      href="#"
                      className="w-10 h-10 bg-accent text-primary rounded-lg flex items-center justify-center hover:bg-accent/90 transition-warm hover:scale-110"
                    >
                      📱
                    </a>
                    <a 
                      href="#"
                      className="w-10 h-10 bg-accent text-primary rounded-lg flex items-center justify-center hover:bg-accent/90 transition-warm hover:scale-110"
                    >
                      📷
                    </a>
                    <a 
                      href="#"
                      className="w-10 h-10 bg-accent text-primary rounded-lg flex items-center justify-center hover:bg-accent/90 transition-warm hover:scale-110"
                    >
                      🐦
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`transition-all duration-700 delay-400 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <div className="bg-card border border-border rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  پیام بفرستید
                </h3>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        نام شما
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
                        placeholder="نام خود را وارد کنید"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        شماره تماس
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
                        placeholder="شماره تماس خود را وارد کنید"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      ایمیل
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
                      placeholder="ایمیل خود را وارد کنید"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      موضوع
                    </label>
                    <select className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-colors">
                      <option value="">موضوع پیام خود را انتخاب کنید</option>
                      <option value="order">سفارش نان</option>
                      <option value="workshop">ثبت‌نام کارگاه</option>
                      <option value="event">رویدادها</option>
                      <option value="feedback">بازخورد</option>
                      <option value="other">سایر</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      پیام شما
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-colors resize-none"
                      placeholder="پیام خود را بنویسید..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-accent text-primary font-medium rounded-lg hover:bg-accent/90 transition-warm golden-glow hover:scale-105"
                  >
                    ارسال پیام
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;