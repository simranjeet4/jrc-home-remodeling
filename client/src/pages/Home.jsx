import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import '../styles/home.css';

export default function Home() {
  // Hero slider state
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const heroSlides = [
    {
      id: 1,
      image: '/assets/images/JRC_new_1_AF.webp',
      title: 'TRANSFORM YOUR HOME WITH EXPERT REMODELING SERVICES',
      description: 'Transform your home with expert remodeling services. From kitchen upgrades to full-home renovations, we deliver high-quality craftsmanship and personalized solutions to bring your vision to life.',
      btn1Text: '303-418-2167',
      btn1Link: 'tel:303-418-2167',
      btn2Text: 'Request a Quote',
      btn2Link: '/contact-us'
    },
    {
      id: 2,
      image: '/assets/images/JRC_new_2_BF.webp',
      title: 'Remodel. Refresh. Reimagine.',
      description: 'Bring new life to your home with expert remodeling that enhances comfort, style, and value — from kitchens and baths to full-home transformations.',
      btn1Text: '303-418-2167',
      btn1Link: 'tel:303-418-2167',
      btn2Text: 'Request a Quote',
      btn2Link: '/contact-us'
    },
    {
      id: 3,
      image: '/assets/images/JRC_new_2_AF.webp',
      title: 'Smart, Stylish Bathroom Upgrades',
      description: 'Upgrade your bathroom with sleek designs, modern fixtures, and smart solutions that combine comfort with elegance.',
      btn1Text: '303-418-2167',
      btn1Link: 'tel:303-418-2167',
      btn2Text: 'Request a Quote',
      btn2Link: '/contact-us'
    }
  ];

  const testimonials = [
    {
      text: 'JRC did an awesome job with our kitchen floor! They were responsive, pleasant, professional, had good communication, were on time, and most importantly, did a great job! We are so happy with the results and look forward to working with Monica and her team again.',
      user: 'Bliss Bernal'
    },
    {
      text: "I have used JRC twice now - once, to add a bathroom to a basement, and then again to install a tile backsplash in the kitchen. They offered great pricing, were communicative every step of the way, and both projects turned out beautifully. I wouldn't hesitate to use them again!",
      user: 'Charissa Walton'
    },
    {
      text: 'Remodeled three bathrooms. We were very impressed with the attention to detail. Always on time, professional, easy to reach. GREAT work!',
      user: 'Toni Starner'
    }
  ];

  // Testimonial slider state
  const [activeTestimonial, setActiveTestimonial] = useState(1);

  // Auto-play testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const services = [
    { name: 'Home Remodeling', icon: '/assets/images/home-re.png', link: '/home-remodeling' },
    { name: 'Kitchen Remodeling', icon: '/assets/images/kitchen-re.png', link: '/kitchen-remodeling' },
    { name: 'Basement Remodeling', icon: '/assets/images/basemnt.png', link: '/basement-remodeling' },
    { name: 'Bathroom Remodeling', icon: '/assets/images/bathr.png', link: '/bathroom-remodeling' },
    { name: 'Jrc Tile', icon: '/assets/images/tile-re.png', link: '/jrc-tile' },
    { name: 'Jrc Decks', icon: '/assets/images/deck-re.png', link: '/jrc-decks' },
    { name: 'Jrc Painting', icon: '/assets/images/paint-r.png', link: '/jrc-painting' },
    { name: 'Jrc Frame And Drywall', icon: '/assets/images/frame.png', link: '/jrc-frame-and-drywall' },
    { name: 'Bath Shower Conversions', icon: '/assets/images/shower.png', link: '/bathtub-shower-conversions' },
    { name: 'Junk Removal & Demolition', icon: '/assets/images/junk-re.png', link: '/junk-removal-demolition' },
    { name: 'Landscape Design', icon: '/assets/images/lands-re.png', link: '/landscape-design-near-me' },
    { name: 'Floor Installers', icon: '/assets/images/floor.png', link: '/floor-installers' }
  ];

  const serviceAreas = [
    'Arvada, CO',
    'Aurora, CO',
    'Brighton, CO',
    'Broomfield, CO',
    'Castle Rock, CO',
    'parker, CO',
    'Centennial, CO',
    'Cherry-creek, CO',
    'Commerce-city, CO',
    'Denver, CO',
    'Englewood, CO',
    'Superior, CO',
    'Golden, CO',
    'Greenwood-village, CO',
    'Lafayette, CO',
    'Lakewood, CO',
    'Lone-tree, CO',
    'Morrison, CO',
    'Northglenn, CO',
    'Thornton,CO',
    'Westminster, CO',
    'Wheat-ridge, CO'
  ];

  return (
    <>
      <Helmet>
        <title>Denver Home Remodeling | From Outdated to Outstanding By JRC</title>
        <meta
          name="description"
          content="Transform your home with JRC Home Remodeling. Expert kitchen, bathroom, basement, and whole home renovations across the Denver Metro Area. Get a free estimate!"
        />
        <link rel="canonical" href="https://jrchomeremodeling.com/" />
      </Helmet>

      <div data-elementor-type="wp-page" data-elementor-id="6093" className="elementor elementor-6093">
        {/* SECTION 1: HERO SLIDER */}
        <div className="home-hero-slider">
          {heroSlides.map((slide, idx) => (
            <div
              key={slide.id}
              className={`home-hero-slide ${idx === activeHeroSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url("${slide.image}")` }}
            >
              <div className="home-hero-slide-overlay" />
              <div className="home-hero-content">
                <h1 className="home-hero-title">{slide.title}</h1>
                <p className="home-hero-description">{slide.description}</p>
                <div className="home-hero-buttons">
                  <a href={slide.btn1Link} className="home-hero-btn-primary">
                    {slide.btn1Text}
                  </a>
                  <Link to={slide.btn2Link} className="home-hero-btn-secondary">
                    {slide.btn2Text}
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Controls */}
          <button
            type="button"
            className="home-hero-arrow prev"
            onClick={() => setActiveHeroSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))}
            aria-label="Previous Slide"
          >
            ❮
          </button>
          <button
            type="button"
            className="home-hero-arrow next"
            onClick={() => setActiveHeroSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1))}
            aria-label="Next Slide"
          >
            ❯
          </button>

          <div className="home-hero-dots">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`home-hero-dot ${idx === activeHeroSlide ? 'active' : ''}`}
                onClick={() => setActiveHeroSlide(idx)}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* SECTION 2: WELCOME & BEFORE/AFTER KITCHEN */}
        <div data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-element elementor-element-2087d61 e-flex e-con-boxed e-con e-parent" data-id="2087d61" data-element_type="container" data-e-type="container">
          <div className="e-con-inner">
            <div data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-element elementor-element-28e93a7 e-flex e-con-boxed e-con e-child" data-id="28e93a7" data-element_type="container" data-e-type="container">
              <div className="e-con-inner">
                <div data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-element elementor-element-9586630 e-flex e-con-boxed e-con e-child" data-id="9586630" data-element_type="container" data-e-type="container">
                  <div className="e-con-inner">
                    <div data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-element elementor-element-0138418 e-flex e-con-boxed e-con e-child" data-id="0138418" data-element_type="container" data-e-type="container">
                      <div className="e-con-inner">
                        <div className="elementor-element elementor-element-932baa2 elementor-widget elementor-widget-heading" data-id="932baa2" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                          <h1 className="elementor-heading-title elementor-size-default">HOUSE RENOVATION COMPANY</h1>
                        </div>
                        <div className="elementor-element elementor-element-5065ddc elementor-widget__width-initial elementor-widget elementor-widget-heading" data-id="5065ddc" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                          <h2 className="elementor-heading-title elementor-size-default">Welcome To jrc home remodeling!</h2>
                        </div>
                        <div className="elementor-element elementor-element-fa91a05 elementor-widget elementor-widget-text-editor" data-id="fa91a05" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                          <p>We specialize in <strong>bath, kitchen, and basement remodels</strong>. Our experience as a company comes from over 40 fix-and-flips. Our process is proven to work with many projects completed, and the relationships we have with our contractors are what make us special.</p>
                        </div>
                        <div className="elementor-element elementor-element-8ff0d2e elementor-widget elementor-widget-button" data-id="8ff0d2e" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
                          <a className="elementor-button elementor-button-link elementor-size-sm" href="tel:303-418-2167">
                            <span className="elementor-button-content-wrapper">
                              <span className="elementor-button-text">Call us: 303-418-2167</span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-element elementor-element-861c82d e-flex e-con-boxed e-con e-child" data-id="861c82d" data-element_type="container" data-e-type="container">
                      <div className="e-con-inner">
                        <div className="elementor-element elementor-element-a66885d elementor-widget elementor-widget-text-editor" data-id="a66885d" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                          <p>With our experience in working in our own homes, we thought we would bring the expertise to you. Contractors just want to do the work, we are there to make sure of your satisfaction and handle the project so the headache is not yours. Whether you are looking to remodel your entire home, your kitchen, your bathroom(s), or your basement, give us a call to get started with your free estimate.</p>
                          <p>Our project manager will handle your project from start to finish and make sure the job is finished to your satisfaction. The headache and liability are on our hands when you sign up with us, so the headache is ours to handle. The goal of remodeling for us is to add value to a home that can be enjoyed by both the person who does the remodel, but to hold up for years to come without fear of losing resale value. Get started with a free estimate today.&nbsp;</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-element elementor-element-b1606d0 e-con-full e-flex e-con e-child" data-id="b1606d0" data-element_type="container" data-e-type="container">
                  <div className="elementor-element elementor-element-f3a0aa3 elementor-widget elementor-widget-image" data-id="f3a0aa3" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
                    <figure className="wp-caption">
                      <img alt="Kitchen interior before remodeling" loading="lazy" decoding="async" width="1000" height="1000" src="/assets/images/kitchen-before.webp" className="attachment-full size-full" />
                      <figcaption className="widget-image-caption wp-caption-text">Before</figcaption>
                    </figure>
                  </div>
                  <div className="elementor-element elementor-element-319677e elementor-widget elementor-widget-image" data-id="319677e" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
                    <figure className="wp-caption">
                      <img alt="Modern kitchen after remodel" loading="lazy" decoding="async" width="1000" height="1000" src="/assets/images/kitchen-after.webp" className="attachment-full size-full" />
                      <figcaption className="widget-image-caption wp-caption-text">After</figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3: 5 PORTFOLIO PHOTOS ROW */}
        <section data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-section elementor-top-section elementor-element elementor-element-6357f38 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="6357f38" data-element_type="section" data-e-type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-7f48989" data-id="7f48989" data-element_type="column" data-e-type="column">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-c27f8d7 elementor-widget elementor-widget-image" data-id="c27f8d7" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
                  <img loading="lazy" decoding="async" width="1000" height="1000" src="/assets/images/kitchen.webp" className="attachment-full size-full" alt="Kitchen island remodel" />
                </div>
              </div>
            </div>
            <div className="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-ecebed5" data-id="ecebed5" data-element_type="column" data-e-type="column">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-711cc0c elementor-widget elementor-widget-image" data-id="711cc0c" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
                  <img loading="lazy" decoding="async" width="1000" height="1000" src="/assets/images/bedroom.webp" className="attachment-full size-full" alt="Master bedroom renovation" />
                </div>
              </div>
            </div>
            <div className="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-5bd5d68" data-id="5bd5d68" data-element_type="column" data-e-type="column">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-91ecb5c elementor-widget elementor-widget-image" data-id="91ecb5c" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
                  <img loading="lazy" decoding="async" width="1000" height="1000" src="/assets/images/basement.webp" className="attachment-full size-full" alt="Finished basement remodel" />
                </div>
              </div>
            </div>
            <div className="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-287a2d1" data-id="287a2d1" data-element_type="column" data-e-type="column">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-2442434 elementor-widget elementor-widget-image" data-id="2442434" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
                  <img loading="lazy" decoding="async" width="1000" height="1000" src="/assets/images/bathroom.webp" className="attachment-full size-full" alt="Modern bathroom vanity" />
                </div>
              </div>
            </div>
            <div className="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-151ecbf" data-id="151ecbf" data-element_type="column" data-e-type="column">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-314ef82 elementor-widget elementor-widget-image" data-id="314ef82" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
                  <img loading="lazy" decoding="async" width="1000" height="1000" src="/assets/images/basement2.webp" className="attachment-full size-full" alt="Finished basement living area" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: OUR SPECIAL SERVICES (12 CIRCLE ICON CARDS) */}
        <section data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-section elementor-top-section elementor-element elementor-element-f9cfbf9 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="f9cfbf9" data-element_type="section" data-e-type="section">
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element" data-element_type="column">
              <div className="elementor-widget-wrap elementor-element-populated">
                <h2 className="services-heading" style={{ textAlign: "center" }}>Our Special Services</h2>
                <p className="services-intro" style={{ textAlign: "center", margin: "0 auto 50px" }}>
                  Curating a home that suites you and your family is essential to the place that you call home. Our homes mean more to us than they ever did as we are now doing a lot of our everyday work from the same place we rest. Knowing you have a space that is made by you for you is essential to a positive outlook. Your workspace and your home space can be all the difference in your overall comfort. At JRC Remodeling we address the complete project to make sure you don't have to worry.
                </p>

                <div className="home-services-grid">
                  {services.map((srv, index) => (
                    <Link key={index} to={srv.link} className="home-service-item">
                      <div className="home-service-icon-wrap">
                        <img src={srv.icon} alt={srv.name} />
                      </div>
                      <span className="home-service-title">{srv.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: TRUSTED BY HOMEOWNERS & GOOGLE REVIEWS (BLUE) */}
        <section data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-section elementor-top-section elementor-element elementor-element-351328f elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="351328f" data-element_type="section" data-e-type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
          <div className="elementor-container elementor-column-gap-default">
            {/* Left Testimonial Slider */}
            <div className="elementor-column elementor-top-column testimonial-left-col">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-76d4371 elementor-widget elementor-widget-heading">
                  <h2 className="elementor-heading-title">Trusted by Homeowners Since 1992</h2>
                </div>
                <div className="elementor-element elementor-element-c958802 elementor-widget elementor-widget-heading">
                  <h2 className="elementor-heading-title">5-Star Rated on Google | Zero Complaints in Over 30 Years</h2>
                </div>

                <div className="home-testimonial-outer-wrap">
                  <button
                    type="button"
                    className="home-testimonial-arrow-outside prev"
                    onClick={() => setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                    aria-label="Previous Testimonial"
                  >
                    ❮
                  </button>

                  <div className="home-testimonial-card-viewport">
                      <div key={activeTestimonial} className="home-testimonial-card slide-fade">
                        <p className="home-testimonial-quote">
                          "{testimonials[activeTestimonial].text}"
                        </p>
                        <p className="home-testimonial-author">
                          {testimonials[activeTestimonial].user}
                        </p>
                      </div>
                    </div>

                  <button
                    type="button"
                    className="home-testimonial-arrow-outside next"
                    onClick={() => setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                    aria-label="Next Testimonial"
                  >
                    ❯
                  </button>
                </div>

                <div className="home-testimonial-dots-outside">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      className={`home-testimonial-dot ${i === activeTestimonial ? 'active' : ''}`}
                      onClick={() => setActiveTestimonial(i)}
                      aria-label={`Testimonial ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Google Card */}
            <div className="elementor-column elementor-top-column google-right-col">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="home-google-card">
                  <a href="https://maps.app.goo.gl/DQDfjDHzCD2jyssR6" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/images/google-reviews-logo.png" alt="Google Reviews" />
                  </a>
                  <a href="https://maps.app.goo.gl/t1BinviUZ5TuEL746" target="_blank" rel="noopener noreferrer" className="home-google-btn">
                    Review us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: BATH, KITCHEN, BASEMENT CONTRACTOR & BEFORE/AFTER BATHTUB */}
        <div data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-element elementor-element-ef5cc89 e-flex e-con-boxed e-con e-parent" data-id="ef5cc89" data-element_type="container" data-e-type="container">
          <div className="e-con-inner">
            <div data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-element elementor-element-67b2d7d e-flex e-con-boxed e-con e-child" data-id="67b2d7d" data-element_type="container" data-e-type="container">
              <div className="e-con-inner">
                <div data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-element elementor-element-945ed11 e-flex e-con-boxed e-con e-child" data-id="945ed11" data-element_type="container" data-e-type="container">
                  <div className="e-con-inner">
                    <div data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-element elementor-element-04d78d5 e-flex e-con-boxed e-con e-child" data-id="04d78d5" data-element_type="container" data-e-type="container">
                      <div className="e-con-inner">
                        <div className="elementor-element elementor-element-2d2aa7d elementor-widget elementor-widget-image">
                          <img alt="JRC Home Remodeling logo" loading="lazy" decoding="async" width="1024" height="242" src="/assets/images/loh.webp" />
                        </div>
                        <div className="elementor-element elementor-element-3de7308 elementor-widget__width-initial elementor-widget elementor-widget-heading">
                          <h2 className="elementor-heading-title">Bath, kitchen, and basement Contractors near me</h2>
                        </div>
                        <div className="elementor-element elementor-element-abfe672 elementor-widget elementor-widget-button">
                          <a className="elementor-button elementor-button-link elementor-size-sm" href="tel:303-418-2167">
                            <span className="elementor-button-content-wrapper">
                              <span className="elementor-button-text">Call us: 303-418-2167</span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-element elementor-element-615b948 e-con-full e-flex e-con e-child">
                      <div className="elementor-element elementor-element-ee11e5b elementor-widget elementor-widget-text-editor">
                        <p>If you are looking for peace of mind and a sense of security, the best place to start would be your home. Think about it. These days we spend almost all our time living, working and/or studying at home.</p>
                        <p>Your immediate surroundings have a direct impact on your mental, physical and emotional well-being. Do you want to #stayathome as well as feel safe, secure and comfortable? Start by remodeling your house. At JRC Home Remodeling we specialize in home Remodeling, basement, kitchen, bath, and deck. We also do painting (both indoor and outdoor), as well as frame and drywalling.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-element elementor-element-a6cab62 e-con-full e-flex e-con e-child">
                  <div className="elementor-element elementor-element-8d78917 elementor-widget elementor-widget-image">
                    <figure className="wp-caption">
                      <img alt="Bathroom before remodeling" loading="lazy" decoding="async" width="1000" height="1000" src="/assets/images/bf-1.jpg" />
                      <figcaption className="widget-image-caption wp-caption-text">Before</figcaption>
                    </figure>
                  </div>
                  <div className="elementor-element elementor-element-386f4b2 elementor-widget elementor-widget-image">
                    <figure className="wp-caption">
                      <img alt="Modern bathroom after remodel" loading="lazy" decoding="async" width="1000" height="1000" src="/assets/images/af-1.webp" />
                      <figcaption className="widget-image-caption wp-caption-text">After</figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 7: SPLIT VANITY BEFORE/AFTER & 5 ENGINEERING CAPABILITIES */}
        <section data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-section elementor-top-section elementor-element elementor-element-287e501 elementor-reverse-tablet elementor-reverse-mobile elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="287e501" data-element_type="section" data-e-type="section">
          <div className="elementor-container elementor-column-gap-default">
            {/* Left Dual Vanity */}
            <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-815c040" data-id="815c040" data-element_type="column">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-element elementor-element-480f3ef e-con-full e-flex e-con e-parent">
                  <div className="elementor-element elementor-element-a12266c elementor-widget elementor-widget-image">
                    <figure className="wp-caption">
                      <img alt="Bathroom vanity before" loading="lazy" decoding="async" width="700" height="965" src="/assets/images/lsbf-1.webp" />
                      <figcaption className="widget-image-caption wp-caption-text">Before</figcaption>
                    </figure>
                  </div>
                  <div className="elementor-element elementor-element-4c012f4 elementor-widget elementor-widget-image">
                    <figure className="wp-caption">
                      <img alt="Bathroom vanity after" loading="lazy" decoding="async" width="700" height="965" src="/assets/images/lsaf-1.webp" />
                      <figcaption className="widget-image-caption wp-caption-text">After</figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Blue Engineering Card */}
            <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-33138a3" data-id="33138a3" data-element_type="column">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-ce1e386 elementor-position-left elementor-vertical-align-middle elementor-widget elementor-widget-image-box">
                  <div className="elementor-image-box-wrapper">
                    <figure className="elementor-image-box-img">
                      <img alt="Engineering" loading="lazy" decoding="async" width="512" height="512" src="/assets/images/worker-2-copy.png" />
                    </figure>
                    <div className="elementor-image-box-content">
                      <h3 className="elementor-image-box-title">Engineering</h3>
                      <p className="elementor-image-box-description">Our expert team uses quality materials and sustainable practices to bring your vision to life. Choose us for lasting excellence.</p>
                    </div>
                  </div>
                </div>

                <div className="elementor-element elementor-element-e333008 elementor-position-left elementor-vertical-align-middle elementor-widget elementor-widget-image-box">
                  <div className="elementor-image-box-wrapper">
                    <figure className="elementor-image-box-img">
                      <img alt="Quality Work" loading="lazy" decoding="async" width="512" height="512" src="/assets/images/guaranteed-copy.png" />
                    </figure>
                    <div className="elementor-image-box-content">
                      <h3 className="elementor-image-box-title">Quality Work</h3>
                      <p className="elementor-image-box-description">JRC Home Remodeling guarantees superior craftsmanship, precision, and client satisfaction.</p>
                    </div>
                  </div>
                </div>

                <div className="elementor-element elementor-element-df3473e elementor-position-left elementor-vertical-align-middle elementor-widget elementor-widget-image-box">
                  <div className="elementor-image-box-wrapper">
                    <figure className="elementor-image-box-img">
                      <img alt="Automated System" loading="lazy" decoding="async" width="512" height="512" src="/assets/images/data-preparation-copy.png" />
                    </figure>
                    <div className="elementor-image-box-content">
                      <h3 className="elementor-image-box-title">Automated System</h3>
                      <p className="elementor-image-box-description">Our dedicated team, committed to excellence and precision, ensures your project's success. With a proven track record and client-focused approach, your trust in us is the foundation of our exceptional craftsmanship.</p>
                    </div>
                  </div>
                </div>

                <div className="elementor-element elementor-element-015856c elementor-position-left elementor-vertical-align-middle elementor-widget elementor-widget-image-box">
                  <div className="elementor-image-box-wrapper">
                    <figure className="elementor-image-box-img">
                      <img alt="Experienced Team" loading="lazy" decoding="async" width="512" height="512" src="/assets/images/teamwork-copy.png" />
                    </figure>
                    <div className="elementor-image-box-content">
                      <h3 className="elementor-image-box-title">Experienced Team</h3>
                      <p className="elementor-image-box-description">Our expert team uses quality materials and sustainable practices to bring your vision to life. Choose us for lasting excellence.</p>
                    </div>
                  </div>
                </div>

                <div className="elementor-element elementor-element-fd63c61 elementor-position-left elementor-vertical-align-middle elementor-widget elementor-widget-image-box">
                  <div className="elementor-image-box-wrapper">
                    <figure className="elementor-image-box-img">
                      <img alt="Safety" loading="lazy" decoding="async" width="512" height="512" src="/assets/images/requirements-copy.png" />
                    </figure>
                    <div className="elementor-image-box-content">
                      <h3 className="elementor-image-box-title">Safety</h3>
                      <p className="elementor-image-box-description">Safety is our top priority at JRC Home Remodeling. Our projects adhere to the highest safety standards, ensuring a secure environment for both our team and your home. Trust us for meticulous planning, expert execution, and a commitment to creating spaces that prioritize the well-being of all.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: SERVICE AREAS & COLORADO MAP */}
        <section data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-section elementor-top-section elementor-element elementor-element-0df0ae2 elementor-reverse-tablet elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="0df0ae2" data-element_type="section" data-e-type="section">
          <div className="elementor-container elementor-column-gap-default">
            {/* Left Service Areas Card */}
            <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-0e74335" data-id="0e74335" data-element_type="column">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-cb531aa elementor-widget elementor-widget-heading">
                  <h2 className="elementor-heading-title">Our Service Areas</h2>
                </div>
                <div className="elementor-element elementor-element-cbfb864 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list">
                  <ul className="elementor-icon-list-items">
                    {serviceAreas.map((area, idx) => (
                      <li key={idx} className="elementor-icon-list-item">
                        <span className="elementor-icon-list-icon">
                          <svg aria-hidden="true" className="e-font-icon-svg e-fas-caret-right" viewBox="0 0 192 512" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z" />
                          </svg>
                        </span>
                        <span className="elementor-icon-list-text">{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Map Image */}
            <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-328a4ed" data-id="328a4ed" data-element_type="column">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-9ad94a4 elementor-widget elementor-widget-image">
                  <figure className="wp-caption">
                    <img loading="lazy" decoding="async" width="1080" height="1350" src="/assets/images/jrc-website-image.png" className="attachment-full size-full" alt="Denver Colorado Service Area Map" />
                    <figcaption className="widget-image-caption wp-caption-text">Before</figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
