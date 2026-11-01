export interface ThemeConfig {
  id: string;
  name: string;
  badge: string;
  description: string;
  colors: {
    primary: string;
    primaryHover: string;
    primaryLight: string;
    primaryBorder: string;
    primaryText: string;
    secondary: string;
    themeBg: string;
    themeSurface: string;
    themeCard: string;
    themeHeading: string;
    themeBody: string;
    themeMuted: string;
    themeBorder: string;
  };
  fonts: {
    sans: string;
    serif: string;
  };
}

/**
 * 1. SAVED ORIGINAL THEME: Imperial Gold & Warm Stone
 * Preserved safely as requested by the user.
 */
export const SAVED_GOLD_THEME: ThemeConfig = {
  id: 'gold-classic',
  name: 'Imperial Gold & Warm Stone',
  badge: 'Saved Theme',
  description: 'The original luxury gold real estate palette with warm stone canvas and Plus Jakarta Sans typography.',
  colors: {
    primary: '#B8860B',
    primaryHover: '#996515',
    primaryLight: '#FFFBEB',
    primaryBorder: '#FDE68A',
    primaryText: '#92400E',
    secondary: '#D4AF37',
    themeBg: '#FAFAF9',
    themeSurface: '#F8F9FA',
    themeCard: '#FFFFFF',
    themeHeading: '#0F172A',
    themeBody: '#475569',
    themeMuted: '#64748B',
    themeBorder: '#E5E7EB',
  },
  fonts: {
    sans: "'Plus Jakarta Sans', system-ui, sans-serif",
    serif: "'Cinzel', Georgia, serif",
  },
};

/**
 * 2. NEW DEFAULT THEME: Royal Sapphire & Ocean Luxe
 * Brand new color theme: Royal Electric Sapphire, Cool Ice Platinum canvas, Outfit geometric typography.
 */
export const NEW_SAPPHIRE_THEME: ThemeConfig = {
  id: 'sapphire',
  name: 'Royal Sapphire & Ocean Luxe',
  badge: 'New Active Theme',
  description: 'Ultra-modern high-trust corporate palette: Electric Royal Sapphire, Crisp Ice Mist surfaces, and Outfit typography.',
  colors: {
    primary: '#2563EB',
    primaryHover: '#1D4ED8',
    primaryLight: '#EFF6FF',
    primaryBorder: '#BFDBFE',
    primaryText: '#1E40AF',
    secondary: '#0284C7',
    themeBg: '#F8FAFC',
    themeSurface: '#F1F5F9',
    themeCard: '#FFFFFF',
    themeHeading: '#0F172A',
    themeBody: '#334155',
    themeMuted: '#64748B',
    themeBorder: '#E2E8F0',
  },
  fonts: {
    sans: "'Outfit', system-ui, sans-serif",
    serif: "'Playfair Display', Georgia, serif",
  },
};

/**
 * 3. BONUS ALTERNATIVE THEME: Emerald Forest & Alpine Jade
 * Tailored for scenic Murree & Highland real estate developments.
 */
export const EMERALD_ALPINE_THEME: ThemeConfig = {
  id: 'emerald',
  name: 'Emerald Alpine & Forest Jade',
  badge: 'Alpine Edition',
  description: 'Deep Pine Forest Emerald and Mint Jade palette evoking Highland sanctuaries and eco-luxury living.',
  colors: {
    primary: '#059669',
    primaryHover: '#047857',
    primaryLight: '#ECFDF5',
    primaryBorder: '#A7F3D0',
    primaryText: '#065F46',
    secondary: '#10B981',
    themeBg: '#F4F7F5',
    themeSurface: '#EBF2EE',
    themeCard: '#FFFFFF',
    themeHeading: '#062822',
    themeBody: '#1F2937',
    themeMuted: '#4B5563',
    themeBorder: '#D1D5DB',
  },
  fonts: {
    sans: "'Outfit', system-ui, sans-serif",
    serif: "'Playfair Display', Georgia, serif",
  },
};

export const ALL_THEMES: ThemeConfig[] = [
  NEW_SAPPHIRE_THEME,
  SAVED_GOLD_THEME,
  EMERALD_ALPINE_THEME,
];

