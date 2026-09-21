import { Helmet } from 'react-helmet-async';
import ContactForm from '../components/forms/ContactForm';
import { COMPANY } from '../content/siteData';

/**
 * ContactUs Page Component
 * Exact reconstruction of https://jrchomeremodeling.com/contact-us/
 */
export default function ContactUs() {
  return (
    <>
      <Helmet>
        <title>Contact JRC Home Remodeling | Free Estimate Today</title>
        <meta
          name="description"
          content="Free Denver remodeling estimates from JRC Home Remodeling. Contact us today to discuss your kitchen, bathroom, or whole-home project."
        />
        <link rel="canonical" href="https://jrchomeremodeling.com/contact-us/" />
      </Helmet>

      <article className="contact-page">
        {/* Section 0: Google Map */}
        <section style={{ width: '100%', height: '460px', border: 0, overflow: 'hidden' }}>
          <iframe
            title="JRC Home Remodeling Location"
            src="https://maps.google.com/maps?q=925%20S%20Niagara%20St,%20Denver,%20CO%2080224&t=m&z=15&output=embed&iwloc=near"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </section>

        {/* Section 1: 3 Contact Info Cards */}
        <section style={{ backgroundColor: '#FAF5EE', padding: '50px 0' }}>
          <div className="hr-container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
              {/* Phone */}
              <div style={{ backgroundColor: '#FFFFFF', padding: '30px 20px', borderRadius: '14px', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
                <div style={{ width: '54px', height: '54px', borderRadius: '50%', backgroundColor: '#FAF3E9', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#F45404">
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z"/>
                  </svg>
                </div>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '18px', fontWeight: 700, color: '#160A05', marginBottom: '6px' }}>
                  Phone Number
                </h3>
                <a href={`tel:${COMPANY.phoneRaw}`} style={{ color: '#01619E', fontWeight: 700, fontSize: '15px', textDecoration: 'none' }}>
                  {COMPANY.phone}
                </a>
              </div>

              {/* Email */}
              <div style={{ backgroundColor: '#FFFFFF', padding: '30px 20px', borderRadius: '14px', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
                <div style={{ width: '54px', height: '54px', borderRadius: '50%', backgroundColor: '#FAF3E9', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#F45404">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '18px', fontWeight: 700, color: '#160A05', marginBottom: '6px' }}>
                  Our Email
                </h3>
                <a href={`mailto:${COMPANY.email}`} style={{ color: '#01619E', fontWeight: 700, fontSize: '15px', textDecoration: 'none' }}>
                  {COMPANY.email}
                </a>
              </div>

              {/* Location */}
              <div style={{ backgroundColor: '#FFFFFF', padding: '30px 20px', borderRadius: '14px', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
                <div style={{ width: '54px', height: '54px', borderRadius: '50%', backgroundColor: '#FAF3E9', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#F45404">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '18px', fontWeight: 700, color: '#160A05', marginBottom: '6px' }}>
                  Our Loaction
                </h3>
                <p style={{ fontSize: '13px', color: '#555555', margin: 0, lineHeight: 1.5 }}>
                  {COMPANY.address}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Contact Form Section with Background Image */}
        <section
          style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('/assets/images/2150721575.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: '65px 0 75px',
          }}
        >
          <div className="hr-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '35px' }}>
              <div style={{ display: 'inline-block', backgroundColor: 'rgba(244, 84, 4, 0.2)', color: '#F45404', padding: '6px 18px', borderRadius: '50px', fontSize: '13px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '14px' }}>
                GET IN TOUCH
              </div>
              <h2 style={{ fontFamily: 'Poppins, serif', fontSize: '40px', fontWeight: 700, color: '#FFFFFF', margin: 0 }}>
                Get Your Free Estimate Today!
              </h2>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', padding: '40px', borderRadius: '20px', boxShadow: '0 15px 40px rgba(0,0,0,0.15)' }}>
              <ContactForm
                title=""
                subtitle=""
              />
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
