import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Configure Nodemailer transport.
 * Credentials are drawn from server .env and NEVER exposed to the browser.
 */
function getTransporter() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user) {
    return null; // Development simulation fallback
  }

  return nodemailer.createTransport({
    host,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: { user, pass },
  });
}

/**
 * Send Contact Form Email.
 */
export async function sendContactEmail(data) {
  const name = data.name || [data.firstName, data.lastName].filter(Boolean).join(' ') || 'Prospective Client';
  const email = data.email;
  const phone = data.phone || '(not provided)';
  const address = data.address || data.zipCode || '(not provided)';
  const message = data.message || '(no message)';
  const transactional = data.smsTransactional ?? data.smsConsentTransactional ?? false;
  const marketing = data.smsMarketing ?? data.smsConsentPromotional ?? false;

  const mailOptions = {
    from: process.env.SMTP_FROM || 'info@jrchomeremodeling.com',
    to: process.env.SMTP_TO || 'info@jrchomeremodeling.com',
    replyTo: email,
    subject: `New Contact Request — ${name}`,
    text: [
      `=== New JRC Contact Form Submission ===`,
      `Name:                 ${name}`,
      `Email:                ${email}`,
      `Phone:                ${phone}`,
      `Address:              ${address}`,
      `Message:`,
      `${message}`,
      ``,
      `SMS Consent:`,
      `- Transactional:      ${transactional ? 'YES' : 'NO'}`,
      `- Promotional:        ${marketing ? 'YES' : 'NO'}`,
    ].join('\n'),
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; color: #212529;">
        <h2 style="color: #01619E; border-bottom: 2px solid #F45404; padding-bottom: 8px;">New Contact Request</h2>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr><td style="padding: 8px 0; font-weight: bold; width: 140px;">Name:</td><td>${name}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold;">Phone:</td><td><a href="tel:${phone}">${phone}</a></td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold;">Address:</td><td>${address}</td></tr>
        </table>
        <h3 style="color: #160A05;">Message</h3>
        <p style="background: #F9FAFB; padding: 14px; border-left: 4px solid #01619E; border-radius: 4px;">${message}</p>
        <hr style="border: 0; border-top: 1px solid #E5E7EB; margin: 20px 0;" />
        <p style="font-size: 12px; color: #6B7280;">
          SMS Consent: Transactional: <strong>${transactional ? 'Yes' : 'No'}</strong> | Promotional: <strong>${marketing ? 'Yes' : 'No'}</strong>
        </p>
      </div>
    `,
  };

  const transporter = getTransporter();
  if (!transporter) {
    console.log('[EmailService: simulated] Contact Form Submission:\n', mailOptions.text);
    return { simulated: true, success: true };
  }

  return transporter.sendMail(mailOptions);
}

/**
 * Send Estimate / Quote Request Email.
 */
export async function sendEstimateEmail(data) {
  const name = data.name || 'Prospective Homeowner';
  const email = data.email;
  const phone = data.phone || '(not provided)';
  const service = data.service || 'Remodeling Estimate';
  const scheduleDate = data.scheduleDate;
  const budget = data.budget;
  const howSoon = data.howSoon;
  const address = data.address;
  const message = data.message || '(none)';
  const transactional = data.smsTransactional ?? false;
  const marketing = data.smsMarketing ?? false;

  const mailOptions = {
    from: process.env.SMTP_FROM || 'info@jrchomeremodeling.com',
    to: process.env.SMTP_TO || 'info@jrchomeremodeling.com',
    replyTo: email,
    subject: `New Estimate Request — ${service} — ${name}`,
    text: [
      `=== New JRC Estimate / Quote Request ===`,
      `Service:              ${service}`,
      `Name:                 ${name}`,
      `Email:                ${email}`,
      `Phone:                ${phone}`,
      `Schedule Date:        ${scheduleDate}`,
      `Budget:               ${budget}`,
      `Timeline (How Soon):  ${howSoon}`,
      `Project Address:      ${address}`,
      `Project Details:`,
      `${message}`,
      ``,
      `SMS Consent:`,
      `- Transactional:      ${transactional ? 'YES' : 'NO'}`,
      `- Promotional:        ${marketing ? 'YES' : 'NO'}`,
    ].join('\n'),
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; color: #212529;">
        <h2 style="color: #01619E; border-bottom: 2px solid #F45404; padding-bottom: 8px;">New Estimate Request: ${service}</h2>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr><td style="padding: 8px 0; font-weight: bold; width: 160px;">Client Name:</td><td>${name}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold;">Phone:</td><td><a href="tel:${phone}">${phone}</a></td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold;">Schedule Date:</td><td><strong>${scheduleDate}</strong></td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold;">Budget:</td><td>${budget}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold;">Timeline:</td><td>${howSoon}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold;">Address:</td><td>${address}</td></tr>
        </table>
        <h3 style="color: #160A05;">Project Details</h3>
        <p style="background: #F9FAFB; padding: 14px; border-left: 4px solid #F45404; border-radius: 4px;">${message}</p>
        <hr style="border: 0; border-top: 1px solid #E5E7EB; margin: 20px 0;" />
        <p style="font-size: 12px; color: #6B7280;">
          SMS Consent: Transactional: <strong>${transactional ? 'Yes' : 'No'}</strong> | Promotional: <strong>${marketing ? 'Yes' : 'No'}</strong>
        </p>
      </div>
    `,
  };

  const transporter = getTransporter();
  if (!transporter) {
    console.log('[EmailService: simulated] Estimate Request:\n', mailOptions.text);
    return { simulated: true, success: true };
  }

  return transporter.sendMail(mailOptions);
}

/**
 * Send Newsletter Subscription Notification.
 */
export async function sendSubscribeEmail(email) {
  const mailOptions = {
    from: process.env.SMTP_FROM || 'info@jrchomeremodeling.com',
    to: process.env.SMTP_TO || 'info@jrchomeremodeling.com',
    subject: `New Newsletter Subscriber — ${email}`,
    text: `New subscriber email: ${email}`,
    html: `<p>New subscriber to JRC Tips & Guide newsletter: <strong>${email}</strong></p>`,
  };

  const transporter = getTransporter();
  if (!transporter) {
    console.log('[EmailService: simulated] Newsletter Subscription:', email);
    return { simulated: true, success: true };
  }

  return transporter.sendMail(mailOptions);
}
