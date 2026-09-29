import { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
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
      <svg
        aria-hidden="true"
        className="e-font-icon-svg e-fas-phone-alt"
        viewBox="0 0 512 512"
        width="34"
        height="34"
        fill="currentColor"
      >
        <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
      </svg>
    ),
  },
  {
    num: '2',
    title: 'Schedule a Consultation',
    desc: 'We visit your home to discuss your goals, budget, and timeline in person.',
    icon: (
      <svg
        aria-hidden="true"
        className="e-font-icon-svg e-fas-calendar-check"
        viewBox="0 0 448 512"
        width="34"
        height="34"
        fill="currentColor"
      >
        <path d="M436 160H12c-6.627 0-12-5.373-12-12v-36c0-26.51 21.49-48 48-48h48V12c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v52h128V12c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v52h48c26.51 0 48 21.49 48 48v36c0 6.627-5.373 12-12 12zM12 192h424c6.627 0 12 5.373 12 12v260c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V204c0-6.627 5.373-12 12-12zm333.296 95.947l-28.169-28.398c-4.667-4.705-12.265-4.736-16.97-.068L194.12 364.665l-45.98-46.352c-4.667-4.705-12.266-4.736-16.971-.068l-28.397 28.17c-4.705 4.667-4.736 12.265-.068 16.97l82.601 83.269c4.667 4.705 12.265 4.736 16.97.068l142.953-141.805c4.705-4.667 4.736-12.265.068-16.97z" />
      </svg>
    ),
  },
  {
    num: '3',
    title: 'Remodeling Begins',
    desc: 'Our team starts the project, keeping you updated and the site clean throughout.',
    icon: (
      <svg
        aria-hidden="true"
        className="e-font-icon-svg e-fas-tools"
        viewBox="0 0 512 512"
        width="34"
        height="34"
        fill="currentColor"
      >
        <path d="M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z" />
      </svg>
    ),
  },
  {
    num: '4',
    title: 'Final Walkthrough',
    desc: 'We review the finished work together to make sure everything meets your expectations.',
    icon: (
      <svg
        aria-hidden="true"
        className="e-font-icon-svg e-fas-flag-checkered"
        viewBox="0 0 512 512"
        width="34"
        height="34"
        fill="currentColor"
      >
        <path d="M243.2 189.9V258c26.1 5.9 49.3 15.6 73.6 22.3v-68.2c-26-5.8-49.4-15.5-73.6-22.2zm223.3-123c-34.3 15.9-76.5 31.9-117 31.9C296 98.8 251.7 64 184.3 64c-25 0-47.3 4.4-68 12 2.8-7.3 4.1-15.2 3.6-23.6C118.1 24 94.8 1.2 66.3 0 34.3-1.3 8 24.3 8 56c0 19 9.5 35.8 24 45.9V488c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24v-94.4c28.3-12.1 63.6-22.1 114.4-22.1 53.6 0 97.8 34.8 165.2 34.8 48.2 0 86.7-16.3 122.5-40.9 8.7-6 13.8-15.8 13.8-26.4V95.9c.1-23.3-24.2-38.8-45.4-29zM169.6 325.5c-25.8 2.7-50 8.2-73.6 16.6v-70.5c26.2-9.3 47.5-15 73.6-17.4zM464 191c-23.6 9.8-46.3 19.5-73.6 23.9V286c24.8-3.4 51.4-11.8 73.6-26v70.5c-25.1 16.1-48.5 24.7-73.6 27.1V286c-27 3.7-47.9 1.5-73.6-5.6v67.4c-23.9-7.4-47.3-16.7-73.6-21.3V258c-19.7-4.4-40.8-6.8-73.6-3.8v-70c-22.4 3.1-44.6 10.2-73.6 20.9v-70.5c33.2-12.2 50.1-19.8 73.6-22v71.6c27-3.7 48.4-1.3 73.6 5.7v-67.4c23.7 7.4 47.2 16.7 73.6 21.3v68.4c23.7 5.3 47.6 6.9 73.6 2.7V143c27-4.8 52.3-13.6 73.6-22.5z" />
      </svg>
    ),
  },
];

const DEFAULT_PROJECTS = [
  {
    title: 'Custom Composite Deck Build',
    client: 'Christine, Denver',
    image: '/assets/images/267.jpg',
  },
  {
    title: 'Deck Remodel & Staining',
    client: 'Amelia, Castle Rock',
    image: '/assets/images/17102.jpg',
  },
  {
    title: 'Pergola & Deck Restoration',
    client: 'Jack William, Lakewood',
    image: '/assets/images/703.jpg',
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
  showMarquee = true,
  showBadges = true,
  compactAbout = false,
}) {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Parallax scroll refs
  const aboutRef = useRef(null);
  const { scrollYProgress: aboutScroll } = useScroll({
    target: aboutRef,
    offset: ['start end', 'end start'],
  });
  const yWorker = useTransform(aboutScroll, [0, 1], [40, -40]);
  const yInterior = useTransform(aboutScroll, [0, 1], [65, -65]);

  const projectsRef = useRef(null);
  const { scrollYProgress: projScroll } = useScroll({
    target: projectsRef,
    offset: ['start end', 'end start'],
  });
  const yProj1 = useTransform(projScroll, [0, 1], [-45, 45]);
  const yProj2 = useTransform(projScroll, [0, 1], [45, -45]);
  const yProj3 = useTransform(projScroll, [0, 1], [-45, 45]);
  const yTransforms = [yProj1, yProj2, yProj3];

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
  const finalProjectsTitle = projectsTitle || data.projects?.title || "Decks That Speak for Themselves";
  const finalProjects = projects || (data.projects?.cards && data.projects.cards.length > 0
    ? data.projects.cards.map((c, i) => ({
        title: c.title,
        client: c.desc || (i === 0 ? 'Christine, Denver' : i === 1 ? 'Amelia, Castle Rock' : 'Jack William, Lakewood'),
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

  const toggleFaq = (idx) => {
    setOpenFaqIndex((prev) => (prev === idx ? null : idx));
  };

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
                    <div className="hr-service-icon-box">
                      <img
                        src={item.icon || '/assets/images/home-renovation.png'}
                        alt={item.title}
                        width="44"
                        height="44"
                        className="hr-service-icon"
                      />
                    </div>
                    <div className="hr-service-divider" />
                    <h3 className="hr-service-item-title">{item.title}</h3>
                    <p className="hr-service-item-desc">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Section 3: Get To Know Us */}
        <section ref={aboutRef} className={`hr-about-section ${compactAbout ? 'hr-about-compact' : ''}`}>
          <div className="hr-container">
            <div className="hr-about-grid">
              {/* Left Column: Visual Collage & Progress */}
              <div className="hr-about-collage-col">
                <div className="hr-about-subcol-left">
                  <div className="hr-about-worker-img-wrap">
                    <motion.img
                      src={finalGtkImages[0]}
                      alt="Craftsman at work"
                      className="hr-about-worker-img"
                      style={{
                        y: yWorker,
                        width: '100%',
                        height: 'calc(100% + 100px)',
                        objectFit: 'cover',
                        position: 'absolute',
                        top: '-50px',
                        left: 0,
                      }}
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
                    <motion.img
                      src={finalGtkImages[1]}
                      alt="Finished craftsmanship work"
                      className="hr-about-interior-img"
                      style={{
                        y: yInterior,
                        width: '100%',
                        height: 'calc(100% + 140px)',
                        objectFit: 'cover',
                        position: 'absolute',
                        top: '-70px',
                        left: 0,
                      }}
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
                    <div className="hr-vision-text">
                      <h3 className="hr-vision-title">Our Mission</h3>
                      <p className="hr-vision-desc">{finalMission}</p>
                    </div>
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
                    <div className="hr-vision-text">
                      <h3 className="hr-vision-title">Our Vision</h3>
                      <p className="hr-vision-desc">{finalVision}</p>
                    </div>
                  </div>
                </div>

                <div className="hr-about-cta-group">
                  <Link to="/about-us" className="btn hr-btn-orange">
                    <span>More About Us</span>
                    <span className="hr-btn-arrow">&#8599;</span>
                  </Link>
                  <a href={`tel:${COMPANY.phoneRaw}`} className="btn hr-btn-white">
                    <span>Call For Free Quote</span>
                    <span className="hr-btn-arrow">&#8599;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Latest Projects */}
        {finalProjects.length > 0 && (
          <section ref={projectsRef} className="hr-projects-section">
            <div className="hr-container">
              <div className="hr-section-header">
                <div className="hr-tag-pill">
                  <span>{finalProjectsTag}</span>
                </div>
                <h2 className="hr-section-title">{finalProjectsTitle}</h2>
              </div>

              <div className="hr-projects-grid">
                {finalProjects.slice(0, 3).map((item, idx) => (
                  <div key={idx} className="hr-project-card-item">
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="hr-project-card-img"
                      style={{
                        y: yTransforms[idx % 3],
                        width: '100%',
                        height: 'calc(100% + 120px)',
                        objectFit: 'cover',
                        position: 'absolute',
                        top: '-60px',
                        left: 0,
                      }}
                    />
                    <div className="hr-project-banner">
                      <h3 className="hr-project-banner-title">{item.title}</h3>
                      <p className="hr-project-banner-client">{item.client}</p>
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

        {/* Section 6: FAQ (Smooth Accordion & Social Proof Badge) */}
        {finalFaqs.length > 0 && (
          <section className="hr-faq-section">
            <div className="hr-container">
              <div className="hr-faq-grid">
                <div className="hr-faq-left-col">
                  <div className="hr-tag-pill">
                    <span>{finalFaqTag}</span>
                  </div>
                  <h2 className="hr-faq-title">{finalFaqTitle}</h2>

                  <div className="hr-faq-skyline-card">
                    <img
                      src="/assets/images/57893.jpg"
                      alt="Denver Colorado Skyline"
                      className="hr-faq-skyline-img"
                    />

                    <div className="hr-faq-skyline-overlay">
                      <div className="hr-faq-social-proof">
                        <div className="hr-faq-avatars">
                          <img
                            src="/assets/images/user9.jpg"
                            alt="Satisfied client avatar"
                            className="hr-faq-avatar"
                            width="48"
                            height="48"
                          />
                          <img
                            src="/assets/images/user8.jpg"
                            alt="Satisfied client avatar"
                            className="hr-faq-avatar"
                            width="48"
                            height="48"
                          />
                          <img
                            src="/assets/images/user7.jpg"
                            alt="Satisfied client avatar"
                            className="hr-faq-avatar"
                            width="48"
                            height="48"
                          />
                        </div>
                        <div className="hr-faq-proof-text">
                          Trusted By <span className="orange-text">1000+</span>
                          <br />
                          Satisfied Customers
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hr-faq-right-col">
                  <div className="hr-faq-accordion-list">
                    {finalFaqs.map((faq, idx) => {
                      const isOpen = openFaqIndex === idx;
                      return (
                        <div
                          key={idx}
                          className={`hr-faq-item-card ${isOpen ? 'is-active' : ''}`}
                        >
                          <button
                            type="button"
                            className={`hr-faq-header-btn ${isOpen ? 'is-active' : ''}`}
                            onClick={() => toggleFaq(idx)}
                            aria-expanded={isOpen}
                          >
                            <span className="hr-faq-question-text">{faq.q}</span>
                            <motion.div
                              className="hr-faq-chevron-box"
                              animate={{ rotate: isOpen ? 90 : 0 }}
                              transition={{ duration: 0.25, ease: 'easeInOut' }}
                            >
                              <svg
                                aria-hidden="true"
                                className="hr-faq-chevron-icon"
                                viewBox="0 0 256 512"
                                width="9"
                                height="15"
                                fill="currentColor"
                              >
                                <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
                              </svg>
                            </motion.div>
                          </button>
                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                key="answer"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{
                                  duration: 0.32,
                                  ease: [0.25, 0.1, 0.25, 1.0],
                                }}
                                style={{ overflow: 'hidden' }}
                              >
                                <div className="hr-faq-answer-inner">
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

        {/* Section 7: Monogram Trust Badges Marquee */}
        {showBadges && <HomeRemodelingBadges />}
      </article>
    </>
  );
}
