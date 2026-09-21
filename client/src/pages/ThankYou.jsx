import { Helmet } from 'react-helmet-async';
import { COMPANY } from '../content/siteData';

/**
 * ThankYou Page Component
 * Exact recreation of https://jrchomeremodeling.com/thank-you/
 */
export default function ThankYou() {
  return (
    <>
      <Helmet>
        <title>Thank You from JRC Home Remodeling: Contact Us Today</title>
        <meta
          name="description"
          content="We appreciate your interest in JRC Home Remodeling! Our team has received your request and will get back to you as soon as possible."
        />
        <link rel="canonical" href="https://jrchomeremodeling.com/thank-you/" />
      </Helmet>

      <section style={{ backgroundColor: '#FFFFFF', padding: '50px 0' }}>
        <div className="hr-container" style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto' }}>
          <h1
            style={{
              fontFamily: 'Poppins, serif',
              fontSize: '38px',
              fontWeight: 700,
              color: '#160A05',
              marginBottom: '20px',
            }}
          >
            Thank You for Reaching Out!
          </h1>
          <p
            style={{
              fontFamily: 'Work Sans, sans-serif',
              fontSize: '16px',
              lineHeight: 1.7,
              color: '#555555',
              margin: '0 auto',
            }}
          >
            We appreciate your interest in JRC Home Remodeling! Our team has received your request and will get back to you as soon as possible. If you have any urgent questions, feel free to call us at{' '}
            <a href={`tel:${COMPANY.phoneRaw}`} style={{ color: '#F45404', textDecoration: 'none', fontWeight: 600 }}>
              {COMPANY.phone}
            </a>
            . We look forward to working with you!
          </p>
        </div>
      </section>
    </>
  );
}
