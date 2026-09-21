/**
 * JRC Home Remodeling — Site-wide content data.
 *
 * All text content extracted from the live site during Phase 1 audit.
 * Centralised here so page components pull from a single source of truth.
 */

export const COMPANY = {
  name: 'JRC Home Remodeling',
  tagline: 'We Transform Your Dreams Into Reality',
  phone: '303-418-2167',
  phoneRaw: '3034182167',
  email: 'info@jrchomeremodeling.com',
  emailContact: 'info@jrcremodeling.com',
  address: '925 S Niagara St, Denver, CO 80224, United States',
  hours: {
    weekday: 'Mon–Sat: 8:00 AM – 6:00 PM',
    weekend: 'Sun: 9:00 AM – 4:00 PM',
  },
  googleReviewUrl: 'https://maps.app.goo.gl/t1BinviUZ5TuEL746',
  googleMapsUrl:
    'https://www.google.com/maps/place/925+S+Niagara+St,+Denver,+CO+80224,+USA/@39.699893,-104.9140036,844m/data=!3m2!1e3!4b1!4m6!3m5!1s0x876c7db7193500bf:0x95e133ef0b3f95d!8m2!3d39.6998889!4d-104.9114287!16s%2Fg%2F11b8v4wchm',
  copyright: `©Copyright ${new Date().getFullYear()} JRC Home Remodeling. All Rights Reserved.`,
};

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about-us' },
  {
    label: 'Services',
    path: '/services',
    children: [
      { label: 'Home Remodeling', path: '/home-remodeling' },
      { label: 'Kitchen Remodeling', path: '/kitchen-remodeling' },
      { label: 'Bathroom Remodeling', path: '/bathroom-remodeling' },
      { label: 'Basement Remodeling', path: '/basement-remodeling' },
      { label: 'JRC Tile', path: '/jrc-tile' },
      { label: 'JRC DECKS', path: '/jrc-decks' },
      { label: 'JRC PAINTING', path: '/jrc-painting' },
      { label: 'JRC FRAME AND DRYWALL', path: '/jrc-frame-and-drywall' },
      { label: 'BATHTUB SHOWER CONVERSIONS', path: '/bathtub-shower-conversions' },
      { label: 'JUNK REMOVAL & DEMOLITION', path: '/junk-removal-demolition' },
      { label: 'LANDSCAPE DESIGN', path: '/landscape-design-near-me' },
      { label: 'FLOOR INSTALLERS', path: '/floor-installers' },
      { label: 'ROOF REPAIR', path: '/roof-repair' },
      { label: 'Handyman', path: '/handyman-near-me' },
      { label: 'JRC Countertops', path: '/countertop-services-near-me' },
    ],
  },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact us', path: '/contact-us' },
];

export const FOOTER_QUICK_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about-us' },
  { label: 'Services', path: '/services' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact Us', path: '/contact-us' },
  { label: 'Privacy Policy', path: '/privacy-policy' },
  { label: 'Terms & Conditions', path: '/terms-conditions' },
];

export const SERVICE_AREAS = [
  'Arvada, CO',
  'Aurora, CO',
  'Brighton, CO',
  'Broomfield, CO',
  'Castle Rock, CO',
  'Parker, CO',
  'Centennial, CO',
  'Cherry-creek, CO',
  'Commerce-city, CO',
  'Denver, CO',
  'Englewood, CO',
  'Superior, CO',
  'Golden, CO',
  'Greenwood-village, CO',
  'Lafayette, CO',
  'Lakewood, CO',
  'Lone-tree, CO',
  'Morrison, CO',
  'Northglenn, CO',
  'Thornton, CO',
  'Westminster, CO',
  'Wheat-ridge, CO',
];

export const SERVICES_LIST = [
  { title: 'Home Remodeling', path: '/home-remodeling' },
  { title: 'Kitchen Remodeling', path: '/kitchen-remodeling' },
  { title: 'Bathroom Remodeling', path: '/bathroom-remodeling' },
  { title: 'Basement Remodeling', path: '/basement-remodeling' },
  { title: 'JRC Tile', path: '/jrc-tile' },
  { title: 'JRC Deck', path: '/jrc-decks' },
  { title: 'JRC Painting', path: '/jrc-painting' },
  { title: 'JRC Frame & Drywall', path: '/jrc-frame-and-drywall' },
  { title: 'Bathtub Shower Conversions', path: '/bathtub-shower-conversions' },
  { title: 'Junk Removal & Demolition', path: '/junk-removal-demolition' },
  { title: 'Landscape Design', path: '/landscape-design-near-me' },
  { title: 'Floor Installer', path: '/floor-installers' },
  { title: 'Roof Repair', path: '/roof-repair' },
  { title: 'Handyman', path: '/handyman-near-me' },
  { title: 'JRC Countertop', path: '/countertop-services-near-me' },
];

export const REVIEWS = [
  {
    name: 'Bliss Bernal',
    text: 'JRC did an awesome job with our kitchen floor! They were responsive, pleasant, professional, had good communication, were on time, and most importantly, did a great job! We are so happy with the results and look forward to working with Monica and her team again.',
  },
  {
    name: 'Charissa Walton',
    text: "I have used JRC twice now - once, to add a bathroom to a basement, and then again to install a tile backsplash in the kitchen. They offered great pricing, were communicative every step of the way, and both projects turned out beautifully. I wouldn't hesitate to use them again!",
  },
  {
    name: 'Toni Starner',
    text: 'Remodeled three bathrooms. We were very impressed with the attention to detail. Always on time, professional, easy to reach. GREAT work!',
  },
];

export const SERVICE_DROPDOWN_OPTIONS = [
  'Kitchen Remodeling',
  'Bathroom Remodeling',
  'Basement Finishing',
  'JRC Decks',
  'JRC Tile',
  'JRC Painting',
  'JRC Framing & Drywall',
  'Bathtub-to-Shower Conversion',
  'Junk Removal & Demolition',
  'Landscape Design',
  'Floor Installation',
  'Roof Repair',
  'Handyman',
  'JRC Countertops',
  'Other',
];

export const SEO = {
  home: {
    title: 'Denver Home Remodeling | From Outdated to Outstanding By JRC',
    description: 'Denver home remodelers. Get a free estimate!',
  },
  homeRemodeling: {
    title: 'Denver Home Remodeling Contractors | Free Estimate',
    description: 'Transform Your Home with JRC. Get a Free Estimate!',
  },
  aboutUs: {
    title: 'JRC Remodeling: About Us - Denver Home Remodeling Experts',
    description:
      "JRC Remodeling: Denver's home remodeling experts. We offer kitchen, bathroom, and home improvement services. Get a free estimate!",
  },
  services: {
    title: 'JRC Home Remodeling: Renovation Services',
    description: 'Get a free estimate with top-rated JRC Remodeling!',
  },
  contactUs: {
    title: 'Contact JRC Home Remodeling | Free Estimate Today',
    description: 'Free Denver remodeling estimates | JRC Remodeling',
  },
  blog: {
    title: 'Blog - JRC Home Remodeling',
    description: 'The JRC Home Remodeling Blog — design ideas, DIY tips, renovation guides.',
  },
  jrcTile: {
    title: 'JRC Tile Installation: Expert Services',
    description: 'Expert tile installation & remodeling. Get a free estimate today!',
  },
  jrcDecks: {
    title: 'Denver Deck Builders | Custom Decks & Outdoor Living',
    description: 'Custom decks in Colorado | Free estimate | JRC Deck Builders',
  },
  jrcPainting: {
    title: 'Painting Contractor Denver | Interior & Exterior Experts',
    description: 'Expert painting services. Get a free estimate today!',
  },
};
