import { Helmet } from 'react-helmet-async';
import EstimateForm from '../components/forms/EstimateForm';
import BeforeAfterSlider from '../components/common/BeforeAfterSlider';
import { COMPANY } from '../content/siteData';
import '../styles/kitchen.css';

/**
 * KitchenRemodeling Component
 * Exact pixel-perfect recreation of https://jrchomeremodeling.com/kitchen-remodeling/
 */
export default function KitchenRemodeling() {
  const trustPoints = [
    {
      title: 'Licensed & Insured',
      desc: 'Full coverage on every project',
      icon: (
        <svg width="22" height="22" viewBox="0 0 512 512" fill="currentColor">
          <path d="M224,192a16,16,0,1,0,16,16A16,16,0,0,0,224,192ZM466.5,83.68l-192-80A57.4,57.4,0,0,0,256.05,0a57.4,57.4,0,0,0-18.46,3.67l-192,80A47.93,47.93,0,0,0,16,128C16,326.5,130.5,463.72,237.5,508.32a48.09,48.09,0,0,0,36.91,0C360.09,472.61,496,349.3,496,128A48,48,0,0,0,466.5,83.68ZM384,256H371.88c-28.51,0-42.79,34.47-22.63,54.63l8.58,8.57a16,16,0,1,1-22.63,22.63l-8.57-8.58C306.47,313.09,272,327.37,272,355.88V368a16,16,0,0,1-32,0V355.88c0-28.51-34.47-42.79-54.63-22.63l-8.57,8.58a16,16,0,0,1-22.63-22.63l8.58-8.57c20.16-20.16,5.88-54.63-22.63-54.63H128a16,16,0,0,1,0-32h12.12c28.51,0,42.79-34.47,22.63-54.63l-8.58-8.57a16,16,0,0,1,22.63-22.63l8.57,8.58c20.16,20.16,54.63,5.88,54.63-22.63V112a16,16,0,0,1,32,0v12.12c0,28.51,34.47,42.79,54.63,22.63l8.57-8.58a16,16,0,0,1,22.63,22.63l-8.58,8.57C329.09,189.53,343.37,224,371.88,224H384a16,16,0,0,1,0,32Zm-96,0a16,16,0,1,0,16,16A16,16,0,0,0,288,256Z" />
        </svg>
      ),
    },
    {
      title: 'On-Time Delivery',
      desc: 'Projects completed on schedule',
      icon: (
        <svg width="22" height="22" viewBox="0 0 512 512" fill="currentColor">
          <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" />
        </svg>
      ),
    },
    {
      title: 'Honest Pricing',
      desc: 'No hidden fees or surprises',
      icon: (
        <svg width="22" height="22" viewBox="0 0 288 512" fill="currentColor">
          <path d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z" />
        </svg>
      ),
    },
    {
      title: '5-Star Reviews',
      desc: 'Trusted by Denver homeowners',
      icon: (
        <svg width="22" height="22" viewBox="0 0 576 512" fill="currentColor">
          <path d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z" />
        </svg>
      ),
    },
  ];

  const serviceColumns = [
    {
      icon: '/assets/images/kitchen.png',
      title: 'Cabinet & Hardware Installation',
      desc: 'Upgrade storage space and improve layout functionality with modern cabinet solutions.',
    },
    {
      icon: '/assets/images/kitchen-1.png',
      title: 'Countertops & Backsplash Installation',
      desc: 'Choose from stylish materials that improve durability and visual appeal.',
    },
    {
      icon: '/assets/images/countertop.png',
      title: 'Lighting & Layout Improvements',
      desc: 'Enhance brightness, workflow, and comfort with optimized kitchen design upgrades.',
    },
  ];

  const serviceLocations = [
    'Aurora', 'Arvada', 'Broomfield', 'Brighton', 'Boulder',
    'Centennial', 'Denver', 'Englewood', 'Lakewood', 'Parker',
    'Thornton', 'Westminster', 'Wheat ridge',
  ];

  return (
    <>
      <Helmet>
        <title>Expert Kitchen Remodel Contractor | Custom Designs By JRC</title>
        <meta
          name="description"
          content="Denver kitchen remodeling by JRC: Custom kitchen designs and expert craftsmanship. Get a free estimate for your kitchen renovation!"
        />
        <link rel="canonical" href="https://jrchomeremodeling.com/kitchen-remodeling/" />
      </Helmet>

      <article className="kitchen-page">
        {/* =========================================================================
            SECTION 0: Hero with Side Form
            ========================================================================= */}
        <section id="form" className="kitchen-hero-section">
          <div className="kitchen-content-container">
            <div className="kitchen-hero-grid">
              <div className="kitchen-hero-left">
                <div className="kitchen-tag-pill">
                  <span>KITCHEN REMODELER</span>
                </div>
                <h2 className="kitchen-hero-title">
                  Kitchen Remodeling Services in Denver Metro
                </h2>
                <p className="kitchen-hero-desc">
                  From cabinets and countertops to lighting and full layout upgrades — JRC Home Remodeling delivers beautiful kitchens designed around your lifestyle and budget.
                </p>
                <div className="kitchen-hero-cta-group">
                  <a href="#transform" className="btn-kitchen-orange">
                    See transformation
                  </a>
                  <a href={`tel:${COMPANY.phoneRaw}`} className="btn-kitchen-navy">
                    Call {COMPANY.phone}
                  </a>
                </div>
              </div>

              {/* Consultation Request Form on Right */}
              <div className="kitchen-hero-form-card">
                <EstimateForm
                  serviceName="Kitchen Remodeling"
                  title=""
                  subtitle=""
                  buttonText="Send Message"
                />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 1: Blue Trust Bar
            ========================================================================= */}
        <section className="kitchen-trust-bar">
          <div className="kitchen-content-container">
            <div className="kitchen-trust-grid">
              {trustPoints.map((tp) => (
                <div key={tp.title} className="kitchen-trust-item">
                  <div className="kitchen-trust-icon-circle">{tp.icon}</div>
                  <h3 className="kitchen-trust-title">{tp.title}</h3>
                  <p className="kitchen-trust-desc">{tp.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: Before & After Transformation + 4 Thumbnails + Button
            ========================================================================= */}
        <section id="transform" className="kitchen-transform-section">
          <div className="kitchen-content-container text-center">
            <div className="kitchen-tag-pill" style={{ display: 'inline-block', marginBottom: '14px' }}>
              <span>KITCHEN REMODELER</span>
            </div>
            <h2 className="kitchen-section-title">
              Turn Your Outdated Kitchen Into a Space You Love Every Day
            </h2>
            <p className="kitchen-transform-desc">
              Whether your kitchen feels cramped, outdated, or lacks functionality, our remodeling team helps you redesign the space with better layout flow, upgraded materials, and modern finishes that increase comfort and home value.
            </p>

            <div className="kitchen-transform-slider-wrap">
              <BeforeAfterSlider
                beforeImage="/assets/images/vintage-kitchen-design-tips.jpg"
                afterImage="/assets/images/Gemini_Generated_Image_335e07335e07335e-scaled.jpg"
                beforeAlt="Outdated dark wooden kitchen"
                afterAlt="Modern bright open kitchen renovation"
                height="800px"
                initialPosition={56}
              />
            </div>

            {/* 4 Thumbnails in a row */}
            <div className="kitchen-thumbnails-grid">
              <div className="kitchen-thumbnail-item">
                <img src="/assets/images/image-3-1.jpeg" alt="Kitchen detail 1" loading="lazy" />
              </div>
              <div className="kitchen-thumbnail-item">
                <img src="/assets/images/image-2.webp" alt="Kitchen detail 2" loading="lazy" />
              </div>
              <div className="kitchen-thumbnail-item">
                <img src="/assets/images/image.jpeg" alt="Kitchen detail 3" loading="lazy" />
              </div>
              <div className="kitchen-thumbnail-item">
                <img src="/assets/images/image-5-e1774993852182.jpeg" alt="Kitchen detail 4" loading="lazy" />
              </div>
            </div>

            <div className="kitchen-estimate-btn-wrap">
              <a href="#form" className="btn-kitchen-orange btn-lg">
                Get My Kitchen Estimate
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: Local Partner & Checklist
            ========================================================================= */}
        <section className="kitchen-partner-section">
          <div className="kitchen-content-container">
            <div className="kitchen-partner-grid">
              <div className="kitchen-partner-content">
                <h2 className="kitchen-section-title" style={{ textAlign: 'left', marginBottom: '18px' }}>
                  Your Local Kitchen Remodeling Partner in Denver Metro
                </h2>
                <p className="kitchen-partner-desc">
                  At JRC Home Remodeling, we help homeowners create kitchens that combine beauty, efficiency, and long-lasting quality. From the first consultation to final installation, our team manages every detail including cabinetry upgrades, backsplash installation, lighting improvements, and countertop refinishing so your remodeling experience stays smooth and stress-free.
                </p>
                <ul className="kitchen-checklist">
                  <li>
                    <span className="kitchen-check-icon">✓</span>
                    <span>25+ years remodeling experience</span>
                  </li>
                  <li>
                    <span className="kitchen-check-icon">✓</span>
                    <span>Fully insured professionals</span>
                  </li>
                  <li>
                    <span className="kitchen-check-icon">✓</span>
                    <span>Dust-controlled remodeling environment</span>
                  </li>
                  <li>
                    <span className="kitchen-check-icon">✓</span>
                    <span>Clear timelines and communication</span>
                  </li>
                </ul>
                <a href={`tel:${COMPANY.phoneRaw}`} className="btn-kitchen-orange">
                  Talk With a Remodeling Expert
                </a>
              </div>
              <div className="kitchen-partner-image-box" />
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: Complete Kitchen Remodeling Services (Dark Navy #1E3A5F)
            ========================================================================= */}
        <section className="kitchen-services-section">
          <div className="kitchen-content-container">
            <div className="kitchen-services-header text-center">
              <div className="kitchen-tag-pill kitchen-tag-pill-dark" style={{ display: 'inline-block', marginBottom: '14px' }}>
                <span>KITCHEN REMODELING</span>
              </div>
              <h2 className="kitchen-services-title">
                Complete Kitchen Remodeling Services <br />From Start to Finish
              </h2>
              <p className="kitchen-services-subtitle">
                Phoenix’s trusted bathroom remodeling experts. Custom designs, quality craftsmanship, and <br />exceptional service — all backed by our satisfaction guarantee.
              </p>
            </div>

            <div className="kitchen-services-grid">
              {serviceColumns.map((srv) => (
                <div key={srv.title} className="kitchen-service-box">
                  <div className="kitchen-service-icon-wrap">
                    <img src={srv.icon} alt={srv.title} />
                  </div>
                  <h3 className="kitchen-service-title">{srv.title}</h3>
                  <p className="kitchen-service-desc">{srv.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: 3D Visualization Banner
            ========================================================================= */}
        <section className="kitchen-visualize-section">
          <div className="kitchen-visualize-overlay" />
          <div className="kitchen-content-container text-center kitchen-visualize-inner">
            <h1 className="kitchen-visualize-title">
              Visualize Your New Kitchen Before Construction Begins
            </h1>
            <p className="kitchen-visualize-desc">
              We create detailed 3D remodeling previews so you can confidently approve layouts, materials, <br />and finishes before installation begins — eliminating surprises during construction.
            </p>
          </div>
        </section>

        {/* =========================================================================
            SECTION 6: 3-Step Working Process (Stepped Cards + Image)
            ========================================================================= */}
        <section className="kitchen-process-section">
          <div className="kitchen-content-container">
            <div className="kitchen-process-header text-center">
              <h2 className="kitchen-section-title">
                Our Simple 3-Step <br />Kitchen Remodeling Process
              </h2>
            </div>

            <div className="kitchen-process-row">
              {/* Card 1: Step 1 (margin-top 150px) */}
              <div className="kitchen-process-step-card step-card-1">
                <h2 className="kitchen-step-number">Step 1</h2>
                <h2 className="kitchen-step-name">Consultation</h2>
                <p className="kitchen-step-text">
                  We understand your goals, layout needs, and budget expectations.
                </p>
              </div>

              {/* Card 2: Step 2 (margin-top 100px) */}
              <div className="kitchen-process-step-card step-card-2">
                <h2 className="kitchen-step-number">Step 2</h2>
                <h2 className="kitchen-step-name">Design Planning</h2>
                <p className="kitchen-step-text">
                  We create visualization models and finalize materials and finishes.
                </p>
              </div>

              {/* Card 3: Step 3 (margin-top 50px) */}
              <div className="kitchen-process-step-card step-card-3">
                <h2 className="kitchen-step-number">Step 3</h2>
                <h2 className="kitchen-step-name">Professional Installation</h2>
                <p className="kitchen-step-text">
                  Our team completes demolition, upgrades, and finishing with precision.
                </p>
              </div>

              {/* Card 4: Step Image (margin-top 0) */}
              <div className="kitchen-process-step-image" />
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 7: Testimonials & Trust (Dark Navy #1E3A5F)
            ========================================================================= */}
        <section className="kitchen-reviews-section">
          <div className="kitchen-content-container">
            <div className="kitchen-reviews-header text-center">
              <div className="kitchen-tag-pill kitchen-tag-pill-dark" style={{ display: 'inline-block', marginBottom: '10px' }}>
                <span>Latest Project</span>
              </div>
              <h2 className="kitchen-reviews-title">
                What Our Clients Say About Our Painting Company
              </h2>
            </div>

            <div className="kitchen-reviews-grid">
              {/* Left Column: Image with gradient overlay and bottom trust stat */}
              <div className="kitchen-reviews-image-box">
                <div className="kitchen-reviews-trust-stat">
                  <div className="kitchen-avatars-row">
                    <img src="/assets/images/user9.jpg" alt="Client 1" className="kitchen-avatar-circle avatar-1" />
                    <img src="/assets/images/user8.jpg" alt="Client 2" className="kitchen-avatar-circle avatar-2" />
                    <img src="/assets/images/user7.jpg" alt="Client 3" className="kitchen-avatar-circle avatar-3" />
                  </div>
                  <h2 className="kitchen-trust-stat-title">
                    Trusted By <span className="kitchen-orange-text">1000+</span><br /> Satisfied Customers
                  </h2>
                </div>
              </div>

              {/* Right Column: Review Quote Card */}
              <div className="kitchen-reviews-card-box">
                <div className="kitchen-review-white-card">
                  <div className="kitchen-stars-row">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                  <p className="kitchen-review-quote">
                    "JRC did an awesome job with our kitchen floor! They were responsive, pleasant, professional, had good communication, were on time, and most importantly, did a great job! We are so happy with the results and look forward to working with Monica and her team again."
                  </p>
                  <div className="kitchen-review-author-wrap">
                    <img src="/assets/images/user9.jpg" alt="Bliss Bernal" className="kitchen-author-pic" />
                    <div className="kitchen-author-info">
                      <h4 className="kitchen-author-name">Bliss Bernal</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 8: Bottom Location & Estimate Form (#101828)
            ========================================================================= */}
        <section className="kitchen-bottom-section">
          <div className="kitchen-content-container">
            <div className="kitchen-bottom-grid">
              <div className="kitchen-bottom-left">
                <div className="kitchen-tag-pill kitchen-tag-pill-dark" style={{ display: 'inline-block', marginBottom: '14px' }}>
                  <span>Kitchen remodeller Near me</span>
                </div>
                <h2 className="kitchen-bottom-title">
                  Kitchen Remodeling Services Near You
                </h2>
                <p className="kitchen-bottom-desc">
                  If you’re searching for a <strong>Kitchen renovation near me</strong> or planning a <strong>Kitchen remodel near me</strong>, <strong>JRC Home Remodeling</strong> is the team you can trust to bring your vision to life. As an experienced <strong>Kitchen contractor</strong>, we specialize in creating beautiful, functional spaces that fit your style and budget. We make getting started easy by offering a <strong>free design</strong> and <strong>free estimate</strong>, so you can clearly see your options and costs upfront.
                </p>
                <h2 className="kitchen-bottom-subheading">
                  serving homeowner across denver
                </h2>
                <div className="kitchen-location-pills">
                  {serviceLocations.map((loc) => (
                    <span key={loc} className="kitchen-location-pill">
                      {loc}
                    </span>
                  ))}
                </div>
              </div>

              <div className="kitchen-bottom-right">
                <div className="kitchen-bottom-form-card">
                  <h2 className="kitchen-bottom-form-title">
                    Get Your Free Estimate
                  </h2>
                  <EstimateForm
                    serviceName="Kitchen Remodeling"
                    title=""
                    subtitle=""
                    buttonText="Send"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
