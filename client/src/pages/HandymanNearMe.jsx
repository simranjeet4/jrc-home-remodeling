import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { COMPANY } from '../content/siteData';
import '../styles/handyman.css';

/**
 * HandymanNearMe Component
 * Exact reproduction of https://jrchomeremodeling.com/handyman-near-me/
 * 6 sections: Hero, What We Do, Get To Know Us, Latest Projects, 5-Step Process, CTA Banner
 */
export default function HandymanNearMe() {
  const services = [
    {
      title: 'Home Repairs Drywall',
      desc: 'Doors, windows, faucets, cabinets, tile, flooring, fences, decks — we fix what needs fixing before small problems become big ones.',
      icon: '/assets/images/house-damage.png',
    },
    {
      title: 'Fixture & Electrical Installations',
      desc: 'Light fixture replacement, switch and outlet replacement, smoke detector installation, and more — done safely and correctly.',
      icon: '/assets/images/wrench.png',
    },
    {
      title: 'Mounting & Assembly',
      desc: 'TV mounting, furniture assembly, shelf installation, blinds, picture hanging, and everything else on your walls-and-shelves list.',
      icon: '/assets/images/installation.png',
    },
    {
      title: 'Maintenance & Exterior Services',
      desc: 'Pressure washing, gutter cleaning, dryer vent cleaning, deck repair, siding repair, and seasonal upkeep that keeps your home in top shape.',
      icon: '/assets/images/screwdriver.png',
    },
  ];

  const projects = [
    {
      title: 'TV Mounting & Shelf Installation',
      location: 'Lakewood, CO',
      bg: '/assets/images/17902.jpg',
    },
    {
      title: 'Drywall Repair & Touch-Up Painting',
      location: 'Aurora, CO',
      bg: '/assets/images/2085.jpg',
    },
    {
      title: 'Full Home Maintenance Day',
      location: 'Thornton, CO',
      bg: '/assets/images/108541.jpg',
    },
  ];

  const steps = [
    {
      step: '1',
      title: 'Contact Our Team',
      desc: 'Call us or request service online and tell us what needs attention — a single repair or a full to-do list.',
      image: '/assets/images/125234-1.jpg',
    },
    {
      step: '2',
      title: 'Free Estimate',
      desc: 'We provide clear, upfront pricing before any work begins — no surprises, no hidden fees.',
      image: '/assets/images/2148269878.jpg',
    },
    {
      step: '3',
      title: 'Schedule a Convenient Appointment',
      desc: 'Choose a time that works best for your schedule. We offer flexible appointments across the Denver metro.',
      image: '/assets/images/121132.jpg',
    },
    {
      step: '4',
      title: 'Professional Job Completion',
      desc: 'Our handyman arrives prepared and completes every task efficiently, with care and attention to detail.',
      image: '/assets/images/1338.jpg',
    },
    {
      step: '5',
      title: 'Final Walkthrough',
      desc: 'We confirm everything meets your expectations and leave your home clean before we consider the job done.',
      image: '/assets/images/5295.jpg',
    },
  ];

  return (
    <div className="handyman-page">
      <Helmet>
        <title>Professional Handyman Services Near You | JRC Remodeling</title>
        <meta
          name="description"
          content="Professional handyman services near you. Expert repairs, installations, and home maintenance by trusted Denver contractors. Call for a free estimate!"
        />
        <link rel="canonical" href="https://jrchomeremodeling.com/handyman-near-me/" />
      </Helmet>

      {/* SECTION 0: HERO */}
      <section className="handyman-hero-section">
        <div className="container">
          <div className="handyman-hero-inner">
            <span className="handyman-pill">HANDYMAN SERVICES NEAR YOU</span>
            <h1 className="handyman-hero-title">
              Denver's Trusted Handyman — Repairs, Installations &amp; Home Fixes Big or Small
            </h1>
            <p className="handyman-hero-desc">
              Leaky or damaged roof? JRC Home Remodeling delivers fast, professional roof repairs and full roof replacements to protect your home — on time and on budget. With <strong>25+ years of experience</strong> and free roof inspections, we’re the roofing team Denver homeowners count on.
            </p>
            <a href={`tel:${COMPANY.phoneRaw}`} className="handyman-emergency-card">
              <div className="handyman-emergency-icon">
                <svg viewBox="0 0 512 512">
                  <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
                </svg>
              </div>
              <div className="handyman-emergency-text">
                <span className="handyman-emergency-label">Emergency Call</span>
                <span className="handyman-emergency-phone">{COMPANY.phone}</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 1: WHAT WE DO */}
      <section className="handyman-wwd-section">
        <div className="container">
          <div className="handyman-wwd-header">
            <span className="handyman-pill handyman-pill-light">WHAT WE DO</span>
            <h2 className="handyman-wwd-title">Reliable Handyman Services for Every Room &amp; Every Repair</h2>
            <p className="handyman-wwd-subtitle">
              No job is too small — and no to-do list is too long. Our experienced handyman team handles repairs and installations with the same attention to detail we bring to full-scale remodels.
            </p>
          </div>
          <div className="handyman-wwd-grid">
            {services.map((item, idx) => (
              <div key={idx} className="handyman-wwd-card">
                <div className="handyman-wwd-icon-wrap">
                  <img src={item.icon} alt={item.title} className="handyman-wwd-icon" />
                </div>
                <h3 className="handyman-wwd-card-title">{item.title}</h3>
                <p className="handyman-wwd-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: COMPANY PROGRESS / GET TO KNOW US */}
      <section className="handyman-progress-section">
        <div className="container">
          <div className="handyman-progress-grid">
            <div className="handyman-progress-images">
              <img
                src="/assets/images/2148748770.jpg"
                alt="Denver Handyman"
                className="handyman-progress-img"
              />
              <img
                src="/assets/images/Gemini_Generated_Image_plepjgplepjgplep-scaled.jpg"
                alt="Home Repairs"
                className="handyman-progress-img"
              />
            </div>
            <div className="handyman-progress-right">
              <span className="handyman-pill handyman-pill-light">GET TO KNOW US</span>
              <h2 className="handyman-progress-title">Home Repairs Made Simple &amp; Stress-Free</h2>
              <p className="handyman-progress-desc">
                At JRC Home Remodeling, our goal is simple: make home repairs easy, affordable, and completely stress-free for Denver homeowners. Whether you need a single quick fix or a full afternoon’s worth of tasks crossed off your list, our experienced handyman team arrives prepared, works efficiently, and leaves every job done right.
              </p>
              <p className="handyman-progress-desc">
                We treat your home like our own — with care, respect, and the kind of quality workmanship you’d expect from a full remodeling team, not just a handyman.
              </p>

              {/* Progress Bars */}
              <div className="handyman-bars-wrap">
                <div className="handyman-bar-item">
                  <div className="handyman-bar-header">
                    <span>Company Progress</span>
                    <span>100%</span>
                  </div>
                  <div className="handyman-bar-track">
                    <div className="handyman-bar-fill" style={{ width: '100%' }}></div>
                  </div>
                </div>
                <div className="handyman-bar-item">
                  <div className="handyman-bar-header">
                    <span>Client Satisfaction</span>
                    <span>90%</span>
                  </div>
                  <div className="handyman-bar-track">
                    <div className="handyman-bar-fill" style={{ width: '90%' }}></div>
                  </div>
                </div>
              </div>

              {/* Mission & Vision Cards */}
              <div className="handyman-cards-two">
                <div className="handyman-mini-card">
                  <img src="/assets/images/target-1.png" alt="Our Mission" className="handyman-mini-icon" />
                  <h3 className="handyman-mini-title">Our Mission</h3>
                  <p className="handyman-mini-desc">
                    To make everyday home maintenance and repairs as easy as one call — handled by skilled professionals who show up on time, price honestly, and finish the job to your satisfaction.
                  </p>
                </div>
                <div className="handyman-mini-card">
                  <img src="/assets/images/goal.png" alt="Our Vision" className="handyman-mini-icon" />
                  <h3 className="handyman-mini-title">Our Vision</h3>
                  <p className="handyman-mini-desc">
                    To be the handyman service Denver homeowners call first, every time something needs fixing — trusted for reliability, affordability, and workmanship that lasts.
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="handyman-buttons-row">
                <Link to="/about-us" className="handyman-btn-orange">
                  More About Us
                </Link>
                <a href={`tel:${COMPANY.phoneRaw}`} className="handyman-btn-outline">
                  Call For Free Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: LATEST PROJECTS */}
      <section className="handyman-projects-section">
        <div className="container">
          <div className="handyman-projects-header">
            <span className="handyman-pill handyman-pill-light">LATEST PROJECTS</span>
            <h2 className="handyman-projects-title">Recent Handyman Jobs Across Denver</h2>
          </div>
          <div className="handyman-projects-grid">
            {projects.map((proj, idx) => (
              <div
                key={idx}
                className="handyman-project-card"
                style={{ backgroundImage: `url(${proj.bg})` }}
              >
                <div className="handyman-project-overlay"></div>
                <div className="handyman-project-content">
                  <h3 className="handyman-project-name">{proj.title}</h3>
                  <span className="handyman-project-loc">{proj.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: 5-STEP WORKING PROCESS */}
      <section className="handyman-process-section">
        <div className="container">
          <div className="handyman-process-header">
            <span className="handyman-pill handyman-pill-light">WORKING PROCESS</span>
            <h2 className="handyman-process-title">
              Our Simple 5-Step <br />Handyman Process
            </h2>
          </div>
          <div className="handyman-process-grid">
            {steps.map((st, idx) => (
              <div key={idx} className="handyman-process-card">
                <div className="handyman-step-img-wrap">
                  <img src={st.image} alt={st.title} className="handyman-step-img" />
                  <span className="handyman-step-badge">{st.step}</span>
                </div>
                <div className="handyman-step-body">
                  <h3 className="handyman-step-title">{st.title}</h3>
                  <p className="handyman-step-desc">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: FAST SCHEDULING CTA BANNER */}
      <section className="handyman-cta-section">
        <div className="container">
          <div className="handyman-cta-inner">
            <h2 className="handyman-cta-title">
              Fast scheduling available across Denver and surrounding areas.
            </h2>
            <div className="handyman-cta-buttons">
              <a href="#form" className="handyman-btn-orange">
                Get Free Estimate
              </a>
              <a href={`tel:${COMPANY.phoneRaw}`} className="handyman-btn-blue">
                Call {COMPANY.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
