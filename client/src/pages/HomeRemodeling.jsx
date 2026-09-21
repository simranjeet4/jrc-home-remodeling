import { Helmet } from 'react-helmet-async';
import HomeRemodelingHero from '../components/sections/HomeRemodelingHero';
import HomeRemodelingServices from '../components/sections/HomeRemodelingServices';
import HomeRemodelingAbout from '../components/sections/HomeRemodelingAbout';
import HomeRemodelingProjects from '../components/sections/HomeRemodelingProjects';
import HomeRemodelingProcess from '../components/sections/HomeRemodelingProcess';
import HomeRemodelingFAQ from '../components/sections/HomeRemodelingFAQ';
import HomeRemodelingBadges from '../components/sections/HomeRemodelingBadges';
import '../styles/home-remodeling.css';

/**
 * HomeRemodeling
 * Full desktop reconstruction of /home-remodeling/
 * Section order preserved exactly:
 * 1. Hero Section (with Emergency Call CTA & background image)
 * 2. WHAT WE DO (4-card services grid)
 * 3. GET TO KNOW US (Progress metrics, narrative, mission & vision, CTAs)
 * 4. Latest Projects (Renovations portfolio showcase)
 * 5. WORKING PROCESS (4-step sequential timeline)
 * 6. ASK A QUESTION (FAQ accordion & social proof badge)
 * 7. Trust Badges & Guarantees
 */
export default function HomeRemodeling() {
  return (
    <>
      <Helmet>
        <title>Denver Home Remodeling Contractors | Free Estimate</title>
        <meta
          name="description"
          content="Transform Your Home with JRC. Get a Free Estimate!"
        />
        <link rel="canonical" href="https://jrchomeremodeling.com/home-remodeling/" />
      </Helmet>

      <article className="home-remodeling-page">
        {/* Section 1: Hero */}
        <HomeRemodelingHero />

        {/* Section 2: What We Do */}
        <HomeRemodelingServices />

        {/* Section 3: Get To Know Us */}
        <HomeRemodelingAbout />

        {/* Section 4: Latest Projects */}
        <HomeRemodelingProjects />

        {/* Section 5: Working Process */}
        <HomeRemodelingProcess />

        {/* Section 6: FAQ & Social Proof */}
        <HomeRemodelingFAQ />

        {/* Section 7: Badges & Guarantees */}
        <HomeRemodelingBadges />
      </article>
    </>
  );
}
