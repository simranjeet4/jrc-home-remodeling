import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import EstimateForm from '../forms/EstimateForm';
import C3DRectangularCubeSlider from '../about/C3DRectangularCubeSlider';
import { COMPANY } from '../../content/siteData';
import locationsData from '../../content/locationsData.json';
import '../../styles/location-page.css';

export default function LocationPageTemplate({
  city,
  slug,
  title: propTitle,
  metaDescription: propMetaDesc,
  showServicesList = true,
  showContact = true,
}) {
  const [openFaq, setOpenFaq] = useState(null);

  // Parallax scroll for Section 4 images
  const whySectionRef = useRef(null);
  const { scrollYProgress: whyScrollProgress } = useScroll({
    target: whySectionRef,
    offset: ['start end', 'end start'],
  });
  const whyMainImgY = useTransform(whyScrollProgress, [0, 1], [40, -40]);
  const whySubImgY = useTransform(whyScrollProgress, [0, 1], [30, -30]);

  // Normalize city to key in locationsData
  const key = (city || '')
    .toLowerCase()
    .replace(/highlands/g, 'highland')
    .replace(/\s+/g, '-');

  const loc = locationsData[key] || {};
  const hasServicesList = showServicesList && loc.showServicesList !== false && city !== 'Arvada';
  const hasContact = showContact && loc.showContact !== false && city !== 'Arvada';

  const pageTitle = propTitle || loc.title || `Home Remodeling Contractor in ${city}, CO | JRC`;
  const metaDesc = propMetaDesc || loc.metaDesc || `Looking for an experienced home remodeling contractor in ${city}, CO? Request a free estimate with JRC Home Remodeling!`;
  const canonicalUrl = loc.canonical || `https://jrchomeremodeling.com/${slug}/`;

  const hero = loc.hero || {
    pill: `${city.toUpperCase()}'S TRUSTED REMODELING TEAM`,
    title: `Home Remodeling Contractor in ${city}, CO`,
    desc: `Transforming ${city} homes with craftsmanship, care, and local expertise.`,
    bg: '3913-1.jpg'
  };

  const stats = loc.stats && loc.stats.length > 0 ? loc.stats : [
    { num: '50+', label: 'Happy Clients' },
    { num: '4', label: 'Core Disciplines' },
    { num: '100%', label: 'Satisfaction Focus' }
  ];

  const testimonial = loc.testimonial || {
    quote: "JRC did an awesome job with our remodeling project! They were responsive, pleasant, professional, and did a great job!",
    author: "Satisfied Homeowner"
  };

  const whatWeDo = loc.whatWeDo || {
    pill: 'WHAT WE DO',
    title: `Trusted Home Remodeling Solutions Across ${city}, CO`,
    intro: `Full-service remodeling solutions designed for ${city} homes.`,
    cards: []
  };

  const whyChoose = loc.whyChoose || {
    pill: 'WHY CHOOSE US',
    title: `Local Remodeling Expertise Built for ${city}`,
    desc: `Remodeling in ${city} requires proven experience and quality craftsmanship.`,
    bullets: [],
    images: []
  };

  const ourServices = loc.ourServices || {
    pill: 'OUR SERVICES',
    title: `Full-Service Home Remodeling for ${city} Homeowners`,
    sub: 'Trusted By 1000+ Satisfied Customers',
    desc: '',
    cards: []
  };

  const faqs = loc.faqs || {
    pill: 'ASK A QUESTION',
    title: `${city} Home Remodeling FAQs`,
    items: []
  };

  const contact = loc.contact || {
    pill: 'CONTACT US',
    title: `Your Trusted ${city} Remodeling Partner — Ready to Get Started`,
    desc: `Your home should reflect your lifestyle, comfort, and personal taste.`
  };

  const serviceLinks = {
    'Kitchen Remodeling': '/kitchen-remodeling',
    'Bathroom Remodeling': '/bathroom-remodeling',
    'Basement Finishing': '/basement-remodeling',
    'Basement Remodeling': '/basement-remodeling',
    'Whole-Home Remodeling': '/services',
  };

  const mainWhyImg = whyChoose.images && whyChoose.images[0]
    ? `/assets/images/${whyChoose.images[0]}`
    : '/assets/images/24368.jpg';

  const subWhyImg = whyChoose.images && whyChoose.images[1]
    ? `/assets/images/${whyChoose.images[1]}`
    : null;

  return (
    <article className="loc-page">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDesc} />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

                  {/* 1. Hero Section */}
      <section
        className="loc-hero"
        style={{
          backgroundImage: `url('/assets/images/${hero.bg || 'arvada-basement-hero.jpg'}')`
        }}
      >
        <div className="loc-hero-overlay" />
        <div className="loc-container loc-hero-container">
          <div className="loc-hero-left">
            {hero.pill && (
              <div className="loc-pill loc-pill-light">
                <span>{hero.pill}</span>
              </div>
            )}
            <h1 className="loc-hero-title">{hero.title}</h1>
            <p className="loc-hero-desc">{hero.desc}</p>
            <div className="loc-hero-actions">
              <Link to="/services" className="loc-btn-orange">
                View Our Services <span className="loc-btn-arrow">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Full Width Stats & Review Section */}
      <section className="loc-stats-bar">
        <div className="loc-container-fluid">
          <div className="loc-stats-grid">
            {/* Left Stats Columns */}
            <div className="loc-stats-left">
              {stats.map((st, i) => (
                <div key={i} className="loc-stat-item">
                  <div className="loc-stat-num">{st.num}</div>
                  <div className="loc-stat-lbl">{st.label}</div>
                </div>
              ))}
            </div>

            {/* Right Overlapping Review Card matching screenshot 100% */}
            <div className="loc-hero-review-card">
              <div className="loc-review-top-grid">
                <p className="loc-review-quote-text">
                  {testimonial.quote}
                </p>
                <div className="loc-review-star-graphic">
                  <svg width="140" height="140" viewBox="0 0 24 24" fill="#FDE3B8">
                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/>
                  </svg>
                </div>
              </div>
              <div className="loc-review-divider" />
              <div className="loc-review-author-row">
                <div className="loc-review-author-info">
                  <div className="loc-review-author-name">{testimonial.author}</div>
                  <div className="loc-review-stars">
                    Google Review <span className="loc-stars-gold">★★★★★</span>
                  </div>
                </div>
                <img
                  src={`/assets/images/${testimonial.avatar || 'user9.jpg'}`}
                  alt={testimonial.author}
                  className="loc-review-avatar"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What We Do */}
      <section className="loc-wwd">
        <div className="loc-container">
          <div className="loc-wwd-header-split">
            <div className="loc-wwd-header-left">
              <div className="loc-pill-dark">
                <span>{whatWeDo.pill || 'WHAT WE DO'}</span>
              </div>
              <h2 className="loc-section-title">{whatWeDo.title}</h2>
            </div>
            <div className="loc-wwd-header-right">
              {whatWeDo.intro && (
                <p className="loc-wwd-intro-text">
                  {whatWeDo.intro}
                </p>
              )}
            </div>
          </div>

          <div className="loc-wwd-grid">
            {whatWeDo.cards.map((card, idx) => {
              const iconPath = card.icon ? `/assets/images/${card.icon}` : '/assets/images/kitchen-table.png';
              return (
                <div key={idx} className="loc-wwd-card">
                  <div className="loc-wwd-icon-box">
                    <img src={iconPath} alt={card.title} className="loc-wwd-icon" />
                  </div>
                  <div className="loc-wwd-card-divider" />
                  <h3 className="loc-wwd-title">{card.title}</h3>
                  <p className="loc-wwd-desc">{card.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section className="loc-why" ref={whySectionRef}>
        <div className="loc-container">
          <div className="loc-why-grid">
            <div className="loc-why-main-col">
              <motion.img
                src={mainWhyImg}
                alt={`${city} remodeling craftsmanship`}
                className="loc-why-img-main"
                style={{ y: whyMainImgY, scale: 1.15 }}
              />
            </div>

            <div className="loc-why-content-col">
              <div className="loc-pill-dark">
                <span>{whyChoose.pill || 'WHY CHOOSE JRC'}</span>
              </div>
              <h2 className="loc-section-title">{whyChoose.title}</h2>
              {whyChoose.desc && (
                <p className="loc-why-desc">{whyChoose.desc}</p>
              )}
              {whyChoose.desc2 && (
                <p className="loc-why-desc" style={{ marginTop: '14px' }}>
                  {whyChoose.desc2}
                </p>
              )}

              <div className="loc-why-bottom-grid">
                <div className="loc-why-bullets-col">
                  {whyChoose.bullets && whyChoose.bullets.length > 0 && (
                    <ul className="loc-why-bullets">
                      {whyChoose.bullets.map((b, i) => (
                        <li key={i} className="loc-why-bullet-item">
                          <span className="loc-why-check">✓</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <Link to="/about-us" className="loc-btn-orange">
                    <span>More About Us</span>
                    <span>↗</span>
                  </Link>
                </div>

                {subWhyImg && (
                  <div className="loc-why-sub-col">
                    <motion.img
                      src={subWhyImg}
                      alt={`${city} home renovation`}
                      className="loc-why-img-sub"
                      style={{ y: whySubImgY, scale: 1.15 }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Our Services / Feature Showcase (2-Column Sticky Layout) */}
      {ourServices.cards && ourServices.cards.length > 0 && (
        <section className="loc-services-section">
          <div className="loc-container">
            <div className="loc-services-grid">
              {/* Left Column (Sticky) */}
              <div className="loc-services-left">
                <div className="loc-pill-dark">
                  <span>{ourServices.pill || 'WHY CHOOSE JRC'}</span>
                </div>
                <h2 className="loc-section-title" style={{ margin: '0 0 18px' }}>
                  {ourServices.title}
                </h2>
                {ourServices.desc && (
                  <p className="loc-services-desc">
                    {ourServices.desc}
                  </p>
                )}
                <div className="loc-services-cta-row">
                  <Link to="/services" className="loc-btn-orange">
                    <span>View All Services</span>
                    <span>↗</span>
                  </Link>

                  <div className="loc-services-trust">
                    <div className="loc-services-avatars">
                      <img src="/assets/images/user9.jpg" alt="User 9" className="loc-services-avatar" />
                      <img src="/assets/images/user8.jpg" alt="User 8" className="loc-services-avatar" />
                      <img src="/assets/images/user7.jpg" alt="User 7" className="loc-services-avatar" />
                    </div>
                    <div className="loc-services-trust-info">
                      <div className="loc-services-trust-title">
                        Trusted By <span className="loc-services-trust-highlight">1000+</span>
                      </div>
                      <div className="loc-services-trust-sub">
                        Satisfied Customers
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column (Stacked Cards) */}
              <div className="loc-services-cards">
                {ourServices.cards.map((card, idx) => {
                  const imgPath = card.image ? `/assets/images/${card.image}` : '/assets/images/33190.jpg';
                  return (
                    <div key={idx} className="loc-service-card">
                      <img
                        src={imgPath}
                        alt={card.title}
                        className="loc-service-card-img"
                      />
                      <div className="loc-service-card-content">
                        <h3 className="loc-service-card-title">
                          {card.title}
                        </h3>
                        <p className="loc-service-card-desc">
                          {card.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 6. Marquee Ribbon (Moved Up & Styled 100% to Screenshot) */}
      <section className="loc-marquee">
        <div className="loc-marquee-track">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="loc-marquee-item">
              <div className="loc-marquee-unit">
                <img
                  src="/assets/images/marquee-brush.jpg"
                  alt="USA Badge"
                  className="loc-marquee-badge"
                />
                <span className="loc-marquee-text">{city} Home Remodeling</span>
              </div>

              <div className="loc-marquee-unit">
                <img
                  src="/assets/images/marquee-brush.jpg"
                  alt="USA Badge"
                  className="loc-marquee-badge"
                />
                <span className="loc-marquee-text">Certified Remodeling</span>
              </div>

              <div className="loc-marquee-unit">
                <img
                  src="/assets/images/marquee-brush.jpg"
                  alt="USA Badge"
                  className="loc-marquee-badge"
                />
                <span className="loc-marquee-text">Top Rated Contractors</span>
              </div>

              <div className="loc-marquee-unit">
                <img
                  src="/assets/images/marquee-brush.jpg"
                  alt="USA Badge"
                  className="loc-marquee-badge"
                />
                <span className="loc-marquee-text">Free Estimates</span>
              </div>

              <div className="loc-marquee-unit">
                <img
                  src="/assets/images/marquee-brush.jpg"
                  alt="USA Badge"
                  className="loc-marquee-badge"
                />
                <span className="loc-marquee-text">100% Satisfaction Guaranteed</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. FAQ Accordion Section - 100% Match to Screenshot */}
      {faqs.items && faqs.items.length > 0 && (
        <section className="loc-faq">
          <div className="loc-container">
            <div className="loc-faq-grid">
              {/* Left Column: Pill, Title, Skyline Image Card with Trust Overlay */}
              <div className="loc-faq-left">
                <div className="loc-pill-dark">
                  <span>{faqs.pill || 'ASK A QUESTION'}</span>
                </div>
                <h2 className="loc-section-title" style={{ margin: '0 0 28px' }}>
                  {faqs.title || 'Frequently Asked Question'}
                </h2>

                <div className="loc-faq-img-card">
                  <img
                    src="/assets/images/faq-skyline.jpg"
                    alt={`${city} skyline remodeling`}
                    className="loc-faq-skyline-img"
                  />
                  <div className="loc-faq-img-overlay" />

                  <div className="loc-faq-trust-badge">
                    <div className="loc-faq-avatars">
                      <img src="/assets/images/user9.jpg" alt="User 9" className="loc-faq-avatar" />
                      <img src="/assets/images/user8.jpg" alt="User 8" className="loc-faq-avatar" />
                      <img src="/assets/images/user7.jpg" alt="User 7" className="loc-faq-avatar" />
                    </div>
                    <div className="loc-faq-trust-info">
                      <div className="loc-faq-trust-title">
                        Trusted By <span className="loc-faq-trust-highlight">1000+</span>
                      </div>
                      <div className="loc-faq-trust-sub">
                        Satisfied Customers
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: FAQ Accordion Stack */}
              <div className="loc-faq-right">
                <div className="loc-faq-list">
                  {faqs.items.map((faq, idx) => {
                    const isOpen = openFaq === idx;
                    return (
                      <div key={idx} className="loc-faq-item">
                        <div
                          className="loc-faq-q"
                          onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                        >
                          <span className="loc-faq-q-text">{faq.q}</span>
                          <span className={`loc-faq-arrow ${isOpen ? 'is-open' : ''}`}>
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="9 18 15 12 9 6" />
                            </svg>
                          </span>
                        </div>
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              key="content"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] }}
                              style={{ overflow: 'hidden' }}
                            >
                              <div className="loc-faq-a">
                                <p>{faq.a}</p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 9. Contact & Free Estimate Form */}
      {hasContact && (
        <section className="loc-contact" id="estimate-form">
          <div className="loc-container-fluid">
            <div className="loc-contact-grid">
              <div>
                <div className="loc-pill">
                  <span>{contact.pill || 'CONTACT US'}</span>
                </div>
                <h2 className="loc-section-title">{contact.title}</h2>
                <p className="loc-contact-desc">{contact.desc}</p>

                <div className="loc-contact-info-card">
                  <div className="loc-contact-icon">✉</div>
                  <div>
                    <div style={{ fontSize: '13px', color: '#666666' }}>Email Our Team</div>
                    <a href={`mailto:${COMPANY.email}`} style={{ fontSize: '16px', fontWeight: '700', color: '#160A05', textDecoration: 'none' }}>
                      {COMPANY.email}
                    </a>
                  </div>
                </div>

                <div className="loc-contact-info-card">
                  <div className="loc-contact-icon">✆</div>
                  <div>
                    <div style={{ fontSize: '13px', color: '#666666' }}>Call For Immediate Response</div>
                    <a href={`tel:${COMPANY.phoneRaw}`} style={{ fontSize: '16px', fontWeight: '700', color: '#160A05', textDecoration: 'none' }}>
                      {COMPANY.phone}
                    </a>
                  </div>
                </div>

                <div className="loc-contact-info-card">
                  <div className="loc-contact-icon">⏰</div>
                  <div>
                    <div style={{ fontSize: '13px', color: '#666666' }}>Working Hours</div>
                    <div style={{ fontSize: '15px', fontWeight: '600', color: '#160A05' }}>
                      Monday – Saturday: 7:00 AM – 7:00 PM
                    </div>
                  </div>
                </div>
              </div>

              <div className="loc-contact-form-box">
                <EstimateForm
                  serviceName={`${city} Home Remodeling`}
                  title="Get Your Free Estimate"
                  subtitle={`Serving ${city} and the greater Denver metro area.`}
                />
              </div>
            </div>
          </div>
        </section>
      )}
    


      {/* What Our Clients Say Section (3D Rectangular Cube Rotating Testimonial) */}
      <section className="about-sec5-section" style={{ backgroundColor: "#132B45", color: "#FFFFFF" }}>
        <div
          className="hr-container"
          style={{
            width: '100%',
            maxWidth: '1650px',
            margin: '0 auto',
            padding: '0 24px'
          }}
        >
          <div style={{ marginBottom: '40px' }}>
            <div
              style={{
                display: 'inline-block',
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                padding: '8px 20px',
                borderRadius: '50px',
                fontSize: '13px',
                fontWeight: '600',
                letterSpacing: '1.6px',
                textTransform: 'uppercase',
                color: '#FFFFFF',
                marginBottom: '16px'
              }}
            >
              <span style={{ color: '#FFB800', marginRight: '6px' }}>●</span>
              LATEST PROJECT
            </div>

            <h2 className="about-sec5-heading">
              What Our Clients Say <br />
              About Our Painting Company
            </h2>
          </div>

          <div className="about-sec5-grid">
            {/* Left Column: Cityscape Photo Card with Avatar Stack */}
            <div
              className="about-sec5-left-card"
              style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                minHeight: '380px',
                height: '380px',
                backgroundImage: "url('/assets/images/about/about-city-bg.jpg')",
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
                boxShadow: '0 12px 30px rgba(0,0,0,0.25)',
                display: 'flex',
                alignItems: 'flex-end'
              }}
            >
              {/* Gradient tint over image */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)'
                }}
              />

              {/* Overlapping Avatars & Text Badge */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 2,
                  padding: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px'
                }}
              >
                <div style={{ display: 'flex' }}>
                  <img
                    src="/assets/images/about/user9.jpg"
                    alt="Customer"
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      border: '2px solid #FFFFFF',
                      objectFit: 'cover'
                    }}
                  />
                  <img
                    src="/assets/images/about/user8.jpg"
                    alt="Customer"
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      border: '2px solid #FFFFFF',
                      objectFit: 'cover',
                      marginLeft: '-12px'
                    }}
                  />
                  <img
                    src="/assets/images/about/user7.jpg"
                    alt="Customer"
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      border: '2px solid #FFFFFF',
                      objectFit: 'cover',
                      marginLeft: '-12px'
                    }}
                  />
                </div>
                <div style={{ fontSize: '15px', fontWeight: '600', color: '#FFFFFF', lineHeight: '1.35' }}>
                  Trusted By <span style={{ color: '#F45404' }}>1000+</span>
                  <br />
                  Satisfied Customers
                </div>
              </div>
            </div>

            {/* Right Column: 3D Rectangular Cube Rotating Testimonial Slider */}
            <C3DRectangularCubeSlider />
          </div>
        </div>
      </section>
    </article>
  );
}
