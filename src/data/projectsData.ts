export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: 'murree' | 'islamabad' | 'commercial' | 'societies';
  categoryLabel: string;
  location: string;
  priceStarting: string;
  downPayment: string;
  installmentPlan: string;
  expectedRoi: string;
  status: 'Under Construction' | 'Booking Open' | 'Limited Units' | 'Fast Track Delivery';
  image: string;
  gallery: string[];
  features: string[];
  description: string;
  completionYear: string;
  nocStatus: 'Approved & Verified' | 'In Process (Tehsil Council)' | 'CDA/RDA Compliant';
}

export const PROJECTS: Project[] = [
  {
    id: 'holiday-hill-park-murree',
    slug: 'holiday-hill-park-murree',
    title: 'Holiday Hill Park Murree',
    tagline: 'Secure and well-planned Peak Peace with breathtaking panoramic mountain vistas',
    category: 'murree',
    categoryLabel: 'Scenic Mountain Living',
    location: 'Main Murree Expressway, Near Patriata & Pine Belt',
    priceStarting: 'PKR 3.8 Million',
    downPayment: '20% Down Payment',
    installmentPlan: '36 Monthly Installments',
    expectedRoi: '22% Annual Rental Yield',
    status: 'Booking Open',
    image: '/images/hero-murree.jpg',
    gallery: [
      '/images/hero-murree.jpg',
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=80',
    ],
    features: [
      '100% Scenic Alpine Pine Forest Views',
      'Gated Community with 24/7 Monitored Surveillance',
      'Underground Electricity & Eco Water Reservoirs',
      'High-altitude Jogging Trails & Adventure Park',
      'Guaranteed Vacation Rental Management'
    ],
    description: 'Holiday Hill Park Murree is Galaxy Marketing’s flagship nature-infused sanctuary. Merging European alpine aesthetics with verified title registry, delivering up to 22% tourist rental yield.',
    completionYear: '2026',
    nocStatus: 'Approved & Verified'
  },
  {
    id: 'daraaj-tower-islamabad',
    slug: 'daraaj-tower-islamabad',
    title: 'Daraaj Tower Islamabad',
    tagline: 'A premier architectural landmark redefining modern corporate and luxury retail in the capital',
    category: 'commercial',
    categoryLabel: 'Corporate & Luxury Retail',
    location: 'Prime Business District, Islamabad',
    priceStarting: 'PKR 8.5 Million',
    downPayment: '25% Down Payment',
    installmentPlan: '30 Monthly Installments',
    expectedRoi: '18% Capital Growth p.a.',
    status: 'Fast Track Delivery',
    image: '/images/hero-daraaj.jpg',
    gallery: [
      '/images/hero-daraaj.jpg',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80',
    ],
    features: [
      'Executive Double-height Entrance Lobby & Turnstiles',
      'High-Speed Panoramic Passenger & Cargo Elevators',
      'Three-Tier Dedicated Underground Parking Basements',
      'Earthquake-Resistant Concrete Engineering',
      'Pre-negotiated Corporate Brand Tenant Pipeline'
    ],
    description: 'Daraaj Tower stands as an elite corporate hub in Islamabad. Engineered for multinational brands and high-net-worth investors seeking strong rental yield and capital appreciation.',
    completionYear: '2025',
    nocStatus: 'Approved & Verified'
  },
  {
    id: 'pavilion-17-eighteen',
    slug: 'pavilion-17-eighteen',
    title: 'Pavilion 17 - Eighteen',
    tagline: 'Ultra-exclusive residential enclave fronting championship golf greens',
    category: 'islamabad',
    categoryLabel: 'Ultra-Luxury Penthouses',
    location: 'Srinagar Highway, Eighteen, Islamabad',
    priceStarting: 'PKR 42 Million',
    downPayment: '30% Down Payment',
    installmentPlan: '48 Easy Monthly Installments',
    expectedRoi: '25% Appreciation by Handover',
    status: 'Limited Units',
    image: '/images/hero-eighteen.jpg',
    gallery: [
      '/images/hero-eighteen.jpg',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80',
    ],
    features: [
      '18-Hole Championship Golf Course Frontage',
      'Private Temperature-Controlled Balcony Pools',
      'Smart Home Automation with Biometric Access',
      'Helipad Access & VIP Concierge Services',
      'Italian Marble & German Custom Kitchens'
    ],
    description: 'Pavilion 17 at Eighteen Islamabad represents modern palatial living with private championship golf vistas and CDA compliant architecture.',
    completionYear: '2026',
    nocStatus: 'CDA/RDA Compliant'
  },
  {
    id: 'pine-crest-villas-bhurban',
    slug: 'pine-crest-villas-bhurban',
    title: 'Pine Crest Luxury Chalets',
    tagline: 'Swiss-inspired wooden chalets surrounded by century-old deodars and misty valleys',
    category: 'murree',
    categoryLabel: 'Luxury Vacation Chalets',
    location: 'Upper Bhurban, adjacent to Chinar Golf Club',
    priceStarting: 'PKR 6.5 Million',
    downPayment: '15% Down Payment',
    installmentPlan: '24 Monthly Installments',
    expectedRoi: '20% Annual Tourist Yield',
    status: 'Booking Open',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80',
    ],
    features: [
      'Fireplace Living Rooms with Thermal Double Glazing',
      'Hotel Managed Keyless Check-in for Passive Income',
      'Heated Jacuzzi Decks Facing Pine Ridges',
      'Dedicated Helipad & Chauffeur Mountain Shuttles'
    ],
    description: 'Immerse in pure highland tranquility with Pine Crest Chalets. Featuring Nordic insulation, cedarwood architecture, and uninterrupted views of snow-dusted peaks.',
    completionYear: '2025',
    nocStatus: 'Approved & Verified'
  },
  {
    id: 'new-metro-societies-prime',
    slug: 'new-metro-societies-prime',
    title: 'New Metro City Prime Sector',
    tagline: 'High-growth societal investment with guaranteed infrastructure timelines',
    category: 'societies',
    categoryLabel: 'Planned Megacity Plots',
    location: 'Direct CPEC Motorway Link',
    priceStarting: 'PKR 2.6 Million',
    downPayment: '10% Down Payment',
    installmentPlan: '42 Easy Installments',
    expectedRoi: '35% Over 3 Years',
    status: 'Fast Track Delivery',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1400&q=80',
    ],
    features: [
      '150-ft Wide Main Boulevards & Dancing Fountains',
      'Underground Fiber Optic & Smart Solar Street Lighting',
      'Direct Interchange on CPEC Western Corridor',
      'Possession in Just 18 Months on Active Construction'
    ],
    description: 'A revolutionary gated society engineered for maximum affordability and rapid capital appreciation, backed by reputable developers and Galaxy Marketing’s verified oversight.',
    completionYear: '2026',
    nocStatus: 'Approved & Verified'
  },
  {
    id: 'downtown-executive-enclave',
    slug: 'downtown-executive-enclave',
    title: 'The Downtown Horizon Suites',
    tagline: 'High-yield serviced executive suites tailored for corporate travelers & diplomats',
    category: 'islamabad',
    categoryLabel: 'Serviced Luxury Suites',
    location: 'Sector G-11 / F-10 Axis, Islamabad',
    priceStarting: 'PKR 11.2 Million',
    downPayment: '20% Down Payment',
    installmentPlan: '36 Monthly Installments',
    expectedRoi: '16% Guaranteed Rental Return',
    status: 'Limited Units',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1400&q=80',
    ],
    features: [
      'Rooftop Infinity Sky Lounge & Cigar Bar',
      'Full Concierge, Housekeeping & Airport Chauffeur',
      'High-Speed Enterprise Coworking & Boardrooms',
      '100% Power Backup with Redundant UPS Systems'
    ],
    description: 'Downtown Horizon Suites bridges corporate prestige with 5-star hospitality, presenting hands-free rental yield for overseas and local investors.',
    completionYear: '2026',
    nocStatus: 'Approved & Verified'
  }
];
