export default function About() {
  return (
    <section className="page-section about-page">
      <div className="section-heading centered">
        <img src="/arvan-logo.jpg" alt="Arvan Logo" className="about-logo" />
        <h2>من نحن</h2>
      </div>

      <p className="lead-text">
        أرفان للعطور… علامة متخصصة في صناعة العطور الفاخرة، تجمع بين الإبداع,
        الأصالة، والدقة في كل تفصيلة. نساعدك على تحويل فكرتك إلى علامة تجارية
        متكاملة بمعايير عالمية وجودة مضمونة، لنصنع معك عطراً يحمل هويتك ويصل إلى العالم.
      </p>

      <div className="info-grid">
        <div className="info-card">
          <span className="card-tag">رسالتنا</span>
          <h3>إنتاج عطور تعكس الفخامة والهوية</h3>
          <p>
            نقدم تركيبات عطرية عالية الجودة تُصنع بعناية ودقة، وتناسب ذوق عملائنا
            الباحثين عن الجودة، الأصالة، والحضور المميز.
          </p>
        </div>

        <div className="info-card">
          <span className="card-tag">رؤيتنا</span>
          <h3>الريادة في صناعة العطور العالمية</h3>
          <p>
            نسعى لأن نكون من العلامات الرائدة في عالم العطور، ونصنع تجارب حسية
            تترك أثراً دائماً في الذاكرة محلياً وعالمياً.
          </p>
        </div>

        <div className="info-card">
          <span className="card-tag">تواجدنا</span>
          <h3>من سوريا إلى الإمارات</h3>
          <p>
            نفخر بتواجد مصنع أرفان في سوريا والإمارات، لنقدم حلولاً متكاملة في تصنيع
            العطور ومستحضرات العناية بأعلى معايير الجودة.
          </p>
        </div>
      </div>
    </section>
  );
}
