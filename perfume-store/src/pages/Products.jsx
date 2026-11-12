export default function Products() {
  return (
    <section className="page-section">
      <div className="section-heading">
        <span className="eyebrow">منتجاتنا</span>
        <h2>مجموعة مختارة من أفضل العطور والمنتجات الفاخرة</h2>
      </div>

      <div className="product-grid">
        <div className="product-card">
          <div className="product-art art-one" />
          <h3>عطور نسائية</h3>
          <p>مزيج أنيق من الزهور والفاخرات، مصمم لخلق أثر دائم.</p>
        </div>

        <div className="product-card">
          <div className="product-art art-two" />
          <h3>عطور رجالية</h3>
          <p>رائحة عميقة ومتوازنة تعكس القوة والهوية والاحترافية.</p>
        </div>

        <div className="product-card">
          <div className="product-art art-three" />
          <h3>مجموعات هدايا</h3>
          <p>حزم أنيقة ومخصصة، مناسبة للهدية الفاخرة وللعلامات التجارية.</p>
        </div>
      </div>
    </section>
  );
}
