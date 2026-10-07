import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import C3DRectangularCubeSlider from '../components/about/C3DRectangularCubeSlider';
import '../styles/home.css';

const servicesStackList = [
  { name: 'Home Remodeling', path: '/home-remodeling' },
  { name: 'Kitchen Remodeling', path: '/kitchen-remodeling' },
  { name: 'Basement Remodeling', path: '/basement-remodeling' },
  { name: 'Bathroom Remodeling', path: '/bathroom-remodeling' },
  { name: 'JRC Tile', path: '/jrc-tile' },
  { name: 'JRC Decks', path: '/jrc-decks' },
  { name: 'JRC Painting', path: '/jrc-painting' },
  { name: 'JRC Frame And Drywall', path: '/jrc-frame-and-drywall' },
  { name: 'Bathtub Shower Conversions', path: '/bathtub-shower-conversions' },
  { name: 'Junk Removal & Demolition', path: '/junk-removal-demolition' },
  { name: 'Landscape Design', path: '/landscape-design-near-me' },
  { name: 'Floor Installers', path: '/floor-installers' },
  { name: 'Roof Repair', path: '/roof-repair' },
  { name: 'Fast Countertop Services By JRC Countertops', path: '/countertop-services-near-me' }
];

const featureTabServices = [
  {
    id: 'home-remodel',
    title: 'Home Remodeling',
    desc: 'Transform your entire living space with comprehensive, custom home remodeling. From structural reconfiguration to luxury interior finishes, JRC Home Remodeling delivers unmatched quality.',
    image: '/assets/images/vintage-kitchen-design-tips.jpg',
    highlights: ['Complete Space Transformation', 'In-House Framing & Drywall', 'Transparent Timelines & Budgeting']
  },
  {
    id: 'kitchen-remodel',
    title: 'Kitchen Remodeling',
    desc: 'Create the gourmet kitchen of your dreams with custom cabinetry, quartz countertops, designer backsplashes, and optimized functional layouts.',
    image: '/assets/images/33190.jpg',
    highlights: ['Custom Cabinetry & Islands', 'Quartz & Granite Counters', 'Premium Tile Backsplashes']
  },
  {
    id: 'bathroom-remodel',
    title: 'Bathroom Remodeling',
    desc: 'Turn outdated bathrooms into spa-like retreats with walk-in tile showers, freestanding tubs, custom vanities, and high-efficiency fixtures.',
    image: '/assets/images/project-bathroom.jpg',
    highlights: ['Walk-In Tile Showers', 'Custom Vanity Installation', 'Waterproof Flooring & Lighting']
  },
  {
    id: 'basement-finish',
    title: 'Basement Finishing',
    desc: 'Maximize your home square footage with custom basement finishes, wet bars, home theaters, guest suites, and full bathrooms.',
    image: '/assets/images/project-basement.jpg',
    highlights: ['Egress Windows & Suites', 'Custom Wet Bars & Theaters', 'Moisture-Resistant Materials']
  },
  {
    id: 'jrc-decks',
    title: 'JRC Decks',
    desc: 'Expand your outdoor living space with composite or natural wood decks built for Colorado weather and entertaining.',
    image: '/assets/images/about-why-choose.jpg',
    highlights: ['Trex & Composite Decks', 'Custom Railing Systems', 'Built for Altitude & Seasons']
  },
  {
    id: 'jrc-tile',
    title: 'JRC Tile',
    desc: 'Expert tile installation for floors, walls, backsplashes, and custom showers using porcelain, ceramic, marble, and natural stone.',
    image: '/assets/images/tile-re.png',
    highlights: ['Precision Layout & Alignment', 'Waterproof Substrate Systems', 'Custom Pattern & Mosaic Work']
  }
];

export default function Home() {
  const [activeTab, setActiveTab] = useState('home-remodel');

  const currentTabContent = featureTabServices.find((s) => s.id === activeTab) || featureTabServices[0];

  return (
    <>
      <Helmet>
        <title>Denver Home Remodeling | From Outdated to Outstanding By JRC</title>
        <meta name="description" content="Denver home remodelers. Transform your home with expert remodeling services. Get a free estimate!" />
        <link rel="canonical" href="https://jrchomeremodeling.com/" />
      </Helmet>

      <article className="home-page-mockup">
        {/* ==========================================
            SECTION 1: HERO BANNER (SPLIT LAYOUT)
           ========================================== */}
        <section className="home-sec1-hero">
          <div className="hr-container home-sec1-grid">
            {/* Left Content */}
            <div className="home-sec1-left">
              <div className="home-pill-white">WELCOME TO JRC</div>
              <h1 className="home-sec1-title">
                Transform Your Home With Expert Remodeling Services
              </h1>
              <p className="home-sec1-desc">
                From kitchen upgrades to full-home renovations, we deliver high-quality craftsmanship and stress-free project management from start to finish.
              </p>
              <div className="home-sec1-cta-group">
                <Link to="/contact-us" className="loc-btn-orange">
                  <span>GET A FREE ESTIMATE</span>
                  <span>➔</span>
                </Link>
                <Link to="/services" className="loc-btn-blue">
                  <span>OUR SERVICES</span>
                  <span>➔</span>
                </Link>
              </div>
            </div>

            {/* Right Image Showcase */}
            <div className="home-sec1-right">
              <div className="home-sec1-img-card">
                <img
                  src="/assets/images/about-hero-bg.webp"
                  alt="Transform Your Home With Expert Remodeling Services"
                  className="home-sec1-img"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/assets/images/33190.jpg';
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================
            SECTION 2: DARK NAVY STATS & VIDEO SHOWCASE
           ========================================== */}
        <section className="home-sec2-navy">
          <div className="hr-container">
            <div className="home-sec-header text-center">
              <div className="home-pill-navy">
                <span className="home-dot-gold">●</span> EXPERT SERVICES
              </div>
              <h2 className="home-sec-title text-white">
                Your Trusted Experts In Professional Remodeling Services
              </h2>
            </div>

            {/* 3 Stat Feature Cards */}
            <div className="home-sec2-stats-grid">
              <div className="home-sec2-stat-card">
                <div className="home-stat-icon">🏠</div>
                <h3 className="home-stat-num">50+ Combined Experience</h3>
                <p className="home-stat-desc">Decades of combined remodeling & construction expertise.</p>
              </div>

              <div className="home-sec2-stat-card">
                <div className="home-stat-icon">🛠️</div>
                <h3 className="home-stat-num">4 Construction Crews</h3>
                <p className="home-stat-desc">Dedicated full-time in-house crews ready to start.</p>
              </div>

              <div className="home-sec2-stat-card">
                <div className="home-stat-icon">🛡️</div>
                <h3 className="home-stat-num">100% Licensed & Insured</h3>
                <p className="home-stat-desc">Full protection and peace of mind on every job.</p>
              </div>
            </div>

            {/* Featured Video Player Box */}
            <div className="home-sec2-video-box">
              <div className="home-video-wrapper">
                <img
                  src="/assets/images/about-team-blueprint.jpg"
                  alt="Professional remodeling team in action"
                  className="home-video-thumb"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/assets/images/33190.jpg';
                  }}
                />
                <div className="home-video-overlay">
                  <button type="button" className="home-play-btn" aria-label="Play Video">
                    ▶
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================
            SECTION 3: WELCOME & ABOUT NARRATIVE (3-COL)
           ========================================== */}
        <section className="home-sec3-welcome">
          <div className="hr-container home-sec3-grid">
            {/* Col 1: Text Intro */}
            <div className="home-sec3-col1">
              <div className="home-pill-orange">ABOUT US</div>
              <h2 className="home-sec3-title">Welcome To JRC Home Remodeling</h2>
              <p className="home-sec3-p">
                At JRC Home Remodeling, we take pride in delivering top-tier residential renovation services across the Denver metropolitan area. Founded on principles of integrity, craftsmanship, and transparent pricing, our team brings decades of combined experience to every kitchen, bathroom, basement, and full-home transformation.
              </p>
              <p className="home-sec3-p">
                We manage every phase from initial scoping to final walk-through, ensuring your vision is realized seamlessly.
              </p>
              <Link to="/about-us" className="loc-btn-orange" style={{ marginTop: '16px' }}>
                <span>MORE ABOUT US</span>
                <span>➔</span>
              </Link>
            </div>

            {/* Col 2: Center Image Card */}
            <div className="home-sec3-col2">
              <div className="home-sec3-img-card">
                <img
                  src="/assets/images/33190.jpg"
                  alt="Modern kitchen countertop"
                  className="home-sec3-img"
                />
              </div>
            </div>

            {/* Col 3: Accordion Menu (Vision, Mission, Values) */}
            <div className="home-sec3-col3">
              <div className="home-vision-list">
                <div className="home-vision-item">
                  <span>Our Vision</span>
                  <button type="button" className="home-vision-arrow" aria-label="Expand Vision">➔</button>
                </div>
                <div className="home-vision-item">
                  <span>Our Mission</span>
                  <button type="button" className="home-vision-arrow" aria-label="Expand Mission">➔</button>
                </div>
                <div className="home-vision-item">
                  <span>Our Values</span>
                  <button type="button" className="home-vision-arrow" aria-label="Expand Values">➔</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================
            SECTION 4: HUGE VERTICAL SERVICES TYPOGRAPHY STACK
           ========================================== */}
        <section className="home-sec4-services-list">
          <div className="hr-container">
            <div className="home-services-stack">
              {servicesStackList.map((item, idx) => (
                <div key={idx} className="home-stack-item">
                  <Link to={item.path} className="home-stack-link">
                    - {item.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================
            SECTION 5: FEATURE SHOWCASE (BEIGE INTERACTIVE TABS)
           ========================================== */}
        <section className="home-sec5-beige">
          <div className="hr-container">
            <div className="home-sec-header text-center">
              <div className="home-pill-beige">OUR SERVICES</div>
              <h2 className="home-sec-title">
                Your Trusted Experts In Professional Remodeling Services
              </h2>
            </div>

            <div className="home-sec5-tabs-grid">
              {/* Left Column: Vertical Tabs Menu */}
              <div className="home-sec5-tabs-menu">
                {featureTabServices.map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    className={`home-tab-btn ${activeTab === service.id ? 'home-tab-active' : ''}`}
                    onClick={() => setActiveTab(service.id)}
                  >
                    <span>{service.title}</span>
                    <span className="home-tab-arrow">➔</span>
                  </button>
                ))}
              </div>

              {/* Right Column: Active Service Display Card */}
              <div className="home-sec5-card">
                <div className="home-card-left">
                  <img
                    src={currentTabContent.image}
                    alt={currentTabContent.title}
                    className="home-card-img"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/assets/images/33190.jpg';
                    }}
                  />
                </div>
                <div className="home-card-right">
                  <h3 className="home-card-title">{currentTabContent.title}</h3>
                  <p className="home-card-desc">{currentTabContent.desc}</p>
                  
                  <ul className="home-card-bullets">
                    {currentTabContent.highlights.map((h, i) => (
                      <li key={i} className="home-card-bullet-item">
                        <span className="home-check-icon">✓</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/services" className="loc-btn-orange" style={{ marginTop: '20px' }}>
                    <span>LEARN MORE</span>
                    <span>➔</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================
            SECTION 6: WHY CHOOSE JRC HOME REMODELING
           ========================================== */}
        <section className="home-sec6-why">
          <div className="hr-container">
            <div className="home-sec-header text-center">
              <div className="home-pill-orange">WHY CHOOSE US</div>
              <h2 className="home-sec-title">
                Why Choose JRC Home Remodeling For Your Remodeling Services
              </h2>
            </div>

            <div className="home-sec6-grid">
              {/* Left Column: 3 Feature Items */}
              <div className="home-sec6-left">
                <div className="home-why-feature">
                  <div className="home-why-icon">🎨</div>
                  <div>
                    <h3 className="home-why-feature-title">Quality Workmanship</h3>
                    <p className="home-why-feature-desc">We use premium materials and precision techniques for long-lasting durability.</p>
                  </div>
                </div>

                <div className="home-why-feature">
                  <div className="home-why-icon">📐</div>
                  <div>
                    <h3 className="home-why-feature-title">Range of Planning</h3>
                    <p className="home-why-feature-desc">Comprehensive end-to-end planning with transparent scheduling & budgeting.</p>
                  </div>
                </div>

                <div className="home-why-feature">
                  <div className="home-why-icon">🏗️</div>
                  <div>
                    <h3 className="home-why-feature-title">Top-Tier Craftsmen</h3>
                    <p className="home-why-feature-desc">Skilled in-house professionals dedicated to your satisfaction.</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Outdoor Living Photo Card */}
              <div className="home-sec6-right">
                <div className="home-why-img-card">
                  <img
                    src="/assets/images/about-why-choose.jpg"
                    alt="Why Choose JRC Home Remodeling"
                    className="home-why-img"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/assets/images/33190.jpg';
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================
            SECTION 7: PORTFOLIO SHOWCASE ("SEE THE DIFFERENCE...")
           ========================================== */}
        <section className="home-sec7-portfolio">
          <div className="hr-container">
            <div className="home-sec-header text-center">
              <div className="home-pill-gray">OUR PORTFOLIO</div>
              <h2 className="home-sec-title">
                See The Difference Professional Remodeling Makes
              </h2>
            </div>

            <div className="home-sec7-grid">
              <div className="home-portfolio-card">
                <img
                  src="/assets/images/photo-1756079664354-34944e001f6d.jpeg"
                  alt="Master Bedroom Remodel"
                  className="home-portfolio-img"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/assets/images/33190.jpg';
                  }}
                />
              </div>

              <div className="home-portfolio-card">
                <img
                  src="/assets/images/photo-1765745518752-68a289300789.jpeg"
                  alt="Modern Kitchen Island Remodel"
                  className="home-portfolio-img"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/assets/images/33190.jpg';
                  }}
                />
              </div>

              <div className="home-portfolio-card">
                <img
                  src="/assets/images/photo-1769253523308-f7bff35c60b1.jpeg"
                  alt="Bathroom Vanity Remodel"
                  className="home-portfolio-img"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/assets/images/33190.jpg';
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================
            SECTION 8: TESTIMONIALS (DARK NAVY 3D CUBE)
           ========================================== */}
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
    </>
  );
}
