import { Helmet } from 'react-helmet-async';
import EstimateForm from '../components/forms/EstimateForm';

export default function CountertopServices() {
  return (
    <>
      <Helmet>
        <title>Fast Countertop Services By JRC Countertops | Free Estimate</title>
        <meta
          name="description"
          content="Fast, professional countertop fabrication and installation in Denver by JRC Countertops. Get a free estimate today!"
        />
        <link rel="canonical" href="https://jrchomeremodeling.com/fast-countertop-services-by-jrc-countertops/" />
      </Helmet>

      <section style={{ backgroundColor: '#FAF3E9', padding: '60px 0 40px', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
        <div className="hr-container" style={{ textAlign: 'center' }}>
          <div className="hr-tag-pill">
            <span>COUNTERTOP SERVICES</span>
          </div>
          <h1 className="hr-section-title" style={{ fontSize: '42px', marginBottom: '12px' }}>
            Fast Countertop Services By JRC Countertops
          </h1>
          <p style={{ maxWidth: '650px', margin: '0 auto', color: '#555', fontSize: '16px' }}>
            Premium quartz, granite, and marble countertop installation with fast turnarounds and precision fabrication.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: '#FDFBF7', padding: '70px 0 90px' }}>
        <div className="hr-container" style={{ maxWidth: '860px', margin: '0 auto' }}>
          <EstimateForm
            serviceName="Countertops"
            title="Request A Free Countertop Estimate"
            subtitle="Tell us about your kitchen or bathroom countertop project and our fabrication team will reach out."
          />
        </div>
      </section>
    </>
  );
}
