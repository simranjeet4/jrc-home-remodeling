/**
 * Format a raw phone number string for display.
 * @param {string} phone - e.g. "3034182167"
 * @returns {string} - e.g. "303-418-2167"
 */
export function formatPhone(phone) {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
  return phone;
}

/**
 * Build a tel: URI from a phone string.
 * @param {string} phone - e.g. "303-418-2167"
 * @returns {string} - e.g. "tel:3034182167"
 */
export function telLink(phone) {
  return `tel:${phone.replace(/\D/g, '')}`;
}

/**
 * Build a mailto: URI.
 * @param {string} email
 * @returns {string}
 */
export function mailtoLink(email) {
  return `mailto:${email}`;
}
