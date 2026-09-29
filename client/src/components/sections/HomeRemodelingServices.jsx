/**
 * HomeRemodelingServices
 * Section 2: "WHAT WE DO"
 * - 2-column header layout (tag + title on left, narrative on right)
 * - 4 service columns sitting on #F3E7D9 with white rounded icon badge & divider
 */
export default function HomeRemodelingServices() {
  const services = [
    {
      title: 'Kitchen Remodeling',
      desc: 'Custom layouts, cabinetry, and finishes that make your kitchen the heart of the home again.',
      icon: '/assets/images/kitchen.png',
    },
    {
      title: 'Bathroom Remodeling',
      desc: 'From simple refreshes to spa-style retreats, built for comfort and lasting quality.',
      icon: '/assets/images/bathroom-3.png',
    },
    {
      title: 'Basement Remodeling',
      desc: 'Turn unused square footage into livable space — home offices, guest suites, or rec rooms.',
      icon: '/assets/images/basement.png',
    },
    {
      title: 'Framing & Drywall',
      desc: 'Structural repairs and clean wall finishes that set the foundation for every project.',
      icon: '/assets/images/rooftop.png',
    },
  ];

  return (
    <section className="hr-services-section">
      <div className="hr-container">
        {/* 2-Column Section Header */}
        <div className="hr-services-header-grid">
          <div className="hr-services-header-left">
            <div className="hr-tag-pill">
              <span>WHAT WE DO</span>
            </div>
            <h2 className="hr-section-title">
              Trusted Home Remodeling<br />
              Solutions In Your Area
            </h2>
          </div>
          <div className="hr-services-header-right">
            <p className="hr-section-subtitle-right">
              Using quality materials, proven techniques, and hands-on experience, our home remodeling contractors deliver renovations built to last — not just to look good on move-in day.
            </p>
          </div>
        </div>

        {/* 4 Service Columns */}
        <div className="hr-services-grid">
          {services.map((item) => (
            <div key={item.title} className="hr-service-item">
              <div className="hr-service-icon-box">
                <img
                  src={item.icon}
                  alt={item.title}
                  width="48"
                  height="48"
                  className="hr-service-icon"
                />
              </div>
              <div className="hr-service-divider" />
              <h3 className="hr-service-item-title">{item.title}</h3>
              <p className="hr-service-item-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
