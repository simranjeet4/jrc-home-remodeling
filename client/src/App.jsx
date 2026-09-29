import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './hooks/ScrollToTop';

// Layout
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Core & Service Pages
const Home = lazy(() => import('./pages/Home'));
const HomeRemodeling = lazy(() => import('./pages/HomeRemodeling'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Services = lazy(() => import('./pages/Services'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const Blog = lazy(() => import('./pages/Blog'));
const KitchenRemodeling = lazy(() => import('./pages/KitchenRemodeling'));
const BathroomRemodeling = lazy(() => import('./pages/BathroomRemodeling'));
const BasementRemodeling = lazy(() => import('./pages/BasementRemodeling'));
const JrcTile = lazy(() => import('./pages/JrcTile'));
const JrcDecks = lazy(() => import('./pages/JrcDecks'));
const JrcPainting = lazy(() => import('./pages/JrcPainting'));
const JrcFrameAndDrywall = lazy(() => import('./pages/JrcFrameAndDrywall'));
const BathtubShowerConversions = lazy(() => import('./pages/BathtubShowerConversions'));
const JunkRemovalDemolition = lazy(() => import('./pages/JunkRemovalDemolition'));
const LandscapeDesignNearMe = lazy(() => import('./pages/LandscapeDesignNearMe'));
const FloorInstallers = lazy(() => import('./pages/FloorInstallers'));
const RoofRepair = lazy(() => import('./pages/RoofRepair'));
const HandymanNearMe = lazy(() => import('./pages/HandymanNearMe'));
const FastCountertopServices = lazy(() => import('./pages/FastCountertopServices'));
const ConcreteServices = lazy(() => import('./pages/ConcreteServices'));

// System & Legal Pages
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsConditions = lazy(() => import('./pages/TermsConditions'));
const ThankYou = lazy(() => import('./pages/ThankYou'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Location Pages (18 Mandatory)
const Arvada = lazy(() => import('./pages/locations/Arvada'));
const Aurora = lazy(() => import('./pages/locations/Aurora'));
const Brighton = lazy(() => import('./pages/locations/Brighton'));
const Broomfield = lazy(() => import('./pages/locations/Broomfield'));
const CastleRock = lazy(() => import('./pages/locations/CastleRock'));
const Centennial = lazy(() => import('./pages/locations/Centennial'));
const CherryCreek = lazy(() => import('./pages/locations/CherryCreek'));
const CommerceCity = lazy(() => import('./pages/locations/CommerceCity'));
const Denver = lazy(() => import('./pages/locations/Denver'));
const Englewood = lazy(() => import('./pages/locations/Englewood'));
const Golden = lazy(() => import('./pages/locations/Golden'));
const GreenwoodVillage = lazy(() => import('./pages/locations/GreenwoodVillage'));
const HighlandRanch = lazy(() => import('./pages/locations/HighlandRanch'));
const Lafayette = lazy(() => import('./pages/locations/Lafayette'));
const Lakewood = lazy(() => import('./pages/locations/Lakewood'));
const Littleton = lazy(() => import('./pages/locations/Littleton'));
const LoneTree = lazy(() => import('./pages/locations/LoneTree'));
const Morrison = lazy(() => import('./pages/locations/Morrison'));

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />

      <main id="content">
        <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
        <Routes>
          {/* Primary Page & Root */}
          <Route path="/" element={<Home />} />
          <Route path="/home-remodeling" element={<HomeRemodeling />} />
          <Route path="/home-remodeling/" element={<HomeRemodeling />} />

          {/* Mandatory Core & Service Pages (17 routes) */}
          <Route path="/services" element={<Services />} />
          <Route path="/services/" element={<Services />} />

          <Route path="/kitchen-remodeling" element={<KitchenRemodeling />} />
          <Route path="/kitchen-remodeling/" element={<KitchenRemodeling />} />

          <Route path="/bathroom-remodeling" element={<BathroomRemodeling />} />
          <Route path="/bathroom-remodeling/" element={<BathroomRemodeling />} />

          <Route path="/basement-remodeling" element={<BasementRemodeling />} />
          <Route path="/basement-remodeling/" element={<BasementRemodeling />} />

          <Route path="/jrc-tile" element={<JrcTile />} />
          <Route path="/jrc-tile/" element={<JrcTile />} />

          <Route path="/jrc-decks" element={<JrcDecks />} />
          <Route path="/jrc-decks/" element={<JrcDecks />} />

          <Route path="/jrc-painting" element={<JrcPainting />} />
          <Route path="/jrc-painting/" element={<JrcPainting />} />

          <Route path="/jrc-frame-and-drywall" element={<JrcFrameAndDrywall />} />
          <Route path="/jrc-frame-and-drywall/" element={<JrcFrameAndDrywall />} />

          <Route path="/bathtub-shower-conversions" element={<BathtubShowerConversions />} />
          <Route path="/bathtub-shower-conversions/" element={<BathtubShowerConversions />} />

          <Route path="/junk-removal-demolition" element={<JunkRemovalDemolition />} />
          <Route path="/junk-removal-demolition/" element={<JunkRemovalDemolition />} />

          <Route path="/landscape-design-near-me" element={<LandscapeDesignNearMe />} />
          <Route path="/landscape-design-near-me/" element={<LandscapeDesignNearMe />} />

          <Route path="/floor-installers" element={<FloorInstallers />} />
          <Route path="/floor-installers/" element={<FloorInstallers />} />

          <Route path="/roof-repair" element={<RoofRepair />} />
          <Route path="/roof-repair/" element={<RoofRepair />} />

          <Route path="/handyman-near-me" element={<HandymanNearMe />} />
          <Route path="/handyman-near-me/" element={<HandymanNearMe />} />

          <Route path="/fast-countertop-services-by-jrc-countertops" element={<FastCountertopServices />} />
          <Route path="/fast-countertop-services-by-jrc-countertops/" element={<FastCountertopServices />} />
          <Route path="/countertop-services-near-me" element={<FastCountertopServices />} />

          <Route path="/concrete-services-near-you" element={<ConcreteServices />} />
          <Route path="/concrete-services-near-you/" element={<ConcreteServices />} />

          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/contact-us/" element={<ContactUs />} />

          {/* General Pages */}
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/about-us/" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/" element={<Blog />} />

          {/* Mandatory Location Pages (18 routes) */}
          <Route path="/home-remodeling-contractor-in-arvada-2" element={<Arvada />} />
          <Route path="/home-remodeling-contractor-in-arvada-2/" element={<Arvada />} />

          <Route path="/home-remodeling-contractor-in-aurora-3" element={<Aurora />} />
          <Route path="/home-remodeling-contractor-in-aurora-3/" element={<Aurora />} />

          <Route path="/home-remodeling-contractor-in-brighton-2" element={<Brighton />} />
          <Route path="/home-remodeling-contractor-in-brighton-2/" element={<Brighton />} />

          <Route path="/home-remodeling-contractor-in-broomfield-2" element={<Broomfield />} />
          <Route path="/home-remodeling-contractor-in-broomfield-2/" element={<Broomfield />} />

          <Route path="/home-remodeling-contractor-in-castle-rock" element={<CastleRock />} />
          <Route path="/home-remodeling-contractor-in-castle-rock/" element={<CastleRock />} />

          <Route path="/home-remodeling-contractor-in-centennial" element={<Centennial />} />
          <Route path="/home-remodeling-contractor-in-centennial/" element={<Centennial />} />

          <Route path="/home-remodeling-contractor-in-cherry-creek" element={<CherryCreek />} />
          <Route path="/home-remodeling-contractor-in-cherry-creek/" element={<CherryCreek />} />

          <Route path="/home-remodeling-contractor-in-commerce-city-new" element={<CommerceCity />} />
          <Route path="/home-remodeling-contractor-in-commerce-city-new/" element={<CommerceCity />} />

          <Route path="/home-remodeling-contractor-in-denver" element={<Denver />} />
          <Route path="/home-remodeling-contractor-in-denver/" element={<Denver />} />

          <Route path="/home-remodeling-contractor-in-englewood" element={<Englewood />} />
          <Route path="/home-remodeling-contractor-in-englewood/" element={<Englewood />} />

          <Route path="/home-remodeling-contractor-in-golden" element={<Golden />} />
          <Route path="/home-remodeling-contractor-in-golden/" element={<Golden />} />

          <Route path="/home-remodeling-contractor-in-greenwood-village" element={<GreenwoodVillage />} />
          <Route path="/home-remodeling-contractor-in-greenwood-village/" element={<GreenwoodVillage />} />

          <Route path="/home-remodeling-contractor-in-highland-ranch-2" element={<HighlandRanch />} />
          <Route path="/home-remodeling-contractor-in-highland-ranch-2/" element={<HighlandRanch />} />

          <Route path="/home-remodeling-contractor-in-lafayette" element={<Lafayette />} />
          <Route path="/home-remodeling-contractor-in-lafayette/" element={<Lafayette />} />

          <Route path="/home-remodeling-contractor-in-lakewood" element={<Lakewood />} />
          <Route path="/home-remodeling-contractor-in-lakewood/" element={<Lakewood />} />

          <Route path="/home-remodeling-contractor-in-littleton-2" element={<Littleton />} />
          <Route path="/home-remodeling-contractor-in-littleton-2/" element={<Littleton />} />

          <Route path="/home-remodeling-contractor-in-lone-tree" element={<LoneTree />} />
          <Route path="/home-remodeling-contractor-in-lone-tree/" element={<LoneTree />} />

          <Route path="/home-remodeling-contractor-in-morrison-2" element={<Morrison />} />
          <Route path="/home-remodeling-contractor-in-morrison-2/" element={<Morrison />} />

          {/* Mandatory System & Legal Pages (3 routes) */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/privacy-policy/" element={<PrivacyPolicy />} />

          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/terms-conditions/" element={<TermsConditions />} />

          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/thank-you/" element={<ThankYou />} />

          {/* 404 Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </main>

      <Footer />
    </>
  );
}

export default App;
