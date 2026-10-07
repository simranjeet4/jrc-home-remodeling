import React, { useState, useRef, useEffect, useCallback } from 'react';

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt = 'Before Renovation',
  afterAlt = 'After Renovation',
  height = 'clamp(280px, 45vh, 480px)',
  beforeLabel = 'BEFORE',
  afterLabel = 'AFTER',
  initialPosition = 50,
  autoAnimate = false,
  animationDuration = 6, // duration in seconds for full loop
  className = '',
  style = {},
}) {
  const [position, setPosition] = useState(initialPosition);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const isHovered = useRef(false);
  const animFrameRef = useRef(null);
  const startTimeRef = useRef(null);

  // Measure container width for exact alignment of before/after images
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // Handle user interaction position calculation
  const updatePosition = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  // Smooth automatic oscillation loop (0% -> 100% -> 0%)
  useEffect(() => {
    if (!autoAnimate) return;

    let running = true;

    const animate = (timestamp) => {
      if (!running) return;

      if (!isDragging.current && !isHovered.current) {
        if (!startTimeRef.current) {
          // Adjust initial time offset based on current position so position doesn't jump
          const currentAngle = Math.asin(Math.max(-1, Math.min(1, (position - 50) / 45)));
          startTimeRef.current = timestamp - (currentAngle * animationDuration * 1000) / (2 * Math.PI);
        }
        const elapsed = (timestamp - startTimeRef.current) / 1000;
        const angle = (2 * Math.PI * elapsed) / animationDuration;
        const newPos = 50 + 45 * Math.sin(angle);
        setPosition(newPos);
      } else {
        startTimeRef.current = null;
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      running = false;
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [autoAnimate, animationDuration, position]);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    updatePosition(e.clientX);
  };

  const handleTouchStart = (e) => {
    isDragging.current = true;
    if (e.touches.length > 0) {
      updatePosition(e.touches[0].clientX);
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    updatePosition(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    if (e.touches.length > 0) {
      updatePosition(e.touches[0].clientX);
    }
  };

  const handleMouseEnter = () => {
    isHovered.current = true;
  };

  const handleMouseLeave = () => {
    isHovered.current = false;
    isDragging.current = false;
  };

  return (
    <div
      ref={containerRef}
      className={`before-after-slider ${className}`}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
      style={{
        position: 'relative',
        width: '100%',
        height,
        borderRadius: '24px',
        overflow: 'hidden',
        cursor: 'ew-resize',
        userSelect: 'none',
        touchAction: 'pan-y',
        boxShadow: '0 16px 40px rgba(0,0,0,0.15)',
        ...style,
      }}
    >
      {/* After Image (Background) */}
      <img
        src={afterImage}
        alt={afterAlt}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
      />
      <span
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(4px)',
          color: '#FFFFFF',
          padding: '6px 16px',
          borderRadius: '20px',
          fontSize: '13px',
          fontWeight: 700,
          letterSpacing: '1px',
          zIndex: 2,
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        }}
      >
        {afterLabel}
      </span>

      {/* Before Image (Clipped Overlay) */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: `${position}%`,
          height: '100%',
          overflow: 'hidden',
          zIndex: 3,
        }}
      >
        <img
          src={beforeImage}
          alt={beforeAlt}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: containerWidth ? `${containerWidth}px` : '100%',
            maxWidth: 'none',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
        <span
          style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            backgroundColor: '#FF4500',
            color: '#FFFFFF',
            padding: '6px 16px',
            borderRadius: '20px',
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '1px',
            zIndex: 4,
            boxShadow: '0 4px 12px rgba(255, 69, 0, 0.4)',
          }}
        >
          {beforeLabel}
        </span>
      </div>

      {/* Divider Bar & Handle */}
      <div
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        style={{
          position: 'absolute',
          top: 0,
          left: `${position}%`,
          width: '4px',
          height: '100%',
          backgroundColor: '#FFFFFF',
          boxShadow: '0 0 10px rgba(0,0,0,0.5)',
          zIndex: 5,
          transform: 'translateX(-50%)',
          cursor: 'ew-resize',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            backgroundColor: '#FFFFFF',
            boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'ew-resize',
            border: '2px solid #FF4500',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#160A05" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8L22 12L18 16" />
            <path d="M6 8L2 12L6 16" />
          </svg>
        </div>
      </div>
    </div>
  );
}
