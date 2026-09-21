import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../styles/tile.css";

export default function JrcTile() {
  const [openFaq, setOpenFaq] = useState(null);
  const [sliderOffset, setSliderOffset] = useState(0.67);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleSliderChange = (e) => {
    setSliderOffset(parseFloat(e.target.value));
  };

  return (
    <>
      <Helmet>
        <title>JRC Tile Installation: Expert Services | jrc installers</title>
        <meta
          name="description"
          content="JRC Tile Installation: Expert tile contractors providing quality installation and remodeling services. Get a free estimate today!"
        />
        <link rel="canonical" href="https://jrchomeremodeling.com/jrc-tile/" />
      </Helmet>

      <div className="tile-page-exact elementor-6411">
        {/* Section 0: Hero */}
        <div className="elementor-element elementor-element-6801ab7 e-flex e-con-boxed e-con e-parent">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-08e4342 e-con-full e-flex e-con e-child">
              <div className="elementor-element elementor-element-61fe928 e-con-full e-flex e-con e-child">
                <div className="elementor-element elementor-element-4606b22 elementor-widget elementor-widget-heading">
                  <h2 className="elementor-heading-title elementor-size-default">PRECISION TILE INSTALLATION</h2>
                </div>
                <div className="elementor-element elementor-element-b8c3956 elementor-widget elementor-widget-heading">
                  <h2 className="elementor-heading-title elementor-size-default">Professional Tile Installers Serving Denver, CO</h2>
                </div>
                <div className="elementor-element elementor-element-bebf28a elementor-widget elementor-widget-text-editor">
                  <p>Transform your space with precision, craftsmanship, and an eye for detail. Our tile contractors bring over <strong>15 years of experience</strong> to every job — wall tile, floor tile, backsplashes, shower tile, and more — with a commitment to perfection that shows in every grout line.</p>
                </div>
                <div className="elementor-element elementor-element-ffa3840 elementor-widget__width-auto elementor-widget elementor-widget-button">
                  <a className="elementor-button elementor-button-link elementor-size-sm" href="tel:3034182167">
                    <span className="elementor-button-content-wrapper">
                      <span className="elementor-button-icon">
                        <i aria-hidden="true" className="arrow_right-up"></i>
                      </span>
                      <span className="elementor-button-text">Get a Free Estimate</span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="elementor-element elementor-element-e0ce6ec e-con-full e-flex e-con e-child"></div>
            </div>
          </div>
        </div>

        {/* Section 1: Metrics & Quote Overlap */}
        <div className="elementor-element elementor-element-0c013b7 e-con-full e-flex e-con e-parent">
          <div className="elementor-element elementor-element-c67547b e-con-full e-flex e-con e-child">
            <div className="elementor-element elementor-element-d0c47c3 e-con-full e-flex e-con e-child">
              <div className="elementor-element elementor-element-42d5f88 e-con-full e-flex e-con e-child">
                <div className="elementor-element elementor-element-33be7d7 elementor-widget elementor-widget-heading">
                  <h2 className="elementor-heading-title elementor-size-default">100+</h2>
                </div>
                <div className="elementor-element elementor-element-af68658 elementor-widget elementor-widget-text-editor">
                  <p>Tile Projects Completed</p>
                </div>
              </div>
              <div className="elementor-element elementor-element-03daf53 e-con-full e-flex e-con e-child">
                <div className="elementor-element elementor-element-082064e elementor-widget elementor-widget-heading">
                  <h2 className="elementor-heading-title elementor-size-default">10+</h2>
                </div>
                <div className="elementor-element elementor-element-2fd35be elementor-widget elementor-widget-text-editor">
                  <p>Years Foreman Experience</p>
                </div>
              </div>
              <div className="elementor-element elementor-element-c3b4674 e-con-full e-flex e-con e-child">
                <div className="elementor-element elementor-element-9d434bd elementor-widget elementor-widget-heading">
                  <h2 className="elementor-heading-title elementor-size-default">100%</h2>
                </div>
                <div className="elementor-element elementor-element-182f1d8 elementor-widget elementor-widget-text-editor">
                  <p>Client Satisfaction</p>
                </div>
              </div>
            </div>

            <div className="elementor-element elementor-element-a14c525 e-con-full e-flex e-con e-child">
              <div className="elementor-element elementor-element-88aa07f e-con-full e-flex e-con e-child">
                <div className="elementor-element elementor-element-3d4e493 e-con-full e-flex e-con e-child">
                  <div className="elementor-element elementor-element-2b1e0c0 elementor-widget elementor-widget-heading">
                    <h2 className="elementor-heading-title elementor-size-default">"JRC did an awesome job with our kitchen floor! They were responsive, pleasant, professional, had good communication, did a great job!"</h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-11e6332 e-con-full e-flex e-con e-child">
                  <div className="elementor-element elementor-element-82c9a0b elementor-widget elementor-widget-image">
                    <img width="101" height="101" src="/assets/images/client-shape.png" alt="" />
                  </div>
                </div>
              </div>

              <div className="elementor-element elementor-element-ebd87b5 e-con-full e-flex e-con e-child">
                <div className="elementor-element elementor-element-c18ce55 elementor-widget elementor-widget-spacer">
                  <div className="elementor-spacer">
                    <div className="elementor-spacer-inner"></div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-cb27841 elementor-position-right elementor-widget elementor-widget-image-box">
                  <div className="elementor-image-box-wrapper">
                    <figure className="elementor-image-box-img">
                      <img width="56" height="56" src="/assets/images/user8.jpg" alt="" />
                    </figure>
                    <div className="elementor-image-box-content">
                      <h3 className="elementor-image-box-title">Charissa Walton</h3>
                      <p className="elementor-image-box-description">Google Review<br />⭐⭐⭐⭐⭐</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: WHAT WE DO (4 Cards) */}
        <div className="elementor-element elementor-element-e1ad2fd e-flex e-con-boxed e-con e-parent">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-07fa4bd e-con-full e-flex e-con e-child">
              <div className="elementor-element elementor-element-62e4be8 e-con-full e-flex e-con e-child">
                <div className="elementor-element elementor-element-6425119 elementor-widget elementor-widget-heading">
                  <h2 className="elementor-heading-title elementor-size-default">WHAT WE DO</h2>
                </div>
                <div className="elementor-element elementor-element-a3fd124 elementor-widget elementor-widget-heading">
                  <h2 className="elementor-heading-title elementor-size-default">Transform Your Space With Expert Tile Installation</h2>
                </div>
              </div>
              <div className="elementor-element elementor-element-cd7c709 e-con-full e-flex e-con e-child">
                <div className="elementor-element elementor-element-728e46a elementor-widget elementor-widget-text-editor">
                  <p>Tile is one of the most visible elements of any remodel — it can define the character of a kitchen, elevate a bathroom, and make a floor the centerpiece of a room. Here’s what we do:</p>
                </div>
              </div>
            </div>

            <div className="elementor-element elementor-element-0ea26ef e-con-full e-flex e-con e-child">
              {/* Card 1 */}
              <div className="elementor-element elementor-element-3bffe14 e-con-full e-flex e-con e-child">
                <div className="elementor-element elementor-element-439f9ce elementor-widget elementor-widget-image">
                  <img width="64" height="64" src="/assets/images/tiles.png" alt="" />
                </div>
                <div className="elementor-element elementor-element-80fa250 elementor-widget elementor-widget-spacer">
                  <div className="elementor-spacer"><div className="elementor-spacer-inner"></div></div>
                </div>
                <div className="elementor-element elementor-element-95aa1d4 elementor-widget elementor-widget-heading">
                  <h2 className="elementor-heading-title elementor-size-default">Kitchen Floor Tile</h2>
                </div>
                <div className="elementor-element elementor-element-91bad73 elementor-widget elementor-widget-text-editor">
                  <p>Durable, beautiful flooring that withstands daily use without sacrificing style.</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="elementor-element elementor-element-84cc253 e-con-full e-flex e-con e-child">
                <div className="elementor-element elementor-element-af96387 elementor-widget elementor-widget-image">
                  <img width="64" height="64" src="/assets/images/tiles.png" alt="" />
                </div>
                <div className="elementor-element elementor-element-a891eac elementor-widget elementor-widget-spacer">
                  <div className="elementor-spacer"><div className="elementor-spacer-inner"></div></div>
                </div>
                <div className="elementor-element elementor-element-7d82e6f elementor-widget elementor-widget-heading">
                  <h2 className="elementor-heading-title elementor-size-default">Kitchen Backsplash Tile</h2>
                </div>
                <div className="elementor-element elementor-element-6be1c93 elementor-widget elementor-widget-text-editor">
                  <p>Subway tile, mosaic patterns, and custom designs that instantly modernize your kitchen.</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="elementor-element elementor-element-1cf1f65 e-con-full e-flex e-con e-child">
                <div className="elementor-element elementor-element-90613c4 elementor-widget elementor-widget-image">
                  <img width="64" height="64" src="/assets/images/tiles.png" alt="" />
                </div>
                <div className="elementor-element elementor-element-6a5b9e5 elementor-widget elementor-widget-spacer">
                  <div className="elementor-spacer"><div className="elementor-spacer-inner"></div></div>
                </div>
                <div className="elementor-element elementor-element-7f5a2f4 elementor-widget elementor-widget-heading">
                  <h2 className="elementor-heading-title elementor-size-default">Bathroom Floor & Wall Tile</h2>
                </div>
                <div className="elementor-element elementor-element-51cd358 elementor-widget elementor-widget-text-editor">
                  <p>Precision-set tile for floors, walls, and wet areas that stay waterproof and looking sharp.</p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="elementor-element elementor-element-30deafb e-con-full e-flex e-con e-child">
                <div className="elementor-element elementor-element-b8ae624 elementor-widget elementor-widget-image">
                  <img width="64" height="64" src="/assets/images/tiles.png" alt="" />
                </div>
                <div className="elementor-element elementor-element-07498ef elementor-widget elementor-widget-spacer">
                  <div className="elementor-spacer"><div className="elementor-spacer-inner"></div></div>
                </div>
                <div className="elementor-element elementor-element-52a961f elementor-widget elementor-widget-heading">
                  <h2 className="elementor-heading-title elementor-size-default">Shower Tile Installation</h2>
                </div>
                <div className="elementor-element elementor-element-0365f39 elementor-widget elementor-widget-text-editor">
                  <p>Custom shower surrounds, niches, and bench tile that turn a daily routine into a luxury experience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: WHY CHOOSE JRC (Split Section) */}
        <div className="elementor-element elementor-element-e005d83 e-flex e-con-boxed e-con e-parent">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-2c5f549 e-con-full e-flex e-con e-child">
              {/* Left Photo */}
              <div className="elementor-element elementor-element-1c64f59 e-con-full e-flex e-con e-child"></div>

              {/* Right Content */}
              <div className="elementor-element elementor-element-f6653e0 e-con-full e-flex e-con e-child">
                <div className="elementor-element elementor-element-1e80078 elementor-widget elementor-widget-heading">
                  <h2 className="elementor-heading-title elementor-size-default">WHY CHOOSE JRC</h2>
                </div>
                <div className="elementor-element elementor-element-b6faa72 elementor-widget elementor-widget-heading">
                  <h2 className="elementor-heading-title elementor-size-default">Denver Tile Installers Who Take Pride in the Details</h2>
                </div>
                <div className="elementor-element elementor-element-5c08ba7 elementor-widget elementor-widget-text-editor">
                  <p>Large or small, our tile experts get the job done. Precision lines and clean work are what we take pride in — and there is nothing better than hearing how seamless our work looks once it’s complete. It doesn’t matter what you need tiled: wall tile, floor tile, subway tile, mosaic, large-format, natural stone — we produce high-quality tile work on every single project.</p>
                  <p>At JRC, we know that tile is what catches the eye and can transform a room. More importantly, we understand the disappointment when a great idea is poorly executed. That’s why detail is our main focus — a skilled tile installer can turn a backsplash into a kitchen’s best feature and a shower into a luxury experience. We aim for that on every job.</p>
                </div>

                <div className="elementor-element elementor-element-3688d4d e-con-full e-flex e-con e-child">
                  <div className="elementor-element elementor-element-0cff9fa e-con-full e-flex e-con e-child">
                    <div className="elementor-element elementor-element-eef0a3c elementor-widget elementor-widget-icon-list">
                      <ul className="elementor-icon-list-items">
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon"><i aria-hidden="true" className="icon_check"></i></span>
                          <span className="elementor-icon-list-text">15+ Years of Tile Installation Experience</span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon"><i aria-hidden="true" className="icon_check"></i></span>
                          <span className="elementor-icon-list-text">Wide Range of Tile Options</span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon"><i aria-hidden="true" className="icon_check"></i></span>
                          <span className="elementor-icon-list-text">Precision Lines & Flawless Finishes on Every Project</span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon"><i aria-hidden="true" className="icon_check"></i></span>
                          <span className="elementor-icon-list-text">Affordable & Transparent Pricing</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Right Thumbnail */}
                  <div className="elementor-element elementor-element-a21b037 e-con-full e-flex e-con e-child"></div>
                </div>

                <div className="elementor-element elementor-element-faad2f6 elementor-widget__width-auto elementor-widget elementor-widget-button">
                  <Link className="elementor-button elementor-button-link elementor-size-sm" to="/about-us">
                    <span className="elementor-button-content-wrapper">
                      <span className="elementor-button-icon"><i aria-hidden="true" className="arrow_right-up"></i></span>
                      <span className="elementor-button-text">More About Us</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: OUR SERVICES (3 Horizontal Cards) */}
        <div className="elementor-element elementor-element-26d2498 e-flex e-con-boxed e-con e-parent">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-67be6fe e-con-full e-flex e-con e-child">
              <div className="elementor-element elementor-element-479361f e-con-full e-flex e-con e-child">
                <div className="elementor-element elementor-element-19430a6 elementor-widget elementor-widget-heading">
                  <h2 className="elementor-heading-title elementor-size-default">OUR SERVICES</h2>
                </div>
                <div className="elementor-element elementor-element-e406723 elementor-widget elementor-widget-heading">
                  <h2 className="elementor-heading-title elementor-size-default">Denver's Highly Rated Tile Installation Contractors</h2>
                </div>
                <div className="elementor-element elementor-element-c82473f elementor-widget elementor-widget-text-editor">
                  <p>Whether you’re updating a single backsplash or tiling an entire home renovation, our team delivers the kind of precision work that still looks flawless years later.</p>
                </div>

                <div className="elementor-element elementor-element-7c8aeea e-con-full e-flex e-con e-child">
                  <div className="elementor-element elementor-element-755d048 elementor-widget elementor-widget-button">
                    <Link className="elementor-button elementor-button-link elementor-size-sm" to="/services">
                      <span className="elementor-button-content-wrapper">
                        <span className="elementor-button-icon"><i aria-hidden="true" className="arrow_right-up"></i></span>
                        <span className="elementor-button-text">View All Services</span>
                      </span>
                    </Link>
                  </div>
                  <div className="elementor-element elementor-element-28c28de e-con-full e-flex e-con e-child">
                    <div className="elementor-element elementor-element-faae52d elementor-widget elementor-widget-image">
                      <img width="56" height="56" src="/assets/images/user9.jpg" alt="" />
                    </div>
                    <div className="elementor-element elementor-element-d72fc80 elementor-widget elementor-widget-image">
                      <img width="56" height="56" src="/assets/images/user8.jpg" alt="" />
                    </div>
                    <div className="elementor-element elementor-element-c75507a elementor-widget elementor-widget-image">
                      <img width="56" height="56" src="/assets/images/user7.jpg" alt="" />
                    </div>
                    <div className="elementor-element elementor-element-0c18adc elementor-widget elementor-widget-heading">
                      <h2 className="elementor-heading-title elementor-size-default">Trusted By <span className="orangetext">1000+</span><br /> Satisfied Customers</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Stacked 3 Cards */}
            <div className="elementor-element elementor-element-d397492 e-con-full e-flex e-con e-child">
              <div className="elementor-element elementor-element-4a89a70 e-con-full e-flex e-con e-child">
                {/* Card 1 */}
                <div className="elementor-element elementor-element-ff9aaaf e-con-full e-flex e-con e-child">
                  <div className="elementor-element elementor-element-bec8b9e e-con-full e-flex e-con e-child">
                    <div className="elementor-element elementor-element-1e5cca3 elementor-widget elementor-widget-image">
                      <img width="1000" height="674" src="/assets/images/8293.jpg" alt="" />
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-1176289 e-con-full e-flex e-con e-child">
                    <div className="elementor-element elementor-element-8fc8513 elementor-widget elementor-widget-heading">
                      <h2 className="elementor-heading-title elementor-size-default">Kitchen Backsplash & Floor Tile</h2>
                    </div>
                    <div className="elementor-element elementor-element-5cc720c elementor-widget elementor-widget-text-editor">
                      <p>From classic subway tile to bold custom patterns, we install backsplashes and kitchen floors that hold up to daily use and look great doing it.</p>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="elementor-element elementor-element-dd51a06 e-con-full e-flex e-con e-child">
                  <div className="elementor-element elementor-element-57765dd e-con-full e-flex e-con e-child">
                    <div className="elementor-element elementor-element-93c71c4 elementor-widget elementor-widget-image">
                      <img width="1000" height="667" src="/assets/images/2149684496.jpg" alt="" />
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-6513f85 e-con-full e-flex e-con e-child">
                    <div className="elementor-element elementor-element-b36fedc elementor-widget elementor-widget-heading">
                      <h2 className="elementor-heading-title elementor-size-default">Bathroom & Shower Tile</h2>
                    </div>
                    <div className="elementor-element elementor-element-aed2cdc elementor-widget elementor-widget-text-editor">
                      <p>Precision tile work for bathroom floors, walls, custom shower surrounds, niches, and bench seating — waterproofed and built to last.</p>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="elementor-element elementor-element-3bae998 e-con-full e-flex e-con e-child">
                  <div className="elementor-element elementor-element-3f77daa e-con-full e-flex e-con e-child">
                    <div className="elementor-element elementor-element-f5a5d52 elementor-widget elementor-widget-image">
                      <img width="2560" height="1707" src="/assets/images/6445023_3308010-scaled.jpg" alt="" />
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-db05ec4 e-con-full e-flex e-con e-child">
                    <div className="elementor-element elementor-element-b09adf7 elementor-widget elementor-widget-heading">
                      <h2 className="elementor-heading-title elementor-size-default">Large-Format & Custom Pattern Tile</h2>
                    </div>
                    <div className="elementor-element elementor-element-c539df6 elementor-widget elementor-widget-text-editor">
                      <p>Herringbone layouts, mixed-material accents, oversized porcelain slabs, and other specialty installs handled with the same care as every job.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5: SEE THE TRANSFORMATION (Image Comparison) */}
        <div className="elementor-element elementor-element-2799ad6 e-flex e-con-boxed e-con e-parent">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-4a1082f e-con-full e-flex e-con e-child">
              <div className="elementor-element elementor-element-3074107 elementor-widget elementor-widget-heading">
                <h2 className="elementor-heading-title elementor-size-default">SEE THE TRANSFORMATION</h2>
              </div>
              <div className="elementor-element elementor-element-729cfa5 elementor-widget elementor-widget-heading">
                <h2 className="elementor-heading-title elementor-size-default">The JRC Tile Difference</h2>
              </div>
            </div>

            <div className="elementor-element elementor-element-22d57bd elementor-widget elementor-widget-eael-image-comparison">
              <div className="eael-img-comp-wrapper">
                <div
                  id="eael-image-comparison-22d57bd"
                  className="eael-img-comp-container twentytwenty-container"
                >
                  <img
                    className="eael-after-img"
                    alt="After"
                    src="/assets/images/Gemini_Generated_Image_ofptn1ofptn1ofpt.png"
                  />
                  <div
                    className="eael-before-img-wrap"
                    style={{ clipPath: `inset(0 calc(100% - ${sliderOffset * 100}%) 0 0)` }}
                  >
                    <img
                      className="eael-before-img"
                      alt="Before"
                      src="/assets/images/Gemini_Generated_Image_kdqpu6kdqpu6kdqp.png"
                    />
                  </div>
                  <div
                    className="twentytwenty-bar"
                    style={{ left: `${sliderOffset * 100}%` }}
                  />
                  <div
                    className="twentytwenty-handle"
                    style={{ left: `${sliderOffset * 100}%` }}
                  >
                    <span className="twentytwenty-left-arrow"></span>
                    <span className="twentytwenty-right-arrow"></span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.002"
                    value={sliderOffset}
                    onChange={handleSliderChange}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      opacity: 0,
                      zIndex: 50,
                      cursor: "ew-resize",
                      margin: 0
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 6: Tile Installation FAQs */}
        <div className="elementor-element elementor-element-bd6eaff e-flex e-con-boxed e-con e-parent">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-d2eaebf e-flex e-con-boxed e-con e-child">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-994b5d3 e-con-full e-flex e-con e-child">
                  <div className="elementor-element elementor-element-bdfb223 elementor-widget elementor-widget-heading">
                    <h2 className="elementor-heading-title elementor-size-default">ASK A QUESTION</h2>
                  </div>
                  <div className="elementor-element elementor-element-0510a53 elementor-widget elementor-widget-heading">
                    <h2 className="elementor-heading-title elementor-size-default">Tile Installation FAQs</h2>
                  </div>

                  <div className="elementor-element elementor-element-8d92af4 e-con-full e-flex e-con e-child">
                    <div className="elementor-element elementor-element-ee15d93 elementor-widget elementor-widget-spacer">
                      <div className="elementor-spacer"><div className="elementor-spacer-inner"></div></div>
                    </div>
                    <div className="elementor-element elementor-element-e18d84f e-con-full e-flex e-con e-child">
                      <div className="elementor-element elementor-element-8f54ee4 elementor-widget elementor-widget-image">
                        <img width="56" height="56" src="/assets/images/user9.jpg" alt="" />
                      </div>
                      <div className="elementor-element elementor-element-6754f17 elementor-widget elementor-widget-image">
                        <img width="56" height="56" src="/assets/images/user8.jpg" alt="" />
                      </div>
                      <div className="elementor-element elementor-element-e498a37 elementor-widget elementor-widget-image">
                        <img width="56" height="56" src="/assets/images/user7.jpg" alt="" />
                      </div>
                      <div className="elementor-element elementor-element-45bd73e elementor-widget elementor-widget-heading">
                        <h2 className="elementor-heading-title elementor-size-default">Trusted By <span className="orangetext">1000+</span><br /> Satisfied Customers</h2>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="elementor-element elementor-element-d34646e e-con-full e-flex e-con e-child">
                  <div className="elementor-element elementor-element-38a7249 elementor-widget elementor-widget-eael-adv-accordion">
                    <div className="eael-adv-accordion" id="eael-adv-accordion-38a7249">
                      {/* FAQ 1 */}
                      <div className="eael-accordion-list">
                        <div
                          className={`elementor-tab-title eael-accordion-header ${openFaq === 1 ? "active" : ""}`}
                          onClick={() => toggleFaq(1)}
                          style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                        >
                          <span className="eael-accordion-tab-title">How much does tile installation cost in Denver?</span>
                          <svg aria-hidden="true" className="fa-toggle e-font-icon-svg e-fas-angle-right" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg" style={{ transform: openFaq === 1 ? "rotate(90deg)" : "none", transition: "transform 0.2s" }}>
                            <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                          </svg>
                        </div>
                        {openFaq === 1 && (
                          <div className="eael-accordion-content clearfix">
                            <p>Cost depends on the size of the area, the type of tile (ceramic vs. porcelain vs. natural stone), and the complexity of the pattern. We provide a detailed, free estimate after measuring your space so you know exactly what to expect before any work begins.</p>
                          </div>
                        )}
                      </div>

                      {/* FAQ 2 */}
                      <div className="eael-accordion-list">
                        <div
                          className={`elementor-tab-title eael-accordion-header ${openFaq === 2 ? "active" : ""}`}
                          onClick={() => toggleFaq(2)}
                          style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                        >
                          <span className="eael-accordion-tab-title">How long does tile installation take?</span>
                          <svg aria-hidden="true" className="fa-toggle e-font-icon-svg e-fas-angle-right" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg" style={{ transform: openFaq === 2 ? "rotate(90deg)" : "none", transition: "transform 0.2s" }}>
                            <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                          </svg>
                        </div>
                        {openFaq === 2 && (
                          <div className="eael-accordion-content clearfix">
                            <p>A kitchen backsplash typically takes one to two days. A full bathroom tile project — floor, walls, and shower surround — usually runs three to five days. Larger or more complex projects take longer and are scoped out during your free estimate.</p>
                          </div>
                        )}
                      </div>

                      {/* FAQ 3 */}
                      <div className="eael-accordion-list">
                        <div
                          className={`elementor-tab-title eael-accordion-header ${openFaq === 3 ? "active" : ""}`}
                          onClick={() => toggleFaq(3)}
                          style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                        >
                          <span className="eael-accordion-tab-title">What types of tile do you install?</span>
                          <svg aria-hidden="true" className="fa-toggle e-font-icon-svg e-fas-angle-right" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg" style={{ transform: openFaq === 3 ? "rotate(90deg)" : "none", transition: "transform 0.2s" }}>
                            <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                          </svg>
                        </div>
                        {openFaq === 3 && (
                          <div className="eael-accordion-content clearfix">
                            <p>We work with ceramic, porcelain, marble, travertine, slate, glass tile, subway tile, large-format tile, and custom mosaic patterns. If you have a specific tile or finish in mind, bring it to your consultation and we’ll make it work.</p>
                          </div>
                        )}
                      </div>

                      {/* FAQ 4 */}
                      <div className="eael-accordion-list">
                        <div
                          className={`elementor-tab-title eael-accordion-header ${openFaq === 4 ? "active" : ""}`}
                          onClick={() => toggleFaq(4)}
                          style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                        >
                          <span className="eael-accordion-tab-title">Do I need to supply my own tile?</span>
                          <svg aria-hidden="true" className="fa-toggle e-font-icon-svg e-fas-angle-right" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg" style={{ transform: openFaq === 4 ? "rotate(90deg)" : "none", transition: "transform 0.2s" }}>
                            <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                          </svg>
                        </div>
                        {openFaq === 4 && (
                          <div className="eael-accordion-content clearfix">
                            <p>We can work with tile you’ve already purchased, or we can help you select materials that fit your design and budget. Either way, we’ll advise on what to buy, how much you’ll need, and what to look for in quality.</p>
                          </div>
                        )}
                      </div>

                      {/* FAQ 5 */}
                      <div className="eael-accordion-list">
                        <div
                          className={`elementor-tab-title eael-accordion-header ${openFaq === 5 ? "active" : ""}`}
                          onClick={() => toggleFaq(5)}
                          style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                        >
                          <span className="eael-accordion-tab-title">Can tile be installed over existing tile?</span>
                          <svg aria-hidden="true" className="fa-toggle e-font-icon-svg e-fas-angle-right" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg" style={{ transform: openFaq === 5 ? "rotate(90deg)" : "none", transition: "transform 0.2s" }}>
                            <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                          </svg>
                        </div>
                        {openFaq === 5 && (
                          <div className="eael-accordion-content clearfix">
                            <p>In some cases, yes — but it depends on the condition of the existing surface and the added weight. We assess this during your consultation and recommend the right approach for your specific situation.</p>
                          </div>
                        )}
                      </div>

                      {/* FAQ 6 */}
                      <div className="eael-accordion-list">
                        <div
                          className={`elementor-tab-title eael-accordion-header ${openFaq === 6 ? "active" : ""}`}
                          onClick={() => toggleFaq(6)}
                          style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                        >
                          <span className="eael-accordion-tab-title">Are your tile installers licensed and insured?</span>
                          <svg aria-hidden="true" className="fa-toggle e-font-icon-svg e-fas-angle-right" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg" style={{ transform: openFaq === 6 ? "rotate(90deg)" : "none", transition: "transform 0.2s" }}>
                            <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                          </svg>
                        </div>
                        {openFaq === 6 && (
                          <div className="eael-accordion-content clearfix">
                            <p>Yes. Our tile contractors are fully licensed and insured, protecting both our team and your home throughout the project.</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
