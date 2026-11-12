import { useEffect } from "react";
import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Contact from "./pages/Contact";

const socialLink = "https://www.instagram.com/arvan.factory/";
const whatsappLink = `https://wa.me/966500000000?text=${encodeURIComponent(
  "السلام عليكم، أرغب بالتواصل مع مصنع أرفانا للعطور."
)}`;

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

function NotFound() {
  return (
    <section className="page-section empty-state">
      <span className="eyebrow">الصفحة غير متاحة</span>
      <h1>لم نعثر على هذه الصفحة</h1>
      <p>يمكنك العودة إلى الرئيسية ومتابعة استكشاف أرفانا.</p>
      <Link className="cta" to="/">العودة إلى الرئيسية</Link>
    </section>
  );
}

export default function App() {
  return (
    <div className="app-shell">
      <ScrollToTop />
      <header className="navbar">
        <Link className="brand" to="/" aria-label="أرفانا - الصفحة الرئيسية">
          <img src="/arvan-logo.jpg" alt="شعار أرفانا" className="brand-logo" />
          <div className="brand-text">
            <span>ARFANA</span>
            <small>Factory</small>
          </div>
        </Link>

        <nav className="main-nav" aria-label="التنقل الرئيسي">
          <NavLink end to="/" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
            الرئيسية
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
            من نحن
          </NavLink>
          <div className="nav-service-menu">
            <NavLink to="/services" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
              خدماتنا
            </NavLink>
            <details className="service-dropdown">
              <summary aria-label="عرض تفاصيل الخدمات" title="عرض تفاصيل الخدمات" />
              <div className="submenu">
                <NavLink to="/services/perfume-manufacturing">تصنيع العطور</NavLink>
                <NavLink to="/services/visual-identity">الهوية البصرية</NavLink>
                <NavLink to="/services/packaging">العبوات والتغليف</NavLink>
              </div>
            </details>
          </div>
          <NavLink to="/products" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
            منتجاتنا
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
            تواصل معنا
          </NavLink>
        </nav>
      </header>

      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home socialLink={socialLink} />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact whatsappLink={whatsappLink} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <a
        className="floating-whatsapp"
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="تواصل عبر واتساب"
      >
        WhatsApp
      </a>

      <footer className="footer">
        <div className="footer-content">
          <Link to="/" aria-label="أرفانا - الصفحة الرئيسية">
            <img src="/arvan-logo.jpg" alt="شعار أرفانا" className="footer-logo" />
          </Link>
          <p>أرفانا للعطور… نحوّل الأفكار إلى علامات ومنتجات متكاملة.</p>

          <div className="footer-links">
            <NavLink to="/about">من نحن</NavLink>
            <NavLink to="/services">خدماتنا</NavLink>
            <NavLink to="/products">منتجاتنا</NavLink>
            <NavLink to="/contact">تواصل معنا</NavLink>
            <a href={socialLink} target="_blank" rel="noreferrer">Instagram</a>
          </div>

          <p className="footer-copy">© 2026 ARFANA Factory – جميع الحقوق محفوظة</p>
        </div>
      </footer>
    </div>
  );
}
