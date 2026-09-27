import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { NAV_LINKS, COMPANY } from '../../content/siteData';

/**
 * MobileNavigation
 * Provides mobile hamburger trigger and slide-out / accordion drawer navigation.
 * Fully accessible with ARIA attributes, keyboard support, and backdrop.
 */
export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const location = useLocation();

  // Close drawer on route change
  useEffect(() => {
    setIsOpen(false);
    setServicesExpanded(false);
  }, [location.pathname]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <div className="mobile-nav-container">
      {/* Hamburger Button */}
      <button
        type="button"
        className={`mobile-menu-toggle ${isOpen ? 'toggle-open' : ''}`}
        aria-label="Menu Toggle"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="hamburger-box">
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </span>
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="mobile-menu-backdrop"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Slide-out Menu Drawer */}
      <div
        className={`mobile-menu-drawer ${isOpen ? 'drawer-open' : ''}`}
        aria-label="Mobile Navigation"
      >
        <div className="mobile-menu-header">
          <span className="mobile-menu-title">Menu</span>
          <button
            type="button"
            className="mobile-close-btn"
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
        </div>

        <nav className="mobile-menu-nav">
          <ul className="mobile-nav-list">
            {NAV_LINKS.map((link) => {
              if (link.children) {
                return (
                  <li
                    key={link.path}
                    className={`mobile-nav-item mobile-has-dropdown ${
                      servicesExpanded ? 'expanded' : ''
                    }`}
                  >
                    <div className="mobile-dropdown-header">
                      <NavLink
                        to={link.path}
                        className={({ isActive }) =>
                          `mobile-nav-link ${isActive ? 'mobile-link-active' : ''}`
                        }
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </NavLink>
                      <button
                        type="button"
                        className="mobile-accordion-toggle"
                        aria-label="Toggle Services submenu"
                        aria-expanded={servicesExpanded}
                        onClick={() => setServicesExpanded((prev) => !prev)}
                      >
                        <svg
                          className={`mobile-caret ${servicesExpanded ? 'caret-rotated' : ''}`}
                          viewBox="0 0 320 512"
                          width="12"
                          height="12"
                          fill="currentColor"
                        >
                          <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
                        </svg>
                      </button>
                    </div>

                    {/* Submenu Accordion */}
                    <ul
                      className={`mobile-submenu ${
                        servicesExpanded ? 'mobile-submenu-open' : ''
                      }`}
                    >
                      {link.children.map((subItem) => (
                        <li key={subItem.path} className="mobile-sub-item">
                          <NavLink
                            to={subItem.path}
                            className={({ isActive }) =>
                              `mobile-sub-link ${isActive ? 'mobile-sub-link-active' : ''}`
                            }
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }

              return (
                <li key={link.path} className="mobile-nav-item">
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `mobile-nav-link ${isActive ? 'mobile-link-active' : ''}`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Call CTA */}
        <div className="mobile-menu-cta">
          <a href={`tel:${COMPANY.phoneRaw}`} className="mobile-cta-btn">
            <svg
              className="phone-icon"
              viewBox="0 0 512 512"
              width="14"
              height="14"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
            </svg>
            <span>Call Us: {COMPANY.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
