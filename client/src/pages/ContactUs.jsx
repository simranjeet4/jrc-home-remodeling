import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import HomeRemodelingBadges from '../components/sections/HomeRemodelingBadges';
import { COMPANY } from '../content/siteData';
import '../styles/contact.css';

/**
 * ContactUs Page Component
 * Exact 1:1 match of https://jrchomeremodeling.com/contact-us/
 * Elementor Page ID: 6434
 */
export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: '',
    consent: true,
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      setFormStatus({
        submitting: false,
        submitted: false,
        error: 'Please fill in your name and email address.',
      });
      return;
    }

    setFormStatus({ submitting: true, submitted: false, error: null });

    // Simulate submission
    setTimeout(() => {
      setFormStatus({
        submitting: false,
        submitted: true,
        error: null,
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        message: '',
        consent: true,
      });
    }, 800);
  };

  return (
    <>
      <Helmet>
        <title>Contact JRC Home Remodeling | Free Estimate Today</title>
        <meta
          name="description"
          content="Free Denver remodeling estimates from JRC Home Remodeling. Contact us today to discuss your kitchen, bathroom, or whole-home project."
        />
        <meta property="og:title" content="Contact JRC Home Remodeling | Free Estimate Today" />
        <meta
          property="og:description"
          content="Free Denver remodeling estimates from JRC Home Remodeling. Contact us today to discuss your kitchen, bathroom, or whole-home project."
        />
        <meta property="og:url" content="https://jrchomeremodeling.com/contact-us/" />
        <link rel="canonical" href="https://jrchomeremodeling.com/contact-us/" />
      </Helmet>

      <article className="contact-page">
        {/* Section 1: Full-Width Google Map (Elementor 5e7800a1 / 6056b4ac) */}
        <section className="contact-map-section" aria-label="Location Map">
          <iframe
            className="contact-map-iframe"
            title="JRC Remodeling 5138 w 46th Ave"
            aria-label="JRC Remodeling 5138 w 46th Ave"
            src="https://maps.google.com/maps?q=JRC%20Remodeling%205138%20w%2046th%20Ave&t=m&z=10&output=embed&iwloc=near"
            allowFullScreen=""
            loading="lazy"
          />
        </section>

        {/* Section 2: 3 Contact Info Cards (Elementor b56a1de / 77808bc) */}
        <section className="contact-cards-section" aria-label="Contact Information">
          <div className="contact-container">
            <div className="contact-cards-grid">
              {/* Phone Card (Elementor 23052fa / cad5cbe) */}
              <div className="contact-card-item">
                <a
                  href={'tel:' + COMPANY.phoneRaw}
                  className="contact-card-icon-wrap"
                  aria-label="Call JRC Home Remodeling"
                >
                  <svg viewBox="0 0 512 512" aria-hidden="true">
                    <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
                  </svg>
                </a>
                <div className="contact-card-content">
                  <h3 className="contact-card-title">
                    <a href={'tel:' + COMPANY.phoneRaw}>Phone Number</a>
                  </h3>
                  <p className="contact-card-text">
                    <a href={'tel:' + COMPANY.phoneRaw}>{COMPANY.phone}</a>
                  </p>
                </div>
              </div>

              {/* Email Card (Elementor 8a7f581 / e96f213) */}
              <div className="contact-card-item">
                <a
                  href={'mailto:' + COMPANY.emailContact}
                  className="contact-card-icon-wrap"
                  aria-label="Email JRC Home Remodeling"
                >
                  <svg viewBox="0 0 512 512" aria-hidden="true">
                    <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
                  </svg>
                </a>
                <div className="contact-card-content">
                  <h3 className="contact-card-title">
                    <a href={'mailto:' + COMPANY.emailContact}>Our Email</a>
                  </h3>
                  <p className="contact-card-text">
                    <a href={'mailto:' + COMPANY.emailContact}>{COMPANY.emailContact}</a>
                  </p>
                </div>
              </div>

              {/* Location Card (Elementor b033f0e / fd11d77) */}
              <div className="contact-card-item">
                <a
                  href={COMPANY.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card-icon-wrap"
                  aria-label="View Location on Google Maps"
                >
                  <svg viewBox="0 0 384 512" aria-hidden="true">
                    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
                  </svg>
                </a>
                <div className="contact-card-content">
                  <h3 className="contact-card-title">
                    <a
                      href={COMPANY.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Our Location
                    </a>
                  </h3>
                  <p className="contact-card-text">
                    <a
                      href={COMPANY.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {COMPANY.address}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Contact Form & Side Image (Elementor 3e7b88a) */}
        <section className="contact-form-section" aria-label="Get Free Estimate">
          <div className="contact-container">
            {/* Header (Elementor 1b4e2d2 / 3960173 / 9156179) */}
            <div className="contact-form-header">
              <span className="contact-form-tag-pill">GET IN TOUCH</span>
              <h2 className="contact-form-title">Get Your Free Estimate Today!</h2>
            </div>

            {/* 2-Column Row (Elementor 03e8184: bbbab14 left + e42f571 right) */}
            <div className="contact-form-row">
              {/* Left Column: Background Image (Elementor ae5422c) */}
              <div
                className="contact-form-image-col"
                role="img"
                aria-label="JRC Home Remodeling Interior Craftsmanship"
              />

              {/* Right Column: Contact Form (Elementor b43e7e0) */}
              <div className="contact-form-card-col">
                <form className="contact-custom-form" onSubmit={handleSubmit} noValidate>
                  <div className="contact-form-fields-grid">
                    {/* Name */}
                    <div className="contact-form-group">
                      <label htmlFor="contact-name" className="contact-form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        className="contact-form-input"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Email */}
                    <div className="contact-form-group">
                      <label htmlFor="contact-email" className="contact-form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        className="contact-form-input"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Phone */}
                    <div className="contact-form-group">
                      <label htmlFor="contact-phone" className="contact-form-label">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="contact-phone"
                        name="phone"
                        className="contact-form-input"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Address */}
                    <div className="contact-form-group">
                      <label htmlFor="contact-address" className="contact-form-label">
                        Address
                      </label>
                      <input
                        type="text"
                        id="contact-address"
                        name="address"
                        className="contact-form-input"
                        placeholder="Address"
                        value={formData.address}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Message */}
                    <div className="contact-form-group col-full">
                      <label htmlFor="contact-message" className="contact-form-label">
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        className="contact-form-textarea"
                        rows="4"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Consent Checkbox */}
                    <div className="contact-form-group col-full">
                      <div className="contact-consent-group">
                        <input
                          type="checkbox"
                          id="contact-consent"
                          name="consent"
                          className="contact-consent-checkbox"
                          checked={formData.consent}
                          onChange={handleChange}
                          required
                        />
                        <label htmlFor="contact-consent" className="contact-consent-text">
                          By checking this box, I consent to receive transactional and service-related
                          SMS messages from JRC Home Remodeling including Appointment reminders and
                          confirmation, order confirmations, account notifications, and information
                          related to services I have requested. Message frequency varies. Msg &amp;
                          data rates may apply. Reply HELP for help, STOP to opt-out.{' '}
                          <Link to="/privacy-policy">Privacy policy</Link> |{' '}
                          <Link to="/terms-conditions">Terms &amp; Conditions</Link>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Submission feedback */}
                  {formStatus.submitted && (
                    <div className="contact-feedback-message success" role="alert">
                      Thank you! Your request has been sent successfully. Our team will contact you shortly.
                    </div>
                  )}

                  {formStatus.error && (
                    <div className="contact-feedback-message error" role="alert">
                      {formStatus.error}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="contact-submit-btn"
                    disabled={formStatus.submitting}
                  >
                    {formStatus.submitting ? 'Sending...' : 'Submit'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Monogram Trust Badges Marquee Section */}
        <HomeRemodelingBadges />
      </article>
    </>
  );
}
