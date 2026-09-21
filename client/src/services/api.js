import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

/**
 * Submit general contact form (/contact-us/).
 * @param {Object} data - Contact form payload
 */
export const submitContactForm = (data) => {
  return api.post('/contact', data);
};

/**
 * Submit service estimate form.
 * @param {Object} data - Estimate form payload
 */
export const submitEstimateForm = (data) => {
  return api.post('/estimate', data);
};

/**
 * Submit quote request form (alias for estimate).
 * @param {Object} data - Quote request payload
 */
export const submitQuoteForm = (data) => {
  return api.post('/quote', data);
};

/**
 * Submit newsletter email subscription.
 * @param {string} email - Subscriber email
 */
export const subscribeNewsletter = (email) => {
  return api.post('/contact/subscribe', { email });
};

export default api;
