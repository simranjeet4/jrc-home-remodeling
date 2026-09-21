import { sendContactEmail, sendSubscribeEmail } from '../services/emailService.js';
import pool from '../db.js';

/**
 * Handle POST /api/contact
 */
export async function submitContact(req, res, next) {
  try {
    const data = req.body;

    // Spam trap check: honeypot field must be empty
    if (data._hp_verify && data._hp_verify.trim() !== '') {
      console.warn('[Spam blocked] Honeypot triggered in contact submission:', data.email);
      return res.status(200).json({
        success: true,
        message: 'Thank you! We will be in touch shortly.',
      });
    }

    // Database record write (if DB is configured & tables exist)
    let leadId = null;
    try {
      if (pool) {
        const sql = `
          INSERT INTO leads (
            first_name, email, phone, zip_code, service, message, sms_consent_transactional, sms_consent_promotional
          )
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
          RETURNING id
        `;
        const name = data.name || [data.firstName, data.lastName].filter(Boolean).join(' ') || '';
        const values = [
          name,
          data.email,
          data.phone || '',
          data.address || data.zipCode || '',
          data.service || 'General Contact',
          data.message || '',
          Boolean(data.smsTransactional ?? data.smsConsentTransactional),
          Boolean(data.smsMarketing ?? data.smsConsentPromotional),
        ];
        const result = await pool.query(sql, values);
        leadId = result.rows[0]?.id;
      }
    } catch (dbErr) {
      console.log('[DB] Note: lead storage skipped or table not initialized:', dbErr.message);
    }

    // Send email notification
    try {
      await sendContactEmail(data);
    } catch (emailErr) {
      console.error('[Contact] Email send failed:', emailErr.message);
    }

    res.status(200).json({
      success: true,
      message: 'Thank you! We will be in touch shortly.',
      leadId,
    });
  } catch (err) {
    next(err);
  }
}

/**
 * Handle POST /api/contact/subscribe
 */
export async function submitSubscribe(req, res, next) {
  try {
    const { email, _hp_verify } = req.body;

    if (_hp_verify && _hp_verify.trim() !== '') {
      console.warn('[Spam blocked] Honeypot triggered in newsletter subscription');
      return res.status(200).json({
        success: true,
        message: 'Thank you for subscribing!',
      });
    }

    try {
      await sendSubscribeEmail(email);
    } catch (emailErr) {
      console.error('[Subscribe] Email send failed:', emailErr.message);
    }

    res.status(200).json({
      success: true,
      message: 'Thank you for subscribing!',
    });
  } catch (err) {
    next(err);
  }
}
