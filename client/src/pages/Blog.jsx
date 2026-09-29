import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import HomeRemodelingBadges from '../components/sections/HomeRemodelingBadges';
import '../styles/blog.css';

const BLOG_POSTS = [
  {
    id: 1,
    title: 'Affordable Handyman Services | Best Handyman Services Near Me & Handyman for Hire Near You',
    slug: '/handyman-near-me',
    date: 'April 24, 2026',
    category: 'Handyman Services',
    image: '/assets/images/JRC-Home-Remodeling-Blog-Ads-APril-24-2026.png',
    excerpt:
      'Home repairs are an unavoidable part of homeownership—but finding reliable and affordable handyman services doesn’t have to be difficult. Small issues like damaged drywall, loose fixtures, or faulty doors may seem minor, but over time, they can affect your comfort and safety...',
    tags: ['Construction', 'Interior', 'Furniture', 'Space'],
  },
  {
    id: 2,
    title: 'Affordable Home Remodeling Colorado: How to Choose Local Home Remodeling Contractors Near You',
    slug: '/home-remodeling',
    date: 'April 23, 2026',
    category: 'Home Remodeling',
    image: '/assets/images/JRC-Home-Remodeling-Blog-April-23-2026.png',
    excerpt:
      'Why Home Remodeling in Colorado Is a Smart Investment. In 2026, more Colorado homeowners are choosing to remodel instead of moving. Upgrading your home improves comfort, increases energy efficiency, and boosts property value. From kitchen upgrades to full home transformations...',
    tags: ['Painting', 'Construction', 'Interior', 'Building'],
  },
  {
    id: 3,
    title: 'Affordable Kitchen Remodeling in Colorado – Fast & Reliable Renovation Services Near You',
    slug: '/kitchen-remodeling',
    date: 'April 22, 2026',
    category: 'Kitchen Remodeling',
    image: '/assets/images/JRC-Home-Remodeling-Blog-Ads-April-22-2026.png',
    excerpt:
      'Kitchen Remodeling Services in Colorado You Can Trust. At JRC Home Remodeling, we specialize in professional kitchen renovation services homeowners trust for quality and consistency. We transform outdated kitchens into modern, functional spaces built for everyday living...',
    tags: ['Interior', 'Furniture', 'Space', 'Urban'],
  },
  {
    id: 4,
    title: 'Affordable Bathroom Remodeling in Denver – Fast & Reliable Renovation Services',
    slug: '/bathroom-remodeling',
    date: 'April 21, 2026',
    category: 'Bathroom Remodeling',
    image: '/assets/images/Poster-Ads-April-21-2026.png',
    excerpt:
      'Affordable bathroom remodeling in Denver with fast turnaround, quality materials, and free estimate. Transform your bathroom today with high-end fixtures, custom tile, and luxury vanities from JRC Home Remodeling...',
    tags: ['Interior', 'Building', 'Space'],
  },
  {
    id: 5,
    title: 'Commercial Handyman Services in 2026: The Complete Business Owner’s Guide',
    slug: '/handyman-near-me',
    date: 'January 30, 2026',
    category: 'Handyman Services',
    image: '/assets/images/Commercial-Handyman-Services.jpg',
    excerpt:
      'Running a business in 2026 is not an easy job. The construction of buildings has become more complex than in the past. The safety measures have been improved to more stringent levels. Learn how commercial handyman specialists keep your facility operating at peak performance...',
    tags: ['Construction', 'Building', 'Urban'],
  },
  {
    id: 6,
    title: 'Finding the Best Kitchen Contractors Near Me Can Be a Challenge',
    slug: '/kitchen-remodeling',
    date: 'January 8, 2026',
    category: 'Kitchen Remodeling',
    image: '/assets/images/Kitchen-Contractors.jpg',
    excerpt:
      'Searching for kitchen contractors near me implies that you desire an unobstructed experience, transparent communication, and a kitchen that is in harmony with your way of living. Renovation of a kitchen is a significant home investment in comfort, function, and value...',
    tags: ['Construction', 'Interior', 'Furniture', 'Urban'],
  },
];

const POPULAR_TAGS = [
  'Painting',
  'Construction',
  'Interior',
  'Furniture',
  'Building',
  'Space',
  'Urban',
];

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTag, setActiveTag] = useState(null);
  const [visibleCount, setVisibleCount] = useState(4);

  const handleTagClick = (tag) => {
    setActiveTag((prev) => (prev === tag ? null : tag));
    setVisibleCount(4);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesSearch =
      searchQuery.trim() === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTag = !activeTag || post.tags.includes(activeTag);

    return matchesSearch && matchesTag;
  });

  const displayedPosts = filteredPosts.slice(0, visibleCount);

  return (
    <>
      <Helmet>
        <title>Blog - jrchomeremodeling</title>
        <meta
          name="description"
          content="Welcome to our remodeling blog! Here you’ll find creative design ideas, DIY tips, renovation guides, and expert advice to help you transform your home with confidence and style."
        />
        <meta property="og:title" content="Blog - jrchomeremodeling" />
        <meta
          property="og:description"
          content="Welcome to our remodeling blog! Here you’ll find creative design ideas, DIY tips, renovation guides, and expert advice to help you transform your home with confidence and style."
        />
        <meta property="og:url" content="https://jrchomeremodeling.com/blog/" />
      </Helmet>

      {/* Hero Section (Elementor 4ada468) */}
      <section className="blog-hero" aria-label="Blog Hero">
        <div className="blog-hero-content">
          <h1 className="blog-hero-title">The JRCHome Remodeling Blog</h1>
          <p className="blog-hero-subtitle">
            Welcome to our remodeling blog! Here you’ll find creative design
            ideas, DIY tips, renovation guides, and expert advice to help you
            transform your home with confidence and style.
          </p>
        </div>
      </section>

      {/* Main Content Layout (Elementor bd09ff4) */}
      <section className="blog-main-section">
        <div className="blog-container">
          {/* Left Sidebar (Elementor 05a8cb1) */}
          <aside className="blog-sidebar" aria-label="Sidebar">
            {/* Widget 1: Search Form (Elementor 25d9100 / a483af0) */}
            <div className="blog-widget-box">
              <h2 className="blog-widget-title">Search Here</h2>
              <form className="blog-search-form" onSubmit={handleSearchSubmit}>
                <input
                  type="text"
                  className="blog-search-input"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setVisibleCount(4);
                  }}
                  aria-label="Search articles"
                />
                <button
                  type="submit"
                  className="blog-search-button"
                  aria-label="Submit Search"
                >
                  <svg viewBox="0 0 24 24">
                    <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                  </svg>
                </button>
              </form>
            </div>

            {/* Widget 2: Popular Tags (Elementor 31678fe / ecde380) */}
            <div className="blog-widget-box">
              <h2 className="blog-widget-title">Popular Tags</h2>
              <div className="blog-tags-container">
                {POPULAR_TAGS.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    className={`blog-tag-pill ${activeTag === tag ? 'active' : ''}`}
                    onClick={() => handleTagClick(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Widget 3: Promo / Ad Banner (Elementor 6e731ae / b516e0c) */}
            <div className="blog-sidebar-banner">
              <img
                src="/assets/images/Gemini_Generated_Image_99baa499baa499ba.jpg"
                alt="JRC Home Remodeling Featured Service"
                loading="lazy"
              />
            </div>
          </aside>

          {/* Right Column: Blog Post Grid (Elementor ce416a3 / 43270a0) */}
          <main className="blog-posts-column">
            {displayedPosts.length === 0 ? (
              <div className="blog-empty-state">
                <h3>No articles found</h3>
                <p>Try searching for a different keyword or clearing your tag filter.</p>
                <button
                  type="button"
                  className="blog-empty-reset-btn"
                  onClick={() => {
                    setSearchQuery('');
                    setActiveTag(null);
                  }}
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="blog-post-grid">
                {displayedPosts.map((post) => (
                  <article key={post.id} className="blog-post-card">
                    <div className="blog-card-media">
                      <img
                        src={post.image}
                        alt={post.title}
                        loading="lazy"
                      />
                      <Link
                        to={post.slug}
                        className="blog-card-overlay"
                        aria-label={`Read more about ${post.title}`}
                      >
                        <span className="blog-card-overlay-icon">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                          </svg>
                        </span>
                      </Link>
                    </div>

                    <div className="blog-card-body">
                      <div className="blog-card-meta">
                        <span className="blog-card-category">{post.category}</span>
                        <span className="blog-card-date">
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                          </svg>
                          {post.date}
                        </span>
                      </div>

                      <h2 className="blog-card-title">
                        <Link to={post.slug}>{post.title}</Link>
                      </h2>

                      <p className="blog-card-excerpt">{post.excerpt}</p>

                      <Link to={post.slug} className="blog-readmore-link">
                        Read More
                        <svg viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                        </svg>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {/* Load More Button */}
            {filteredPosts.length > visibleCount && (
              <div className="blog-loadmore-wrap">
                <button
                  type="button"
                  className="blog-loadmore-btn"
                  onClick={() => setVisibleCount((prev) => prev + 4)}
                >
                  Load More
                </button>
              </div>
            )}
          </main>
        </div>
      </section>

      {/* Trust Badges Marquee Section */}
      <HomeRemodelingBadges />
    </>
  );
}
