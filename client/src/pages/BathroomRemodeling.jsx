import { Helmet } from 'react-helmet-async';
import EstimateForm from '../components/forms/EstimateForm';
import BeforeAfterSlider from '../components/common/BeforeAfterSlider';
import { COMPANY } from '../content/siteData';
import '../styles/bathroom.css';

/**
 * BathroomRemodeling Component
 * Full reconstruction of https://jrchomeremodeling.com/bathroom-remodeling/
 */
export default function BathroomRemodeling() {
  const services = [
    {
      title: 'Walk-in Showers',
      desc: 'Frameless glass enclosures, low-threshold pans, custom niche shelves, and multiple shower head fixtures.',
      icon: '/assets/images/shower.png',
    },
    {
      title: 'Bathtub Replacement',
      desc: 'Freestanding soaking tubs, alcove replacements, and modern acrylic or cast iron options.',
      icon: '/assets/images/bathtub.png',
    },
    {
      title: 'Custom Vanities',
      desc: 'Single and double sink vanities with quartz or marble countertops, soft-close hardware, and modern mirrors.',
      icon: '/assets/images/dresser.png',
    },
    {
      title: 'Tile Flooring & Walls',
      desc: 'Waterproof floor-to-ceiling tile, heated floor systems, herringbone patterns, and custom backsplashes.',
      icon: '/assets/images/tile.png',
    },
    {
      title: 'Lighting Upgrades',
      desc: 'Dimmable LED vanity lights, recessed shower lights, and illuminated anti-fog LED mirrors.',
      icon: '/assets/images/light.png',
    },
    {
      title: 'Full Bathroom Renovations',
      desc: 'Complete layout gut renovations, plumbing relocations, and luxury master suite transformations.',
      icon: '/assets/images/bathroom-1.png',
    },
  ];

  const galleryImages = [
    '/assets/images/photo-1771239048293-72abf673adb2.jpeg',
    '/assets/images/photo-1765745518752-68a289300789.jpeg',
    '/assets/images/photo-1756079664354-34944e001f6d.jpeg',
    '/assets/images/photo-1769253523308-f7bff35c60b1.jpeg',
  ];

  const reviews = [
    {
      quote: 'JRC did an awesome job with our bathroom floor and shower! They were responsive, pleasant, professional, had good communication, were on time, and most importantly, did a great job! We are so happy with the results and look forward to working with Monica and her team again.',
      author: 'Bliss Bernal',
      role: 'Denver Homeowner',
    },
    {
      quote: 'Remodeled three bathrooms. We were very impressed with the attention to detail. Always on time, professional, easy to reach. GREAT work!',
      author: 'Toni Starner',
      role: 'Denver Homeowner',
    },
    {
      quote: 'I have used JRC twice now – once, to add a bathroom to a basement, and then again to install custom shower tile. They offered great pricing, were communicative every step of the way, and both projects turned out beautifully. I wouldn’t hesitate to use them again!',
      author: 'Charissa Walton',
      role: 'Denver Homeowner',
    },
  ];

  const serviceAreas = [
    'Denver',
    'Aurora',
    'Lakewood',
    'Thornton',
    'Arvada',
    'Westminster',
    'Centennial',
    'Englewood',
    'Castle Rock',
    'Littleton',
  ];

  return (
    <>
      <Helmet>
        <title>Luxury Bathroom Remodeling Contractors | Denver Experts</title>
        <meta
          name="description"
          content="Denver bathroom remodeling? JRC Home Remodeling offers expert renovations. Get a free estimate for your dream bathroom today!"
        />
        <link rel="canonical" href="https://jrchomeremodeling.com/bathroom-remodeling/" />
      </Helmet>

      <article className="bathroom-page">
        {/* Section 0: Hero with Before/After Slider */}
        <section className="bathroom-hero-section">
          <div className="hr-container">
            <div className="bathroom-hero-grid">
              <div>
                <div className="hr-tag-pill">
                  <span>BATHROOM REMODEL NEAR ME</span>
                </div>
                <h1 className="bathroom-hero-title">
                  Your Dream Bathroom Starts Here
                </h1>
                <p className="bathroom-hero-desc">
                  If you’re searching for a bathroom renovation near me or planning a bathroom remodel near me, JRC Home Remodeling is the team you can trust to bring your vision to life.
                </p>
                <div className="bathroom-hero-cta-group">
                  <a href="#estimate-form" className="btn hr-btn-orange" style={{ padding: '13px 28px' }}>
                    Get Free Estimate
                  </a>
                  <a href="#transformations" className="btn hr-btn-white" style={{ padding: '13px 28px' }}>
                    View Transformations
                  </a>
                </div>
                <div className="bathroom-highlights">
                  5-Star Rated &nbsp;|&nbsp; Licensed &amp; Insured &nbsp;|&nbsp; Fast Turnaround
                </div>
              </div>

              {/* Right Side Before/After Slider */}
              <div>
                <BeforeAfterSlider
                  beforeImage="/assets/images/Rdv6lB5v-1.jpeg"
                  afterImage="/assets/images/ch6kGaOC.jpeg"
                  beforeAlt="Outdated beige laminate bathroom"
                  afterAlt="Modern subway tile and glass shower remodel"
                  height="480px"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Dark Navy Trust Bar */}
        <section className="bathroom-trust-bar">
          <div className="hr-container">
            <h2 className="bathroom-trust-heading">
              Trusted By Homeowners Across Denver Metro Area
            </h2>

            <div className="bathroom-trust-grid">
              <div className="bathroom-trust-card-white">
                <div className="bathroom-trust-stars">★★★★★</div>
                <div className="bathroom-trust-card-label">Customer Satisfaction</div>
              </div>

              <div className="bathroom-trust-item">
                <div className="bathroom-trust-icon">🏠</div>
                <div className="bathroom-trust-num">40+ Remodeling Projects</div>
                <div className="bathroom-trust-sub">Completed</div>
              </div>

              <div className="bathroom-trust-item">
                <div className="bathroom-trust-icon">🛡️</div>
                <div className="bathroom-trust-num">Local Remodeling</div>
                <div className="bathroom-trust-sub">Specialists</div>
              </div>

              <div className="bathroom-trust-item">
                <div className="bathroom-trust-icon">⏰</div>
                <div className="bathroom-trust-num">Free Consultations</div>
                <div className="bathroom-trust-sub">Available</div>
              </div>
            </div>

            <a href="#estimate-form" className="bathroom-trust-btn">
              Schedule Free Consultation
            </a>
          </div>
        </section>

        {/* Section 2: Second Transformation & Photo Gallery */}
        <section id="transformations" className="bathroom-transform-section">
          <div className="hr-container">
            <div className="hr-tag-pill">
              <span>BATHROOM RENOVATIONS</span>
            </div>
            <h2 className="hr-section-title">
              See the Difference a Professional Bathroom Renovations Makes
            </h2>
            <p style={{ maxWidth: '780px', margin: '0 auto 40px', color: '#555', fontSize: '16px' }}>
              At JRC Home Remodeling, we pride ourselves on delivering high-quality bathroom renovations quickly and efficiently, with many projects completed within just one week. Our skilled team works closely with you every step of the way, maintaining clear communication and attention to detail from start to finish.
            </p>

            <div style={{ maxWidth: '980px', margin: '0 auto' }}>
              <BeforeAfterSlider
                beforeImage="/assets/images/Gemini_Generated_Image_9v5rgw9v5rgw9v5r.jpg"
                afterImage="/assets/images/Gemini_Generated_Image_9v5rgw9v5rgw9v5r-1.jpg"
                beforeAlt="Before bathroom renovation"
                afterAlt="After luxury bathroom remodel"
                height="650px"
              />
            </div>

            {/* 4 Project Gallery Photos */}
            <div className="bathroom-gallery-grid">
              {galleryImages.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`Bathroom remodel project ${idx + 1}`}
                  className="bathroom-gallery-img"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: 6 Services Grid */}
        <section className="bathroom-services-section">
          <div className="hr-container">
            <div className="hr-section-header text-center">
              <div className="hr-tag-pill">
                <span>WHAT WE OFFER</span>
              </div>
              <h2 className="hr-section-title">
                Transform Your Bathroom Into a Luxury Retreat
              </h2>
            </div>

            <div className="bathroom-services-grid">
              {services.map((s) => (
                <div key={s.title} className="bathroom-service-item">
                  <div className="bathroom-service-icon-wrap">
                    <img src={s.icon} alt={s.title} className="bathroom-service-icon" />
                  </div>
                  <h3 className="bathroom-service-title">{s.title}</h3>
                  <p className="bathroom-service-desc">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Why Homeowners Choose JRC */}
        <section className="bathroom-why-section">
          <div className="hr-container">
            <div className="bathroom-why-grid">
              <div>
                <div className="hr-tag-pill">
                  <span>WHY CHOOSE US</span>
                </div>
                <h2 className="bathroom-why-title">
                  Why Homeowners Choose JRC Home Remodeling
                </h2>
                <p className="bathroom-why-desc">
                  Many homeowners choosing a bathroom remodel near me are deciding to convert their traditional tubs into modern walk-in showers. This upgrade is one of the most popular bathroom renovations today because it improves both functionality and style while adding long-term value to your home.
                </p>
                <p className="bathroom-why-desc">
                  A professional bathroom contractor can help design a walk-in shower that fits your space perfectly and meets your everyday needs.
                </p>
                <a href={`tel:${COMPANY.phoneRaw}`} className="btn hr-btn-orange" style={{ padding: '13px 28px', display: 'inline-block' }}>
                  Talk With a Remodeling Expert
                </a>
              </div>

              <div>
                <img
                  src="/assets/images/photo-1765745518752-68a289300789.jpeg"
                  alt="Modern Walk-in Shower"
                  style={{ width: '100%', borderRadius: '16px', boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: What Denver Homeowners Say About Us */}
        <section className="bathroom-reviews-section">
          <div className="hr-container">
            <div className="hr-tag-pill">
              <span>BATHROOM REMODEL NEAR ME</span>
            </div>
            <h2 className="hr-section-title">
              What Denver Homeowners Say About Us
            </h2>

            <div className="bathroom-reviews-grid">
              {reviews.map((r, i) => (
                <div key={i} className="bathroom-review-card">
                  <div>
                    <div className="bathroom-trust-stars" style={{ marginBottom: '14px' }}>★★★★★</div>
                    <p className="bathroom-review-quote">"{r.quote}"</p>
                  </div>
                  <div className="bathroom-review-author">{r.author}</div>
                </div>
              ))}
            </div>

            <a href="#estimate-form" className="bathroom-trust-btn">
              Get Free Quotes
            </a>
          </div>
        </section>

        {/* Section 6 & 7: Our Latest Bathroom Remodels */}
        <section className="bathroom-videos-section">
          <div className="hr-container">
            <div className="hr-tag-pill">
              <span>OUR WORK</span>
            </div>
            <h2 className="hr-section-title">
              Our Latest Bathroom Remodels
            </h2>

            <div className="bathroom-videos-grid">
              <div className="bathroom-remodel-before-after-card">
                <img
                  src="/assets/images/Before-After.png"
                  alt="Before and After Bathroom Remodel"
                  className="bathroom-remodel-img"
                />
              </div>
              <div className="bathroom-video-card">
                <video
                  src="/assets/videos/bath-1.mp4"
                  controls
                  loop
                  playsInline
                  preload="metadata"
                  controlsList="nodownload"
                  className="bathroom-reel-video"
                />
              </div>
              <div className="bathroom-video-card">
                <video
                  src="/assets/videos/bath-customer.mp4"
                  controls
                  loop
                  playsInline
                  preload="metadata"
                  controlsList="nodownload"
                  className="bathroom-reel-video"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Bottom Estimate Form & Service Areas */}
        <section id="estimate-form" className="bathroom-bottom-section">
          <div className="hr-container">
            <div className="bathroom-bottom-grid">
              <div>
                <div className="hr-tag-pill">
                  <span>FREE ESTIMATE</span>
                </div>
                <h2 className="bathroom-bottom-title">
                  Get Your Free Remodeling Estimate Today
                </h2>
                <p className="bathroom-bottom-desc">
                  No pressure. No obligation. Just expert recommendations for your space and budget. We know that when you’re happy with your new bathroom, it leads to great reviews—and that’s what we strive for on every project.
                </p>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', fontWeight: 600, marginBottom: '8px' }}>
                    <span style={{ color: '#F45404' }}>✓</span> Know your remodeling options
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', fontWeight: 600, marginBottom: '8px' }}>
                    <span style={{ color: '#F45404' }}>✓</span> Understand expected costs
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', fontWeight: 600, marginBottom: '8px' }}>
                    <span style={{ color: '#F45404' }}>✓</span> Plan your upgrade confidently
                  </li>
                </ul>

                <h3 className="bathroom-areas-title">
                  Serving Homeowner Across Denver
                </h3>
                <div className="bathroom-areas-grid">
                  {serviceAreas.map((area) => (
                    <div key={area} className="bathroom-area-item">
                      {area}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <EstimateForm
                  serviceName="Bathroom Remodeling"
                  title="Get Your Free Estimate"
                  subtitle="Privacy policy | Terms & Conditions"
                  showSms={true}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 9: Ready to Upgrade Your Bathroom? */}
        <section
          className="bathroom-cta-banner"
          style={{ backgroundImage: "url('/assets/images/10-Hidden-Bathroom-Remodel-Costs-to-Keep-in-Mind-Picsart-AiImageEnhancer-1.webp')" }}
        >
          <div className="bathroom-cta-inner hr-container">
            <h2 className="bathroom-cta-title">
              Ready to Upgrade Your Bathroom?
            </h2>
            <p className="bathroom-cta-desc">
              If you’re considering a bathroom renovation near me, converting your tub to a walk-in shower is a smart, practical upgrade that enhances both comfort and style.
            </p>
            <div className="bathroom-cta-actions">
              <a href="#estimate-form" className="btn hr-btn-orange" style={{ padding: '14px 32px' }}>
                Get Free Estimate
              </a>
              <a href={`tel:${COMPANY.phoneRaw}`} className="btn hr-btn-white" style={{ padding: '14px 32px' }}>
                Call {COMPANY.phone}
              </a>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
