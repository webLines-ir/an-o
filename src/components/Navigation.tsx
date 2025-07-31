import { useState, useEffect } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "خانه", href: "#home" },
    { label: "نان‌های ما", href: "#breads" },
    { label: "داستان ما", href: "#story" },
    { label: "جامعه", href: "#community" },
    { label: "تماس", href: "#contact" }
  ];

  return (
    <nav className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-sm border-b border-border' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-reverse space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-accent to-secondary rounded-md flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">ن</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">نان‌خانه آرام</h1>
              <p className="text-xs text-muted-foreground">پناهگاه شهری</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-reverse space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-accent transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground hover:text-accent transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;