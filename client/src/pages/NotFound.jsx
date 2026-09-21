import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | JRC Home Remodeling</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Helmet>
      <section>
        <div className="container">
          <h1>404 — Page Not Found</h1>
          <Link to="/">Return to Home</Link>
          {/* Architecture stub — content will be added in Phase 3 */}
        </div>
      </section>
    </>
  );
}
