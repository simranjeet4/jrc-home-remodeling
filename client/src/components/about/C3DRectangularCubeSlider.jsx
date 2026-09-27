import React, { useState, useEffect, useRef } from 'react';
import '../../styles/c3d-cube.css';

const reviewsData = [
  {
    id: 1,
    name: 'Toni Starner',
    avatar: '/assets/images/about/user9.jpg',
    rating: 5,
    quote: 'Remodeled three bathrooms. We were very impressed with the attention to detail. Always on time, professional, easy to reach. GREAT work!'
  },
  {
    id: 2,
    name: 'Charissa Walton',
    avatar: '/assets/images/about/user8.jpg',
    rating: 5,
    quote: 'I have used JRC twice now - once, to add a bathroom to a basement, and then again to install a tile backsplash in the kitchen. They offered great pricing, were communicative every step of the way, and both projects turned out beautifully. I wouldn\'t hesitate to use them again!'
  },
  {
    id: 3,
    name: 'Bliss Bernal',
    avatar: '/assets/images/about/user7.jpg',
    rating: 5,
    quote: 'JRC did an awesome job with our kitchen floor! They were responsive, pleasant, professional, had good communication, were on time, and most importantly, did a great job! We are so happy with the results and look forward to working with Monica and her team again.'
  }
];

export default function C3DRectangularCubeSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cubeDepth, setCubeDepth] = useState(200);
  const viewportRef = useRef(null);

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

  const anglePerSlide = 360 / reviewsData.length;
  const rotationY = currentIndex * -anglePerSlide;

  return (
    <div className="cube-slider-wrapper">
      <div className="cube-viewport" ref={viewportRef}>
        <div 
          className="cube-stage"
          style={{ transform: `rotateY(${rotationY}deg)` }}
        >
          {reviewsData.map((review, idx) => {
            const faceAngle = idx * anglePerSlide;
            const isMainActive = idx === currentIndex;

            return (
              <div 
                key={review.id} 
                className={`cube-face ${isMainActive ? 'cube-face-active' : ''}`}
                style={{ 
                  transform: `rotateY(${faceAngle}deg) translateZ(${cubeDepth}px)`,
                  opacity: isMainActive ? 1 : 0,
                  filter: isMainActive ? 'brightness(1)' : 'brightness(0.5)',
                  visibility: isMainActive ? 'visible' : 'hidden',
                  transition: 'opacity 1.5s ease-in-out, visibility 1.5s ease-in-out, filter 1.5s ease-in-out'
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
                      e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80';
                    }}
                  />
                  <span className="cube-author-name">{review.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}