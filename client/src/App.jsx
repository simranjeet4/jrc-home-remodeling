import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './hooks/ScrollToTop';

// Layout
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Core & Service Pages
import Home from './pages/Home';
import HomeRemodeling from './pages/HomeRemodeling';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import Blog from './pages/Blog';
import KitchenRemodeling from './pages/KitchenRemodeling';
import BathroomRemodeling from './pages/BathroomRemodeling';
import BasementRemodeling from './pages/BasementRemodeling';
import JrcTile from './pages/JrcTile';
import JrcDecks from './pages/JrcDecks';
import JrcPainting from './pages/JrcPainting';
import JrcFrameAndDrywall from './pages/JrcFrameAndDrywall';
import BathtubShowerConversions from './pages/BathtubShowerConversions';
import JunkRemovalDemolition from './pages/JunkRemovalDemolition';
import LandscapeDesignNearMe from './pages/LandscapeDesignNearMe';
import FloorInstallers from './pages/FloorInstallers';
import RoofRepair from './pages/RoofRepair';
import HandymanNearMe from './pages/HandymanNearMe';
import FastCountertopServices from './pages/FastCountertopServices';
import ConcreteServices from './pages/ConcreteServices';

// System & Legal Pages
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import ThankYou from './pages/ThankYou';
import NotFound from './pages/NotFound';

// Location Pages (18 Mandatory)
import Arvada from './pages/locations/Arvada';
import Aurora from './pages/locations/Aurora';
import Brighton from './pages/locations/Brighton';
import Broomfield from './pages/locations/Broomfield';
import CastleRock from './pages/locations/CastleRock';
import Centennial from './pages/locations/Centennial';
import CherryCreek from './pages/locations/CherryCreek';
import CommerceCity from './pages/locations/CommerceCity';
import Denver from './pages/locations/Denver';
import Englewood from './pages/locations/Englewood';
import Golden from './pages/locations/Golden';
import GreenwoodVillage from './pages/locations/GreenwoodVillage';
import HighlandRanch from './pages/locations/HighlandRanch';
import Lafayette from './pages/locations/Lafayette';
import Lakewood from './pages/locations/Lakewood';
import Littleton from './pages/locations/Littleton';
import LoneTree from './pages/locations/LoneTree';
import Morrison from './pages/locations/Morrison';

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />

      <main id="content">
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
      </main>

      <Footer />
    </>
  );
}

export default App;
