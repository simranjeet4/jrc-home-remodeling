import { useState } from 'react';
import { Link } from 'react-router-dom';
import { COMPANY, FOOTER_QUICK_LINKS, SERVICE_AREAS } from '../../content/siteData';
import { subscribeNewsletter } from '../../services/api';
import '../../styles/footer.css';

/**
 * Footer
 * Exact reconstruction of JRC Home Remodeling footer:
 * - 3-item action CTA bar (Schedule, Call Now!, Get a Quote)
 * - 4-column layout:
 *   1. Logo + Tagline + Google Map embed
 *   2. Quick Links with arrow icons
 *   3. Contact details (Address, Email, Phone, Social)
 *   4. Subscribe for Tips & Guide form + Denver Metro areas served
 * - Centered copyright bar
 */
export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribing, setSubscribing] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [subscribeError, setSubscribeError] = useState('');
  const [logoError, setLogoError] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    setSubscribing(true);
    setSubscribeError('');

    try {
      await subscribeNewsletter(email.trim());
      setSubscribed(true);
      setEmail('');
    } catch (err) {
      setSubscribeError(err.response?.data?.details?.[0]?.message || 'Subscription failed. Please check your email.');
    } finally {
      setSubscribing(false);
    }
  };

  return (
    <footer className="jrc-footer">
      {/* Top 3-Card Action CTA Bar */}
      <div className="footer-cta-bar">
        <div className="container">
          <div className="footer-cta-grid">
            {/* Schedule */}
            <Link to="/contact-us" className="footer-cta-item">
              <svg
                className="footer-cta-icon"
                viewBox="0 0 448 512"
                aria-hidden="true"
              >
                <path d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z" />
              </svg>
              <span className="footer-cta-title">Schedule</span>
            </Link>

            {/* Call Now! */}
            <a href={`tel:${COMPANY.phoneRaw}`} className="footer-cta-item">
              <svg
                className="footer-cta-icon"
                viewBox="0 0 512 512"
                aria-hidden="true"
              >
                <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
              </svg>
              <span className="footer-cta-title">Call Now!</span>
            </a>

            {/* Get a Quote */}
            <a href={`tel:${COMPANY.phoneRaw}`} className="footer-cta-item">
              <svg
                className="footer-cta-icon"
                viewBox="0 0 512 512"
                aria-hidden="true"
              >
                <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z" />
              </svg>
              <span className="footer-cta-title">Get a Quote</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main 4-Column Footer */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Column 1: Brand & Map */}
            <div className="footer-col footer-col-brand">
              <Link to="/" aria-label="JRC Home Remodeling">
                {!logoError ? (
                  <img
                    src="/assets/logo/logo-white.png"
                    alt="JRC Home Remodeling logo in white"
                    width="240"
                    height="57"
                    className="footer-logo-img"
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  <h3 className="footer-col-title">{COMPANY.name}</h3>
                )}
              </Link>
              <p className="footer-brand-desc">
                {COMPANY.tagline}. Denver's trusted residential remodeling contractor with over 45 years of combined construction experience.
              </p>
              {/* Google Map Embed */}
              <div className="footer-map-wrapper">
                <iframe
                  className="footer-map-iframe"
                  src="https://maps.google.com/maps?q=JRC%20Remodeling%205138%20w%2046th%20Ave&t=m&z=10&output=embed&iwloc=near"
                  title="JRC Remodeling Denver Office Location"
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="footer-col footer-col-links">
              <h2 className="footer-col-title">Quick Link</h2>
              <ul className="footer-links-list">
                {FOOTER_QUICK_LINKS.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="footer-link-item">
                      <svg
                        className="footer-arrow-icon"
                        viewBox="0 0 512 512"
                        aria-hidden="true"
                      >
                        <path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z" />
                      </svg>
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div className="footer-col footer-col-contact">
              <h2 className="footer-col-title">Contact</h2>
              <ul className="footer-contact-list">
                <li className="footer-contact-item">
                  <svg className="footer-contact-icon" viewBox="0 0 384 512" aria-hidden="true">
                    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
                  </svg>
                  <span>Address :- {COMPANY.address}</span>
                </li>
                <li className="footer-contact-item">
                  <svg className="footer-contact-icon" viewBox="0 0 512 512" aria-hidden="true">
                    <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
                  </svg>
                  <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
                </li>
                <li className="footer-contact-item">
                  <svg className="footer-contact-icon" viewBox="0 0 512 512" aria-hidden="true">
                    <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
                  </svg>
                  <a href={`tel:${COMPANY.phoneRaw}`}>{COMPANY.phone}</a>
                </li>
              </ul>

              {/* Social links */}
              <div className="footer-social-links">
                <a
                  href="https://www.facebook.com/JRCHomeRemodeling"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn"
                  aria-label="JRC Facebook Page"
                >
                  <svg viewBox="0 0 320 512">
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@JRCHomeRemodeling"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn"
                  aria-label="JRC YouTube Channel"
                >
                  <svg viewBox="0 0 576 512">
                    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.583V175.185l142.739 81.205-142.739 81.276z" />
                  </svg>
                </a>
                <a
                  href={COMPANY.googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn"
                  aria-label="JRC Google Reviews"
                >
                  <svg viewBox="0 0 488 512">
                    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 4: Newsletter & Service Areas */}
            <div className="footer-col footer-col-newsletter">
              <h2 className="footer-col-title">SUBSCRIBE FOR TIPS & GUIDE</h2>
              <p className="footer-newsletter-text">
                Stay updated with modern home renovation ideas, remodeling tips, and seasonal maintenance guides.
              </p>
              <form onSubmit={handleSubscribe} className="footer-subscribe-form">
                <input
                  type="email"
                  className="footer-input"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" disabled={subscribing} className="footer-submit-btn">
                  {subscribing ? 'Sending...' : 'Send'}
                </button>
              </form>
              {subscribed && (
                <p className="footer-subscribed-msg" role="status">Thank you for subscribing!</p>
              )}
              {subscribeError && (
                <p style={{ color: '#FFB4B4', fontSize: '12px', marginTop: '6px' }} role="alert">
                  {subscribeError}
                </p>
              )}

              {/* Service Areas Tags */}
              <div className="footer-areas-section">
                <div className="footer-areas-title">Areas We Serve:</div>
                <div className="footer-areas-cloud">
                  {SERVICE_AREAS.slice(0, 10).map((area) => (
                    <span key={area} className="footer-area-tag">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="footer-bottom-bar">
        <div className="container">
          <p className="footer-copyright-text">
            <Link to="/">{COMPANY.copyright}</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
