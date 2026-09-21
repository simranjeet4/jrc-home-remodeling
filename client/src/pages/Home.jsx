import { Helmet } from 'react-helmet-async';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Denver Home Remodeling | From Outdated to Outstanding By JRC</title>
        <meta name="description" content="Denver home remodelers. Get a free estimate!" />
      </Helmet>
      <section>
        <div className="container">
          <h1>Welcome To JRC Home Remodeling</h1>
          {/* Architecture stub — content will be added in Phase 3 */}
        </div>
      </section>
    </>
  );
}
