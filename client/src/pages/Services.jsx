import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import '../styles/services.css';

/**
 * Services Component
 * Full reconstruction of https://jrchomeremodeling.com/services/
 * - Hero banner with background image and exact text
 * - 15 service cards with icons, headings, descriptions, "Read More ->" links, and bottom photos
 */
export default function Services() {
  const servicesList = [
    {
      title: 'Home Remodeling',
      icon: '/assets/images/house.png',
      desc: 'At JRC Home Remodeling, crafting dream homes has been our passion since 1998. Whether it’s transforming interiors or enhancing exteriors, our dedicated teams prioritize valued service and top-notch workmanship.',
      link: '/home-remodeling/',
      image: '/assets/images/why-seftion.jpg',
    },
    {
      title: 'Kitchen Remodeling',
      icon: '/assets/images/kitchen.png',
      desc: 'At JRC Home Remodeling, crafting dream homes has been our passion since 1998. Whether it’s transforming interiors or enhancing exteriors, our dedicated teams prioritize valued service and top-notch workmanship.',
      link: '/kitchen-remodeling/',
      image: '/assets/images/kitchen.webp',
    },
    {
      title: 'Bathroom Remodeling',
      icon: '/assets/images/bathroom-4.png',
      desc: 'At JRC Home Remodeling, crafting dream homes has been our passion since 1998. Whether it’s transforming interiors or enhancing exteriors, our dedicated teams prioritize valued service and top-notch workmanship.',
      link: '/bathroom-remodeling/',
      image: '/assets/images/05_Main_Bathroom_IMG_1171-Copy-scaled-1.jpg',
    },
    {
      title: 'Basement Remodeling',
      icon: '/assets/images/basement.png',
      desc: 'At JRC Home Remodeling, crafting dream homes has been our passion since 1998. Whether it’s transforming interiors or enhancing exteriors, our dedicated teams prioritize valued service and top-notch workmanship.',
      link: '/basement-remodeling/',
      image: '/assets/images/jrc-basement.jpg',
    },
    {
      title: 'JRC Tile',
      icon: '/assets/images/tile.png',
      desc: 'At JRC Home Remodeling, crafting dream homes has been our passion since 1998. Whether it’s transforming interiors or enhancing exteriors, our dedicated teams prioritize valued service and top-notch workmanship.',
      link: '/jrc-tile/',
      image: '/assets/images/tatami.png',
    },
    {
      title: 'JRC Deck',
      icon: '/assets/images/deck-remodeling.png',
      desc: 'At JRC Home Remodeling, crafting dream homes has been our passion since 1998. Whether it’s transforming interiors or enhancing exteriors, our dedicated teams prioritize valued service and top-notch workmanship.',
      link: '/jrc-decks/',
      image: '/assets/images/1597310811_indorents.jpg',
    },
    {
      title: 'JRC Painting',
      icon: '/assets/images/paint-roller.png',
      desc: 'At JRC Home Remodeling, crafting dream homes has been our passion since 1998. Whether it’s transforming interiors or enhancing exteriors, our dedicated teams prioritize valued service and top-notch workmanship.',
      link: '/jrc-painting/',
      image: '/assets/images/pexels-pixabay-280232-scaled.jpg',
    },
    {
      title: 'JRC Frame & Drywall',
      icon: '/assets/images/drywall.png',
      desc: 'At JRC Home Remodeling, crafting dream homes has been our passion since 1998. Whether it’s transforming interiors or enhancing exteriors, our dedicated teams prioritize valued service and top-notch workmanship.',
      link: '/jrc-frame-and-drywall/',
      image: '/assets/images/jrfc.jpg',
    },
    {
      title: 'Bathtub Shower Conversions',
      icon: '/assets/images/bathroom-6.png',
      desc: 'At JRC Home Remodeling, crafting dream homes has been our passion since 1998. Whether it’s transforming interiors or enhancing exteriors, our dedicated teams prioritize valued service and top-notch workmanship.',
      link: '/bathtub-shower-conversions/',
      image: '/assets/images/bathtub-scaled.jpg',
    },
    {
      title: 'Junk Removal & Demolition',
      icon: '/assets/images/jackhammer.png',
      desc: 'At JRC Home Remodeling, crafting dream homes has been our passion since 1998. Whether it’s transforming interiors or enhancing exteriors, our dedicated teams prioritize valued service and top-notch workmanship.',
      link: '/junk-removal-demolition/',
      image: '/assets/images/junk3.jpg',
    },
    {
      title: 'Landscape Design',
      icon: '/assets/images/photos.png',
      desc: 'At JRC Home Remodeling, crafting dream homes has been our passion since 1998. Whether it’s transforming interiors or enhancing exteriors, our dedicated teams prioritize valued service and top-notch workmanship.',
      link: '/landscape-design-near-me/',
      image: '/assets/images/landscape-design2.jpg',
    },
    {
      title: 'Floor Installer',
      icon: '/assets/images/home-1.png',
      desc: 'At JRC Home Remodeling, crafting dream homes has been our passion since 1998. Whether it’s transforming interiors or enhancing exteriors, our dedicated teams prioritize valued service and top-notch workmanship.',
      link: '/floor-installers/',
      image: '/assets/images/construction-19696-640_orig.jpg',
    },
    {
      title: 'Roof Repair',
      icon: '/assets/images/rooftop.png',
      desc: 'At JRC Home Remodeling, crafting dream homes has been our passion since 1998. Whether it’s transforming interiors or enhancing exteriors, our dedicated teams prioritize valued service and top-notch workmanship.',
      link: '/roof-repair/',
      image: '/assets/images/roof-re.jpg',
    },
    {
      title: 'Handyman',
      icon: '/assets/images/mechanic.png',
      desc: 'At JRC Home Remodeling, crafting dream homes has been our passion since 1998. Whether it’s transforming interiors or enhancing exteriors, our dedicated teams prioritize valued service and top-notch workmanship.',
      link: '/handyman-near-me/',
      image: '/assets/images/Handyman-Drywall-Repair-Near-You-Handyman-in-Royal-Oak-MI.png',
    },
    {
      title: 'JRC Countertop',
      icon: '/assets/images/countertop.png',
      desc: 'At JRC Home Remodeling, crafting dream homes has been our passion since 1998. Whether it’s transforming interiors or enhancing exteriors, our dedicated teams prioritize valued service and top-notch workmanship.',
      link: '/fast-countertop-services-by-jrc-countertops/',
      image: '/assets/images/CounterTop-banner-1.webp',
    },
  ];

  return (
    <>
      <Helmet>
        <title>JRC Home Remodeling: Renovation Services in 2026</title>
        <meta
          name="description"
          content="JRC Remodeling provides top-rated home renovation services. Get a free estimate for your remodeling project today!"
        />
        <link rel="canonical" href="https://jrchomeremodeling.com/services/" />
      </Helmet>

      <article className="services-page">
        {/* Hero Section */}
        <section className="services-hero-section">
          <div className="services-hero-overlay"></div>
          <div className="services-hero-content">
            <h1 className="services-hero-title">
              Home Renovation Design Build Services
            </h1>
            <p className="services-hero-desc">
              At JRC Home Remodeling, crafting dream homes has been our passion since 1998. Whether it’s transforming interiors or enhancing exteriors, our dedicated teams prioritize valued service and top-notch workmanship. From your first visit to our showroom to the meticulous cleanup, we ensure a seamless experience. With years of expertise and competitive pricing, thousands of satisfied customers choose us for quality work.
            </p>
          </div>
        </section>

        {/* 15 Services Grid Section */}
        <section className="services-grid-section">
          <div className="hr-container">
            <div className="services-hub-grid">
              {servicesList.map((srv) => (
                <div key={srv.title} className="services-card-item">
                  <div>
                    <div className="services-card-header">
                      <img
                        src={srv.icon}
                        alt={srv.title}
                        className="services-card-icon"
                        width="44"
                        height="44"
                      />
                      <h2 className="services-card-title">{srv.title}</h2>
                    </div>

                    <p className="services-card-desc">{srv.desc}</p>
                  </div>

                  <div>
                    <Link to={srv.link} className="services-card-link">
                      <span>Read More</span>
                      <span className="services-card-arrow">→</span>
                    </Link>

                    <div className="services-card-image-wrap">
                      <img
                        src={srv.image}
                        alt={srv.title}
                        className="services-card-img"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
