import { COMPANY } from '../../content/siteData';

/**
 * FloatingCallBadge
 * Fixed bottom-left floating call badge matching live site .call-btn:
 * - Brand Blue #01619E
 * - White circular phone icon
 * - "Get Your Free Quote Today!"
 * - "303-418-2167"
 */
export default function FloatingCallBadge() {
  return (
    <aside className="jrc-floating-call-badge" aria-label="Quick Quote Callout">
      <a href={`tel:${COMPANY.phoneRaw}`} className="floating-call-inner">
        <div className="floating-call-icon-wrap">
          <svg viewBox="0 0 512 512" className="floating-call-icon" aria-hidden="true">
            <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
          </svg>
        </div>
        <div className="floating-call-details">
          <span className="floating-call-title">Get Your Free Quote Today!</span>
          <strong className="floating-call-phone">{COMPANY.phone}</strong>
        </div>
      </a>
    </aside>
  );
}
