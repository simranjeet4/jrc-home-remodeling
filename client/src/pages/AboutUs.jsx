import C3DRectangularCubeSlider from '../components/about/C3DRectangularCubeSlider';

import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/about.css';
import HomeRemodelingBadges from '../components/sections/HomeRemodelingBadges';

export default function AboutUs() {
  const section2Ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: section2Ref,
    offset: ['start end', 'end start']
  });

  // Parallax scroll: as page scrolls down, image translates UP
  const yImage1 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const yImage2 = useTransform(scrollYProgress, [0, 1], [65, -65]);

  const section4Ref = useRef(null);
  const { scrollYProgress: scrollYProgress4 } = useScroll({
    target: section4Ref,
    offset: ['start end', 'end start']
  });
  const yImage4 = useTransform(scrollYProgress4, [0, 1], [50, -50]);


  return (
    <>
      <Helmet>
        <title>About Us - jrchomeremodeling</title>
        <meta name="description" content="Denver's trusted remodeling experts. Get a free estimate." />
        <link rel="canonical" href="https://jrchomeremodeling.com/about-us/" />
      </Helmet>

      <article className="about-us-page">
        {/* Section 1: Hero Banner */}
        <section className="about-hero-section">
          {/* Dark Overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.52)'
            }}
          />

          <div
            className="hr-container"
            style={{
              position: 'relative',
              zIndex: 2,
              width: '100%',
              maxWidth: '1650px',
              margin: '0 auto',
              padding: '40px 24px'
            }}
          >
            <h1 className="about-hero-title">About Us</h1>
            <div
              style={{
                fontSize: '15px',
                fontWeight: '500',
                letterSpacing: '0.5px'
              }}
            >
              <Link to="/" style={{ color: '#FFFFFF', textDecoration: 'none' }}>
                Home
              </Link>
              <span style={{ margin: '0 8px', color: 'rgba(255,255,255,0.7)' }}>/</span>
              <span style={{ color: '#F45404', fontWeight: '600' }}>About us</span>
            </div>
          </div>
        </section>

        {/* Section 2: Get to Know JRC Home Remodeling */}
        <section ref={section2Ref} className="about-sec2-section" style={{ backgroundColor: "#FFFFFF" }}>
          <div
            className="hr-container"
            style={{
              width: '100%',
              maxWidth: '1650px',
              margin: '0 auto',
              padding: '0 24px'
            }}
          >
            <div
              className="about-sec2-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))',
                gap: '50px',
                alignItems: 'stretch'
              }}
            >
              {/* Left Column: Image Collage + Progress Card */}
              <div
                className="about-sec2-left"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '20px',
                  alignItems: 'stretch',
                  height: '100%'
                }}
              >
                {/* Subcolumn 1: Team Photo (flexible height) + Company Progress Card */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    height: '100%'
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      minHeight: '260px',
                      borderRadius: '20px',
                      overflow: 'hidden',
                      position: 'relative',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.06)'
                    }}
                  >
                    <motion.img
                      src="/assets/images/about/about-team-swatches.jpg"
                      alt="JRC Design Consultation"
                      style={{
                        position: 'absolute',
                        top: '-50px',
                        left: 0,
                        width: '100%',
                        height: 'calc(100% + 100px)',
                        objectFit: 'cover',
                        objectPosition: 'center 15%',
                        y: yImage1
                      }}
                    />
                  </div>

                  <div
                    style={{
                      backgroundColor: '#FFF7EE',
                      borderRadius: '20px',
                      padding: '24px 20px',
                      border: '1px solid #F5E6D3',
                      flexShrink: 0
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: '18px',
                        fontWeight: '700',
                        color: '#160A05',
                        marginBottom: '16px'
                      }}
                    >
                      Company Progress
                    </h3>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#160A05',
                        marginBottom: '8px'
                      }}
                    >
                      <span>Satisfaction</span>
                      <span style={{ color: '#F45404' }}>90%</span>
                    </div>
                    <div
                      style={{
                        width: '100%',
                        height: '7px',
                        backgroundColor: '#EBE1D5',
                        borderRadius: '10px',
                        overflow: 'hidden'
                      }}
                    >
                      <div
                        style={{
                          width: '90%',
                          height: '100%',
                          backgroundColor: '#F45404',
                          borderRadius: '10px'
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Subcolumn 2: Tall Stone Texture Image (full height matching subcolumn 1) */}
                <div
                  className="about-sec2-left-sub2"
                  style={{
                    height: '100%',
                    minHeight: '400px',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    position: 'relative',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.06)'
                  }}
                >
                  <motion.img
                    src="/assets/images/about/about-stone-texture.jpg"
                    alt="Premium Stone Texture"
                    style={{
                      position: 'absolute',
                      top: '-65px',
                      left: 0,
                      width: '100%',
                      height: 'calc(100% + 130px)',
                      objectFit: 'cover',
                      objectPosition: 'center center',
                      y: yImage2
                    }}
                  />
                </div>
              </div>

              {/* Right Column: Narrative & Mission/Vision (aligned height with left column) */}
              <div
                className="about-sec2-right"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%'
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'inline-block',
                      backgroundColor: 'rgba(0, 0, 0, 0.08)',
                      padding: '8px 20px',
                      borderRadius: '50px',
                      fontSize: '13px',
                      fontWeight: '600',
                      letterSpacing: '1.6px',
                      textTransform: 'uppercase',
                      color: '#292929',
                      marginBottom: '18px'
                    }}
                  >
                    WELCOME TO JRC
                  </div>

                  <h2 className="about-sec2-heading" style={{ color: "#160A05", marginBottom: "20px" }}>Get to Know JRC Home Remodeling</h2>

                  <p
                    style={{
                      fontSize: '15px',
                      lineHeight: '1.7',
                      color: '#555555',
                      marginBottom: '16px'
                    }}
                  >
                    At JRC Home Remodeling, we believe every home should be both beautiful and functional.
                    From modern kitchen upgrades to complete basement transformations, our team delivers
                    remodeling solutions built around your vision, your lifestyle, and your budget.
                  </p>

                  <p
                    style={{
                      fontSize: '15px',
                      lineHeight: '1.7',
                      color: '#555555',
                      marginBottom: '28px'
                    }}
                  >
                    With years of hands-on experience and a strong commitment to quality, we approach every
                    project with care, clear communication, and attention to detail. Whether you are updating
                    a single room or reimagining your entire home, JRC is here to make the process smooth,
                    efficient, and stress-free.
                  </p>
                </div>

                {/* Mission & Vision Cards */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: '20px'
                  }}
                >
                  {/* Our Mission */}
                  <div
                    style={{
                      backgroundColor: '#F6F6F6',
                      borderRadius: '20px',
                      padding: '28px 24px',
                      border: '1px solid #ECECEC'
                    }}
                  >
                    <div style={{ marginBottom: '14px' }}>
                      <img
                        src="/assets/images/about/target-icon.png"
                        alt="Our Mission"
                        style={{ width: '48px', height: '48px', objectFit: 'contain' }}
                      />
                    </div>
                    <h3
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: '20px',
                        fontWeight: '700',
                        color: '#160A05',
                        marginBottom: '10px'
                      }}
                    >
                      Our Mission
                    </h3>
                    <p style={{ fontSize: '13px', lineHeight: '1.6', color: '#666666', margin: 0 }}>
                      Our mission is to deliver dependable remodeling services that improve the comfort,
                      value, and style of every home we work on. We aim to create spaces that feel
                      customized, lasting, and truly livable.
                    </p>
                  </div>

                  {/* Our Vision */}
                  <div
                    style={{
                      backgroundColor: '#F6F6F6',
                      borderRadius: '20px',
                      padding: '28px 24px',
                      border: '1px solid #ECECEC'
                    }}
                  >
                    <div style={{ marginBottom: '14px' }}>
                      <img
                        src="/assets/images/about/goal-icon.png"
                        alt="Our Vision"
                        style={{ width: '48px', height: '48px', objectFit: 'contain' }}
                      />
                    </div>
                    <h3
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: '20px',
                        fontWeight: '700',
                        color: '#160A05',
                        marginBottom: '10px'
                      }}
                    >
                      Our Vision
                    </h3>
                    <p style={{ fontSize: '13px', lineHeight: '1.6', color: '#666666', margin: 0 }}>
                      Our mission is to deliver dependable remodeling services that improve the comfort,
                      value, and style of every home we work on. We aim to create spaces that feel
                      customized, lasting, and truly livable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Our Remodeling Process */}
        <section className="about-sec3-section">
          <div
            className="hr-container"
            style={{
              width: '100%',
              maxWidth: '1650px',
              margin: '0 auto',
              padding: '0 24px',
              textAlign: 'center'
            }}
          >
            <div
              style={{
                display: 'inline-block',
                backgroundColor: 'rgba(0, 0, 0, 0.08)',
                padding: '8px 20px',
                borderRadius: '50px',
                fontSize: '13px',
                fontWeight: '600',
                letterSpacing: '1.6px',
                textTransform: 'uppercase',
                color: '#292929',
                marginBottom: '16px'
              }}
            >
              WELCOME TO JRC
            </div>

            <h2 className="about-sec3-heading" style={{ color: "#160A05" }}>Our Remodeling Process</h2>

            {/* 4 Process Cards */}
            <div className="about-process-grid">
              {/* Step 1: Consultation */}
              <div
                style={{
                  backgroundColor: 'transparent',
                  padding: '24px 16px',
                  textAlign: 'center',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
              >
                <div style={{ position: 'relative', marginBottom: '20px' }}>
                  <div
                    style={{
                      width: '68px',
                      height: '68px',
                      backgroundColor: '#FFFFFF',
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 6px 18px rgba(0,0,0,0.06)'
                    }}
                  >
                    <svg
                      style={{ width: '28px', height: '28px', fill: '#160A05' }}
                      viewBox="0 0 512 512"
                    >
                      <path d="M160 288h-16c-35.35 0-64 28.7-64 64.12v63.76c0 35.41 28.65 64.12 64 64.12h16c17.67 0 32-14.36 32-32.06V320.06c0-17.71-14.33-32.06-32-32.06zm208 0h-16c-17.67 0-32 14.35-32 32.06v127.88c0 17.7 14.33 32.06 32 32.06h16c35.35 0 64-28.71 64-64.12v-63.76c0-35.41-28.65-64.12-64-64.12zM256 32C112.91 32 4.57 151.13 0 288v112c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16V288c0-114.67 93.33-207.8 208-207.82 114.67.02 208 93.15 208 207.82v112c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16V288C507.43 151.13 399.09 32 256 32z" />
                    </svg>
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      top: '-6px',
                      right: '-6px',
                      width: '24px',
                      height: '24px',
                      backgroundColor: '#F45404',
                      color: '#FFFFFF',
                      borderRadius: '50%',
                      fontSize: '12px',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    1
                  </div>
                </div>
                <h3
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '20px',
                    fontWeight: '700',
                    color: '#160A05',
                    marginBottom: '10px'
                  }}
                >
                  Consultation
                </h3>
                <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#666666', margin: 0 }}>
                  We listen carefully to your ideas, goals, and project requirements.
                </p>
              </div>

              {/* Step 2: Planning & Design */}
              <div
                style={{
                  backgroundColor: 'transparent',
                  padding: '24px 16px',
                  textAlign: 'center',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
              >
                <div style={{ position: 'relative', marginBottom: '20px' }}>
                  <div
                    style={{
                      width: '68px',
                      height: '68px',
                      backgroundColor: '#FFFFFF',
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 6px 18px rgba(0,0,0,0.06)'
                    }}
                  >
                    <svg
                      style={{ width: '28px', height: '28px', fill: '#160A05' }}
                      viewBox="0 0 512 512"
                    >
                      <path d="M480 128V96h20c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v20H64V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v40c0 6.627 5.373 12 12 12h20v320H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-20h384v20c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-20V128zM96 276V140c0-6.627 5.373-12 12-12h168c6.627 0 12 5.373 12 12v136c0 6.627-5.373 12-12 12H108c-6.627 0-12-5.373-12-12zm320 96c0 6.627-5.373 12-12 12H236c-6.627 0-12-5.373-12-12v-52h72c13.255 0 24-10.745 24-24v-72h84c6.627 0 12 5.373 12 12v136z" />
                    </svg>
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      top: '-6px',
                      right: '-6px',
                      width: '24px',
                      height: '24px',
                      backgroundColor: '#F45404',
                      color: '#FFFFFF',
                      borderRadius: '50%',
                      fontSize: '12px',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    2
                  </div>
                </div>
                <h3
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '20px',
                    fontWeight: '700',
                    color: '#160A05',
                    marginBottom: '10px'
                  }}
                >
                  Planning &amp; Design
                </h3>
                <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#666666', margin: 0 }}>
                  Our team develops a detailed strategy that aligns with your vision and budget.
                </p>
              </div>

              {/* Step 3: Construction */}
              <div
                style={{
                  backgroundColor: 'transparent',
                  padding: '24px 16px',
                  textAlign: 'center',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
              >
                <div style={{ position: 'relative', marginBottom: '20px' }}>
                  <div
                    style={{
                      width: '68px',
                      height: '68px',
                      backgroundColor: '#FFFFFF',
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 6px 18px rgba(0,0,0,0.06)'
                    }}
                  >
                    <svg
                      style={{ width: '28px', height: '28px', fill: '#160A05' }}
                      viewBox="0 0 576 512"
                    >
                      <path d="M550.5 241l-50.089-86.786c1.071-2.142 1.875-4.553 1.875-7.232 0-8.036-6.696-14.733-14.732-15.001l-55.447-95.893c.536-1.607 1.071-3.214 1.071-4.821 0-8.571-6.964-15.268-15.268-15.268-4.821 0-8.839 2.143-11.786 5.625H299.518C296.839 18.143 292.821 16 288 16s-8.839 2.143-11.518 5.625H170.411C167.464 18.143 163.447 16 158.625 16c-8.303 0-15.268 6.696-15.268 15.268 0 1.607.536 3.482 1.072 4.821l-55.983 97.233c-5.356 2.41-9.107 7.5-9.107 13.661 0 .535.268 1.071.268 1.607l-53.304 92.143c-7.232 1.339-12.59 7.5-12.59 15 0 7.232 5.089 13.393 12.054 15l55.179 95.358c-.536 1.607-.804 2.946-.804 4.821 0 7.232 5.089 13.393 12.054 14.732l51.697 89.732c-.536 1.607-1.071 3.482-1.071 5.357 0 8.571 6.964 15.268 15.268 15.268 4.821 0 8.839-2.143 11.518-5.357h106.875C279.161 493.857 283.447 496 288 496s8.839-2.143 11.518-5.357h107.143c2.678 2.946 6.696 4.821 10.982 4.821 8.571 0 15.268-6.964 15.268-15.268 0-1.607-.267-2.946-.803-4.285l51.697-90.268c6.964-1.339 12.054-7.5 12.054-14.732 0-1.607-.268-3.214-.804-4.821l54.911-95.358c6.964-1.339 12.322-7.5 12.322-15-.002-7.232-5.092-13.393-11.788-14.732z" />
                    </svg>
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      top: '-6px',
                      right: '-6px',
                      width: '24px',
                      height: '24px',
                      backgroundColor: '#F45404',
                      color: '#FFFFFF',
                      borderRadius: '50%',
                      fontSize: '12px',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    3
                  </div>
                </div>
                <h3
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '20px',
                    fontWeight: '700',
                    color: '#160A05',
                    marginBottom: '10px'
                  }}
                >
                  Construction
                </h3>
                <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#666666', margin: 0 }}>
                  Experienced professionals complete every phase with precision and care.
                </p>
              </div>

              {/* Step 4: Final Walkthrough */}
              <div
                style={{
                  backgroundColor: 'transparent',
                  padding: '24px 16px',
                  textAlign: 'center',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
              >
                <div style={{ position: 'relative', marginBottom: '20px' }}>
                  <div
                    style={{
                      width: '68px',
                      height: '68px',
                      backgroundColor: '#FFFFFF',
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 6px 18px rgba(0,0,0,0.06)'
                    }}
                  >
                    <svg
                      style={{ width: '28px', height: '28px', fill: '#160A05' }}
                      viewBox="0 0 512 512"
                    >
                      <path d="M243.2 189.9V258c26.1 5.9 49.3 15.6 73.6 22.3v-68.2c-26-5.8-49.4-15.5-73.6-22.2zm223.3-123c-34.3 15.9-76.5 31.9-117 31.9C296 98.8 251.7 64 184.3 64c-25 0-47.3 4.4-68 12 2.8-7.3 4.1-15.2 3.6-23.6C118.1 24 94.8 1.2 66.3 0 34.3-1.3 8 24.3 8 56c0 19 9.5 35.8 24 45.9V488c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24v-94.4c28.3-12.1 63.6-22.1 114.4-22.1 53.6 0 97.8 34.8 165.2 34.8 48.2 0 86.7-16.3 122.5-40.9 8.7-6 13.8-15.8 13.8-26.4V95.9c.1-23.3-24.2-38.8-45.4-29zM169.6 325.5c-25.8 2.7-50 8.2-73.6 16.6v-70.5c26.2-9.3 47.5-15 73.6-17.4z" />
                    </svg>
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      top: '-6px',
                      right: '-6px',
                      width: '24px',
                      height: '24px',
                      backgroundColor: '#F45404',
                      color: '#FFFFFF',
                      borderRadius: '50%',
                      fontSize: '12px',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    4
                  </div>
                </div>
                <h3
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '20px',
                    fontWeight: '700',
                    color: '#160A05',
                    marginBottom: '10px'
                  }}
                >
                  Final Walkthrough
                </h3>
                <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#666666', margin: 0 }}>
                  We review the completed project with you to ensure every detail meets expectations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Why Choose JRC Home Remodeling */}
        <section ref={section4Ref} className="about-sec4-section" style={{ backgroundColor: "#FFFFFF" }}>
          <div
            className="hr-container"
            style={{
              width: '100%',
              maxWidth: '1650px',
              margin: '0 auto',
              padding: '0 24px'
            }}
          >
            <div className="about-sec4-header" style={{ textAlign: "center", margin: "0 auto 60px" }}>
              <div
                style={{
                  display: 'inline-block',
                  backgroundColor: 'rgba(0, 0, 0, 0.08)',
                  padding: '8px 20px',
                  borderRadius: '50px',
                  fontSize: '13px',
                  fontWeight: '600',
                  letterSpacing: '1.6px',
                  textTransform: 'uppercase',
                  color: '#292929',
                  marginBottom: '16px'
                }}
              >
                WHAT WE DO
              </div>
              <h2 className="about-sec4-heading" style={{ color: "#160A05" }}>Why Choose JRC Home Remodeling For Your Remodeling Services</h2>
            </div>

            <div
              className="about-sec4-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))',
                gap: '50px',
                alignItems: 'stretch'
              }}
            >
              {/* Left Column: 4 Service Features */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {/* Feature 1: Kitchen Remodeling */}
                <div
                  style={{
                    display: 'flex',
                    gap: '24px',
                    alignItems: 'center',
                    padding: '25px 0',
                    borderBottom: '1px solid #CCCCCC'
                  }}
                >
                  <img
                    src="/assets/images/about/icon-why-2.svg"
                    alt="Kitchen Remodeling"
                    style={{
                      width: '60px',
                      height: '60px',
                      flexShrink: 0,
                      objectFit: 'contain'
                    }}
                  />
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: '24px',
                        fontWeight: '600',
                        color: '#160A05',
                        marginBottom: '8px'
                      }}
                    >
                      Kitchen Remodeling
                    </h3>
                    <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#666666', margin: 0 }}>
                      Transform your kitchen into the heart of your home with modern layouts, custom
                      cabinetry, premium countertops, and improved functionality.
                    </p>
                  </div>
                </div>

                {/* Feature 2: Bathroom Remodeling */}
                <div
                  style={{
                    display: 'flex',
                    gap: '24px',
                    alignItems: 'center',
                    padding: '25px 0',
                    borderBottom: '1px solid #CCCCCC'
                  }}
                >
                  <img
                    src="/assets/images/about/icon-why-1.svg"
                    alt="Bathroom Remodeling"
                    style={{
                      width: '60px',
                      height: '60px',
                      flexShrink: 0,
                      objectFit: 'contain'
                    }}
                  />
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: '24px',
                        fontWeight: '600',
                        color: '#160A05',
                        marginBottom: '8px'
                      }}
                    >
                      Bathroom Remodeling
                    </h3>
                    <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#666666', margin: 0 }}>
                      Create a comfortable and stylish retreat with custom showers, vanities, tile
                      installations, and contemporary fixtures.
                    </p>
                  </div>
                </div>

                {/* Feature 3: Turnkey Renovation */}
                <div
                  style={{
                    display: 'flex',
                    gap: '24px',
                    alignItems: 'center',
                    padding: '25px 0',
                    borderBottom: '1px solid #CCCCCC'
                  }}
                >
                  <img
                    src="/assets/images/about/icon-why-3.svg"
                    alt="Turnkey Renovation"
                    style={{
                      width: '60px',
                      height: '60px',
                      flexShrink: 0,
                      objectFit: 'contain'
                    }}
                  />
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: '24px',
                        fontWeight: '600',
                        color: '#160A05',
                        marginBottom: '8px'
                      }}
                    >
                      Turnkey Renovation
                    </h3>
                    <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#666666', margin: 0 }}>
                      Convert unused basement space into a functional living area, entertainment room,
                      home office, or guest suite.
                    </p>
                  </div>
                </div>

                {/* Feature 4: Whole Home Renovations */}
                <div
                  style={{
                    display: 'flex',
                    gap: '24px',
                    alignItems: 'center',
                    padding: '25px 0'
                  }}
                >
                  <img
                    src="/assets/images/about/icon-why-3.svg"
                    alt="Whole Home Renovations"
                    style={{
                      width: '60px',
                      height: '60px',
                      flexShrink: 0,
                      objectFit: 'contain'
                    }}
                  />
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: '24px',
                        fontWeight: '600',
                        color: '#160A05',
                        marginBottom: '8px'
                      }}
                    >
                      Whole Home Renovations
                    </h3>
                    <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#666666', margin: 0 }}>
                      Reimagine your entire home with comprehensive remodeling solutions designed to
                      enhance comfort, efficiency, and value.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Showcase Image (Height matched to left services with parallax scroll) */}
              <div
                className="about-sec4-img-wrapper"
                style={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  position: 'relative',
                  boxShadow: '0 12px 36px rgba(0,0,0,0.1)'
                }}
              >
                <motion.img
                  src="/assets/images/about/about-why-choose.jpg"
                  alt="JRC Remodeling Project Showcase"
                  style={{
                    position: 'absolute',
                    top: '-60px',
                    left: 0,
                    width: '100%',
                    height: 'calc(100% + 120px)',
                    display: 'block',
                    objectFit: 'cover',
                    objectPosition: 'center center',
                    y: yImage4
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: What Our Clients Say About Our Painting Company */}
        <section className="about-sec5-section" style={{ backgroundColor: "#132B45", color: "#FFFFFF" }}>
          <div
            className="hr-container"
            style={{
              width: '100%',
              maxWidth: '1650px',
              margin: '0 auto',
              padding: '0 24px'
            }}
          >
            <div style={{ marginBottom: '40px' }}>
              <div
                style={{
                  display: 'inline-block',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  padding: '8px 20px',
                  borderRadius: '50px',
                  fontSize: '13px',
                  fontWeight: '600',
                  letterSpacing: '1.6px',
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                  marginBottom: '16px'
                }}
              >
                <span style={{ color: '#FFB800', marginRight: '6px' }}>●</span>
                LATEST PROJECT
              </div>

              <h2 className="about-sec5-heading">
                What Our Clients Say <br />
                About Our Painting Company
              </h2>
            </div>

            <div className="about-sec5-grid">
              {/* Left Column: Cityscape Photo Card with Avatar Stack */}
              <div
                className="about-sec5-left-card"
                style={{
                  position: 'relative',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  minHeight: '380px',
                  height: '380px',
                  backgroundImage: "url('/assets/images/about/about-city-bg.jpg')",
                  backgroundPosition: 'center center',
                  backgroundSize: 'cover',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.25)',
                  display: 'flex',
                  alignItems: 'flex-end'
                }}
              >
                {/* Gradient tint over image */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)'
                  }}
                />

                {/* Overlapping Avatars & Text Badge */}
                <div
                  style={{
                    position: 'relative',
                    zIndex: 2,
                    padding: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px'
                  }}
                >
                  <div style={{ display: 'flex' }}>
                    <img
                      src="/assets/images/about/user9.jpg"
                      alt="Customer"
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '50%',
                        border: '2px solid #FFFFFF',
                        objectFit: 'cover'
                      }}
                    />
                    <img
                      src="/assets/images/about/user8.jpg"
                      alt="Customer"
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '50%',
                        border: '2px solid #FFFFFF',
                        objectFit: 'cover',
                        marginLeft: '-12px'
                      }}
                    />
                    <img
                      src="/assets/images/about/user7.jpg"
                      alt="Customer"
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '50%',
                        border: '2px solid #FFFFFF',
                        objectFit: 'cover',
                        marginLeft: '-12px'
                      }}
                    />
                  </div>
                  <div style={{ fontSize: '15px', fontWeight: '600', color: '#FFFFFF', lineHeight: '1.35' }}>
                    Trusted By <span style={{ color: '#F45404' }}>1000+</span>
                    <br />
                    Satisfied Customers
                  </div>
                </div>
              </div>

              {/* Right Column: 3D Rectangular Cube Rotating Testimonial Slider */}
              <C3DRectangularCubeSlider />
            </div>
          </div>
        </section>

        {/* Section 6: Scrolling Marquee Badges */}
        <HomeRemodelingBadges />
      </article>
    </>
  );
}
