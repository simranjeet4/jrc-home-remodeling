import { Helmet } from 'react-helmet-async';

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog - JRC Home Remodeling</title>
        <meta name="description" content="The JRC Home Remodeling Blog — design ideas, DIY tips, renovation guides." />
      </Helmet>
      <section>
        <div className="container">
          <h1>The JRC Home Remodeling Blog</h1>
          {/* Architecture stub — content will be added in Phase 3 */}
        </div>
      </section>
    </>
  );
}
