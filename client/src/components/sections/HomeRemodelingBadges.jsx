/**
 * HomeRemodelingBadges
 * Section: Animated Trust Badges Marquee
 * - Displays repeating "Quality Painting Excellence" and "Certified Remodeling Guarantee"
 * - Monogram circular emblems with smooth infinite scroll
 */
export default function HomeRemodelingBadges() {
  const baseItems = [
    { title: 'Quality Painting Excellence', icon: '/assets/images/monogram-img.jpg' },
    { title: 'Certified Remodeling Guarantee', icon: '/assets/images/monogram-img.jpg' },
  ];

  // Repeat baseItems 6 times (12 items total) for smooth seamless 50% infinite ticker loop
  const items = Array(6).fill(baseItems).flat();

  return (
    <section className="hr-badges-section" aria-label="Trust Badges">
      <div className="marquee">
        <div className="marquee-track">
          {items.map((item, idx) => (
            <p key={idx}>
              <img
                src={item.icon}
                alt={item.title}
                width="147"
                height="80"
                style={{ borderRadius: '50px', objectFit: 'cover' }}
              />
              <span>{item.title}</span>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
