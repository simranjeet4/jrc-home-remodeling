import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BeforeAfterSlider from '../components/common/BeforeAfterSlider';
import EstimateForm from '../components/forms/EstimateForm';
import { COMPANY } from '../content/siteData';
import '../styles/painting.css';

export default function JrcPainting() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Bliss Bernal",
      role: "Denver Homeowner",
      avatar: "/assets/images/user9.jpg",
      text: "JRC did an awesome job with our kitchen floor! They were responsive, pleasant, professional, had good communication, were on time, and most importantly, did a great job! We are so happy with the results and look forward to working with Monica and her team again."
    },
    {
      name: "Toni Starner",
      role: "Denver Homeowner",
      avatar: "/assets/images/user8.jpg",
      text: "Remodeled three bathrooms. We were very impressed with the attention to detail. Always on time, professional, easy to reach. GREAT work!"
    },
    {
      name: "Charissa Walton",
      role: "Denver Homeowner",
      avatar: "/assets/images/user7.jpg",
      text: "I have used JRC twice now - once, to add a bathroom to a basement, and then again to install a tile backsplash in the kitchen. They offered great pricing, were communicative every step of the way, and both projects turned out beautifully. I wouldn't hesitate to use them again!"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Painting Contractor Denver | Interior &amp; Exterior Experts</title>
        <meta
          name="description"
          content="From interior walls to exterior surfaces, JRC Painting is your trusted Denver painting contractor. Expert results with free estimates. Contact us today."
        />
        <link rel="canonical" href="https://jrchomeremodeling.com/jrc-painting/" />
      </Helmet>
<div data-elementor-type="wp-page" data-elementor-id="6372" className="elementor elementor-6372 painting-page-exact">
				<div data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-element elementor-element-9f8b25c e-flex e-con-boxed e-con e-parent" data-id="9f8b25c" data-element_type="container" data-e-type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
					<div className="e-con-inner">
		<div data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-element elementor-element-6e685c0 e-con-full e-flex e-con e-child" data-id="6e685c0" data-element_type="container" data-e-type="container">
				<div className="elementor-element elementor-element-0e52f17 elementor-widget elementor-widget-heading" data-id="0e52f17" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
					<h2 className="elementor-heading-title elementor-size-default">Kitchen Remodeler</h2>				</div>
				<div className="elementor-element elementor-element-d07d3a6 elementor-widget elementor-widget-heading" data-id="d07d3a6" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
					<h2 className="elementor-heading-title elementor-size-default">Professional Painting Services in Denver Metro</h2>				</div>
				<div className="elementor-element elementor-element-aa40a3e elementor-widget elementor-widget-text-editor" data-id="aa40a3e" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
									<p>From interior rooms to full exterior overhauls &mdash; JRC Painting delivers flawless, long-lasting results designed around your style, timeline, and budget.</p>								</div>
		<div data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-element elementor-element-8ff07d6 e-flex e-con-boxed e-con e-child" data-id="8ff07d6" data-element_type="container" data-e-type="container">
					<div className="e-con-inner">
				<div className="elementor-element elementor-element-8e20407 elementor-widget elementor-widget-button" data-id="8e20407" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
										<a className="elementor-button elementor-button-link elementor-size-sm" href="#transform">
						<span className="elementor-button-content-wrapper">
									<span className="elementor-button-text">See the Transformation</span>
					</span>
					</a>
								</div>
				<div className="elementor-element elementor-element-c4cb62b elementor-widget elementor-widget-button" data-id="c4cb62b" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
										<a className="elementor-button elementor-button-link elementor-size-sm" href="#3034182167">
						<span className="elementor-button-content-wrapper">
									<span className="elementor-button-text">Call 303-418-2167</span>
					</span>
					</a>
								</div>
					</div>
				</div>
				</div>
		<div data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-element elementor-element-8fc3feb e-con-full e-flex e-con e-child" data-id="8fc3feb" data-element_type="container" data-e-type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
		<div data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-element elementor-element-9cbdfcd e-flex e-con-boxed e-con e-child" data-id="9cbdfcd" data-element_type="container" data-e-type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
					<div className="e-con-inner">
				<div className="elementor-element elementor-element-d1aa20f elementor-widget" style={{ width: '100%' }}>
    <EstimateForm serviceName="Painting Services" title="" subtitle="" />
  </div>
					</div>
				</div>
				</div>
					</div>
				</div>
		<div data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-element elementor-element-e474b5e e-flex e-con-boxed e-con e-parent" data-id="e474b5e" data-element_type="container" data-e-type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
					<div className="e-con-inner">
		<div data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-element elementor-element-410f3c9 e-con-full e-flex e-con e-child" data-id="410f3c9" data-element_type="container" data-e-type="container">
		<div data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-element elementor-element-490bce2 e-flex e-con-boxed e-con e-child" data-id="490bce2" data-element_type="container" data-e-type="container">
					<div className="e-con-inner">
				<div className="elementor-element elementor-element-79a2b91 elementor-view-stacked elementor-shape-circle elementor-position-block-start elementor-mobile-position-block-start elementor-widget elementor-widget-icon-box" data-id="79a2b91" data-element_type="widget" data-e-type="widget" data-widget_type="icon-box.default">
							<div className="elementor-icon-box-wrapper">

						<div className="elementor-icon-box-icon">
				<span  className="elementor-icon">
				<svg aria-hidden="true" className="e-font-icon-svg e-fas-shield-virus" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M224,192a16,16,0,1,0,16,16A16,16,0,0,0,224,192ZM466.5,83.68l-192-80A57.4,57.4,0,0,0,256.05,0a57.4,57.4,0,0,0-18.46,3.67l-192,80A47.93,47.93,0,0,0,16,128C16,326.5,130.5,463.72,237.5,508.32a48.09,48.09,0,0,0,36.91,0C360.09,472.61,496,349.3,496,128A48,48,0,0,0,466.5,83.68ZM384,256H371.88c-28.51,0-42.79,34.47-22.63,54.63l8.58,8.57a16,16,0,1,1-22.63,22.63l-8.57-8.58C306.47,313.09,272,327.37,272,355.88V368a16,16,0,0,1-32,0V355.88c0-28.51-34.47-42.79-54.63-22.63l-8.57,8.58a16,16,0,0,1-22.63-22.63l8.58-8.57c20.16-20.16,5.88-54.63-22.63-54.63H128a16,16,0,0,1,0-32h12.12c28.51,0,42.79-34.47,22.63-54.63l-8.58-8.57a16,16,0,0,1,22.63-22.63l8.57,8.58c20.16,20.16,54.63,5.88,54.63-22.63V112a16,16,0,0,1,32,0v12.12c0,28.51,34.47,42.79,54.63,22.63l8.57-8.58a16,16,0,0,1,22.63,22.63l-8.58,8.57C329.09,189.53,343.37,224,371.88,224H384a16,16,0,0,1,0,32Zm-96,0a16,16,0,1,0,16,16A16,16,0,0,0,288,256Z"></path></svg>				</span>
			</div>
			
						<div className="elementor-icon-box-content">

									<h3 className="elementor-icon-box-title">
						<span  >
							Licensed &amp; Insured						</span>
					</h3>
				
									<p className="elementor-icon-box-description">
						Full coverage on every project					</p>
				
			</div>
			
		</div>
						</div>
					</div>
				</div>
		<div data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-element elementor-element-69e937e e-flex e-con-boxed e-con e-child" data-id="69e937e" data-element_type="container" data-e-type="container">
					<div className="e-con-inner">
				<div className="elementor-element elementor-element-a8fb93a elementor-view-stacked elementor-shape-circle elementor-position-block-start elementor-mobile-position-block-start elementor-widget elementor-widget-icon-box" data-id="a8fb93a" data-element_type="widget" data-e-type="widget" data-widget_type="icon-box.default">
							<div className="elementor-icon-box-wrapper">

						<div className="elementor-icon-box-icon">
				<span  className="elementor-icon">
				<svg aria-hidden="true" className="e-font-icon-svg e-far-clock" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path></svg>				</span>
			</div>
			
						<div className="elementor-icon-box-content">

									<h3 className="elementor-icon-box-title">
						<span  >
							On-Time Delivery						</span>
					</h3>
				
									<p className="elementor-icon-box-description">
						Projects completed on schedule					</p>
				
			</div>
			
		</div>
						</div>
					</div>
				</div>
		<div data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-element elementor-element-f3638a9 e-flex e-con-boxed e-con e-child" data-id="f3638a9" data-element_type="container" data-e-type="container">
					<div className="e-con-inner">
				<div className="elementor-element elementor-element-9cedff9 elementor-view-stacked elementor-shape-circle elementor-position-block-start elementor-mobile-position-block-start elementor-widget elementor-widget-icon-box" data-id="9cedff9" data-element_type="widget" data-e-type="widget" data-widget_type="icon-box.default">
							<div className="elementor-icon-box-wrapper">

						<div className="elementor-icon-box-icon">
				<span  className="elementor-icon">
				<svg aria-hidden="true" className="e-font-icon-svg e-fas-dollar-sign" viewBox="0 0 288 512" xmlns="http://www.w3.org/2000/svg"><path d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"></path></svg>				</span>
			</div>
			
						<div className="elementor-icon-box-content">

									<h3 className="elementor-icon-box-title">
						<span  >
							Honest Pricing						</span>
					</h3>
				
									<p className="elementor-icon-box-description">
						No hidden fees or surprises					</p>
				
			</div>
			
		</div>
						</div>
					</div>
				</div>
		<div data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-element elementor-element-c1a2726 e-flex e-con-boxed e-con e-child" data-id="c1a2726" data-element_type="container" data-e-type="container">
					<div className="e-con-inner">
				<div className="elementor-element elementor-element-485a9ec elementor-view-stacked elementor-shape-circle elementor-position-block-start elementor-mobile-position-block-start elementor-widget elementor-widget-icon-box" data-id="485a9ec" data-element_type="widget" data-e-type="widget" data-widget_type="icon-box.default">
							<div className="elementor-icon-box-wrapper">

						<div className="elementor-icon-box-icon">
				<span  className="elementor-icon">
				<svg aria-hidden="true" className="e-font-icon-svg e-far-star" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path></svg>				</span>
			</div>
			
						<div className="elementor-icon-box-content">

									<h3 className="elementor-icon-box-title">
						<span  >
							5-Star Reviews						</span>
					</h3>
				
									<p className="elementor-icon-box-description">
						Trusted by Denver homeowners					</p>
				
			</div>
			
		</div>
						</div>
					</div>
				</div>
				</div>
					</div>
				</div>
		<div data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-element elementor-element-13782b6 e-flex e-con-boxed e-con e-parent" data-id="13782b6" data-element_type="container" data-e-type="container">
					<div className="e-con-inner">
		<div data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-element elementor-element-75d874b e-flex e-con-boxed e-con e-child" data-id="75d874b" data-element_type="container" data-e-type="container">
					<div className="e-con-inner">
				<div className="elementor-element elementor-element-776507b elementor-widget elementor-widget-heading" data-id="776507b" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
					<h2 className="elementor-heading-title elementor-size-default">Painting Contractors</h2>				</div>
				<div className="elementor-element elementor-element-45e9e79 elementor-widget__width-initial elementor-widget elementor-widget-heading" data-id="45e9e79" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
					<h2 className="elementor-heading-title elementor-size-default">Turn Your Tired Walls Into a Space You&#039;re Proud to Show Off</h2>				</div>
				<div className="elementor-element elementor-element-2e0fb34 elementor-widget elementor-widget-text-editor" data-id="2e0fb34" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
									<p>Whether your home&rsquo;s exterior has faded under Colorado&rsquo;s sun or your interior rooms feel dull and dated, our painting team refreshes your space with premium paints, meticulous prep work, and clean, seamless finishes &mdash; inside and out.</p>								</div>
				<div className="elementor-element elementor-element-487898b elementor-widget elementor-widget-eael-image-comparison">
    <div className="eael-img-comp-wrapper" style={{ borderRadius: '19px', overflow: 'hidden' }}>
      <BeforeAfterSlider
        beforeImage="/assets/images/Gemini_Generated_Image_uzkso3uzkso3uzks-scaled.jpg"
        afterImage="/assets/images/Gemini_Generated_Image_8srwdp8srwdp8srw-scaled.jpg"
        beforeAlt="Before Painting"
        afterAlt="After Painting"
        height="640px"
      />
    </div>
  </div>
					</div>
				</div>
		<div data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-element elementor-element-8491874 e-flex e-con-boxed e-con e-child" data-id="8491874" data-element_type="container" data-e-type="container">
					<div className="e-con-inner">
		<div data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-element elementor-element-a6143d2 e-flex e-con-boxed e-con e-child" data-id="a6143d2" data-element_type="container" data-e-type="container">
					<div className="e-con-inner">
				<div className="elementor-element elementor-element-e1329f7 elementor-widget elementor-widget-image" data-id="e1329f7" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
															<img fetchpriority="high" decoding="async" width="2560" height="1440" src="/assets/images/Gemini_Generated_Image_8srwdp8srwdp8srw-1-scaled.jpg" className="attachment-full size-full wp-image-10224" alt=""  sizes="(max-width: 2560px) 100vw, 2560px" />															</div>
					</div>
				</div>
		<div data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-element elementor-element-ec5b4e9 e-flex e-con-boxed e-con e-child" data-id="ec5b4e9" data-element_type="container" data-e-type="container">
					<div className="e-con-inner">
				<div className="elementor-element elementor-element-f0efb04 elementor-widget elementor-widget-image" data-id="f0efb04" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
															<img loading="lazy" decoding="async" width="473" height="356" src="/assets/images/6541531757a8cfeed5ad007fc724f51a.jpg" className="attachment-full size-full wp-image-10223" alt=""  sizes="(max-width: 473px) 100vw, 473px" />															</div>
					</div>
				</div>
		<div data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-element elementor-element-bc799a4 e-flex e-con-boxed e-con e-child" data-id="bc799a4" data-element_type="container" data-e-type="container">
					<div className="e-con-inner">
				<div className="elementor-element elementor-element-eb0cb1b elementor-widget elementor-widget-image" data-id="eb0cb1b" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
															<img loading="lazy" decoding="async" width="791" height="594" src="/assets/images/d8073cff5ce9626d9a3d76747b498459.png" className="attachment-full size-full wp-image-10222" alt=""  sizes="(max-width: 791px) 100vw, 791px" />															</div>
					</div>
				</div>
		<div data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-element elementor-element-ad8e7cf e-flex e-con-boxed e-con e-child" data-id="ad8e7cf" data-element_type="container" data-e-type="container">
					<div className="e-con-inner">
				<div className="elementor-element elementor-element-f3a2855 elementor-widget elementor-widget-image" data-id="f3a2855" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
															<img loading="lazy" decoding="async" width="735" height="446" src="/assets/images/bbcf93c17e9dc620895744d33300e459.jpg" className="attachment-full size-full wp-image-10221" alt=""  sizes="(max-width: 735px) 100vw, 735px" />															</div>
					</div>
				</div>
					</div>
				</div>
				<div className="elementor-element elementor-element-1eabfa6 elementor-align-center elementor-widget elementor-widget-button" data-id="1eabfa6" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
										<a className="elementor-button elementor-button-link elementor-size-sm" href="#form">
						<span className="elementor-button-content-wrapper">
									<span className="elementor-button-text">Get My Paint Estimate</span>
					</span>
					</a>
								</div>
					</div>
				</div>
		<div data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-element elementor-element-4268f45 e-flex e-con-boxed e-con e-parent" data-id="4268f45" data-element_type="container" data-e-type="container">
					<div className="e-con-inner">
		<div data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-element elementor-element-9acb04c e-con-full e-flex e-con e-child" data-id="9acb04c" data-element_type="container" data-e-type="container">
				<div className="elementor-element elementor-element-5bd1260 elementor-widget elementor-widget-heading" data-id="5bd1260" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
					<h2 className="elementor-heading-title elementor-size-default">Your Local Painting Servide in Denver Metro</h2>				</div>
				<div className="elementor-element elementor-element-fcc0e17 elementor-widget elementor-widget-text-editor" data-id="fcc0e17" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
									<p className="font-claude-response-body break-words whitespace-normal" data-sourcepos="58:1-58:510;1820-2329">At JRC Painting, we take great pride in our work &mdash; because some companies merely paint houses, while we produce flawless, seamless painted surfaces so perfect you&rsquo;ll want to tell everyone about them. Exterior home surfaces vary widely: wood, concrete, stucco, and more. Whatever your surface, we bring top-notch technique and premium materials to the job. For interior painting, we ensure that every surface within the four walls &mdash; including all corners, trim, and ceilings &mdash; is neatly and precisely finished.</p><p className="font-claude-response-body break-words whitespace-normal" data-sourcepos="60:1-60:150;2331-2480">From your first free color consultation to final walkthrough, our team manages every detail so your painting experience stays smooth and stress-free.</p>								</div>
				<div className="elementor-element elementor-element-ebd8c59 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="ebd8c59" data-element_type="widget" data-e-type="widget" data-widget_type="icon-list.default">
							<ul className="elementor-icon-list-items">
							<li className="elementor-icon-list-item">
											<span className="elementor-icon-list-icon">
							<svg aria-hidden="true" className="e-font-icon-svg e-fas-check" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>						</span>
										<span className="elementor-icon-list-text">25+ years remodeling experience </span>
									</li>
								<li className="elementor-icon-list-item">
											<span className="elementor-icon-list-icon">
							<svg aria-hidden="true" className="e-font-icon-svg e-fas-check" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>						</span>
										<span className="elementor-icon-list-text">Fully Licensed &amp; Insured Professionals</span>
									</li>
								<li className="elementor-icon-list-item">
											<span className="elementor-icon-list-icon">
							<svg aria-hidden="true" className="e-font-icon-svg e-fas-check" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>						</span>
										<span className="elementor-icon-list-text">Interior &amp; Exterior</span>
									</li>
								<li className="elementor-icon-list-item">
											<span className="elementor-icon-list-icon">
							<svg aria-hidden="true" className="e-font-icon-svg e-fas-check" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>						</span>
										<span className="elementor-icon-list-text">Clear Timelines &amp; Communication Throughout</span>
									</li>
						</ul>
						</div>
				<div className="elementor-element elementor-element-0c69687 elementor-widget elementor-widget-button" data-id="0c69687" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
										<a className="elementor-button elementor-button-link elementor-size-sm" href="tel:3034182167">
						<span className="elementor-button-content-wrapper">
									<span className="elementor-button-text">Talk With a Remodeling Expert</span>
					</span>
					</a>
								</div>
				</div>
		<div className="elementor-element elementor-element-5e4d69b e-con-full e-flex e-con e-child">
    <img
      src="/assets/images/Gemini_Generated_Image_wkjoiswkjoiswkjo.jpg"
      alt="Denver Painting Expert"
      style={{ width: '100%', height: '100%', minHeight: '520px', objectFit: 'cover', borderRadius: '20px' }}
    />
  </div>
					</div>
				</div>
		<div data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-element elementor-element-6789105 e-flex e-con-boxed e-con e-parent" data-id="6789105" data-element_type="container" data-e-type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
					<div className="e-con-inner">
		<div data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-element elementor-element-35088fc e-con-full e-flex e-con e-child" data-id="35088fc" data-element_type="container" data-e-type="container">
				<div className="elementor-element elementor-element-bf6eb82 elementor-widget elementor-widget-heading" data-id="bf6eb82" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
					<h2 className="elementor-heading-title elementor-size-default">Painting Services</h2>				</div>
				<div className="elementor-element elementor-element-1351e1e elementor-widget elementor-widget-heading" data-id="1351e1e" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
					<h2 className="elementor-heading-title elementor-size-default">Complete Interior &amp; Exterior Painting <br />Services — Start to Finish</h2>				</div>
				<div className="elementor-element elementor-element-7f7f105 elementor-widget elementor-widget-text-editor" data-id="7f7f105" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
									<p>Affordable, honest painting contractors you can trust for high-quality results the first time.</p>								</div>
		<div data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-element elementor-element-162000a e-con-full e-flex e-con e-child" data-id="162000a" data-element_type="container" data-e-type="container">
		<div data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-element elementor-element-9ae293f e-flex e-con-boxed e-con e-child" data-id="9ae293f" data-element_type="container" data-e-type="container">
					<div className="e-con-inner">
				<div className="elementor-element elementor-element-a1f49bb elementor-position-top elementor-widget elementor-widget-image-box" data-id="a1f49bb" data-element_type="widget" data-e-type="widget" data-widget_type="image-box.default">
					<div className="elementor-image-box-wrapper"><figure className="elementor-image-box-img"><img loading="lazy" decoding="async" width="128" height="128" src="/assets/images/kitchen.png" className="attachment-full size-full wp-image-9155" alt="" /></figure><div className="elementor-image-box-content"><h3 className="elementor-image-box-title">Interior Painting</h3><p className="elementor-image-box-description">Expert application for walls, ceilings, trim, and accent features &mdash; flawless finishes in any room of your home or office.</p></div></div>				</div>
					</div>
				</div>
		<div data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-element elementor-element-8890a0f e-flex e-con-boxed e-con e-child" data-id="8890a0f" data-element_type="container" data-e-type="container">
					<div className="e-con-inner">
				<div className="elementor-element elementor-element-2f05d18 elementor-position-top elementor-widget elementor-widget-image-box" data-id="2f05d18" data-element_type="widget" data-e-type="widget" data-widget_type="image-box.default">
					<div className="elementor-image-box-wrapper"><figure className="elementor-image-box-img"><img loading="lazy" decoding="async" width="128" height="128" src="/assets/images/kitchen-1.png" className="attachment-full size-full wp-image-9156" alt="" /></figure><div className="elementor-image-box-content"><h3 className="elementor-image-box-title">Exterior Painting</h3><p className="elementor-image-box-description">Weather-resistant paint and precise technique on wood, stucco, concrete, siding, trim, and more &mdash; built to withstand Colorado&#039;s climate.</p></div></div>				</div>
					</div>
				</div>
		<div data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-element elementor-element-fe80084 e-flex e-con-boxed e-con e-child" data-id="fe80084" data-element_type="container" data-e-type="container">
					<div className="e-con-inner">
				<div className="elementor-element elementor-element-24a8a54 elementor-position-top elementor-widget elementor-widget-image-box" data-id="24a8a54" data-element_type="widget" data-e-type="widget" data-widget_type="image-box.default">
					<div className="elementor-image-box-wrapper"><figure className="elementor-image-box-img"><img loading="lazy" decoding="async" width="128" height="128" src="/assets/images/countertop.png" className="attachment-full size-full wp-image-9154" alt="" /></figure><div className="elementor-image-box-content"><h3 className="elementor-image-box-title">Free Color Consultation</h3><p className="elementor-image-box-description">Not sure which shades to choose? We help you find the perfect colors for your space before a single brush hits the wall.</p></div></div>				</div>
					</div>
				</div>
				</div>
				</div>
					</div>
				</div>
				<section data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-section elementor-top-section elementor-element elementor-element-01ab721 elementor-section-full_width elementor-section-height-min-height bg-blur elementor-section-height-default elementor-section-items-middle" data-id="01ab721" data-element_type="section" data-e-type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
							<div className="elementor-background-overlay"></div>
							<div className="elementor-container elementor-column-gap-no">
					<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-007796f" data-id="007796f" data-element_type="column" data-e-type="column">
			<div className="elementor-widget-wrap elementor-element-populated">
						<section data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-section elementor-inner-section elementor-element elementor-element-c55c266 elementor-section-height-min-height blur elementor-section-boxed elementor-section-height-default" data-id="c55c266" data-element_type="section" data-e-type="section">
						<div className="elementor-container elementor-column-gap-no">
					<div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-7ca0bd6" data-id="7ca0bd6" data-element_type="column" data-e-type="column">
			<div className="elementor-widget-wrap elementor-element-populated">
						<div className="elementor-element elementor-element-e0315fb elementor-widget elementor-widget-heading" data-id="e0315fb" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
					<h1 className="elementor-heading-title elementor-size-default">See Your New Color Palette Before Painting Begins</h1>				</div>
				<div className="elementor-element elementor-element-a23f1f8 elementor-widget elementor-widget-text-editor" data-id="a23f1f8" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
									<p>We offer a <strong>free color consultation</strong> so you can confidently choose the right shades, finishes, and accent colors for your space before work begins — no guessing, no surprises, no painter’s remorse.</p>								</div>
					</div>
		</div>
					</div>
		</section>
					</div>
		</div>
					</div>
		</section>
		<div data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-element elementor-element-99a90bd e-flex e-con-boxed e-con e-parent" data-id="99a90bd" data-element_type="container" data-e-type="container">
					<div className="e-con-inner">
		<div data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-element elementor-element-864da99 e-flex e-con-boxed e-con e-child" data-id="864da99" data-element_type="container" data-e-type="container">
					<div className="e-con-inner">
				<div className="elementor-element elementor-element-a1b3827 elementor-widget elementor-widget-heading" data-id="a1b3827" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
					<h2 className="elementor-heading-title elementor-size-default">Our Simple 3-Step <br />Painting Process</h2>				</div>
					</div>
				</div>
		<div data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-element elementor-element-be70c24 e-flex e-con-boxed e-con e-child" data-id="be70c24" data-element_type="container" data-e-type="container">
					<div className="e-con-inner">
		<div data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-element elementor-element-227197e e-flex e-con-boxed e-con e-child" data-id="227197e" data-element_type="container" data-e-type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
					<div className="e-con-inner">
				<div className="elementor-element elementor-element-3239f35 elementor-widget elementor-widget-heading" data-id="3239f35" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
					<h2 className="elementor-heading-title elementor-size-default">Step 1</h2>				</div>
				<div className="elementor-element elementor-element-668a028 elementor-widget elementor-widget-heading" data-id="668a028" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
					<h2 className="elementor-heading-title elementor-size-default">Consultation</h2>				</div>
				<div className="elementor-element elementor-element-76958d7 elementor-widget elementor-widget-text-editor" data-id="76958d7" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
									<p>We assess your surfaces, discuss your goals, timeline, and color preferences, and walk you through your options.</p>								</div>
					</div>
				</div>
		<div data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-element elementor-element-5c09ff8 e-flex e-con-boxed e-con e-child" data-id="5c09ff8" data-element_type="container" data-e-type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
					<div className="e-con-inner">
				<div className="elementor-element elementor-element-8b85ff5 elementor-widget elementor-widget-heading" data-id="8b85ff5" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
					<h2 className="elementor-heading-title elementor-size-default">Step 2</h2>				</div>
				<div className="elementor-element elementor-element-43eb09e elementor-widget elementor-widget-heading" data-id="43eb09e" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
					<h2 className="elementor-heading-title elementor-size-default">Color Planning &amp; Prep</h2>				</div>
				<div className="elementor-element elementor-element-b6ce201 elementor-widget elementor-widget-text-editor" data-id="b6ce201" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
									<p>We help you finalize your palette, then prep every surface properly &mdash; cleaning, sanding, masking, and priming &mdash; before a drop of paint is applied.</p>								</div>
					</div>
				</div>
		<div data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-element elementor-element-22961fe e-flex e-con-boxed e-con e-child" data-id="22961fe" data-element_type="container" data-e-type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
					<div className="e-con-inner">
				<div className="elementor-element elementor-element-67dbd60 elementor-widget elementor-widget-heading" data-id="67dbd60" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
					<h2 className="elementor-heading-title elementor-size-default">Step 3</h2>				</div>
				<div className="elementor-element elementor-element-a6c92eb elementor-widget elementor-widget-heading" data-id="a6c92eb" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
					<h2 className="elementor-heading-title elementor-size-default">Professional Painting</h2>				</div>
				<div className="elementor-element elementor-element-5d20be4 elementor-widget elementor-widget-text-editor" data-id="5d20be4" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
									<p>Our team completes the job efficiently with premium paints, clean lines, and thorough cleanup &mdash; leaving your space looking brand new.</p>								</div>
					</div>
				</div>
		<div className="elementor-element elementor-element-d4a3473 e-flex e-con-boxed e-con e-child">
    <img
      src="/assets/images/Your-paragraph-text-4-1.png"
      alt="Professional Painting Process"
      style={{ width: '100%', height: '100%', minHeight: '340px', objectFit: 'cover', borderRadius: '10px' }}
    />
  </div>
					</div>
				</div>
					</div>
				</div>
		<div data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-element elementor-element-8802f1c e-flex e-con-boxed e-con e-parent" data-id="8802f1c" data-element_type="container" data-e-type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
					<div className="e-con-inner">
		<div data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-element elementor-element-882ae78 e-con-full e-flex e-con e-child" data-id="882ae78" data-element_type="container" data-e-type="container">
				<div className="elementor-element elementor-element-f05e4a5 elementor-widget elementor-widget-heading" data-id="f05e4a5" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
					<h2 className="elementor-heading-title elementor-size-default">Latest Project</h2>				</div>
				<div className="elementor-element elementor-element-21ed589 elementor-widget__width-initial elementor-widget elementor-widget-heading" data-id="21ed589" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
					<h2 className="elementor-heading-title elementor-size-default">What Our Clients Say About Our Painting Company</h2>				</div>
		<div data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-element elementor-element-eb70bf9 e-con-full e-flex e-con e-child" data-id="eb70bf9" data-element_type="container" data-e-type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
		<div data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-element elementor-element-eb7185c e-con-full e-flex e-con e-child" data-id="eb7185c" data-element_type="container" data-e-type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
				<div className="elementor-element elementor-element-907690a elementor-widget elementor-widget-spacer" data-id="907690a" data-element_type="widget" data-e-type="widget" data-widget_type="spacer.default">
							<div className="elementor-spacer">
			<div className="elementor-spacer-inner"></div>
		</div>
						</div>
		<div data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-element elementor-element-6d1a2fa e-con-full e-flex e-con e-child" data-id="6d1a2fa" data-element_type="container" data-e-type="container">
				<div className="elementor-element elementor-element-4b495ae elementor-widget elementor-widget-image" data-id="4b495ae" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
															<img loading="lazy" decoding="async" width="56" height="56" src="/assets/images/user9.jpg" className="attachment-full size-full wp-image-9687" alt="" />															</div>
				<div className="elementor-element elementor-element-3f55f4c elementor-widget elementor-widget-image" data-id="3f55f4c" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
															<img loading="lazy" decoding="async" width="56" height="56" src="/assets/images/user8.jpg" className="attachment-full size-full wp-image-9688" alt="" />															</div>
				<div className="elementor-element elementor-element-5d2c5b2 elementor-widget elementor-widget-image" data-id="5d2c5b2" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
															<img loading="lazy" decoding="async" width="56" height="56" src="/assets/images/user7.jpg" className="attachment-full size-full wp-image-9689" alt="" />															</div>
				<div className="elementor-element elementor-element-f6c8a4d elementor-widget elementor-widget-heading" data-id="f6c8a4d" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
					<h2 className="elementor-heading-title elementor-size-default">Trusted By <span className="orangetext">1000+</span><br /> Satisfied Customers</h2>				</div>
				</div>
				</div>
		<div data-particle_enable="false" data-particle-mobile-disabled="false" className="elementor-element elementor-element-76dd404 e-con-full e-flex e-con e-child" data-id="76dd404" data-element_type="container" data-e-type="container">
				<div className="elementor-element elementor-element-49acc04 elementor-widget elementor-widget-eael-testimonial-slider">
    <div className="eael-testimonial-custom-slider" style={{ background: '#152A46', borderRadius: '20px', padding: '40px', minHeight: '340px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <div style={{ color: '#FFB800', fontSize: '20px', marginBottom: '15px' }}>
          ★★★★★
        </div>
        <p style={{ color: '#BABABA', fontSize: '18px', lineHeight: '1.7', fontStyle: 'italic' }}>
          "{testimonials[activeTestimonial].text}"
        </p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '30px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <img
            src={testimonials[activeTestimonial].avatar}
            alt={testimonials[activeTestimonial].name}
            style={{ width: '56px', height: '56px', borderRadius: '50%', objectFit: 'cover' }}
          />
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '18px', fontWeight: '600' }}>{testimonials[activeTestimonial].name}</h4>
            <p style={{ color: '#BABABA', fontSize: '14px' }}>{testimonials[activeTestimonial].role}</p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            type="button"
            onClick={() => setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
            style={{ background: '#1E3A5F', border: '1px solid #33557A', color: '#FFF', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            aria-label="Previous Testimonial"
          >
            ❮
          </button>
          <button
            type="button"
            onClick={() => setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
            style={{ background: '#F45404', border: 'none', color: '#FFF', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            aria-label="Next Testimonial"
          >
            ❯
          </button>
        </div>
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
