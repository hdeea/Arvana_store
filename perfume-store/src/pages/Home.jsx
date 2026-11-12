import { Link } from "react-router-dom";

const services = [
  {
    id: "perfume-manufacturing",
    number: "01",
    title: "تصنيع العطور",
    description: "نحوّل فكرتك إلى عطر يحمل طابع علامتك، وفق متطلباتك ورؤيتك.",
  },
  {
    id: "visual-identity",
    number: "02",
    title: "الهوية البصرية",
    description: "هوية متكاملة تمنح علامتك حضوراً واضحاً ومتناسقاً.",
  },
  {
    id: "packaging",
    number: "03",
    title: "العبوات والتغليف",
    description: "حلول عبوات وتغليف تبرز شخصية المنتج وتفاصيله.",
  },
];

export default function Home({ socialLink }) {
  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <span className="eyebrow">ARFANA FACTORY</span>
          <img src="/arvan-logo.jpg" alt="شعار أرفانا" className="hero-logo" />
          <h1>أرفانا… فكرتك، عطرك، وعلامتك الخاصة</h1>
          <p>
            نرافقك من الفكرة إلى المنتج؛ بتصنيع العطور ومستحضرات التجميل،
            وتصميم الهوية البصرية والعبوات التي تمنح علامتك حضورها.
          </p>
          <div className="hero-actions">
            <Link className="cta" to="/services">اكتشف خدماتنا</Link>
            <Link className="cta secondary" to="/products">استكشف المنتجات</Link>
            <Link className="text-action" to="/about">تعرّف على أرفانا</Link>
          </div>
          <div className="hero-pills">
            <span>تصنيع حسب الفكرة</span>
            <span>هوية بصرية</span>
            <span>تغليف متكامل</span>
          </div>
        </div>
        <div className="hero-visual" aria-label="تصميم فني تجريدي لعبوة عطر">
          <div className="bottle bottle-main">
            <div className="bottle-cap" />
            <div className="bottle-body"><span>ARFANA</span></div>
          </div>
          <div className="glow-ring" />
        </div>
      </section>

      <section className="home-services page-section">
        <div className="section-heading centered">
          <span className="eyebrow">من الفكرة إلى الإطلاق</span>
          <h2>خدمات متكاملة لعلامتك</h2>
          <p className="section-intro">كل ما تحتاجه لبناء تجربة متناسقة تبدأ بالفكرة وتصل إلى المنتج.</p>
        </div>
        <div className="cards-grid">
          {services.map((service) => (
            <Link className="feature-card service-card" key={service.id} to={`/services/${service.id}`}>
              <span className="icon-circle">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="card-link">اكتشف الخدمة ←</span>
            </Link>
          ))}
        </div>
        <div className="section-action"><Link className="cta secondary" to="/services">عرض جميع الخدمات</Link></div>
      </section>

      <section className="home-collection page-section">
        <div className="section-heading centered">
          <span className="eyebrow">منتجات أرفانا</span>
          <h2>منتجات تحمل هوية علامتك</h2>
          <p className="section-intro">نعمل على تطوير منتجات وفق فكرة كل عميل. تفقّد معرض المنتجات للاطلاع على المواد المتاحة حالياً.</p>
        </div>
        <div className="collection-preview">
          <span className="collection-mark" aria-hidden="true">✦</span>
          <p>معرض المنتجات قيد التجهيز، وستظهر هنا المنتجات المصوّرة المتاحة.</p>
          <Link className="cta secondary" to="/products">زيارة معرض المنتجات</Link>
        </div>
      </section>

      <section className="why-us-section page-section">
        <div className="section-heading centered">
          <span className="eyebrow">شريكك في صناعة العلامة</span>
          <h2>من التصوّر إلى تجربة متكاملة</h2>
        </div>
        <div className="reasons-grid">
          <article className="reason-card"><div className="reason-icon">✦</div><h3>نبدأ من فكرتك</h3><p>نستمع إلى رؤيتك ونبني الحلول حول متطلبات مشروعك وهويته.</p></article>
          <article className="reason-card"><div className="reason-icon">✧</div><h3>تفاصيل متناسقة</h3><p>نربط المنتج بهويته وعبوته لتقديم تجربة متكاملة للعلامة.</p></article>
          <article className="reason-card"><div className="reason-icon">◇</div><h3>تواصل مباشر</h3><p>تواصل معنا لمشاركة فكرتك ومناقشة الخطوة المناسبة لمشروعك.</p></article>
        </div>
        <div className="section-action">
          <Link className="cta" to="/contact">ابدأ بالتواصل معنا</Link>
          {socialLink && <a className="quiet-link" href={socialLink} target="_blank" rel="noreferrer">تابعنا على إنستغرام</a>}
        </div>
      </section>
    </>
  );
}
