import { Helmet } from 'react-helmet-async';
import { COMPANY } from '../content/siteData';
import '../styles/concrete.css';

/**
 * ConcreteServices Page Component
 * Exact reconstruction of https://jrchomeremodeling.com/concrete-services-near-you/
 */
export default function ConcreteServices() {
  const services = [
    {
      title: 'Concrete Driveways',
      desc: 'We install strong, long-lasting concrete driveways that improve curb appeal and withstand heavy daily use. Our team handles new installations, driveway extensions, and replacement of cracked or aging surfaces.',
    },
    {
      title: 'Concrete Patios',
      desc: 'Upgrade your outdoor space with a beautiful concrete patio designed for relaxation and entertaining. We create custom patio layouts that match your home and lifestyle.',
    },
    {
      title: 'Walkways and Sidewalks',
      desc: 'Safe and attractive walkways make your property easier to navigate and enhance its appearance. We install new walkways and repair damaged concrete paths.',
    },
    {
      title: 'Concrete Slabs',
      desc: 'We install concrete slabs for sheds, garages, outdoor structures, and home additions. Every slab is poured with proper preparation for strength and durability.',
    },
    {
      title: 'Concrete Steps',
      desc: 'Damaged or uneven steps can be unsafe. We repair or install concrete steps that provide secure access to your home.',
    },
    {
      title: 'Concrete Repairs',
      desc: 'Cracked or worn concrete surfaces can quickly worsen over time. Our repair services restore strength and appearance while preventing further damage.',
    },
  ];

  const benefits = [
    'Improved curb appeal',
    'Long-lasting performance',
    'Low maintenance surfaces',
    'Better property value',
    'Safe walking areas',
    'Weather-resistant durability',
  ];

  const repairs = [
    'Cracked driveway repair',
    'Uneven walkway repair',
    'Damaged patio restoration',
    'Concrete step repair',
    'Surface patching',
    'Concrete joint repair',
    'Small slab repairs',
    'Edge repairs',
    'Settlement corrections',
  ];

  const processSteps = [
    {
      title: 'Request a Free Estimate',
      icon: '/assets/images/estimate.png',
    },
    {
      title: 'Site Preparation',
      icon: '/assets/images/data-preparation.png',
    },
    {
      title: 'Concrete Pouring and Finishing',
      icon: '/assets/images/concrete-mixer.png',
    },
    {
      title: 'Final Inspection',
      icon: '/assets/images/checked.png',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Concrete Services Near You - jrchomeremodeling</title>
        <meta
          name="description"
          content="Looking for professional concrete services near you? JRC Home Remodeling provides durable, high-quality residential concrete solutions."
        />
        <link rel="canonical" href="https://jrchomeremodeling.com/concrete-services-near-you/" />
      </Helmet>

      <article className="concrete-page">
        {/* Section 0: Hero */}
        <section className="concrete-hero">
          <div className="concrete-hero-inner hr-container">
            <div className="concrete-hero-tag">
              RESIDENTIAL CONCRETE SERVICES
            </div>
            <h1 className="concrete-hero-title">
              Reliable Concrete Contractors in Nearby Areas
            </h1>
            <p className="concrete-hero-desc">
              Looking for professional concrete services near you in Auburn, NH? JRC Home Remodeling provides durable, high-quality residential concrete solutions designed to improve the safety, appearance, and value of your property — driveways, patios, walkways, and slabs built to last.
            </p>
            <a href={`tel:${COMPANY.phoneRaw}`} className="concrete-btn-orange">
              {COMPANY.phone}
            </a>
          </div>
        </section>

        {/* Section 1: Services Grid */}
        <section className="concrete-services-section">
          <div className="hr-container">
            <div className="concrete-section-header">
              <h2 className="concrete-section-title">
                Our Residential Concrete Services
              </h2>
              <p className="concrete-section-subtitle">
                We provide a full range of concrete installation and repair services for homeowners throughout Auburn and surrounding communities.
              </p>
            </div>

            <div className="concrete-cards-grid">
              {services.map((s) => (
                <div key={s.title} className="concrete-service-card">
                  <h3 className="concrete-card-title">{s.title}</h3>
                  <p className="concrete-card-desc">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 1B: Why Homeowners Choose JRC */}
        <section className="concrete-why-section">
          <div className="hr-container">
            <div className="concrete-why-grid">
              <div>
                <h2 className="concrete-why-title">
                  Why Homeowners Choose JRC Home Remodeling for Concrete Work
                </h2>
                <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#555', marginBottom: '16px' }}>
                  Concrete is one of the most durable and cost-effective materials for residential improvements. Professionally installed concrete provides:
                </p>
                <ul className="concrete-benefits-list">
                  {benefits.map((b) => (
                    <li key={b}>
                      <span style={{ color: '#F45404' }}>✓</span> {b}
                    </li>
                  ))}
                </ul>
                <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#555' }}>
                  Our team ensures each project is properly prepared and finished for maximum longevity.
                </p>
              </div>

              <div>
                <img
                  src="/assets/images/2364.jpg"
                  alt="Concrete installation work"
                  className="concrete-why-img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 1C: Repairs Handled */}
        <section className="concrete-repairs-section">
          <div className="hr-container">
            <h2 className="concrete-section-title">
              Concrete Repairs We Handle Every Week
            </h2>
            <div className="concrete-repairs-grid">
              {repairs.map((r) => (
                <div key={r} className="concrete-repair-tag">
                  {r}
                </div>
              ))}
            </div>
            <p style={{ fontSize: '15px', color: '#666', marginTop: '16px' }}>
              No repair is too small—our goal is to restore safety and appearance quickly and efficiently.
            </p>
          </div>
        </section>

        {/* Section 1D: Installation Process */}
        <section className="concrete-process-section">
          <div className="hr-container">
            <h2 className="concrete-section-title">
              Concrete Installation Process
            </h2>
            <div className="concrete-process-grid">
              {processSteps.map((step) => (
                <div key={step.title} className="concrete-process-card">
                  <img
                    src={step.icon}
                    alt={step.title}
                    className="concrete-process-icon"
                    loading="lazy"
                  />
                  <div className="concrete-process-step-title">{step.title}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '45px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '22px', color: '#160A05', marginBottom: '8px', fontFamily: 'Poppins, sans-serif' }}>
                Need a Concrete Contractor Near You Today
              </h3>
              <p style={{ color: '#666', marginBottom: '20px' }}>
                Call JRC Home Remodeling now to check availability and schedule fast local service.
              </p>
              <a href={`tel:${COMPANY.phoneRaw}`} className="concrete-btn-orange">
                {COMPANY.phone}
              </a>
            </div>
          </div>
        </section>

        {/* Section 2: Bottom Banner */}
        <section className="concrete-bottom-cta">
          <div className="concrete-bottom-inner hr-container">
            <div style={{ color: '#F45404', fontWeight: 700, fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px' }}>
              WELCOME TO JRC
            </div>
            <h2 className="concrete-bottom-title">
              Need Concrete Work Done Soon?
            </h2>
            <p className="concrete-bottom-desc">
              We offer flexible scheduling and fast estimates for concrete projects throughout Auburn and surrounding areas. Contact JRC Home Remodeling today to get started with your concrete installation or repair project.
            </p>
            <a href={`tel:${COMPANY.phoneRaw}`} className="concrete-btn-orange">
              {COMPANY.phone}
            </a>
          </div>
        </section>
      </article>
    </>
  );
}
