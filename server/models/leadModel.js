import { query } from '../config/db.js';

/**
 * Insert a new lead into the PostgreSQL database.
 * @param {Object} data - Validated contact form data.
 * @returns {Promise} The inserted row.
 */
export async function createLead(data) {
  const sql = `
    INSERT INTO leads (
      first_name, last_name, email, phone, zip_code,
      service, message, sms_consent_transactional, sms_consent_promotional
    )
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    RETURNING *
  `;

  const values = [
    data.firstName,
    data.lastName,
    data.email,
    data.phone,
    data.zipCode,
    data.service,
    data.message || null,
    data.smsConsentTransactional || false,
    data.smsConsentPromotional || false,
  ];

  const result = await query(sql, values);
  return result.rows[0];
}
