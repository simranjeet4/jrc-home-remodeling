import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import EstimateForm from '../forms/EstimateForm';
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
              <div className="loc-review-star-graphic">
                <svg width="146" height="146" viewBox="0 0 24 24" fill="#FDE3B8">
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/>
                </svg>
              </div>
              <p className="loc-review-quote-text">
                "{testimonial.quote}"
              </p>
              <div className="loc-review-divider" />
              <div className="loc-review-author-row">
                <div className="loc-review-author-info">
                  <div className="loc-review-author-name">{testimonial.author}</div>
                  <div className="loc-review-stars">
                    Google Review <span style={{ color: '#FFB800', fontSize: '14px', marginLeft: '4px' }}>★★★★★</span>
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
          <div className="loc-wwd-header">
            <div className="loc-pill">
              <span>{whatWeDo.pill || 'WHAT WE DO'}</span>
            </div>
            <h2 className="loc-section-title">{whatWeDo.title}</h2>
            {whatWeDo.intro && (
              <p style={{ color: '#555555', fontSize: '15px', lineHeight: 1.65 }}>
                {whatWeDo.intro}
              </p>
            )}
          </div>

          <div className="loc-wwd-grid">
            {whatWeDo.cards.map((card, idx) => {
              const linkTo = serviceLinks[card.title] || '/services';
              const iconPath = card.icon ? `/assets/images/${card.icon}` : '/assets/images/kitchen-table.png';
              return (
                <div key={idx} className="loc-wwd-card">
                  <div className="loc-wwd-icon-box">
                    <img src={iconPath} alt="" className="loc-wwd-icon" />
                  </div>
                  <h3 className="loc-wwd-title">{card.title}</h3>
                  <p className="loc-wwd-desc">{card.desc}</p>
                  <Link to={linkTo} className="loc-wwd-link">
                    <span>Learn More</span>
                    <span>→</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section className="loc-why">
        <div className="loc-container">
          <div className="loc-why-grid">
            <div>
              <div className="loc-pill">
                <span>{whyChoose.pill || 'WHY CHOOSE US'}</span>
              </div>
              <h2 className="loc-section-title">{whyChoose.title}</h2>
              {whyChoose.desc && (
                <p className="loc-why-desc">{whyChoose.desc}</p>
              )}

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
                More About Us
              </Link>
            </div>

            <div className="loc-why-images">
              <img src={mainWhyImg} alt={`${city} remodeling craftsmanship`} className="loc-why-img-main" />
              {subWhyImg && (
                <img src={subWhyImg} alt={`${city} home renovation`} className="loc-why-img-sub" />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Our Services / Feature Showcase (2-Column Sticky Layout) */}
      {ourServices.cards && ourServices.cards.length > 0 && (
        <section className="loc-features-section" style={{ padding: '95px 0 105px', backgroundColor: '#FFFFFF' }}>
          <div className="loc-container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
              {/* Left Column (Sticky) */}
              <div style={{ position: 'sticky', top: '50px' }}>
                <div className="loc-pill">
                  <span>{ourServices.pill || 'WHY CHOOSE JRC'}</span>
                </div>
                <h2 className="loc-section-title" style={{ margin: '0 0 18px' }}>
                  {ourServices.title}
                </h2>
                {ourServices.desc && (
                  <p style={{ margin: '0 0 30px', color: '#555555', fontSize: '16px', lineHeight: 1.65 }}>
                    {ourServices.desc}
                  </p>
                )}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ display: 'flex', marginLeft: '10px' }}>
                    <img src="/assets/images/user9.jpg" alt="" style={{ width: '42px', height: '42px', borderRadius: '50%', border: '2px solid #FFF', marginLeft: '-10px' }} />
                    <img src="/assets/images/user8.jpg" alt="" style={{ width: '42px', height: '42px', borderRadius: '50%', border: '2px solid #FFF', marginLeft: '-10px' }} />
                    <img src="/assets/images/user7.jpg" alt="" style={{ width: '42px', height: '42px', borderRadius: '50%', border: '2px solid #FFF', marginLeft: '-10px' }} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '15px', color: '#160A05' }}>Trusted By 1000+ Satisfied Customers</div>
                    <div style={{ color: '#F45404', fontSize: '14px' }}>★★★★★</div>
                  </div>
                </div>
              </div>

              {/* Right Column (Stacked Cards) */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {ourServices.cards.map((card, idx) => {
                  const imgPath = card.image ? `/assets/images/${card.image}` : '/assets/images/33190.jpg';
                  return (
                    <div key={idx} style={{ borderRadius: '20px', backgroundColor: '#F6F6F6', padding: '36px 32px', minHeight: '290px', display: 'flex', flexDirection: 'row', gap: '24px', alignItems: 'flex-start', boxSizing: 'border-box' }}>
                      <img src={imgPath} alt={card.title} style={{ width: '194px', height: '130px', objectFit: 'cover', borderRadius: '10px', flexShrink: 0 }} />
                      <div style={{ flex: 1 }}>
                        <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '20px', fontWeight: 700, color: '#160A05', margin: '0 0 10px', lineHeight: 1.3 }}>
                          {card.title}
                        </h3>
                        <p style={{ fontFamily: 'Work Sans, sans-serif', fontSize: '15px', lineHeight: 1.65, color: '#555555', margin: 0 }}>
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

      {/* 6. FAQ Accordion */}
      {faqs.items && faqs.items.length > 0 && (
        <section className="loc-faq">
          <div className="loc-container">
            <div className="loc-faq-header">
              <div className="loc-pill">
                <span>{faqs.pill || 'ASK A QUESTION'}</span>
              </div>
              <h2 className="loc-section-title">{faqs.title}</h2>
            </div>

            <div className="loc-faq-list">
              {faqs.items.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="loc-faq-item">
                    <div
                      className="loc-faq-q"
                      onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    >
                      <span>{faq.q}</span>
                      <span className="loc-faq-icon">{isOpen ? '−' : '+'}</span>
                    </div>
                    {isOpen && (
                      <div className="loc-faq-a">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 7. Marquee Ribbon */}
      <section className="loc-marquee">
        <div className="loc-marquee-track">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="loc-marquee-item">
              <span>{city} Home Remodeling</span>
              <span className="loc-marquee-dot">•</span>
              <span>Certified Remodeling Guarantee</span>
              <span className="loc-marquee-dot">•</span>
              <span>Kitchen & Bath Specialists</span>
              <span className="loc-marquee-dot">•</span>
              <span>Licensed & Insured</span>
              <span className="loc-marquee-dot">•</span>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Latest Project / Testimonials (Present on Aurora, Brighton, Broomfield, Castle Rock, Centennial, Cherry Creek) */}
      {loc.latestProject && (
        <section className="loc-latest-project" style={{ backgroundColor: '#1E3A5F', padding: '80px 0 85px' }}>
          <div className="loc-container">
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '30px', alignItems: 'center', marginBottom: '45px' }}>
              <div>
                <div className="loc-pill" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.2)' }}>
                  <span>{loc.latestProject.pill || 'LATEST PROJECT'}</span>
                </div>
                <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '38px', fontWeight: 700, color: '#FFFFFF', margin: '15px 0 0', lineHeight: 1.25 }}>
                  {loc.latestProject.title}
                </h2>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', justifyContent: 'flex-end' }}>
                <div style={{ display: 'flex', marginLeft: '10px' }}>
                  <img src="/assets/images/user9.jpg" alt="" style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid #1E3A5F', marginLeft: '-10px' }} />
                  <img src="/assets/images/user8.jpg" alt="" style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid #1E3A5F', marginLeft: '-10px' }} />
                  <img src="/assets/images/user7.jpg" alt="" style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid #1E3A5F', marginLeft: '-10px' }} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '14px', color: '#FFFFFF' }}>{loc.latestProject.sub || 'Trusted By 1000+ Satisfied Customers'}</div>
                  <div style={{ color: '#F45404', fontSize: '13px' }}>★★★★★</div>
                </div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
              {loc.latestProject.items.map((rev, idx) => (
                <div key={idx} style={{ backgroundColor: '#1E3A5F', border: '1px solid rgba(255, 255, 255, 0.15)', borderRadius: '8px', padding: '30px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ color: '#FFB800', fontSize: '16px', marginBottom: '14px' }}>★★★★★</div>
                    <p style={{ fontFamily: 'Work Sans, sans-serif', fontSize: '16px', lineHeight: 1.6, color: '#FFFFFF', margin: 0 }}>
                      "{rev.text}"
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '24px' }}>
                    <img src={`/assets/images/${rev.avatar || 'user7.jpg'}`} alt={rev.author} style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover' }} />
                    <div>
                      <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '16px', color: '#FFFFFF' }}>{rev.author}</div>
                      <div style={{ fontFamily: 'Work Sans, sans-serif', fontSize: '13px', color: 'rgba(255, 255, 255, 0.7)' }}>{rev.role || 'Verified Homeowner'}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 9. Contact & Free Estimate Form */}
      {hasContact && (
        <section className="loc-contact" id="estimate-form">
          <div className="loc-container">
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
    </article>
  );
}
