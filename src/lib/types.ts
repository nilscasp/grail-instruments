// Instrument Types
export type InstrumentStatus = 'available' | 'reserved' | 'sold'

export interface InstrumentImage {
  src: string
  alt: string
}

export interface InstrumentAudio {
  src: string
  label: string
}

export interface InstrumentSpecs {
  steelType: string
  finish: string
  diameter: string
  weight: string
  included: string[]
}

export interface CurationResult {
  tuning: boolean
  balance: boolean
  clarity: boolean
  sustain: boolean
  craftsmanship: boolean
}

export interface Instrument {
  slug: string
  displayTitle?: string
  maker: {
    name: string
    slug: string
  }
  scaleName: string
  key: string
  notes: string[]
  price: number | null
  currency: string
  status: InstrumentStatus
  featured: boolean
  year: number
  location: string
  images: InstrumentImage[]
  audio: InstrumentAudio[]
  tags: string[]
  specs: InstrumentSpecs
  listeningNotes: string
  soundDescription: string
  curation: CurationResult
  createdAt: string
}

// Maker Types
export interface MakerLink {
  type: 'website' | 'instagram' | 'youtube'
  url: string
}

export interface Maker {
  slug: string
  name: string
  country: string
  region?: string
  descriptionShort: string
  descriptionLong: string
  philosophy?: string
  typicalScales: string[]
  links: MakerLink[]
  image?: string
  featured: boolean
}

// Journal Post Types
export interface JournalPost {
  slug: string
  title: string
  excerpt: string
  content: string
  coverImage: string
  date: string
  author: string
  tags: string[]
  featured: boolean
}

// FAQ Types
export interface FAQ {
  question: string
  answer: string
  category: string
}

// Form Types
export interface ApplyFormData {
  name: string
  email: string
  whatsapp?: string
  country: string
  city?: string
  experience: 'beginner' | 'intermediate' | 'advanced' | 'professional'
  seeking: string
  preferredScales?: string
  budget: string
  timeframe: string
  instrumentSlug?: string
  privacyAccepted: boolean
}

export interface NewsletterFormData {
  email: string
}

// Site Configuration
export interface SiteConfig {
  name: string
  description: string
  url: string
  ogImage: string
  portalStatus: 'open' | 'closed'
  nextDropDate?: string
  socialLinks: {
    instagram?: string
    youtube?: string
  }
}

// Filter Types
export interface InstrumentFilters {
  maker?: string
  scale?: string
  key?: string
  tag?: string
  status?: InstrumentStatus
  priceMin?: number
  priceMax?: number
}

export type SortOption = 'featured' | 'newest' | 'price-asc' | 'price-desc'
