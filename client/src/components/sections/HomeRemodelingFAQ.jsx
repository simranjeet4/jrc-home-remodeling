import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * HomeRemodelingFAQ
 * Section: "ASK A QUESTION" / "Frequently Asked Questions"
 * - Exact match with reference design
 * - Left column:
 *   - Tag pill: "ASK A QUESTION"
 *   - Title: "Frequently Asked Questions"
 *   - Denver skyline photograph card with rounded corners (20px)
 *   - Bottom gradient overlay with 3 overlapping customer avatars
 *   - Text: "Trusted By 1000+ Satisfied Customers" (1000+ highlighted in orange)
 * - Right column:
 *   - 7 white accordion pill cards
 *   - Smooth open/close accordion animation via Framer Motion
 *   - Smoothly rotating right chevron arrow (rotates 90deg when open)
 */
export default function HomeRemodelingFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: 'How much does a home remodel cost in Denver?',
      a: 'Costs vary widely depending on scope — a bathroom refresh costs far less than a full kitchen gut or basement finish. We provide a free, itemized estimate after an initial consultation so you know exactly what to expect before work begins.',
    },
    {
      q: 'How long does a typical kitchen or bathroom remodel take?',
      a: 'A bathroom remodel typically takes one to three weeks depending on scope, while kitchen remodels usually run three to six weeks. Whole-home renovations and basement finishes take longer and are scheduled around permitting and inspections.',
    },
    {
      q: 'Do I need a permit for my home remodeling project?',
      a: 'Most structural, electrical, and plumbing work in the Denver metro requires permits. Our team handles the permitting process for you as part of the project, so everything is code-compliant from the start.',
    },
    {
      q: 'Do you offer a warranty on your work?',
      a: 'We provide a comprehensive warranty on workmanship, ensuring your peace of mind and long-lasting quality in every space we build.',
    },
    {
      q: 'Is JRC Home Remodeling licensed and insured?',
      a: 'Yes. Being licensed ensures we meet local regulations and industry standards, and our insurance protects both our team and our customers throughout the project.',
    },
    {
      q: 'What areas do you serve?',
      a: 'We serve homeowners throughout the Denver metro, including Arvada, Aurora, Brighton, Broomfield, Castle Rock, Centennial, Cherry Creek, Commerce City, Denver, Englewood, Parker, Golden, Greenwood Village, Lafayette, Lakewood, Lone Tree, Morrison, Northglenn, Thornton, Westminster, Wheat Ridge, and Superior, CO.',
    },
    {
      q: 'Do you offer free estimates?',
      a: 'Yes. Every project starts with a free, no-obligation design consultation and estimate so you can make an informed decision before committing.',
    },
  ];

  const toggleFAQ = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="hr-faq-section">
      <div className="hr-container">
        <div className="hr-faq-grid">
          {/* Left Column: Pill, Title, Skyline Card with Social Proof Badge */}
          <div className="hr-faq-left-col">
            <div className="hr-tag-pill">
              <span>ASK A QUESTION</span>
            </div>
            <h2 className="hr-faq-title">Frequently Asked Questions</h2>

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
                      alt="Satisfied Customer"
                      className="hr-faq-avatar"
                      width="48"
                      height="48"
                    />
                    <img
                      src="/assets/images/user8.jpg"
                      alt="Satisfied Customer"
                      className="hr-faq-avatar"
                      width="48"
                      height="48"
                    />
                    <img
                      src="/assets/images/user7.jpg"
                      alt="Satisfied Customer"
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

          {/* Right Column: 7 Smoothly Animated FAQ Accordion Items */}
          <div className="hr-faq-right-col">
            <div className="hr-faq-accordion-list">
              {faqs.map((item, idx) => {
                const isOpen = openIndex === idx;

                return (
                  <div
                    key={item.q}
                    className={`hr-faq-item-card ${isOpen ? 'is-active' : ''}`}
                  >
                    <button
                      type="button"
                      className={`hr-faq-header-btn ${isOpen ? 'is-active' : ''}`}
                      onClick={() => toggleFAQ(idx)}
                      aria-expanded={isOpen}
                    >
                      <span className="hr-faq-question-text">{item.q}</span>
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
                            <p>{item.a}</p>
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
  );
}
