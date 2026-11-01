export interface Society {
  id: string;
  name: string;
  city: 'Islamabad' | 'Rawalpindi' | 'Murree';
  location: string;
  nocStatus: string;
  nocApproved: boolean;
  developer: string;
  image: string;
  startingPrice: string;
  paymentPlan: string;
  tag: string;
  category: 'Affordable' | 'Luxury' | 'Tourist' | 'Commercial';
  description: string;
  amenities: string[];
}

export const SOCIETIES_DATA: Society[] = [
  {
    id: 'kingdom-valley-islamabad',
    name: 'Kingdom Valley Islamabad',
    city: 'Islamabad',
    location: 'Chakri Road, M-2 Motorway Interchange, Islamabad',
    nocStatus: 'NOC Approved • DRAP / NAPHDA Mandate',
    nocApproved: true,
    developer: 'Ghulam Hussain Shahid (Kingdom Group)',
    image: '/images/kingdom-valley.jpg',
    startingPrice: 'PKR 12.5 Lacs',
    paymentPlan: '4 Years (40 Monthly Installments)',
    tag: 'Official Partner • High Yield',
    category: 'Affordable',
    description: 'An officially sanctioned master-planned community part of the prime housing vision with complete civil infrastructure, rapid development, and swift M-2 accessibility.',
    amenities: ['Grand Mosque', 'Hospital & Healthcare', 'Theme Park', 'Gated Security 24/7', 'Underground Electricity'],
  },
  {
    id: 'blue-world-city-rawalpindi',
    name: 'Blue World City',
    city: 'Rawalpindi',
    location: 'Chakri Road, Near New Islamabad Airport & Rawalpindi Ring Road',
    nocStatus: 'Under Process • Preliminary RDA Approvals',
    nocApproved: false,
    developer: 'BGC-IGC Consortium (Saad Nazir)',
    image: '/images/blue-world-city.jpg',
    startingPrice: 'PKR 14.9 Lacs',
    paymentPlan: '3 to 4 Years Easy Installments',
    tag: 'Tourist Destination • Mega Society',
    category: 'Tourist',
    description: 'Pakistan’s premier tourist-themed metropolis featuring world-renowned replicas of Burj Al Arab, Blue Mosque Istanbul, and Rumi Square with vast commercial avenues.',
    amenities: ['Water Theme Park', 'Horse Mascots', 'Night Safari', 'Overseas Block', 'Direct Ring Road Access'],
  },
  {
    id: 'holiday-hill-park-murree',
    name: 'Holiday Hill Park Murree',
    city: 'Murree',
    location: 'Murree Expressway (Patriata Ridge & Bhurban Access)',
    nocStatus: 'Verified Clear Titles • TMA Approved',
    nocApproved: true,
    developer: 'Galaxy Marketing Exclusive Mandate',
    image: '/images/hero-murree.jpg',
    startingPrice: 'PKR 25 Lacs',
    paymentPlan: '3-Year Flexible Installments (15% Down Payment)',
    tag: '100% Scenic • High Rental Yield',
    category: 'Tourist',
    description: 'An exclusive alpine sanctuary perched amid lush pine forests, offering guaranteed high tourism rental yields, pristine snow-capped winters, and cool summer retreats.',
    amenities: ['Panoramic Valley Views', 'Keyless Vacation Rental Management', 'Paved Alpine Roads', 'Pine Forest Trails', 'Dedicated Parking'],
  },
  {
    id: 'eighteen-islamabad',
    name: 'Eighteen Islamabad',
    city: 'Islamabad',
    location: 'Srinagar Highway, 10 Mins from New Islamabad Airport',
    nocStatus: 'CDA Approved Master Plan',
    nocApproved: true,
    developer: 'Ora Developers & Saif Group (Naguib Sawiris)',
    image: '/images/hero-eighteen.jpg',
    startingPrice: 'PKR 6.5 Crore',
    paymentPlan: 'Possession Phase & VIP Handover',
    tag: 'Ultra Luxury • 18-Hole Championship Golf Course',
    category: 'Luxury',
    description: 'Setting a global benchmark for ultra-luxury living in Pakistan across 2.7 million square yards with international retail, clubhouse, luxury five-star suites, and bespoke villas.',
    amenities: ['18-Hole Golf Course', 'The Core Business District', 'The Square International Retail', 'Helipad', 'World-Class Clubhouse'],
  },
  {
    id: 'capital-smart-city',
    name: 'Capital Smart City Islamabad',
    city: 'Islamabad',
    location: 'M-2 Motorway & Thalian Interchange, Islamabad',
    nocStatus: 'RDA Approved',
    nocApproved: true,
    developer: 'Future Development Holdings (FDHL) & HRL',
    image: '/images/mockup-hero.jpg',
    startingPrice: 'PKR 28 Lacs',
    paymentPlan: '3.5-Year Flexible Installment Plan',
    tag: 'First Smart City in Pakistan • Tech Driven',
    category: 'Luxury',
    description: 'A revolutionary eco-friendly smart city leveraging smart energy grids, facial recognition security, automated BRT system, and scenic waterfront living.',
    amenities: ['Automated Traffic Control', 'Crystal Lake & Marina', 'Smart Resource Management', 'BRT Dedicated Lane', 'Panda Reserve & Golf Club'],
  },
  {
    id: 'daraaj-tower-islamabad',
    name: 'Daraaj Tower Corporate & Retail',
    city: 'Islamabad',
    location: 'Main Islamabad Expressway, Islamabad',
    nocStatus: 'Approved Commercial Blueprint',
    nocApproved: true,
    developer: 'Premier Builders (Marketed by Galaxy Marketing)',
    image: '/images/hero-daraaj.jpg',
    startingPrice: 'PKR 45 Lacs',
    paymentPlan: '3-Year Installments • 18% Annual ROI Forecast',
    tag: 'Pre-Leased Offices • Guaranteed High Yield',
    category: 'Commercial',
    description: 'A cutting-edge glass skyscraper providing high-traffic multinational retail shops and pre-leased executive office suites with unprecedented Expressway visibility.',
    amenities: ['High-Speed Capsule Lifts', 'Executive Boardrooms', 'Ample Basement Parking', '24/7 Power Backup', 'Pre-Leased Corporate Tenancy'],
  },
];

