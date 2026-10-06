import React, { useState, useEffect, useRef } from 'react';
import '../../styles/c3d-cube.css';

const reviewsData = [
  {
    id: 1,
    name: 'Toni Starner',
    avatar: '/assets/images/about/user9.jpg',
    rating: 5,
    quote: 'JRC Home Remodeling completely transformed our home with unbelievable craftsmanship and attention to detail. Always on time, professional, easy to reach, and delivered flawless painting and remodeling results!'
  },
  {
    id: 2,
    name: 'Charissa Walton',
    avatar: '/assets/images/about/user8.jpg',
    rating: 5,
    quote: 'I have used JRC twice now for exterior painting and kitchen remodeling. They offered transparent pricing, communicated every step of the way, and both projects turned out beautifully. Highly recommended!'
  },
  {
    id: 3,
    name: 'Bliss Bernal',
    avatar: '/assets/images/about/user7.jpg',
    rating: 5,
    quote: 'JRC did an awesome job with our interior painting and flooring! Responsive, pleasant, professional, and delivered top-tier quality. We are so happy with the results and look forward to working with Monica and her team again.'
  },
  {
    id: 4,
    name: 'Marcus Vance',
    avatar: '/assets/images/about/toni-starner.jpg',
    rating: 5,
    quote: 'Exceptional painting and renovation team in Denver! Their attention to preparation, clean work lines, and high-durability finish exceeded all our expectations. Zero stress from start to finish.'
  }
];

export default function C3DRectangularCubeSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cubeDepth, setCubeDepth] = useState(200);
  const viewportRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const updateDepth = () => {
      if (viewportRef.current) {
        const w = viewportRef.current.clientWidth;
        setCubeDepth(w / 2);
      }
    };
    updateDepth();
    const ro = new ResizeObserver(updateDepth);
    if (viewportRef.current) {
      ro.observe(viewportRef.current);
    }
    window.addEventListener('resize', updateDepth);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', updateDepth);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviewsData.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        setCurrentIndex((prev) => (prev + 1) % reviewsData.length);
      } else {
        setCurrentIndex((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);
      }
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const rotationY = currentIndex * -90;

  return (
    <div className="cube-slider-wrapper">
      <div 
        className="cube-viewport" 
        ref={viewportRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="cube-stage"
          style={{ transform: `translateZ(-${cubeDepth}px) rotateY(${rotationY}deg)` }}
        >
          {reviewsData.map((review, idx) => {
            const faceAngle = idx * 90;
            const diff = ((idx - (currentIndex % 4)) + 4) % 4;

            let brightnessVal = 0.4;
            let opacityVal = 0.4;
            if (diff === 0) {
              brightnessVal = 1.0;
              opacityVal = 1;
            } else if (diff === 1 || diff === 3) {
              brightnessVal = 0.68;
              opacityVal = 0.85;
            }

            return (
              <div 
                key={review.id} 
                className="cube-face"
                style={{ 
                  transform: `rotateY(${faceAngle}deg) translateZ(${cubeDepth}px)`,
                  filter: `brightness(${brightnessVal})`,
                  opacity: opacityVal,
                  visibility: 'visible'
                }}
              >
                <div className="cube-header-row">
                  <div className="cube-stars">
                    {'★★★★★'}
                  </div>
                  <span className="cube-quote-watermark">”</span>
                </div>

                <div className="cube-card-content">
                  <p className="cube-quote-text">
                    "{review.quote}"
                  </p>
                </div>

                <div className="cube-author-row">
                  <img 
                    src={review.avatar} 
                    alt={review.name} 
                    className="cube-avatar"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/assets/images/about/user9.jpg';
                    }}
                  />
                  <span className="cube-author-name">{review.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Navigation Dot Indicators */}
      <div className="cube-dots-row">
        {reviewsData.map((_, dotIdx) => (
          <button
            key={dotIdx}
            type="button"
            className={`cube-dot ${dotIdx === currentIndex ? 'cube-dot-active' : ''}`}
            onClick={() => setCurrentIndex(dotIdx)}
            aria-label={`Go to review ${dotIdx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
