/**
 * HomeRemodelingBadges
 * Section 7: Animated Trust Badges Marquee
 * - Matches live site .marquee > .marquee-track
 * - Displays repeating "Quality Painting Excellence" and "Certified Remodeling Guarantee"
 * - Monogram circular emblems with smooth infinite scroll
 */
export default function HomeRemodelingBadges() {
  const items = [
    { title: 'Quality Painting Excellence', icon: '/assets/images/monogram-img.jpg' },
    { title: 'Certified Remodeling Guarantee', icon: '/assets/images/monogram-img.jpg' },
    { title: 'Quality Painting Excellence', icon: '/assets/images/monogram-img.jpg' },
    { title: 'Certified Remodeling Guarantee', icon: '/assets/images/monogram-img.jpg' },
  ];

  return (
    <section className="hr-badges-section">
      <div className="marquee">
        <div className="marquee-track">
          {items.map((item, idx) => (
            <p key={idx}>
              <img
                src={item.icon}
                alt={item.title}
                width="80"
                height="80"
              />
              <span>{item.title}</span>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
