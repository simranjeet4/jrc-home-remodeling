import { sendEstimateEmail } from '../services/emailService.js';
import pool from '../db.js';

/**
 * Handle POST /api/quote and POST /api/estimate
 */
export async function submitEstimate(req, res, next) {
  try {
    const data = req.body;

    // Spam trap check: honeypot field must be empty
    if (data._hp_verify && data._hp_verify.trim() !== '') {
      console.warn('[Spam blocked] Honeypot triggered in estimate submission:', data.email);
      // Silently return success to mislead the bot
      return res.status(200).json({
        success: true,
        message: 'Thank you! Your estimate request has been received.',
      });
    }

    // Attempt DB record creation if tables exist
    let leadId = null;
    try {
      if (pool) {
        const sql = `
          INSERT INTO leads (
            first_name, email, phone, service, message, sms_consent_transactional, sms_consent_promotional
          )
          VALUES ($1, $2, $3, $4, $5, $6, $7)
          RETURNING id
        `;
        const values = [
          data.name || '',
          data.email,
          data.phone || '',
          data.service || 'Estimate Request',
          `Schedule: ${data.scheduleDate} | Budget: ${data.budget} | Timeline: ${data.howSoon} | Address: ${data.address} | Message: ${data.message || ''}`,
          Boolean(data.smsTransactional),
          Boolean(data.smsMarketing),
        ];
        const result = await pool.query(sql, values);
        leadId = result.rows[0]?.id;
      }
    } catch (dbErr) {
      // Non-fatal if DB is not yet migrated
      console.log('[DB] Note: lead storage skipped or table not initialized:', dbErr.message);
    }

    // Send email notification
    try {
      await sendEstimateEmail(data);
    } catch (emailErr) {
      console.error('[Estimate] Email notification error:', emailErr.message);
    }

    return res.status(200).json({
      success: true,
      message: 'Thank you! Your estimate request has been received. Our team will contact you shortly.',
      leadId,
    });
  } catch (err) {
    next(err);
  }
}
