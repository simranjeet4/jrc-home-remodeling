import { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../../content/siteData';

/**
 * DesktopNavigation
 * Renders horizontal navigation bar with dropdown submenu for "Services".
 * Features hover/focus support, active link styling, and caret icon.
 */
export default function DesktopNavigation() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Close dropdown on route change
  useEffect(() => {
    setDropdownOpen(false);
  }, [location.pathname]);

  // Close on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  return (
    <nav className="desktop-nav" aria-label="Main Navigation">
      <ul className="nav-list">
        {NAV_LINKS.map((link) => {
          if (link.children) {
            const isChildActive = link.children.some(
              (child) => location.pathname === child.path
            );

            return (
              <li
                key={link.path}
                ref={dropdownRef}
                className={`nav-item has-dropdown ${dropdownOpen ? 'dropdown-active' : ''}`}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <div className="nav-dropdown-trigger">
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `nav-link ${isActive || isChildActive ? 'nav-link-active' : ''}`
                    }
                  >
                    {link.label}
                  </NavLink>
                  <button
                    type="button"
                    className="dropdown-caret-btn"
                    aria-label="Toggle Services submenu"
                    aria-expanded={dropdownOpen}
                    onClick={() => setDropdownOpen((prev) => !prev)}
                  >
                    <svg
                      className={`caret-icon ${dropdownOpen ? 'caret-rotated' : ''}`}
                      viewBox="0 0 320 512"
                      width="10"
                      height="10"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
                    </svg>
                  </button>
                </div>

                {/* Submenu Dropdown */}
                <ul
                  className={`dropdown-menu ${dropdownOpen ? 'dropdown-menu-open' : ''}`}
                  role="menu"
                >
                  {link.children.map((subItem) => (
                    <li key={subItem.path} role="none">
                      <NavLink
                        to={subItem.path}
                        role="menuitem"
                        className={({ isActive }) =>
                          `dropdown-link ${isActive ? 'dropdown-link-active' : ''}`
                        }
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
            <li key={link.path} className="nav-item">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'nav-link-active' : ''}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
