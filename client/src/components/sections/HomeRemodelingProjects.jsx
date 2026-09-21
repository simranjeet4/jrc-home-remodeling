/**
 * HomeRemodelingProjects
 * Section 4: "LATEST PROJECTS"
 * - 3 Real photography project cards
 * - Bottom orange banner overlay with title & homeowner attribution
 * - Rounded corners and smooth hover zoom
 */
export default function HomeRemodelingProjects() {
  const projects = [
    {
      title: 'Kitchen Renovation',
      client: 'Charissa Walton, Denver',
      image: '/assets/images/Gemini_Generated_Image_335e07335e07335e-scaled.jpg',
    },
    {
      title: 'Basement Finish',
      client: 'Bliss Bernal, Castle Rock',
      image: '/assets/images/2149366705.jpg',
    },
    {
      title: 'Bathroom Remodel',
      client: 'Toni Starner, Lakewood',
      image: '/assets/images/photo-1765745518752-68a289300789.jpeg',
    },
  ];

  return (
    <section className="hr-projects-section">
      <div className="hr-container">
        {/* Section Header */}
        <div className="hr-section-header">
          <div className="hr-tag-pill">
            <span>LATEST PROJECTS</span>
          </div>
          <h2 className="hr-section-title">
            Renovations That Speak for Themselves
          </h2>
        </div>

        {/* 3 Photo Showcase Cards */}
        <div className="hr-projects-grid">
          {projects.map((item) => (
            <div key={item.title} className="hr-project-card-item">
              <div
                className="hr-project-img"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                {/* Bottom Orange Banner */}
                <div className="hr-project-banner">
                  <h3 className="hr-project-banner-title">{item.title}</h3>
                  <p className="hr-project-banner-client">{item.client}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
