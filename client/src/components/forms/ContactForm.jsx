import { useState } from 'react';
import { submitContactForm } from '../../services/api';
import '../../styles/forms.css';

/**
 * ContactForm Component
 * Recreates the exact contact form from https://jrchomeremodeling.com/contact-us/
 * Preserves exact labels, placeholders, field order, checkboxes, and submit button.
 */
export default function ContactForm({ title = 'Send Us A Message', subtitle = 'Fill out the form below and our team will get back to you shortly.' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: '',
    smsTransactional: false,
    smsMarketing: false,
    _hp_verify: '',
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    message: '',
    errors: {},
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    // Clear field-specific error on edit
    if (status.errors[name]) {
      setStatus((prev) => ({
        ...prev,
        errors: { ...prev.errors, [name]: null },
      }));
    }
  };

  const validate = () => {
    const errors = {};
    if (!formData.email.trim()) {
      errors.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address';
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const clientErrors = validate();
    if (Object.keys(clientErrors).length > 0) {
      setStatus({
        loading: false,
        success: false,
        message: 'Please resolve the highlighted errors.',
        errors: clientErrors,
      });
      return;
    }

    setStatus({ loading: true, success: false, message: '', errors: {} });

    try {
      const response = await submitContactForm(formData);
      setStatus({
        loading: false,
        success: true,
        message: response.data.message || 'Thank you! We will be in touch shortly.',
        errors: {},
      });
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        message: '',
        smsTransactional: false,
        smsMarketing: false,
        _hp_verify: '',
      });
    } catch (err) {
      const serverDetails = err.response?.data?.details;
      const fieldErrors = {};
      if (Array.isArray(serverDetails)) {
        serverDetails.forEach((d) => {
          if (d.field) fieldErrors[d.field] = d.message;
        });
      }

      setStatus({
        loading: false,
        success: false,
        message: err.response?.data?.error || 'Something went wrong. Please try again or call us directly at 303-418-2167.',
        errors: fieldErrors,
      });
    }
  };

  return (
    <div className="jrc-form-wrapper">
      {title && <h3 className="jrc-form-title">{title}</h3>}
      {subtitle && <p className="jrc-form-subtitle">{subtitle}</p>}

      {status.success && (
        <div className="jrc-alert-success" role="alert">
          <span>✓</span>
          <span>{status.message}</span>
        </div>
      )}

      {status.message && !status.success && (
        <div className="jrc-alert-error" role="alert">
          <span>⚠</span>
          <span>{status.message}</span>
        </div>
      )}

      <form className="jrc-form" onSubmit={handleSubmit} noValidate>
        {/* Invisible Honeypot Spam Trap */}
        <input
          type="text"
          name="_hp_verify"
          value={formData._hp_verify}
          onChange={handleChange}
          tabIndex="-1"
          autoComplete="off"
          className="jrc-hp-field"
          aria-hidden="true"
        />

        {/* Name Field */}
        <div className="jrc-field-group">
          <label htmlFor="contact-name" className="jrc-label">
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className={`jrc-input ${status.errors.name ? 'is-error' : ''}`}
          />
          {status.errors.name && <span className="jrc-field-error">{status.errors.name}</span>}
        </div>

        {/* Email & Phone Fields */}
        <div className="jrc-field-row">
          <div className="jrc-field-group">
            <label htmlFor="contact-email" className="jrc-label">
              Email <span className="jrc-label-required">*</span>
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
              className={`jrc-input ${status.errors.email ? 'is-error' : ''}`}
            />
            {status.errors.email && <span className="jrc-field-error">{status.errors.email}</span>}
          </div>

          <div className="jrc-field-group">
            <label htmlFor="contact-phone" className="jrc-label">
              Phone
            </label>
            <input
              id="contact-phone"
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className={`jrc-input ${status.errors.phone ? 'is-error' : ''}`}
            />
            {status.errors.phone && <span className="jrc-field-error">{status.errors.phone}</span>}
          </div>
        </div>

        {/* Address Field */}
        <div className="jrc-field-group">
          <label htmlFor="contact-address" className="jrc-label">
            Address
          </label>
          <input
            id="contact-address"
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className={`jrc-input ${status.errors.address ? 'is-error' : ''}`}
          />
          {status.errors.address && <span className="jrc-field-error">{status.errors.address}</span>}
        </div>

        {/* Message Field */}
        <div className="jrc-field-group">
          <label htmlFor="contact-message" className="jrc-label">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            placeholder="Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className={`jrc-textarea ${status.errors.message ? 'is-error' : ''}`}
          ></textarea>
          {status.errors.message && <span className="jrc-field-error">{status.errors.message}</span>}
        </div>

        {/* SMS Consent Checkboxes */}
        <div className="jrc-checkbox-group">
          <label className="jrc-checkbox-item">
            <input
              type="checkbox"
              name="smsTransactional"
              checked={formData.smsTransactional}
              onChange={handleChange}
            />
            <span className="jrc-checkbox-text">
              By checking this box, I consent to receive transactional and service-related SMS messages from JRC Home Remodeling including Appointment reminders and confirmation, order confirmations, account notifications, and information related to services I have requested. Message frequency may vary. Message and data rates may apply. Reply HELP for help or STOP to opt out at any time.
            </span>
          </label>

          <label className="jrc-checkbox-item">
            <input
              type="checkbox"
              name="smsMarketing"
              checked={formData.smsMarketing}
              onChange={handleChange}
            />
            <span className="jrc-checkbox-text">
              By checking this box, I consent to receive marketing and promotional SMS messages from JRC Home Remodeling, including special offers, discounts, announcements, and updates. Message frequency may vary. Message and data rates may apply. Reply HELP for help or STOP to opt out at any time.
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status.loading}
          className="jrc-submit-btn"
        >
          {status.loading ? (
            <>
              <span className="jrc-spinner"></span>
              <span>Sending...</span>
            </>
          ) : (
            <span>Send Message</span>
          )}
        </button>
      </form>
    </div>
  );
}
