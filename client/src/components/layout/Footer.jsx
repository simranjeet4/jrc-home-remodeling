import { useState } from 'react';
import { Link } from 'react-router-dom';
import { COMPANY, FOOTER_QUICK_LINKS } from '../../content/siteData';
import { subscribeNewsletter } from '../../services/api';
import '../../styles/footer.css';

/**
 * Footer
 * Exact reconstruction of JRC Home Remodeling footer matching live screenshot:
 * - Brand Blue Background (#1B619E)
 * - 4-Column Layout:
 *   1. Logo + Denver Office Map (with call badge)
 *   2. Quick Links with arrow icons
 *   3. Contact details (Address & Email)
 *   4. Subscribe for Tips & Guide form
 * - Centered copyright bar
 */
export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribing, setSubscribing] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [subscribeError, setSubscribeError] = useState('');

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
      {/* Main 4-Column Footer */}
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Column 1: Brand & Map */}
            <div className="footer-col footer-col-brand">
              <Link to="/" aria-label="JRC Home Remodeling" className="footer-logo-link">
                <img
                  src="/assets/logo/logo-white.png"
                  alt="JRC Home Remodeling"
                  width="440"
                  height="104"
                  className="footer-logo-img"
                />
              </Link>
              <div className="footer-map-wrapper">
                <iframe
                  title="JRC Remodeling Denver Office Location Map"
                  src="https://maps.google.com/maps?q=JRC%20Remodeling%205138%20w%2046th%20Ave&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="220"
                  style={{ border: 0, borderRadius: '4px', display: 'block' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
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
              <div className="footer-contact-info">
                <p className="footer-contact-address">
                  Address :- {COMPANY.address}
                </p>
                <p className="footer-contact-email">
                  <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
                </p>
              </div>
            </div>

            {/* Column 4: Newsletter */}
            <div className="footer-col footer-col-newsletter">
              <h2 className="footer-col-title">SUBSCRIBE FOR TIPS & GUIDE</h2>
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
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="footer-bottom-bar">
        <div className="footer-container">
          <p className="footer-copyright-text">
            ©Copyright 2026 JRC Home Remodeling. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
