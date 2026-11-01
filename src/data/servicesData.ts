export interface Service {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  features: string[];
  image: string;
}

export const SERVICES: Service[] = [
  {
    id: 'consultancy',
    number: '01',
    title: 'Real Estate Strategic Consultancy',
    subtitle: 'Data-driven advisory tailored to personal wealth and corporate expansion',
    description: 'We deliver comprehensive consultancy based on deep market intelligence, historical price trends, and legal scrutiny. Whether acquiring a luxury holiday home in Murree or prime commercial retail in Islamabad, our advisors ensure your capital is positioned for optimum security and compounding growth.',
    iconName: 'Compass',
    features: [
      'Comparative Market Value Analysis & Price Verification',
      'Legal Due Diligence & RDA/CDA NOC Authentication',
      'Customized 1-on-1 Investment Roadmaps',
      'Risk Mitigation and Resale Liquidity Planning'
    ],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'marketing',
    number: '02',
    title: 'Mega Project Marketing & Sales',
    subtitle: 'Turnkey end-to-end launch, branding, and sales infrastructure for developers',
    description: 'Galaxy Marketing is renowned for transforming ambitious architectural blueprints into sold-out developments. We integrate 3D immersive renders, digital omnichannel marketing, on-ground sales teams, and nationwide investor networks to drive rapid absorption.',
    iconName: 'TrendingUp',
    features: [
      'Multi-channel Digital & High-Impact Billboard Campaigns',
      'VIP Investor Roadshows across Islamabad, Lahore, Dubai & London',
      'Targeted Lead Generation & Conversion Funnels',
      'Full CRM & Installment Collection Infrastructure'
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'investment',
    number: '03',
    title: 'High-Yield Opportunities & Asset Management',
    subtitle: 'Unlocking pre-launch opportunities and high-dividend rental assets',
    description: 'We curate exclusive real estate portfolios that yield 15-25% annual returns through pre-launch allocations, scenic vacation rental villas, and prime corporate rental contracts. Our property management team handles leasing, maintenance, and tenant management.',
    iconName: 'BadgePercent',
    features: [
      'Exclusive Pre-launch Golden Whitelist Allocations',
      'Vacation Chalet & Airbnb Yield Optimization in Murree/Bhurban',
      'Corporate Long-Term Leases with Multinational Tenants',
      'Quarterly Performance & Valuation Reporting'
    ],
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'overseas-desk',
    number: '04',
    title: 'Overseas Pakistani Investment Desk',
    subtitle: 'Dedicated VIP desk for Non-Resident Pakistanis across UK, USA, Gulf & Europe',
    description: 'Investing from abroad requires total trust and hassle-free remote execution. Our specialized NRI Desk provides video inspections, Roshan Digital Account facilitation, power of attorney assistance, and doorstep document delivery.',
    iconName: 'Globe',
    features: [
      'Live High-Definition Video Site Inspections',
      'Roshan Digital Account (RDA) & Wire Transfer Assistance',
      'Transparent Title Deed Verification & Embassy Attestations',
      'Direct WhatsApp Relationship Manager Available 24/7'
    ],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80'
  }
];
