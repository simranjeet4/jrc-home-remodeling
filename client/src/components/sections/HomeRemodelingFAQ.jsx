import { useState } from 'react';

/**
 * HomeRemodelingFAQ
 * Section 6: "ASK A QUESTION"
 * - Left column: Tag, title, Denver skyline photograph, and overlay social proof avatar badge
 * - Right column: 7 interactive accordion items with right chevron arrows
 */
export default function HomeRemodelingFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

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
          {/* Left Column: Title & Denver Skyline Visual */}
          <div className="hr-faq-left-col">
            <div className="hr-tag-pill">
              <span>ASK A QUESTION</span>
            </div>
            <h2 className="hr-faq-title">Frequently Asked Questions</h2>

            {/* Skyline Image Container with Overlay Trust Badge */}
            <div className="hr-skyline-container">
              <img
                src="/assets/images/faq-skyline.jpg"
                alt="Denver Colorado Skyline"
                className="hr-skyline-img"
              />

              {/* Floating Social Proof Badge */}
              <div className="hr-trusted-badge-overlay">
                <div className="hr-avatar-group">
                  <img
                    src="/assets/images/user9.jpg"
                    alt="Satisfied client avatar"
                    className="hr-avatar-img"
                    width="40"
                    height="40"
                  />
                  <img
                    src="/assets/images/user8.jpg"
                    alt="Satisfied client avatar"
                    className="hr-avatar-img"
                    width="40"
                    height="40"
                  />
                  <img
                    src="/assets/images/user7.jpg"
                    alt="Satisfied client avatar"
                    className="hr-avatar-img"
                    width="40"
                    height="40"
                  />
                </div>
                <div className="hr-trusted-text">
                  <strong>Trusted By 1000+</strong>
                  <span>Satisfied Customers</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Rounded Pill Accordion Items */}
          <div className="hr-faq-right-col">
            <div className="hr-accordion">
              {faqs.map((item, idx) => {
                const isOpen = openIndex === idx;

                return (
                  <div
                    key={item.q}
                    className={`hr-faq-pill-item ${isOpen ? 'is-open' : ''}`}
                  >
                    <button
                      type="button"
                      className="hr-faq-pill-header"
                      onClick={() => toggleFAQ(idx)}
                      aria-expanded={isOpen}
                    >
                      <span className="hr-faq-pill-question">{item.q}</span>
                      <span className="hr-faq-pill-arrow">
                        {isOpen ? '⌄' : '›'}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="hr-faq-pill-body">
                        <p>{item.a}</p>
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
  );
}
