import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';
import { COMPANY } from '../../content/siteData';
import '../../styles/header.css';

/**
 * Header
 * Exact recreation of JRC Home Remodeling website header:
 * - TopBar with "Call Us: 303-418-2167"
 * - Main sticky navbar with brand logo
 * - Responsive desktop & mobile navigation components
 * - Scroll detection for dynamic shadow and sticky styling
 */
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="jrc-header-wrapper">
      {/* Top Bar */}
      <div className="jrc-topbar">
        <div className="container">
          <a href={`tel:${COMPANY.phoneRaw}`} className="topbar-call-btn">
            <span>Call Us: {COMPANY.phone}</span>
          </a>
        </div>
      </div>

      {/* Main Sticky Header */}
      <div className={`jrc-header ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="header-container">
          {/* Brand Logo */}
          <Link to="/" className="navbar-brand" aria-label="JRC Home Remodeling Home">
            {!imageError ? (
              <img
                src="/assets/logo/logo.webp"
                alt="JRC Home Remodeling logo featuring the tagline 'We Transform your Dreams into Reality,' emphasizing home transformation and remodeling services."
                width="300"
                height="71"
                className="brand-logo-img"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="brand-logo-fallback">
                <strong>{COMPANY.name}</strong>
                <span>{COMPANY.tagline}</span>
              </div>
            )}
          </Link>

          {/* Desktop Navigation (>= 1025px) */}
          <DesktopNavigation />

          {/* Mobile Navigation (<= 1024px) */}
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}
