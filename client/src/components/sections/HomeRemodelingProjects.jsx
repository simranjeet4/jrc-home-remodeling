import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * HomeRemodelingProjects
 * Section 4: "LATEST PROJECTS"
 * - 3 Real photography project cards
 * - Bottom orange banner overlay with title & homeowner attribution
 * - Rounded corners (20px) and alternating parallax scroll motion:
 *   - Card 1: moves DOWN when scrolling page down
 *   - Card 2: moves UP when scrolling page down
 *   - Card 3: moves DOWN when scrolling page down (like card 1)
 */
export default function HomeRemodelingProjects() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  // As page scrolls DOWN (scrollYProgress 0 -> 1):
  // 1st image moves DOWN: starts negative (-45px), translates down (+45px)
  const yImage1 = useTransform(scrollYProgress, [0, 1], [-45, 45]);
  // 2nd image scrolls UP: starts positive (+45px), translates up (-45px)
  const yImage2 = useTransform(scrollYProgress, [0, 1], [45, -45]);
  // 3rd image scrolls like 1st image: starts negative (-45px), translates down (+45px)
  const yImage3 = useTransform(scrollYProgress, [0, 1], [-45, 45]);

  const projects = [
    {
      title: 'Kitchen Renovation',
      client: 'Charissa Walton, Denver',
      image: '/assets/images/Gemini_Generated_Image_335e07335e07335e-scaled.jpg',
      y: yImage1,
    },
    {
      title: 'Basement Finish',
      client: 'Bliss Bernal, Castle Rock',
      image: '/assets/images/2149366705.jpg',
      y: yImage2,
    },
    {
      title: 'Bathroom Remodel',
      client: 'Toni Starner, Lakewood',
      image: '/assets/images/photo-1765745518752-68a289300789.jpeg',
      y: yImage3,
    },
  ];

  return (
    <section ref={sectionRef} className="hr-projects-section">
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
              <motion.img
                src={item.image}
                alt={item.title}
                className="hr-project-card-img"
                style={{
                  y: item.y,
                  width: '100%',
                  height: 'calc(100% + 120px)',
                  objectFit: 'cover',
                  position: 'absolute',
                  top: '-60px',
                  left: 0
                }}
              />
              {/* Bottom Orange Banner */}
              <div className="hr-project-banner">
                <h3 className="hr-project-banner-title">{item.title}</h3>
                <p className="hr-project-banner-client">{item.client}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
