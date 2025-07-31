const Footer = () => {
  return (
    <footer className="bg-primary py-16 wheat-texture">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-reverse space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-secondary rounded-xl flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">ن</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary-foreground">نان‌خانه آرام</h3>
                  <p className="text-primary-foreground/80">پناهگاه شهری</p>
                </div>
              </div>
              <p className="text-primary-foreground/80 leading-relaxed mb-6 max-w-md">
                جایی که نان، قهوه و جامعه در آرامش ملاقات می‌کنند. 
                هر روز با عشق و دقت نان‌هایمان را برای شما می‌پزیم.
              </p>
              <div className="flex space-x-reverse space-x-4">
                <a 
                  href="#"
                  className="w-10 h-10 bg-accent text-primary rounded-lg flex items-center justify-center hover:bg-accent/90 transition-warm hover:scale-110"
                  aria-label="اینستاگرام"
                >
                  📷
                </a>
                <a 
                  href="#"
                  className="w-10 h-10 bg-accent text-primary rounded-lg flex items-center justify-center hover:bg-accent/90 transition-warm hover:scale-110"
                  aria-label="تلگرام"
                >
                  📱
                </a>
                <a 
                  href="#"
                  className="w-10 h-10 bg-accent text-primary rounded-lg flex items-center justify-center hover:bg-accent/90 transition-warm hover:scale-110"
                  aria-label="توییتر"
                >
                  🐦
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-primary-foreground mb-6">
                لینک‌های سریع
              </h4>
              <ul className="space-y-3">
                {[
                  { label: "خانه", href: "#home" },
                  { label: "نان‌های ما", href: "#breads" },
                  { label: "داستان ما", href: "#story" },
                  { label: "جامعه", href: "#community" },
                  { label: "تماس", href: "#contact" }
                ].map((link) => (
                  <li key={link.href}>
                    <a 
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-accent transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Opening Hours */}
            <div>
              <h4 className="text-lg font-semibold text-primary-foreground mb-6">
                ساعات کاری
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-primary-foreground/80">شنبه - پنج‌شنبه</span>
                  <span className="text-accent font-medium">۷:۰۰ - ۲۱:۰۰</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-primary-foreground/80">جمعه</span>
                  <span className="text-accent font-medium">۸:۰۰ - ۲۰:۰۰</span>
                </div>
                <div className="pt-3 border-t border-primary-foreground/20">
                  <div className="flex justify-between">
                    <span className="text-primary-foreground/80">کارگاه‌ها</span>
                    <span className="text-accent font-medium">جمعه ۱۶:۰۰</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-card/10 rounded-xl p-8 mb-12 border border-primary-foreground/10">
            <div className="text-center max-w-2xl mx-auto">
              <h4 className="text-xl font-semibold text-primary-foreground mb-4">
                عضویت در خبرنامه
              </h4>
              <p className="text-primary-foreground/80 mb-6">
                از آخرین اخبار، نان‌های تازه و رویدادهای ویژه مطلع شوید
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="ایمیل خود را وارد کنید"
                  className="flex-1 px-4 py-3 bg-background/10 border border-primary-foreground/20 rounded-lg text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <button className="px-6 py-3 bg-accent text-primary font-medium rounded-lg hover:bg-accent/90 transition-warm whitespace-nowrap">
                  عضویت
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-primary-foreground/20">
            <p className="text-primary-foreground/60 text-sm mb-4 md:mb-0">
              © ۱۴۰۳ نان‌خانه آرام. تمامی حقوق محفوظ است.
            </p>
            <div className="flex space-x-reverse space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                حریم خصوصی
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                شرایط استفاده
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                درباره ما
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;