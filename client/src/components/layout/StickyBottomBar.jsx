import { COMPANY } from '../../content/siteData';

/**
 * StickyBottomBar / Floating Call Badge
 * Recreates the fixed floating call button (.call-btn) from the live site:
 * - Positioned fixed at bottom-left
 * - Brand blue #01619E background with 15px border radius
 * - White circular phone icon with orange fill
 * - "Get Your Free Quote Today!" + "303-418-2167"
 */
export default function StickyBottomBar() {
  return (
    <aside className="jrc-floating-call-btn" aria-label="Get Your Free Quote">
      <a href={`tel:${COMPANY.phoneRaw}`} className="call-btn-link">
        <div className="call-btn-icon-wrap">
          <svg viewBox="0 0 512 512" className="call-btn-icon" aria-hidden="true">
            <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
          </svg>
        </div>
        <div className="call-btn-content">
          <span className="call-btn-heading">Get Your Free Quote Today!</span>
          <strong className="call-btn-phone">{COMPANY.phone}</strong>
        </div>
      </a>
    </aside>
  );
}
