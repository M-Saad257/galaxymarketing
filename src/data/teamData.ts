export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio?: string;
  experience?: string;
  specialization?: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'atif-khan',
    name: 'Atif Khan',
    role: 'Founder',
    image: '/images/team/atif-khan.jpg',
    bio: 'Visionary founder behind Galaxy Marketing’s strategic growth across Islamabad and Murree real estate markets.',
    experience: '8+ Years',
    specialization: 'Mega Developments & Strategic Partnerships'
  },
  {
    id: 'jalil-khan',
    name: 'Jalil Khan',
    role: 'Co-Founder',
    image: '/images/team/jalil-khan.jpg',
    bio: 'Oversees organizational scalability, developer alliances, and customer assurance protocols.',
    experience: '7+ Years',
    specialization: 'Operational Strategy & Investor Relations'
  },
  {
    id: 'ali-raza',
    name: 'Ali Raza',
    role: 'General Manager',
    image: '/images/team/ali-raza.jpg',
    bio: 'Leads day-to-day operations and project milestone deliveries across the twin cities.',
    experience: '6+ Years',
    specialization: 'Commercial Real Estate & Sales Leadership'
  },
  {
    id: 'waqas-ahmed',
    name: 'Waqas Ahmed',
    role: 'Relationship Manager',
    image: '/images/team/waqas-ahmed.jpg',
    bio: 'Dedicated portfolio advisor for overseas Pakistanis and corporate clients.',
    experience: '5+ Years',
    specialization: 'Overseas Client Advisory & Yield Structuring'
  },
  {
    id: 'yasir-ali',
    name: 'Yasir Ali',
    role: 'Site Incharge',
    image: '/images/team/yasir-ali.jpg',
    bio: 'Ensures ground reality matches commitments through weekly structural inspections.',
    experience: '6+ Years',
    specialization: 'On-site Quality Assurance & Handover Compliance'
  },
  {
    id: 'qaim-mughal',
    name: 'Qaim Mughal',
    role: 'Sales Executive',
    image: '/images/team/qaim-mughal.jpg',
    bio: 'Expert in residential society allocations and scenic mountain plots in Murree.',
    experience: '4+ Years',
    specialization: 'Residential Land Acquisition & Client Closings'
  }
];
