import { COMPANY } from '../../content/siteData';

/**
 * HomeRemodelingHero
 * Desktop hero section for /home-remodeling/
 * - Exact line wrapping: "Denver's Trusted \n Home \n Remodeling \n Contractors"
 * - Crisp background image with no washing-out gradient
 * - Emergency Call action box with phone number
 */
export default function HomeRemodelingHero() {
  return (
    <section className="hr-hero-section">
      <div className="hr-container">
        <div className="hr-hero-content">
          {/* Eyebrow Tag */}
          <div className="hr-tag-pill">
            <span>BUILDING DREAMS, ONE ROOM AT A TIME</span>
          </div>

          {/* Main Title - 4 lines on desktop */}
          <h1 className="hr-hero-title">
            Denver's Trusted<br />
            Home<br />
            Remodeling<br />
            Contractors
          </h1>

          {/* Description */}
          <p className="hr-hero-desc">
            At JRC Home Remodeling, we’re committed to transforming homes with precision, craftsmanship, and a customer-first approach — from the first design sketch to the final walkthrough.
          </p>

          {/* Emergency Call Box */}
          <a href={`tel:${COMPANY.phoneRaw}`} className="hr-hero-call-box">
            <div className="hr-call-icon-wrap">
              <svg className="hr-call-icon" viewBox="0 0 512 512" aria-hidden="true">
                <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
              </svg>
            </div>
            <div className="hr-call-text">
              <span className="hr-call-label">Emergency Call</span>
              <strong className="hr-call-number">303 418 2167</strong>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
