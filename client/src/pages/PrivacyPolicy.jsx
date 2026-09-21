import { Helmet } from 'react-helmet-async';
import { COMPANY } from '../content/siteData';

/**
 * PrivacyPolicy Page Component
 * Exact recreation of https://jrchomeremodeling.com/privacy-policy/
 */
export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>JRC Home Remodeling Privacy & Data Policy (2026)</title>
        <meta
          name="description"
          content="Privacy policy for JRC Home Remodeling. Learn how we collect, protect, and manage your personal data and browsing information."
        />
        <link rel="canonical" href="https://jrchomeremodeling.com/privacy-policy/" />
      </Helmet>

      {/* Hero Banner with jrc-home.jpg */}
      <section
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/assets/images/jrc-home.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '45px 0',
          textAlign: 'center',
        }}
      >
        <div className="hr-container">
          <h1 style={{ fontFamily: 'Poppins, serif', fontSize: '36px', fontWeight: 700, color: '#FFFFFF', margin: 0 }}>
            Privacy-Policy
          </h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '60px 0 80px' }}>
        <div className="hr-container" style={{ maxWidth: '960px', margin: '0 auto', padding: '0 20px', color: '#333333', lineHeight: '1.75', fontSize: '15px' }}>
          
          <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#160A05', marginBottom: '6px' }}>
            JRC Home Remodeling
          </h2>
          <p style={{ fontWeight: 600, color: '#666666', marginBottom: '24px' }}>
            Effective Date: Jan 1st, 2026
          </p>

          <div style={{ backgroundColor: '#FAF5EE', borderLeft: '4px solid #F45404', padding: '20px', borderRadius: '4px', marginBottom: '35px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#160A05', marginTop: 0, marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              IMPORTANT NOTICE REGARDING TEXT MESSAGING DATA
            </h3>
            <p style={{ margin: 0, color: '#444444' }}>
              JRC Home Remodeling (“we,” “us,” or “our”) DOES NOT share customer opt-in information, including phone numbers and consent records, with any affiliates or third parties for marketing, promotional, or any other purposes unrelated to providing our direct services. All text messaging originator opt-in data is kept strictly confidential.
            </p>
          </div>

          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#160A05', marginTop: '35px', marginBottom: '14px' }}>
            1. Information We Collect
          </h2>
          <p style={{ marginBottom: '12px' }}>We collect the following types of information:</p>
          
          <p style={{ fontWeight: 700, color: '#160A05', marginBottom: '6px' }}>Personal Information:</p>
          <ul style={{ paddingLeft: '24px', marginBottom: '18px' }}>
            <li style={{ marginBottom: '6px' }}>Name, email address, phone number, physical address</li>
            <li style={{ marginBottom: '6px' }}>Payment information when you make a purchase or request a quote</li>
            <li style={{ marginBottom: '6px' }}>Opt-in records and timestamps for all communication channels (SMS, email, etc.)</li>
          </ul>

          <p style={{ fontWeight: 700, color: '#160A05', marginBottom: '6px' }}>Non-Personal Information:</p>
          <ul style={{ paddingLeft: '24px', marginBottom: '18px' }}>
            <li style={{ marginBottom: '6px' }}>IP address, browser type, device information</li>
            <li style={{ marginBottom: '6px' }}>Website usage patterns and analytics</li>
            <li style={{ marginBottom: '6px' }}>Cookies and similar technologies</li>
          </ul>

          <p style={{ fontWeight: 700, color: '#160A05', marginBottom: '6px' }}>Customer Communication:</p>
          <ul style={{ paddingLeft: '24px', marginBottom: '24px' }}>
            <li style={{ marginBottom: '6px' }}>Records of inquiries and service requests</li>
            <li style={{ marginBottom: '6px' }}>Appointment details and preferences</li>
            <li style={{ marginBottom: '6px' }}>Service history and feedback</li>
          </ul>

          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#160A05', marginTop: '35px', marginBottom: '14px' }}>
            2. How We Use Your Information
          </h2>
          <p style={{ marginBottom: '12px' }}>We use collected data for:</p>
          <ul style={{ paddingLeft: '24px', marginBottom: '24px' }}>
            <li style={{ marginBottom: '6px' }}>Providing and improving our services</li>
            <li style={{ marginBottom: '6px' }}>Processing transactions and payments</li>
            <li style={{ marginBottom: '6px' }}>Communicating with you about your inquiries, appointments, and promotions</li>
            <li style={{ marginBottom: '6px' }}>Enhancing website functionality and user experience</li>
            <li style={{ marginBottom: '6px' }}>Ensuring security and fraud prevention</li>
            <li style={{ marginBottom: '6px' }}>Maintaining records of your communication preferences and consent</li>
          </ul>

          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#160A05', marginTop: '35px', marginBottom: '14px' }}>
            3. SMS Messaging & Compliance
          </h2>
          <p style={{ fontWeight: 700, color: '#160A05', marginBottom: '8px' }}>Text Message Program Terms & Conditions</p>
          <p style={{ marginBottom: '14px' }}>
            By opting into our SMS messaging services, you agree to receive text messages related to our services, including appointment reminders, customer support, and important updates.
          </p>

          <p style={{ fontWeight: 700, color: '#160A05', marginBottom: '6px' }}>Opt-In & Consent:</p>
          <ul style={{ paddingLeft: '24px', marginBottom: '18px' }}>
            <li style={{ marginBottom: '6px' }}>You will only receive messages if you have explicitly opted in</li>
            <li style={{ marginBottom: '6px' }}>We maintain timestamped records of all opt-in actions</li>
            <li style={{ marginBottom: '6px' }}>We comply with the Telephone Consumer Protection Act (TCPA) and all applicable laws</li>
          </ul>

          <p style={{ fontWeight: 700, color: '#160A05', marginBottom: '6px' }}>Opt-Out Instructions:</p>
          <ul style={{ paddingLeft: '24px', marginBottom: '18px' }}>
            <li style={{ marginBottom: '6px' }}>You can cancel SMS notifications at any time by replying “STOP”</li>
            <li style={{ marginBottom: '6px' }}>You will receive a final confirmation message, and no further messages will be sent unless you re-opt in</li>
            <li style={{ marginBottom: '6px' }}>All opt-out requests are processed immediately.</li>
          </ul>

          <p style={{ fontWeight: 700, color: '#160A05', marginBottom: '6px' }}>Message Frequency & Content:</p>
          <ul style={{ paddingLeft: '24px', marginBottom: '18px' }}>
            <li style={{ marginBottom: '6px' }}>Message frequency varies based on your interactions with our business</li>
            <li style={{ marginBottom: '6px' }}>Messages will be directly related to the services you have requested</li>
            <li style={{ marginBottom: '6px' }}>We do not send promotional content without specific consent</li>
          </ul>

          <p style={{ fontWeight: 700, color: '#160A05', marginBottom: '6px' }}>Help & Support:</p>
          <ul style={{ paddingLeft: '24px', marginBottom: '18px' }}>
            <li style={{ marginBottom: '6px' }}>Reply “HELP” for assistance or contact us at {COMPANY.email}</li>
            <li style={{ marginBottom: '6px' }}>Customer support is available during regular business hours</li>
          </ul>

          <p style={{ fontWeight: 700, color: '#160A05', marginBottom: '6px' }}>Carrier Information:</p>
          <ul style={{ paddingLeft: '24px', marginBottom: '20px' }}>
            <li style={{ marginBottom: '6px' }}>Standard message and data rates may apply</li>
            <li style={{ marginBottom: '6px' }}>Carriers are not liable for delayed or undelivered messages</li>
            <li style={{ marginBottom: '6px' }}>Supported carriers include AT&T, Verizon, T-Mobile, Sprint, and most regional carriers</li>
          </ul>

          <div style={{ backgroundColor: '#FAF5EE', borderLeft: '4px solid #F45404', padding: '16px 20px', borderRadius: '4px', marginBottom: '24px' }}>
            <p style={{ fontWeight: 700, color: '#160A05', marginTop: 0, marginBottom: '6px' }}>SMS Data Protection Statement</p>
            <p style={{ margin: 0, color: '#444444' }}>
              No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. Information sharing to subcontractors in support services, such as customer service is permitted. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
            </p>
          </div>
          <p style={{ marginBottom: '24px' }}>
            We implement strict data protection measures to safeguard your SMS opt-in information and consent records.
          </p>

          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#160A05', marginTop: '35px', marginBottom: '14px' }}>
            4. Information Sharing & Disclosure
          </h2>
          <p style={{ marginBottom: '12px' }}>We do not sell, rent, or trade personal information. We may share information with:</p>

          <p style={{ fontWeight: 700, color: '#160A05', marginBottom: '6px' }}>Service Providers:</p>
          <ul style={{ paddingLeft: '24px', marginBottom: '18px' }}>
            <li style={{ marginBottom: '6px' }}>Third-party vendors who assist in our operations (e.g., payment processing, appointment scheduling)</li>
            <li style={{ marginBottom: '6px' }}>SMS aggregators and providers solely for the purpose of delivering messages you’ve consented to receive</li>
            <li style={{ marginBottom: '6px' }}>All service providers are contractually obligated to maintain confidentiality and security</li>
          </ul>

          <p style={{ fontWeight: 700, color: '#160A05', marginBottom: '6px' }}>Legal Compliance:</p>
          <ul style={{ paddingLeft: '24px', marginBottom: '18px' }}>
            <li style={{ marginBottom: '6px' }}>If required by law, legal process, or to protect our rights</li>
            <li style={{ marginBottom: '6px' }}>In response to valid law enforcement requests or court orders</li>
          </ul>

          <p style={{ fontWeight: 700, color: '#160A05', marginBottom: '6px' }}>Business Transfers:</p>
          <ul style={{ paddingLeft: '24px', marginBottom: '18px' }}>
            <li style={{ marginBottom: '6px' }}>In case of mergers, acquisitions, or sale of assets</li>
            <li style={{ marginBottom: '6px' }}>In such cases, your data remains protected under the terms of this policy</li>
          </ul>

          <p style={{ fontStyle: 'italic', marginBottom: '24px' }}>
            All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties, excluding aggregators and providers of the Text Message services.
          </p>

          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#160A05', marginTop: '35px', marginBottom: '14px' }}>
            5. Data Security
          </h2>
          <p style={{ marginBottom: '12px' }}>We implement and maintain reasonable security measures to protect your personal information:</p>
          <ul style={{ paddingLeft: '24px', marginBottom: '18px' }}>
            <li style={{ marginBottom: '6px' }}>Encryption of sensitive data in transit and at rest</li>
            <li style={{ marginBottom: '6px' }}>Secure access controls and authentication mechanisms</li>
            <li style={{ marginBottom: '6px' }}>Regular security assessments and updates</li>
            <li style={{ marginBottom: '6px' }}>Employee training on data protection</li>
            <li style={{ marginBottom: '6px' }}>Breach notification protocols in accordance with applicable laws</li>
            <li style={{ marginBottom: '6px' }}>Secure backup systems and disaster recovery procedures</li>
          </ul>
          <p style={{ marginBottom: '24px' }}>
            Despite these measures, no method of transmission over the Internet or electronic storage is 100% secure. We strive to use commercially acceptable means to protect your personal information but cannot guarantee absolute security.
          </p>

          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#160A05', marginTop: '35px', marginBottom: '14px' }}>
            6. Cookies & Tracking Technologies
          </h2>
          <p style={{ marginBottom: '12px' }}>We use cookies and similar technologies to:</p>
          <ul style={{ paddingLeft: '24px', marginBottom: '18px' }}>
            <li style={{ marginBottom: '6px' }}>Analyze site traffic and user behavior</li>
            <li style={{ marginBottom: '6px' }}>Remember your preferences</li>
            <li style={{ marginBottom: '6px' }}>Improve website functionality and user experience</li>
            <li style={{ marginBottom: '6px' }}>Measure the effectiveness of our services</li>
          </ul>
          <p style={{ marginBottom: '24px' }}>
            You may control cookies through your browser settings. Disabling cookies may limit your ability to use certain features of our website.
          </p>

          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#160A05', marginTop: '35px', marginBottom: '14px' }}>
            7. Your Rights & Choices
          </h2>
          <p style={{ marginBottom: '12px' }}>You have the right to:</p>
          <ul style={{ paddingLeft: '24px', marginBottom: '18px' }}>
            <li style={{ marginBottom: '6px' }}>Access, update, or delete your personal information</li>
            <li style={{ marginBottom: '6px' }}>Opt-out of marketing emails by clicking “unsubscribe” in our emails</li>
            <li style={{ marginBottom: '6px' }}>Opt-out of SMS messages by replying “STOP”</li>
            <li style={{ marginBottom: '6px' }}>Request information on how we process your data</li>
            <li style={{ marginBottom: '6px' }}>Withdraw consent at any time for future communications</li>
            <li style={{ marginBottom: '6px' }}>Lodge a complaint with a supervisory authority if you believe your rights have been violated</li>
          </ul>
          <p style={{ marginBottom: '24px' }}>
            To exercise these rights, please contact us using the information in Section 10.
          </p>

          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#160A05', marginTop: '35px', marginBottom: '14px' }}>
            8. Third-Party Links
          </h2>
          <p style={{ marginBottom: '24px' }}>
            Our website may contain links to third-party websites. We are not responsible for their privacy practices and encourage you to review their policies. This privacy policy applies only to information collected by JRC Home Remodeling.
          </p>

          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#160A05', marginTop: '35px', marginBottom: '14px' }}>
            9. Changes to This Privacy Policy
          </h2>
          <p style={{ marginBottom: '24px' }}>
            We may update this policy periodically. The latest version will always be available on our website with the effective date. For significant changes, we will notify you by email or through a notice on our website.
          </p>

          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#160A05', marginTop: '35px', marginBottom: '14px' }}>
            10. Contact Us
          </h2>
          <p style={{ marginBottom: '12px' }}>
            If you have questions about this Privacy Policy or how your information is handled, contact us at:
          </p>
          <p style={{ marginBottom: '6px', fontWeight: 700, color: '#160A05' }}>JRC Home Remodeling</p>
          <p style={{ marginBottom: '6px' }}>Phone: <a href={`tel:${COMPANY.phoneRaw}`} style={{ color: '#01619E', textDecoration: 'none', fontWeight: 600 }}>{COMPANY.phone}</a></p>
          <p style={{ marginBottom: '6px' }}>Email: <a href={`mailto:${COMPANY.email}`} style={{ color: '#01619E', textDecoration: 'none', fontWeight: 600 }}>{COMPANY.email}</a></p>
          <p style={{ marginBottom: '24px' }}>Website: <a href="https://jrchomeremodeling.com" style={{ color: '#01619E', textDecoration: 'none', fontWeight: 600 }}>https://jrchomeremodeling.com</a></p>

          <p style={{ fontStyle: 'italic', color: '#666666', borderTop: '1px solid #EEEEEE', paddingTop: '20px' }}>
            By using our website and services, you consent to this Privacy Policy.
          </p>
        </div>
      </section>
    </>
  );
}
