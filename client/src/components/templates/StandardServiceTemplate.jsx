import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { COMPANY } from '../../content/siteData';
import servicesData from '../../content/servicesData.json';
import HomeRemodelingBadges from '../sections/HomeRemodelingBadges';
import '../../styles/home-remodeling.css';

const DEFAULT_STEPS = [
  {
    num: '1',
    title: 'Get a Free Quote',
    desc: 'Contact us or use our online form to request a no-obligation estimate.',
    icon: (
      <svg viewBox="0 0 512 512" width="26" height="26" fill="currentColor">
        <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
      </svg>
    ),
  },
  {
    num: '2',
    title: 'Schedule a Consultation',
    desc: 'We visit your home to discuss your goals, budget, and timeline in person.',
    icon: (
      <svg viewBox="0 0 448 512" width="26" height="26" fill="currentColor">
        <path d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z" />
      </svg>
    ),
  },
  {
    num: '3',
    title: 'Remodeling Begins',
    desc: 'Our team starts the project, keeping you updated and the site clean throughout.',
    icon: (
      <svg viewBox="0 0 512 512" width="26" height="26" fill="currentColor">
        <path d="M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.1 0-52.7z" />
      </svg>
    ),
  },
  {
    num: '4',
    title: 'Final Walkthrough',
    desc: 'We review the finished work together to make sure everything meets your expectations.',
    icon: (
      <svg viewBox="0 0 512 512" width="26" height="26" fill="currentColor">
        <path d="M349.565 98.783C295.978 98.783 251.721 64 184.348 64c-24.955 0-47.309 4.384-68.043 12.013V40c0-13.255-10.745-24-24-24s-24 10.745-24 24v432c0 13.255 10.745 24 24 24s24-10.745 24-24v-166.45c20.734 7.629 43.088 12.013 68.043 12.013 67.373 0 111.63-34.783 165.217-34.783 53.587 0 97.844 34.783 165.217 34.783 13.255 0 24-10.745 24-24V122.783c0-13.255-10.745-24-24-24-67.373 0-111.63-34.783-165.217-34.783zm117.217 172.934c-47.671-5.183-88.665-27.15-141.217-27.15-53.587 0-97.844 34.783-165.217 34.783-17.65 0-33.829-2.316-48.043-6.502V124.969c14.214 4.186 30.393 6.502 48.043 6.502 67.373 0 111.63-34.783 165.217-34.783 52.552 0 93.546 21.967 141.217 27.15v147.879z" />
      </svg>
    ),
  },
];

const DEFAULT_PROJECTS = [
  {
    title: 'Kitchen Renovation',
    client: 'Charissa Walton, Denver',
    image: '/assets/images/Gemini_Generated_Image_335e07335e07335e-scaled.jpg',
  },
  {
    title: 'Basement Finish',
    client: 'Bliss Bernal, Castle Rock',
    image: '/assets/images/2149366705.jpg',
  },
  {
    title: 'Bathroom Remodel',
    client: 'Toni Starner, Lakewood',
    image: '/assets/images/photo-1765745518752-68a289300789.jpeg',
  },
];

export default function StandardServiceTemplate({
  serviceSlug,
  title,
  metaDescription,
  canonicalPath,
  heroTag,
  heroTitle,
  heroSubtitle,
  heroBgImage,
  whatWeDoTag,
  whatWeDoTitle,
  whatWeDoSubtitle,
  services,
  whyChooseTag,
  whyChooseTitle,
  whyChooseText,
  missionText,
  visionText,
  projectsTag,
  projectsTitle,
  projects,
  processTag,
  processTitle,
  steps,
  faqTag,
  faqTitle,
  faqs,
  showMarquee = false,
  showBadges = false,
  compactAbout = false,
}) {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // If serviceSlug is provided, pull fallback data from servicesData.json
  const data = (serviceSlug && servicesData[serviceSlug]) || {};

  const finalTitle = title || data.title || "Denver Home Remodeling Contractors";
  const finalMeta = metaDescription || data.metaDesc || "";
  const finalCanonical = canonicalPath || (serviceSlug ? `/${serviceSlug}/` : "");

  // Hero
  const finalHeroTag = heroTag || data.hero?.pill || "BUILDING DREAMS, ONE ROOM AT A TIME";
  const finalHeroTitle = heroTitle || data.hero?.title || "";
  const finalHeroSubtitle = heroSubtitle || data.hero?.desc || "";
  const finalHeroBg = heroBgImage || (data.hero?.bg ? `/assets/images/${data.hero.bg}` : '/assets/images/hero-bg.jpg');

  // What We Do
  const finalWwdTag = whatWeDoTag || data.whatWeDo?.pill || "WHAT WE DO";
  const finalWwdTitle = whatWeDoTitle || data.whatWeDo?.title || "";
  const finalWwdSubtitle = whatWeDoSubtitle || "";
  const finalServices = services || data.whatWeDo?.cards?.map((c) => ({
    title: c.title,
    desc: c.desc,
    icon: c.icon ? `/assets/images/${c.icon}` : '/assets/images/home-renovation.png',
  })) || [];

  // Get To Know Us
  const finalGtkTag = whyChooseTag || data.getKnow?.pill || "GET TO KNOW US";
  const finalGtkTitle = whyChooseTitle || data.getKnow?.title || "Transform Your Space With Our Skilled Remodeling Team";
  const finalGtkText = Array.isArray(whyChooseText)
    ? whyChooseText
    : (data.getKnow?.desc || [
        "JRC Home Remodeling was built on one idea: a remodel should make your home work better for how you actually live, without the stress of a project gone sideways. Every job, big or small, gets the same attention to detail and honest communication.",
      ]);
  const finalGtkImages = (data.getKnow?.images && data.getKnow.images.length >= 2)
    ? data.getKnow.images.map(img => img.startsWith('/') ? img : `/assets/images/${img}`)
    : ['/assets/images/about-worker.jpg', '/assets/images/about-interior.jpg'];
  const finalMission = missionText || data.getKnow?.mission || 'To deliver dependable, high-quality remodeling services that solve problems and add lasting value.';
  const finalVision = visionText || data.getKnow?.vision || 'To be the most reliable, client-recommended remodeling contractor in Colorado.';

  // Latest Projects
  const finalProjectsTag = projectsTag || data.projects?.pill || "LATEST PROJECTS";
  const finalProjectsTitle = projectsTitle || data.projects?.title || "Projects That Speak for Themselves";
  const finalProjects = projects || (data.projects?.cards && data.projects.cards.length > 0
    ? data.projects.cards.map((c, i) => ({
        title: c.title,
        client: c.desc || (i === 0 ? 'Denver' : i === 1 ? 'Castle Rock' : 'Lakewood'),
        image: c.image ? `/assets/images/${c.image}` : DEFAULT_PROJECTS[i % DEFAULT_PROJECTS.length].image,
      }))
    : DEFAULT_PROJECTS);

  // Working Process
  const finalProcessTag = processTag || data.process?.pill || "WORKING PROCESS";
  const finalProcessTitle = processTitle || data.process?.title || "Our Step-by-Step Remodeling Process";
  const defaultStepIcons = [
    DEFAULT_STEPS[0].icon,
    DEFAULT_STEPS[1].icon,
    DEFAULT_STEPS[2].icon,
    DEFAULT_STEPS[3].icon,
  ];
  const finalSteps = steps || (data.process?.steps?.length > 0
    ? data.process.steps.map((s, idx) => ({
        num: s.num || String(idx + 1),
        title: s.title,
        desc: s.desc,
        image: s.image,
        icon: s.icon || defaultStepIcons[idx % defaultStepIcons.length],
      }))
    : DEFAULT_STEPS);

  // FAQ
  const finalFaqTag = faqTag || data.faqs?.pill || "ASK A QUESTION";
  const finalFaqTitle = faqTitle || data.faqs?.title || "Frequently Asked Questions";
  const finalFaqs = faqs !== undefined ? faqs : (data.faqs?.items || []);

  return (
    <>
      <Helmet>
        <title>{finalTitle}</title>
        {finalMeta && <meta name="description" content={finalMeta} />}
        {finalCanonical && (
          <link rel="canonical" href={`https://jrchomeremodeling.com${finalCanonical}`} />
        )}
      </Helmet>

      <article className={`standard-service-page home-remodeling-page ${serviceSlug ? `ssp-${serviceSlug}` : ''}`}>
        {/* Section 1: Hero */}
        <section
          className="hr-hero-section"
          style={{ backgroundImage: `url('${finalHeroBg}')` }}
        >
          <div className="hr-container">
            <div className="hr-hero-content">
              {finalHeroTag && (
                <div className="hr-tag-pill">
                  <span>{finalHeroTag}</span>
                </div>
              )}

              <h1 className="hr-hero-title">{finalHeroTitle}</h1>

              {finalHeroSubtitle && (
                <p className="hr-hero-desc">{finalHeroSubtitle}</p>
              )}

              <a href={`tel:${COMPANY.phoneRaw}`} className="hr-hero-call-box">
                <div className="hr-call-icon-wrap">
                  <svg className="hr-call-icon" viewBox="0 0 512 512" aria-hidden="true">
                    <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
                  </svg>
                </div>
                <div className="hr-call-text">
                  <span className="hr-call-label">Emergency Call</span>
                  <strong className="hr-call-number">{COMPANY.phone}</strong>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Section 2: What We Do */}
        {finalServices.length > 0 && (
          <section className="hr-services-section">
            <div className="hr-container">
              <div className="hr-services-header-grid">
                <div className="hr-services-header-left">
                  <div className="hr-tag-pill">
                    <span>{finalWwdTag}</span>
                  </div>
                  <h2 className="hr-section-title">{finalWwdTitle}</h2>
                </div>
                {finalWwdSubtitle && (
                  <div className="hr-services-header-right">
                    <p className="hr-section-subtitle-right">{finalWwdSubtitle}</p>
                  </div>
                )}
              </div>

              <div className="hr-services-grid">
                {finalServices.map((item, idx) => (
                  <div key={idx} className="hr-service-item">
                    <div className="hr-service-icon-wrap">
                      <img
                        src={item.icon || '/assets/images/home-renovation.png'}
                        alt={item.title}
                        width="42"
                        height="42"
                        className="hr-service-icon"
                      />
                    </div>
                    <h3 className="hr-service-item-title">{item.title}</h3>
                    <p className="hr-service-item-desc">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Section 3: Get To Know Us */}
        <section className={`hr-about-section ${compactAbout ? 'hr-about-compact' : ''}`}>
          <div className="hr-container">
            <div className="hr-about-grid">
              {/* Left Column: Visual Collage & Progress */}
              <div className="hr-about-collage-col">
                <div className="hr-about-subcol-left">
                  <div className="hr-about-worker-img-wrap">
                    <img
                      src={finalGtkImages[0]}
                      alt="JRC craftsman"
                      className="hr-about-worker-img"
                    />
                  </div>
                  <div className="hr-metric-card">
                    <h4 className="hr-metric-title">Company Progress</h4>
                    <div className="hr-metric-bar-group">
                      <div className="hr-metric-header">
                        <span className="hr-metric-label">Company progress</span>
                        <span className="hr-metric-value">100%</span>
                      </div>
                      <div className="hr-progress-bar-bg">
                        <div className="hr-progress-bar-fill" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                    <div className="hr-metric-bar-group">
                      <div className="hr-metric-header">
                        <span className="hr-metric-label">Client Satisfaction</span>
                        <span className="hr-metric-value">90%</span>
                      </div>
                      <div className="hr-progress-bar-bg">
                        <div className="hr-progress-bar-fill" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hr-about-subcol-right">
                  <div className="hr-about-interior-img-wrap">
                    <img
                      src={finalGtkImages[1]}
                      alt="Modern renovation interior"
                      className="hr-about-interior-img"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column: Narrative & Mission/Vision */}
              <div className="hr-about-content-col">
                <div className="hr-tag-pill">
                  <span>{finalGtkTag}</span>
                </div>

                <h2 className="hr-about-title">{finalGtkTitle}</h2>

                {finalGtkText.map((p, i) => (
                  <p key={i} className="hr-about-desc">
                    {p}
                  </p>
                ))}

                <div className="hr-vision-grid">
                  <div className="hr-vision-card">
                    <div className="hr-vision-icon-wrap">
                      <img
                        src="/assets/images/target-1.png"
                        alt="Our Mission"
                        width="44"
                        height="44"
                      />
                    </div>
                    <h4 className="hr-vision-card-title">Our Mission</h4>
                    <p className="hr-vision-card-desc">
                      {finalMission}
                    </p>
                  </div>

                  <div className="hr-vision-card">
                    <div className="hr-vision-icon-wrap">
                      <img
                        src="/assets/images/goal.png"
                        alt="Our Vision"
                        width="44"
                        height="44"
                      />
                    </div>
                    <h4 className="hr-vision-card-title">Our Vision</h4>
                    <p className="hr-vision-card-desc">
                      {finalVision}
                    </p>
                  </div>
                </div>

                <div className="hr-about-actions">
                  <Link to="/about-us" className="hr-btn-orange">
                    <span>More About Us</span>
                    <span className="hr-btn-arrow">↗</span>
                  </Link>
                  <a href={`tel:${COMPANY.phoneRaw}`} className="hr-btn-outline">
                    <span>Call For Free Quote</span>
                    <span className="hr-btn-arrow">↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Latest Projects */}
        {finalProjects.length > 0 && (
          <section className="hr-projects-section">
            <div className="hr-container">
              <div className="hr-section-header">
                <div className="hr-tag-pill">
                  <span>{finalProjectsTag}</span>
                </div>
                <h2 className="hr-section-title">{finalProjectsTitle}</h2>
              </div>

              <div className="hr-projects-grid">
                {finalProjects.map((item, idx) => (
                  <div key={idx} className="hr-project-card-item">
                    <div
                      className="hr-project-img"
                      style={{ backgroundImage: `url(${item.image})` }}
                    >
                      <div className="hr-project-banner">
                        <h3 className="hr-project-banner-title">{item.title}</h3>
                        <p className="hr-project-banner-client">{item.client}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Section 5: Working Process */}
        {finalSteps.length > 0 && (
          <section className="hr-process-section">
            <div className="hr-container">
              <div className="hr-section-header text-center">
                <div className="hr-tag-pill">
                  <span>{finalProcessTag}</span>
                </div>
                <h2 className="hr-section-title">{finalProcessTitle}</h2>
              </div>

              <div className={`hr-process-steps-row ${finalSteps.some((s) => s.image) ? 'hr-process-images-row' : ''}`}>
                {finalSteps.map((step) => (
                  <div
                    key={step.num}
                    className={`hr-process-step-item ${step.image ? 'hr-step-item-with-img' : ''}`}
                  >
                    {step.image ? (
                      <div className="hr-step-image-wrap">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="hr-step-img"
                        />
                      </div>
                    ) : (
                      <div className="hr-step-icon-container">
                        <div className="hr-step-icon-box">{step.icon}</div>
                        <div className="hr-step-number-badge">
                          <span>{step.num}</span>
                        </div>
                      </div>
                    )}
                    <h3 className="hr-step-item-title">{step.title}</h3>
                    <p className="hr-step-item-desc">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Section 6: FAQ (only if items present) */}
        {finalFaqs.length > 0 && (
          <section className="hr-faq-section">
            <div className="hr-container">
              <div className="hr-faq-grid">
                <div className="hr-faq-left-col">
                  <div className="hr-tag-pill">
                    <span>{finalFaqTag}</span>
                  </div>
                  <h2 className="hr-faq-title">{finalFaqTitle}</h2>

                  <div className="hr-skyline-container">
                    <img
                      src="/assets/images/faq-skyline.jpg"
                      alt="Denver Colorado Skyline"
                      className="hr-skyline-img"
                    />

                    <div className="hr-skyline-badge">
                      <div className="hr-skyline-avatars">
                        <img
                          src="/assets/images/user9.jpg"
                          alt="Satisfied customer avatar"
                          className="hr-skyline-avatar"
                        />
                        <img
                          src="/assets/images/user8.jpg"
                          alt="Satisfied customer avatar"
                          className="hr-skyline-avatar"
                        />
                        <img
                          src="/assets/images/user7.jpg"
                          alt="Satisfied customer avatar"
                          className="hr-skyline-avatar"
                        />
                      </div>
                      <div className="hr-skyline-badge-text">
                        <span>Trusted By </span>
                        <span className="hr-orange-text">1000+</span>
                        <br />
                        <span>Satisfied Customers</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hr-faq-right-col">
                  <div className="hr-faq-accordion">
                    {finalFaqs.map((faq, idx) => {
                      const isOpen = openFaqIndex === idx;
                      return (
                        <div
                          key={idx}
                          className={`hr-faq-item ${isOpen ? 'active' : ''}`}
                        >
                          <button
                            type="button"
                            className="hr-faq-question-btn"
                            onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                            aria-expanded={isOpen}
                          >
                            <span className="hr-faq-question-text">{faq.q}</span>
                            <span
                              className={`hr-faq-chevron-icon ${isOpen ? 'rotated' : ''}`}
                              aria-hidden="true"
                            >
                              <svg
                                viewBox="0 0 256 512"
                                width="14"
                                height="14"
                                fill="currentColor"
                              >
                                <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
                              </svg>
                            </span>
                          </button>
                          {isOpen && (
                            <div className="hr-faq-answer-panel">
                              <p>{faq.a}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Optional Marquee Ribbon */}
        {showMarquee && (
          <section style={{ backgroundColor: '#F45404', padding: '16px 0', overflow: 'hidden' }}>
            <div style={{ display: 'flex', gap: '30px', whiteSpace: 'nowrap', color: '#FFFFFF', fontWeight: 'bold', fontSize: '15px', letterSpacing: '2px', justifyContent: 'center' }}>
              <span>KITCHEN REMODELING ★</span>
              <span>BATHROOM REMODELING ★</span>
              <span>BASEMENT FINISHING ★</span>
              <span>WHOLE-HOME REMODELING ★</span>
              <span>COLORADO CRAFTSMANSHIP ★</span>
              <span>CUSTOM FINISHES ★</span>
            </div>
          </section>
        )}

        {/* Section 7: Badges */}
        {showBadges && <HomeRemodelingBadges />}
      </article>
    </>
  );
}
