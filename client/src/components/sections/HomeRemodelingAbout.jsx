import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { COMPANY } from '../../content/siteData';

/**
 * HomeRemodelingAbout
 * Section 3: "GET TO KNOW US"
 * - Left column: Dual vertical imagery (Worker cutting wood + tall dining interior) + Progress Card
 * - Right column: Narrative, Mission & Vision white cards, dual CTAs
 * - Equal height columns matching left and right
 * - Parallax inverse scroll on images as page scrolls up and down
 */
export default function HomeRemodelingAbout() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  // Inverse parallax scroll: as page scrolls down, images translate upward (negative Y)
  const yWorker = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const yInterior = useTransform(scrollYProgress, [0, 1], [65, -65]);

  return (
    <section ref={sectionRef} className="hr-about-section">
      <div className="hr-container">
        <div className="hr-about-grid">
          {/* Left Column: Visual Collage & Progress */}
          <div className="hr-about-collage-col">
            {/* Left Sub-column: Worker Image + Progress Card */}
            <div className="hr-about-subcol-left">
              <div className="hr-about-worker-img-wrap">
                <motion.img
                  src="/assets/images/about-worker.jpg"
                  alt="JRC craftsman remodeling home"
                  className="hr-about-worker-img"
                  style={{
                    y: yWorker,
                    width: '100%',
                    height: 'calc(100% + 100px)',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: '-50px',
                    left: 0
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

            {/* Right Sub-column: Tall Interior Image */}
            <div className="hr-about-subcol-right">
              <div className="hr-about-interior-img-wrap">
                <motion.img
                  src="/assets/images/about-interior.jpg"
                  alt="Modern kitchen and dining room renovation"
                  className="hr-about-interior-img"
                  style={{
                    y: yInterior,
                    width: '100%',
                    height: 'calc(100% + 140px)',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: '-70px',
                    left: 0
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Mission/Vision */}
          <div className="hr-about-content-col">
            <div className="hr-tag-pill">
              <span>GET TO KNOW US</span>
            </div>

            <h2 className="hr-about-title">
              Transform Your Space With Our Skilled Remodeling Team
            </h2>

            <p className="hr-about-desc">
              JRC Home Remodeling was built on one idea: a remodel should make your home work better for how you actually live, without the stress of a project gone sideways. Every job, big or small, gets the same attention to detail and honest communication.
            </p>

            {/* Mission & Vision Cards */}
            <div className="hr-vision-grid">
              {/* Mission */}
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
                  <p className="hr-vision-desc">
                    To deliver remodeling work that improves the character and function of every space we touch, on time and on budget.
                  </p>
                </div>
              </div>

              {/* Vision */}
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
                  <p className="hr-vision-desc">
                    To be the home remodeling contractors Denver homeowners recommend without hesitation — known for craftsmanship, honesty, and follow-through.
                  </p>
                </div>
              </div>
            </div>

            {/* Dual CTAs with arrows */}
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
  );
}
