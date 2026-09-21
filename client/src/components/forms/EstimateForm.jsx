import { useState } from 'react';
import { submitEstimateForm } from '../../services/api';
import '../../styles/forms.css';

/**
 * EstimateForm Component
 * Recreates the exact Estimate / Consultation Request form from JRC service pages.
 * Preserves exact inputs, date picker, budget text, "How Soon" radio options, and recaptcha.
 */
export default function EstimateForm({
  serviceName = 'Home Remodeling',
  title = '',
  subtitle = '',
  buttonText = 'Send Message',
  showSms = false,
}) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    scheduleDate: '',
    budget: '',
    howSoon: 'ASAP within a month',
    address: '',
    message: '',
    service: serviceName,
    smsTransactional: false,
    smsMarketing: false,
    _hp_verify: '',
  });

  const [recaptchaChecked, setRecaptchaChecked] = useState(false);

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
    if (!formData.scheduleDate) {
      errors.scheduleDate = 'Please choose a date to schedule';
    }
    if (!formData.budget.trim()) {
      errors.budget = 'Please enter your estimated budget';
    }
    if (!formData.address.trim()) {
      errors.address = 'Please provide the project address';
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
        message: 'Please complete all required fields.',
        errors: clientErrors,
      });
      return;
    }

    setStatus({ loading: true, success: false, message: '', errors: {} });

    try {
      const response = await submitEstimateForm(formData);
      setStatus({
        loading: false,
        success: true,
        message: response.data.message || 'Thank you! Your estimate request has been received.',
        errors: {},
      });
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        scheduleDate: '',
        budget: '',
        howSoon: 'ASAP within a month',
        address: '',
        message: '',
        service: serviceName,
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

        {/* Row 1: Name (col-100) */}
        <div className="jrc-field-group">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className={`jrc-input ${status.errors.name ? 'is-error' : ''}`}
          />
          {status.errors.name && <span className="jrc-field-error">{status.errors.name}</span>}
        </div>

        {/* Row 2: Phone & Email (col-50 each) */}
        <div className="jrc-field-row">
          <div className="jrc-field-group">
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className={`jrc-input ${status.errors.phone ? 'is-error' : ''}`}
            />
            {status.errors.phone && <span className="jrc-field-error">{status.errors.phone}</span>}
          </div>

          <div className="jrc-field-group">
            <input
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
        </div>

        {/* Row 3: Schedule Date & Budget (col-50 each) */}
        <div className="jrc-field-row">
          <div className="jrc-field-group">
            <input
              type="date"
              name="scheduleDate"
              placeholder="Choose the date to schedule"
              required
              value={formData.scheduleDate}
              onChange={handleChange}
              className={`jrc-input ${status.errors.scheduleDate ? 'is-error' : ''}`}
            />
            {status.errors.scheduleDate && <span className="jrc-field-error">{status.errors.scheduleDate}</span>}
          </div>

          <div className="jrc-field-group">
            <input
              type="text"
              name="budget"
              placeholder="What is your budget"
              required
              value={formData.budget}
              onChange={handleChange}
              className={`jrc-input ${status.errors.budget ? 'is-error' : ''}`}
            />
            {status.errors.budget && <span className="jrc-field-error">{status.errors.budget}</span>}
          </div>
        </div>

        {/* Row 4: How Soon (Radio Options, col-100) */}
        <div className="jrc-field-group">
          <label className="jrc-label">How Soon</label>
          <div className="jrc-radio-group">
            {[
              'ASAP within a month',
              'ASAP two weeks within a month',
              'Longer than a month',
            ].map((opt) => (
              <label key={opt} className="jrc-radio-option">
                <input
                  type="radio"
                  name="howSoon"
                  value={opt}
                  checked={formData.howSoon === opt}
                  onChange={handleChange}
                />
                <span className="jrc-radio-label">{opt}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Row 5: Address & Message (col-50 each) */}
        <div className="jrc-field-row">
          <div className="jrc-field-group">
            <textarea
              name="address"
              placeholder="Address"
              required
              rows="3"
              value={formData.address}
              onChange={handleChange}
              className={`jrc-textarea ${status.errors.address ? 'is-error' : ''}`}
            ></textarea>
            {status.errors.address && <span className="jrc-field-error">{status.errors.address}</span>}
          </div>

          <div className="jrc-field-group">
            <textarea
              name="message"
              placeholder="Message"
              rows="3"
              value={formData.message}
              onChange={handleChange}
              className={`jrc-textarea ${status.errors.message ? 'is-error' : ''}`}
            ></textarea>
            {status.errors.message && <span className="jrc-field-error">{status.errors.message}</span>}
          </div>
        </div>

        {/* reCAPTCHA v2 Mockup Box */}
        <div className="jrc-recaptcha-box">
          <label className="jrc-recaptcha-label">
            <input
              type="checkbox"
              checked={recaptchaChecked}
              onChange={(e) => setRecaptchaChecked(e.target.checked)}
              className="jrc-recaptcha-check"
            />
            <span className="jrc-recaptcha-text">I'm not a robot</span>
          </label>
          <div className="jrc-recaptcha-badge">
            <svg width="28" height="28" viewBox="0 0 48 48">
              <path fill="#4285F4" d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4z" opacity="0.2"/>
              <path fill="#4285F4" d="M24 8c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16S32.84 8 24 8zm0 28c-6.63 0-12-5.37-12-12s5.37-12 12-12 12 5.37 12 12-5.37 12-12 12z"/>
            </svg>
            <div className="jrc-recaptcha-logo-text">reCAPTCHA</div>
            <div className="jrc-recaptcha-privacy-text">Privacy - Terms</div>
          </div>
        </div>

        {/* SMS Consent Checkboxes */}
        {showSms && (
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
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status.loading}
          className="jrc-submit-btn"
        >
          {status.loading ? (
            <>
              <span className="jrc-spinner"></span>
              <span>Submitting...</span>
            </>
          ) : (
            <span>{buttonText}</span>
          )}
        </button>
      </form>
    </div>
  );
}
